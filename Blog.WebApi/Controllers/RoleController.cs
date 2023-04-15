using Blog.Domain;
using Blog.IServices;
using Blog.Services;
using Microsoft.AspNetCore.Mvc;
using Models.In;

namespace Blog.WebApi.Controllers;

[ApiController]
[Route("api/roles")]
public class RoleController : ControllerBase
{
    private readonly IRoleService _roleService;

    public RoleController(IRoleService roleService)
    {
        _roleService = roleService;
    }

    // Index - Get all roles (/api/roles)
    [HttpGet]
    public IActionResult GetRoles([FromQuery] RoleSearchCriteriaModel searchCriteria)
    {
        var retrievedRoles = _roleService.GetAllRoles(searchCriteria.ToEntity());
        return Ok(retrievedRoles.Select(u => new RoleOutModel(u)));
    }

    [HttpGet("{userId}")]
    public async Task<IActionResult> GetById(int userId)
    {
        var userRole = await _roleService.GetByIdAsync(userId);
        if (userRole == null)
        {
            return NotFound();
        }

        return Ok(userRole);
    }

    [HttpPost]
    public async Task<IActionResult> Add(Role role)
    {
        var newUserRole = await _roleService.AddAsync(role);
        return CreatedAtAction(nameof(GetById), new { userId = newUserRole.UserId }, newUserRole);
    }

    [HttpPut("{userId}")]
    public async Task<IActionResult> Update(int userId, Role role)
    {
        if (userId != role.UserId)
        {
            return BadRequest();
        }

        var updatedUserRole = await _roleService.UpdateAsync(role);
        return Ok(updatedUserRole);
    }

    [HttpDelete("{userId}")]
    public async Task<IActionResult> Delete(int userId)
    {
        var success = await _roleService.DeleteAsync(userId);
        if (!success)
        {
            return NotFound();
        }

        return NoContent();
    }
}
