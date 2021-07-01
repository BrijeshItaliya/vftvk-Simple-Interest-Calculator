function compute()
{
    // set variable 
    var p = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    // calculate interest 
    var interest = p * years * rate /100;
    // sum of the date with the year
    var year = new Date().getFullYear()+parseInt(years);
    // for validation of the number if it is negative so it generate alert message
    if(p<0||p=""){
        alert("Enter positive number")
        p.focus();
        return false;
    }
    // otherwise print the result
    else
    {
        document.getElementById ('num').innerHTML ="If you Deposit : "+p;
        document.getElementById ('num1').innerHTML ="at an interest rate of:"+rate;
        document.getElementById ('num2').innerHTML ="You will receive an amount of "+interest;
        document.getElementById ('num3').innerHTML ="in the year "+year;
    }
}
// this fuction is use to display rate value with sliding withe slider
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
    
