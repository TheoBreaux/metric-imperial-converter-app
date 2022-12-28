const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");

function convertAll() {
    if (numberInput.value) {

        let feetOutput = Number(numberInput.value) * 3.281;
        let meterOutput = Number(numberInput.value) / 3.281;
        let newP1 = document.createElement('p');
        length.innerHTML += `<p class="conversion-render">${numberInput.value} meters = ${feetOutput} feet | ${numberInput.value} feet = ${meterOutput.toFixed(3)} meters</p>`;

        let gallonOutput = Number(numberInput.value) * 0.264;
        let literOutput = Number(numberInput.value) / 0.264;
        let newP2 = document.createElement('p');
        volume.innerHTML += `<p class="conversion-render">${numberInput.value} liters = ${gallonOutput} gallons | ${numberInput.value} gallons = ${literOutput.toFixed(3)} liters</p>`;

        let poundOutput = Number(numberInput.value) * 2.204;
        let kiloOutput = Number(numberInput.value) / 2.204;
        let newP3 = document.createElement('p');
        mass.innerHTML += `<p class="conversion-render">${numberInput.value} kilos = ${poundOutput.toFixed(3)} pounds | ${numberInput.value} pounds = ${kiloOutput.toFixed(3)} kilos</p>`;

        // disble button after conversion
        convertBtn.disabled = true;
    }
}

convertBtn.addEventListener("click", convertAll);



/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/