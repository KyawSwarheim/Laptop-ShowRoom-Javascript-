var selectedRow = null;

function onFormSubmit() {
    if (validate()) {
        var formData = readFormdata();
        if (selectedRow == null) {
            insertFormData(formData);
        } else {
            updateRecord(formData);
        }
        resetForm();
    }
}

function readFormdata() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["cpu"] = document.getElementById("cpu").value;
    formData["price"] = document.getElementById("price").value;
    return formData;
}

function insertFormData(data) {
    var table = document.getElementById("Laptoplist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.cpu;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.price;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
    <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("cpu").value = "";
    document.getElementById("price").value = "";
}

function onEdit(td) {
    selectedRow = td.paraentElement.paraentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("cpu").value = selectedRow.cells[1].innerHTML;
    document.getElementById("price").value = selectedRow.cells[2].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.cpu;
    selectedRow.cells[2].innerHTML = formData.price;

}

function onDelete(td) {
    if (confirm('Are you sure want to delete?'));
    row = td.paraentElement.paraentElement;
    document.getElementById("Laptoplist").deleteRow(row.roeIndex);
    resetForm();
}

function validate() {
    isvalid = true;
    if (document.getElementById("name").value == "") {
        isvalid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isvalid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isvalid;
}