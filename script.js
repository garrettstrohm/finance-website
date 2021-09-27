let principal = 0;
let monthlyContributions = 0;
let interestRate = 0;
let timesCompounded = 0;
let termOfInvestment
let amount = 0;

 /*P(1+r/n)**(nt) is initial compound interest for the principal value;
    PMT*{[(1+r/n)**(nt)-1]/(r/n)} * (1+r/n) is the future value of a series 
    total = P(1+r/n)**(nt) + PMT*{[(1+r/n)**(nt)-1]/(r/n)} * (1+r/n)*/

function compoundInterest() {
    let principal = parseFloat(document.getElementById("initialInvestmentCompound").value);
    let monthlyContributions = parseFloat(document.getValueById("monthlyContributions").value);
    let interestRate = parseFloat(document.getValueById("interestCompound").value);
    interestRate = interestRate / 100;
    let timesCompounded = parseFloat(document.getValueById("rateOfCompound").value);
    let termOfInvestment = parseFloat(document.getValueById("timePeriodCompound").value);
    let a = interestRate / timesCompounded;
    let b = 1 + a;
    let c = timesCompounded * termOfInvestment;
    let d = Math.pow(b, c);
    let amount = (principal * d).toFixed(2);
    let amountPrincipal = amount;
    let futurePrincipal = monthlyContributions * ((d - 1) / a) * a;
}