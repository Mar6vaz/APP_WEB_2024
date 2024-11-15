document.getElementById('shape').addEventListener('change', showFields);

function showFields() {
    const shape = document.getElementById('shape').value;
    const inputFields = document.getElementById('inputFields');
    inputFields.innerHTML = '';  // Clear previous fields

    if (shape === 'square') {
        inputFields.innerHTML = '<label>Lado:</label><input type="number" id="side">';
    } else if (shape === 'rectangle') {
        inputFields.innerHTML = '<label>Base:</label><input type="number" id="base"><br><label>Altura:</label><input type="number" id="height">';
    } else if (shape === 'triangle') {
        inputFields.innerHTML = '<label>Base:</label><input type="number" id="base"><br><label>Altura:</label><input type="number" id="height">';
    } else if (shape === 'circle') {
        inputFields.innerHTML = '<label>Radio:</label><input type="number" id="radius">';
    }
}

function calculateArea() {
    const shape = document.getElementById('shape').value;
    let area;
    const result = document.getElementById('result');
    const shapeDisplay = document.getElementById('shapeDisplay');
    shapeDisplay.innerHTML = '';  // Clear previous shape display

    if (shape === 'square') {
        const side = parseFloat(document.getElementById('side').value);
        area = side * side;
        shapeDisplay.innerHTML = `<div style="width:${side * 10}px; height:${side * 10}px; background-color: lightblue;"></div>`;
    } else if (shape === 'rectangle') {
        const base = parseFloat(document.getElementById('base').value);
        const height = parseFloat(document.getElementById('height').value);
        area = base * height;
        shapeDisplay.innerHTML = `<div style="width:${base * 10}px; height:${height * 10}px; background-color: lightgreen;"></div>`;
    } else if (shape === 'triangle') {
        const base = parseFloat(document.getElementById('base').value);
        const height = parseFloat(document.getElementById('height').value);
        area = 0.5 * base * height;
        shapeDisplay.innerHTML = `<div style="width:0; height:0; border-left:${base * 5}px solid transparent; border-right:${base * 5}px solid transparent; border-bottom:${height * 10}px solid lightcoral;"></div>`;
    } else if (shape === 'circle') {
        const radius = parseFloat(document.getElementById('radius').value);
        area = Math.PI * radius * radius;
        shapeDisplay.innerHTML = `<div style="width:${radius * 20}px; height:${radius * 20}px; background-color: lightpink; border-radius: 50%;"></div>`;
    }

    result.textContent = `Área: ${area.toFixed(2)}`;
    
}