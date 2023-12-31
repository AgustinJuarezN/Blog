using System.Security.Authentication;
using Microsoft.AspNetCore.Mvc;
using Blog.IServices;
using Blog.WebApi.Filters;
using Models.In;
using Models.Out;

namespace Blog.WebApi.Controllers
{
    [Route("api/sessions")]
    [ApiController]
    public class SessionController : ControllerBase
    {
        private readonly ISessionService _sessionService;

        public SessionController(ISessionService sessionService)
        {
            _sessionService = sessionService;
        }
        
        [HttpPost]
        public IActionResult Login([FromBody] SessionModel session)
        {
            try
            {
                
                var token = _sessionService.Authenticate(session.Email, session.Username, session.Password);
                var user = _sessionService.GetCurrentUser(token);
                UserModelOut userModel = new UserModelOut(user);
                return Ok(new { token, user = userModel });
            }
            catch (InvalidCredentialException e)
            {
                return BadRequest(e.Message);
            }
        }

        [AuthenticationFilter]
        [HttpDelete]
        public IActionResult Logout([FromHeader] Guid authorization)
        {
            try
            {
                _sessionService.Logout(authorization);
                return NoContent();
            }
            catch (InvalidCredentialException e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
