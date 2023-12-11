function inputOutput(expensive){
   
        const inputField = document.getElementById(expensive +'-input');
    const totalInputField= parseInt(inputField.value);
    return totalInputField;
   
    
}
function totalCalculator(){
    const foodCost=inputOutput('food');
    const rentCost= inputOutput('rent');
    const clothCost = inputOutput('cloths');
    const totalCost= foodCost + rentCost + clothCost;
     
    const expensive=document.getElementById('expensiveTotal').innerText = totalCost;
     const incomeInput= document.getElementById('totalIncome');
     const totalIncome= parseInt(incomeInput.value);
     const totalBlance= totalIncome - expensive;
    document.getElementById('blances').innerText = totalBlance;
   

}

document.getElementById('ExpensiveButton').addEventListener('click', function(){
totalCalculator();
});

document.getElementById('SavaingButton').addEventListener('click', function(){
    const savaingAmount=document.getElementById('savingInput');
    const savingInt= parseInt(savaingAmount.value);

    const blanceess=document.getElementById('blances');
    const totalBlancess= parseInt(blanceess.innerText);

    const totalSaving = totalBlancess / savingInt;
    const remaingBlance= totalBlancess - totalSaving;

    document.getElementById('savain-Amount').innerText=totalSaving;
    document.getElementById('remaing-Blance').innerText=remaingBlance;
})

