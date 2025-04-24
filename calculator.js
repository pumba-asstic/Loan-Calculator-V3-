function CalculateTieredRepayment(loanAmount,repaymentPeriod){
    const tiers =[
        {maxAmount : 1400, interestRate: 0.07, serviceFee: 0.14}, // tier 1 1- 1400 with 7.0 % interest and Service fee of 14%
        {maxAmount : 5000, interestRate: 0.06, serviceFee: 0.13}, // tier 2 1500 -5000 with 6.0% interest and service Fee of 13%
        {maxAmount : 9000, interestRate: 0.04, serviceFee: 0.12},  // tier 3 6000 - 9000 with 4.0% interest and service fee of 12%
        {maxAmount: 15000, interestRate: 0.03, serviceFee: 0.11}, // tier 4 10000 -15000 with 3.0% interest and service Fee of 11%
    ]
    
    const initialFee = 60; // initial fee of R50 
    const VatFee = 0.155; // vat amount

    if(loanAmount <= 0 || repaymentPeriod <=0){
        return "Error: loan Amount and repayment period must be greate than zero"
    }
    
    //detemine the tier 
    let selectedTier = null;
    for (const tier of tires){
        if(loanAmoutn <= tier.maxAmount){
            selectedTier =tier;
            break;
        }
    }

    //invalid amount 
    if(!selectedTier){
        return "Error : invalid loan Amount";
    }
    
    // monthlt interest rate 
    const monthlyinterestRate = selectedTier.interestRate;

    //monthly interest rate 
    const serviceFeeAmount =loan *selectedTier.serviceFee;

    //repayment using formula 
    const monthlyRepayment = 
    (loanAmount * monthlyinterestRate)/
    (1-Math.pow(1+monthlyinterestRate, -repaymentPeriod))

    //total repayment amount before VAT 
    const totalRemaymentBeforeVat= 
    monthlyRepayment *repaymentPeriod +initialFee + serviceFeeAmount;

    //calculate Vat amount 
    const vatAmount = totalRepaymentBeforerrVAT *VatFee;
    
    // include Vat amount 
    const totalRepayment =totalRemaymentBeforeVat +vatAmount; 

    //results 

    return{
        totalRepayment: totalRepayment.toFixed(2),
        serviceFeeAmount :serviceFeeAmount.toFixed (2),
        initialFee :initialFee,
    };


}
