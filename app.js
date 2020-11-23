const table = document.getElementById('table');
const name = document.getElementById('name');
const date = document.getElementById('date');
const amount = document.getElementById('amount');
const addExpenseBtn = document.getElementById('addBtn');

table.addEventListener('click', delBtn);

addExpenseBtn.addEventListener('click', addRow);

function addRow(e) {
    e.preventDefault();

    // creating table elements
    let row = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');

    let delBtn = document.createElement('button');
    delBtn.className = "delete-row";
    delBtn.textContent = "X";
    
    // setting the values of the table elements
    td1.innerHTML = name.value;
    td2.innerHTML = date.value;
    td3.innerHTML = '£' + amount.value;
    td4.appendChild(delBtn);

    // append <td> to the row <tr>
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    
    // insert into the DOM
    table.appendChild(row);

    if (name.value == "" || date.value == "" || amount.value == "") {
        table.removeChild(row);
        alert("Please fill out the form! ¯\\_(ツ)_/¯")
    }

    if (e.target == addExpenseBtn) {
        name.value = "";
        date.value = "";
        amount.value = "";
    }
}

function delBtn(e) {
    if (e.target.classList.contains("delete-row")) {
        let td = e.target.parentNode;
        let tr = td.parentNode; // row to be removed
        tr.parentNode.removeChild(tr);
    }
}