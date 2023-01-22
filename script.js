function onFormSubmit() {
    var formData = readFormData();
    if (!isEmpty(formData)) {
        insertNewRecord(formData);
    }
    else{
        alert("Please insert valid data!")
    }
}
function isEmpty(Datas) {
    return (Datas["productId"] === "" || Datas["productName"] === "" || Datas["productPrice"] === "" || Datas["date"] === "");
}
function readFormData() {
    var formData = {};
    formData["productId"] = document.getElementById("productId").value;
    formData["productName"] = document.getElementById("productName").value;
    formData["productPrice"] = document.getElementById("productPrice").value;
    formData["date"] = document.getElementById("date").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document
        .getElementById("productList")
        .getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.productId;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.productName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.productPrice;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.date;
}
