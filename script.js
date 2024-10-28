function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    const display = document.getElementById('display');
    display.value += number;
    changeColor();
}

function appendSymbol(symbol) {
    const display = document.getElementById('display');
    display.value += symbol;
    changeColor();
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

function toggleScientific() {
    const sci = document.getElementById('scientific');
    sci.style.display = sci.style.display === 'grid' ? 'none' : 'grid';
}

function changeColor() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    });
}
