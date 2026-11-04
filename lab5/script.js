const submitBtn = document.getElementById('submitBtn');
const outputData = document.getElementById('output-data');

const regexPatterns = {
    pib: /^[А-ЯІЇЄҐа-яіїєґA-Za-z]+\s[А-ЯІЇЄҐA-Z]\.[А-ЯІЇЄҐA-Z]\.$/,
    group: /^[А-ЯІЇЄҐA-Z]{2}-\d{2}$/,
    idcard: /^[А-ЯІЇЄҐA-Z]{2}\s№\d{6}$/,
    dob: /^\d{2}\.\d{2}\.\d{4}$/,
    email: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.com$/
};

submitBtn.onclick = function() {
    let isValid = true;
    const data = {
        pib: document.getElementById('pib'),
        group: document.getElementById('group'),
        idcard: document.getElementById('idcard'),
        dob: document.getElementById('dob'),
        email: document.getElementById('email')
    };

    for (let key in data) {
        data[key].classList.remove('error');
    }

    for (let key in regexPatterns) {
        if (!regexPatterns[key].test(data[key].value)) {
            data[key].classList.add('error');
            isValid = false;
        }
    }

    if (isValid) {
        const resultHTML = `
            <p><strong>ПІБ:</strong> ${data.pib.value}</p>
            <p><strong>Група:</strong> ${data.group.value}</p>
            <p><strong>ID-card:</strong> ${data.idcard.value}</p>
            <p><strong>Дата народж.:</strong> ${data.dob.value}</p>
            <p><strong>e-mail:</strong> ${data.email.value}</p>
        `;
        
        outputData.innerHTML = resultHTML;
        
        const newWin = window.open("", "Введені дані", "width=400,height=400");
        newWin.document.write(`<html><head><title>Дані</title></head><body style="font-family:sans-serif;">${resultHTML}</body></html>`);
    } else {
        outputData.innerHTML = "<p style='color:red;'>Є помилки в заповненні форми. Виправте виділені червоним поля.</p>";
    }
};

const gridTable = document.getElementById('gridTable');
const colorPicker = document.getElementById('colorPicker');
const myVariantCell = 8;

let counter = 1;
for (let i = 0; i < 6; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 6; j++) {
        const cell = document.createElement('td');
        cell.innerText = counter;
        cell.dataset.col = j;
        
        cell.onmouseover = function() {
            if (parseInt(this.innerText) === myVariantCell) {
                const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
                this.style.backgroundColor = randomColor;
            }
        };

        cell.onclick = function() {
            if (parseInt(this.innerText) === myVariantCell) {
                this.style.backgroundColor = colorPicker.value;
            }
        };

        cell.ondblclick = function() {
            if (parseInt(this.innerText) === myVariantCell) {
                const selectedCol = parseInt(this.dataset.col);
                const chosenColor = colorPicker.value;
                const allCells = gridTable.getElementsByTagName('td');
                
                for (let k = 0; k < allCells.length; k++) {
                    const currentCellCol = parseInt(allCells[k].dataset.col);
                    if (currentCellCol >= selectedCol && (currentCellCol - selectedCol) % 2 === 0) {
                         allCells[k].style.backgroundColor = chosenColor;
                    }
                }
            }
        };

        row.appendChild(cell);
        counter++;
    }
    gridTable.appendChild(row);
}