using Blog.Domain;
using Blog.Domain.Exceptions;
using Blog.IServices;
using Blog.Services;
using Microsoft.AspNetCore.Mvc;
using Models.In;
using Models.Out;

namespace Blog.WebApi.Controllers;


[ApiController]
[Route("api/users")]
public class UsersController : ControllerBase
{
    private readonly IUserService _userService;
    private readonly IRoleService _roleService;
    private readonly IUserRoleService _userRoleService;

    public UsersController(IUserService userService, IRoleService roleService, IUserRoleService userRoleService)
    {
        _userService = userService;
        _roleService = roleService;
        _userRoleService = userRoleService;
    }

    // Index - Get all users (/api/users)
    [HttpGet]
    public IActionResult GetUsers([FromQuery] UserSearchCriteriaModel searchCriteria)
    {
        var retrievedUsers = _userService.GetAllUsers(searchCriteria.ToEntity());
        return Ok(retrievedUsers.Select(u => new UserModelOut(u)));
    }

    // Show - Get specific user (/api/users/{id})
    [HttpGet("{id}", Name = "GetUser")]
    public IActionResult GetUserById(int id)
    {
        try
        {
            var retrievedUser = _userService.GetSpecificUser(id);
            return Ok(new UserModelOut(retrievedUser));
        }
        catch (ResourceNotFoundException e)
        {
            return NotFound(e.Message);
        }
    }

    // Create - Create new user (/api/users)
    [HttpPost]
    public IActionResult CreateUser([FromBody] UserModelIn newUser)
    {
        try
        {
            foreach (int roleValue in newUser.roles)
            {
                var role = _roleService.GetSpecificRole(roleValue);
                if (role == null)
                {
                    return BadRequest("Este rol no existe");
                }
            }


            // 1) Creo User
            var createdUser = _userService.CreateUser(newUser.ToCreateEntity());

            foreach (int roleValue in newUser.roles)
            {
                var role = _roleService.GetSpecificRole(roleValue);
                var userRole = new UserRole()
                {
                    User = createdUser,
                    Role = role
                };

                _userRoleService.CreateUserRole(userRole);
            }


            var userModel = new UserModelOut(createdUser);
            return CreatedAtRoute("GetUser", new { id = userModel.Id }, userModel);
        }
        catch (InvalidResourceException e)
        {
            return BadRequest(e.Message);
        }
        catch (DuplicateResourceException e)
        {
            return Conflict(e.Message);
        }
    }

    // Update - Update specific user (/api/users/{id})
    [HttpPut("{id}")]
    public IActionResult Update(int id, [FromBody] UserModelIn updatedUser)
    {
        try
        {
            foreach (int roleValue in updatedUser.roles)
            {
                var role = _roleService.GetSpecificRole(roleValue);
                if (role == null)
                {
                    return BadRequest("Este rol no existe");
                }
            }


            // 1) Creo User
            var retrievedUser = _userService.UpdateUser(id, updatedUser.ToUpdateEntity());

            foreach (int roleValue in updatedUser.roles)
            {
                var role = _roleService.GetSpecificRole(roleValue);
                var userRole = new UserRole()
                {
                    User = retrievedUser,
                    Role = role
                };

                _userRoleService.CreateUserRole(userRole);
            }





            //var retrievedUser = _userService.UpdateUser(id, updatedUser.ToUpdateEntity());
            return Ok(new UserModelOut(retrievedUser));
        }
        catch (InvalidResourceException e)
        {
            return BadRequest(e.Message);
        }
        catch (ResourceNotFoundException e)
        {
            return NotFound(e.Message);
        }
    }

    // Delete - Delete specific user (/api/users/{id})
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        try
        {
            _userService.DeleteUser(id);
            return Ok();
        }
        catch (ResourceNotFoundException e)
        {
            return NotFound(e.Message);
        }
    }

}
