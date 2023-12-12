using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;



namespace PensionPlanner.Controllers
{
    [ApiController]
    [Route("api/pensionGlossary")]
    public class PensionPlannerAPI : ControllerBase
    {
        private readonly List<PensionGlossary> glossaries = new List<PensionGlossary>
        {
            new PensionGlossary("Private Pensions", "The term usually refers to pensions set up by an individual, rather than through an employer or workplace. You can set up a private pension with a dedicated pension or investment provider and then make regular or lump-sum contributions."),
            new PensionGlossary("Defined Contribution Pension", "This is a type of private pension. In this scheme, your money is invested over the course of your working life, and the value of your portfolio will fluctuate according to stock and bond market moves."),
            new PensionGlossary("Lifetime Allowance (LTA)", "the maximum amount you can draw from pensions (workplace or personal) in your lifetime without paying extra tax. The current allowance is £1,073,100.00."),
            new PensionGlossary("Defined Contribution Pension", "With a defined contribution pension (sometimes called money purchase) you build up a pot of money that you can use to provide an income in retirement. Unlike defined benefit schemes, which promise a specific income, the income you might get from a defined contribution scheme depends on factors including the amount you pay in, the fund investment performance and the choices you make at retirement.")
        };

        [HttpGet]
        public IActionResult GetGlossary()
        {
            return Ok(glossaries);
        }
    }

    record PensionGlossary(
        string Title,
        string Description
    );
}