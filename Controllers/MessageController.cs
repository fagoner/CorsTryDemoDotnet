using CorsTry.Models;
using Microsoft.AspNetCore.Mvc;

namespace CorsTry.Controllers
{   

    [ApiController]
    [Route("[controller]")]
    public class MessageController : ControllerBase
    {
        [EnableCors("Rf")]
        [HttpPost]
        public ActionResult PostMessage([FromBody] Message message)
        {
            System.Console.WriteLine("Header for post");
            var headers = Request.Headers;
            foreach (var item in headers)
            {
                System.Console.WriteLine(item);
            }
            return Accepted(message);
        }
    }
}