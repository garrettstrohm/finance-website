let principal = 0;
let monthlyContributions = 0;
let interestRate = 0;
let timesCompounded = 0;
let termOfInvestment = 0;
let amount = 0;
const submitBtn = document.getElementById("btnCompound");
submitBtn.addEventListener("click", compoundInterest());
 /*P(1+r/n)**(nt) is initial compound interest for the principal value;
    PMT*{[(1+r/n)**(nt)-1]/(r/n)} * (1+r/n) is the future value of a series 
    total = P(1+r/n)**(nt) + PMT*{[(1+r/n)**(nt)-1]/(r/n)} * (1+r/n)*/
function compoundInterest() {
    let principal = parseFloat(document.getElementById("initialCompound").value);
    let monthlyContributions = parseFloat(document.getElementById("contributionsCompound").value);
    let interestRate = parseFloat(document.getElementById("interestCompound").value);
    interestRate = (interestRate / 100).toFixed(3);
    let timesCompounded = parseFloat(document.getElementById("timeCompounded").value);
    let termOfInvestment = parseFloat(document.getElementById("termOfCompound").value);
    let a = interestRate / timesCompounded;
    let b = 1 + a;
    let c = timesCompounded * termOfInvestment;
    let d = b ** c;
    let amount = (principal * d);
    let futurePrincipal = (monthlyContributions * ((d - 1) / a));
    let finalPrincipal = futurePrincipal + amount;
    document.getElementById("ciOutputContributions").innerHTML = "Total Contributions: $" + ((principal + ((monthlyContributions * 12) * termOfInvestment))).toFixed(2);
    document.getElementById("ciOutputInterest").innerHTML = "Interest: $" + (finalPrincipal - (principal + (monthlyContributions * 12) * termOfInvestment)).toFixed(2);
    document.getElementById("ciOutputTotal").innerHTML = "Total plus interest: $" + finalPrincipal.toFixed(2);
}

