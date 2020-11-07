using Microsoft.AspNetCore.Mvc;

namespace CorsTry.Controllers
{   

    [ApiController]
    [Route("[controller]")]
    public class ValuesController : ControllerBase
    {
        
        [HttpGet]
        public ActionResult Ping()
        {
            var headers = Request.Headers;
            foreach (var item in headers)
            {
                System.Console.WriteLine(item);
            }

            return Ok(new { Message = "pong" });
        }

    }
}