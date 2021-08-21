

let aotForm = document.querySelector('#form-area-of-triangle');
let aotDisp = document.querySelector('#aot-disp');

let side1 = document.querySelector('#aot-side-1');
let side2 = document.querySelector('#aot-side-2');
let side3 = document.querySelector('#aot-side-3');

function aotOnSubmitHandler(e) {
    e.preventDefault();

    inP = parseInt(side1.value);
    qty = parseInt(side2.value);
    cuP = parseInt(side3.value);

    profit = (cuP - inP) * qty;
    profitPer = ((cuP - inP) / inP) * 100;

    let pnl = "Profit";
    if(profit < 0) {
        pnl = "Loss"
    }
    
    aotDisp.innerHTML = "Your net " + pnl + " is " + profit + " and the percentage is " + profitPer + "%";
}


aotForm.addEventListener('submit', aotOnSubmitHandler)