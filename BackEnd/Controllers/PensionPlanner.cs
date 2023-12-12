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
            new PensionGlossary("Defined Contribution Pension", "With a defined contribution pension (sometimes called money purchase) you build up a pot of money that you can use to provide an income in retirement. Unlike defined benefit schemes, which promise a specific income, the income you might get from a defined contribution scheme depends on factors including the amount you pay in, the fund investment performance and the choices you make at retirement."),
            new PensionGlossary("Defined Benefit Pension", "This is another type of private pension."),
            new PensionGlossary("Stakeholder Pensions", "These must meet specific government requirements, for example, limits on charges."),
            new PensionGlossary("Self-Invested Personal Pensions (SIPPs)", "These allow you to control the specific investments that make up your pension fund."),
            new PensionGlossary("Annuity", "An annuity is a financial product that pays out a fixed stream of payments to an individual, primarily used as an income stream for retirees."),
            new PensionGlossary("Pension Drawdown", "Pension drawdown is a way of using your pension pot to provide you with a regular retirement income by reinvesting it in funds specifically designed and managed for this purpose."),
            new PensionGlossary("Pension Commencement Lump Sum (PCLS)", "This is a tax-free lump sum that you can take from your pension pot when you start to take your pension benefits."),
            new PensionGlossary("Lifetime Allowance (LTA)", "This is the total amount of pension savings you can build up over your life that benefit from tax relief."),
            new PensionGlossary("Annual Allowance", "This is the maximum amount that you can contribute to your pension each year while still receiving tax relief."),
            new PensionGlossary("Beneficiary", "A beneficiary is the person who will receive your pension benefits after your death."),
            new PensionGlossary("Guaranteed Annuity Rate (GAR)", "This is a beneficial rate that was offered by pension companies on annuities in the past."),
            new PensionGlossary("Pension Credit", "Pension Credit is an income-related benefit made up of 2 parts - Guarantee Credit and Savings Credit."),
            new PensionGlossary("Guarantee Credit", "Guarantee Credit tops up your weekly income if it's below £177.10 (for single people) or £270.30 (for couples)."),
            new PensionGlossary("Savings Credit", "Savings Credit is an extra payment for people who saved some money towards their retirement, e.g. a pension."),
            new PensionGlossary("Automatic Enrolment", "Automatic enrolment is a government initiative that requires all employers to automatically enrol eligible workers into a workplace pension."),
            new PensionGlossary("State Pension", "The State Pension is a regular payment from the government that you can claim when you reach State Pension age."),
            new PensionGlossary("Workplace Pensions", "A workplace pension is a way of saving for your retirement that's arranged by your employer."),
            new PensionGlossary("Pension Freedoms", "Pension freedoms mean that when you reach the age of 55, you have the flexibility to choose how you take money from your pension pot."),
            new PensionGlossary("Pension Pot", "A pension pot is the sum of money you've built up over your working life that you'll rely on for income in retirement.")
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