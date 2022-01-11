

const aotForm = document.querySelector('#form-area-of-triangle');
const aotDisp = document.querySelector('#aot-disp');

const side1 = document.querySelector('#aot-side-1');
const side2 = document.querySelector('#aot-side-2');
const side3 = document.querySelector('#aot-side-3');

const aotOnSubmitHandler = e => {
    e.preventDefault();

    const inP = parseInt(side1.value);
    const qty = parseInt(side2.value);
    const cuP = parseInt(side3.value);

    const profit = (cuP - inP) * qty;
    const profitPer = ((cuP - inP) / inP) * 100;

    const pnl = profit < 0 ? "Loss" : "Profit";
    
    aotDisp.innerHTML = "Your net " + pnl + " is " + profit + " and the percentage is " + profitPer + "%";
}


aotForm.addEventListener('submit', aotOnSubmitHandler)
