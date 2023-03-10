let selectedRow = null;
function onFormSubmit() {
  let formData = readFormData();
  if (!validate(formData)) {
    if (selectedRow === null) {
        if(!uniqueId(formData)) insertNewRecord(formData);
    }
    else updateRecord(formData);
    resetForm();
  } else {
    alert("Please fill out this form!");
  }
}
function resetForm() {
  document.getElementById("productId").value = "";
  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";
  document.getElementById("date").value = "";
  selectedRow = null;
}

let list1 = [];
let n = 1;
let x = 0;
function showGreyBorder(styleId) {
    styleId.style.border = "1px solid";
    styleId.style.borderColor = "grey";
  }
function showRedBorder(styleId) {
  styleId.style.border = "2px solid";
  styleId.style.borderColor = "red";
}
function clearAll(){
    document.getElementById("error__productId").textContent = "";
    document.getElementById("error__productName").textContent = "";
    document.getElementById("error__productPrice").textContent = "";
    document.getElementById("error__productDate").textContent = "";
    showGreyBorder(productId);
    showGreyBorder(productName);
    showGreyBorder(productPrice);
    showGreyBorder(date);
}
function uniqueId(Datas) {
  if (Datas["productId"] === "") {
    showRedBorder(productId);
    let error11 = document.getElementById("error__productId");
    error11.textContent = "Empty Field!";
    return true;
  }
  else{
    let error11 = document.getElementById("error__productId");
    error11.textContent = "";
    showGreyBorder(productId);
  }
  //Check the ID is unique
  let isUnique = 0;
  list1.forEach((item) => {
    if (item === Datas["productId"]) isUnique = 1;
  });
  if (isUnique === 1) {
    //alert("Id is not unique!");
    showRedBorder(productId);
    let error1 = document.getElementById("error__productId");
    error1.textContent = "Id is not unique! Please insert a unique ID.";
    return true;
  } 
  else {
    let error1 = document.getElementById("error__productId");
    error1.textContent = "";
    showGreyBorder(productId);
    list1[x++] = Datas["productId"];
  }
}
function validate(Datas) {
  //Show the error message as an alert
  if (Datas["productName"] === "") {
    showRedBorder(productName);
    let error12 = document.getElementById("error__productName");
    error12.textContent = "Empty Field!";
    return true;
  }
  else{
    let error12 = document.getElementById("error__productName");
    error12.textContent = "";
    showGreyBorder(productName);
  }
  if (Datas["productPrice"] === "") {
    showRedBorder(productPrice);
    let error13 = document.getElementById("error__productPrice");
    error13.textContent = "Empty Field!";
    return true;
  }
  else{
    let error13 = document.getElementById("error__productPrice");
    error13.textContent = "";
    showGreyBorder(productPrice);
  }
  if (Datas["date"] === "") {
    showRedBorder(date);
    let error14 = document.getElementById("error__productDate");
    error14.textContent = "Empty Field!";
    return true;
  }
  else{
    let error14 = document.getElementById("error__productDate");
    error14.textContent = "";
    showGreyBorder(date);
  }
  //Do not allow product name longer than 60 characters
  if (Datas["productName"].length > 60) {
    //alert("Product name must be less than 60 characters!");
    showRedBorder(productName);
    let error2 = document.getElementById("error__productName");
    error2.textContent = "Product name must be less than 60 characters!";
    return true;
  }
  else{
    let error2 = document.getElementById("error__productName");
    error2.textContent = "";
    showGreyBorder(productName);
  }
  //Do not allow negative price input
  if (Datas["productPrice"] < 0) {
    //alert("Negative price is not allowed!");
    showRedBorder(productPrice);
    let error3 = document.getElementById("error__productPrice");
    error3.textContent = "Negative price is not allowed!";
    return true;
  }
  else{
    let error3 = document.getElementById("error__productPrice");
    error3.textContent = "";
    showGreyBorder(productPrice);
  }
  //Do not allow a price value of more than 100000
  if (Datas["productPrice"] > 100000) {
    //alert("Price can not be more than 100000!");
    showRedBorder(productPrice);
    let error4 = document.getElementById("error__productPrice");
    error4.textContent = "Price can not be more than 100000!";
    return true;
  }
  else{
    let error4 = document.getElementById("error__productPrice");
    error4.textContent = "";
    showGreyBorder(productPrice);
  }
}

function readFormData() {
  let formData = {};
  document.getElementById("productId").disabled = false;
  formData["productId"] = document.getElementById("productId").value;
  //Trim the trailing spaces of the product name
  let trimName = document.getElementById("productName").value;
  let ProductName =trimName.trim();
  formData["productName"] = ProductName;
  formData["productPrice"] = document.getElementById("productPrice").value;
  formData["date"] = document.getElementById("date").value;
  return formData;
}
function onDelete(td) {
  //Asking confirmation before deleting: "OK" or "Cancel"
  if (confirm("Are you sure to delete this record ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("productList").deleteRow(row.rowIndex);
    resetForm();
  }
}
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("productId").value = selectedRow.cells[0].innerHTML;
  document.getElementById("productId").disabled = true;
  document.getElementById("productName").value = selectedRow.cells[1].innerHTML;
  document.getElementById("productPrice").value = selectedRow.cells[2].innerHTML;
  document.getElementById("date").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    //Disabled the Product ID input while editing:
  selectedRow.cells[0].innerHTML = formData.productId;
  selectedRow.cells[1].innerHTML = formData.productName;
  selectedRow.cells[2].innerHTML = formData.productPrice;
  selectedRow.cells[3].innerHTML = formData.date;
}
function change() {
  let elem = document.getElementById("inputId");
  if (elem.value == "Submit") elem.value = "Update";
}
function changes() {
    let elem = document.getElementById("inputId");
    if (elem.value == "Update") elem.value = "Submit";
}
function insertNewRecord(data) {
  let table = document
    .getElementById("productList")
    .getElementsByTagName("tbody")[0];
  let newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.productId;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.productName;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.productPrice;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.date;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = `
    <a id="editButton" style="padding: 5px 10px; color:white; background-color: rgb(1, 146, 156);text-decoration: none; border-radius: 5px;" onClick="onEdit(this); change();clearAll()">Edit</a>
    <a id="deleteButton" style="padding: 5px 10px; color:white; background-color: rgb(255, 0, 0);text-decoration: none; border-radius: 5px;" onClick="onDelete(this)">Delete</a>`;
}
