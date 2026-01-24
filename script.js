
const dryBtn = document.getElementById("dry");
const washBtn = document.getElementById("wash");
const ironBtn = document.getElementById("iron");
const stainBtn = document.getElementById("stain");
const leatherBtn = document.getElementById("leather");
const weddingBtn = document.getElementById("wedding");
const table = document.getElementById("added");
const total = document.getElementById("total");
const emptymsg = document.getElementById("emptyMsg");
const sendingMsg = document.getElementById("sendingMsg");
const errorMsg = document.getElementById("errorMsg");
const submitBtn = document.getElementById("submitBtn");
const bookForm = document.getElementById("bookForm");

let totalam = 0;
let dryRow = null; 
let washRow = null;
let ironRow = null; 
let stainRow = null; 
let leatherRow = null; 
let weddingRow = null; 


function updateCartUI() {
  const hasItems = table.rows.length > 1; 
  emptymsg.style.display = hasItems ? "none" : "block";
  submitBtn.disabled = !hasItems;
  submitBtn.style.opacity = hasItems ? "1" : "0.5";
  submitBtn.style.cursor = hasItems ? "pointer" : "not-allowed";
}
updateCartUI(); 
function updateSNo() {
  for (let i = 1; i < table.rows.length; i++) {
    table.rows[i].cells[0].textContent = i;
  }
}

dryBtn.addEventListener("click", () => {
  if (dryRow === null) {
    dryRow = table.insertRow(-1);
    const cell1 = dryRow.insertCell(0);
    const cell2 = dryRow.insertCell(1);
    const cell3 = dryRow.insertCell(2);
    cell2.textContent = "Dry Cleaning";
    cell3.textContent = "₹200";
    totalam += 200;
    total.textContent = totalam;
    dryBtn.textContent = "Remove Item ➖";
    dryBtn.style.backgroundColor = "lightcoral";
    updateSNo();
    updateCartUI();
  } 
  else {
    table.deleteRow(dryRow.rowIndex);
    dryRow = null;
    dryBtn.textContent = "Add Item ➕";
    totalam -= 200;
    total.textContent = totalam;
    dryBtn.style.backgroundColor = "rgb(165, 196, 227)";
    updateSNo();
    updateCartUI();
  }
});

washBtn.addEventListener("click", () => {
  if (washRow === null) {
    washRow = table.insertRow(-1);
    const cell1 = washRow.insertCell(0);
    const cell2 = washRow.insertCell(1);
    const cell3 = washRow.insertCell(2);
    cell2.textContent = "Wash and Fold";
    cell3.textContent = "₹100";
    totalam += 100;
    total.textContent = totalam;
    washBtn.textContent = "Remove Item ➖";
    washBtn.style.backgroundColor = "lightcoral";
    updateSNo();
    updateCartUI();
  } 
  else {
    table.deleteRow(washRow.rowIndex);
    washRow = null;
    washBtn.textContent = "Add Item ➕";
    totalam -= 100;
    total.textContent = totalam;
    washBtn.style.backgroundColor = "rgb(165, 196, 227)";
    updateSNo();
    updateCartUI();
  }
});

ironBtn.addEventListener("click", () => {
  if (ironRow === null) {
    ironRow = table.insertRow(-1);
    const cell1 = ironRow.insertCell(0);
    const cell2 = ironRow.insertCell(1);
    const cell3 = ironRow.insertCell(2);
    cell2.textContent = "Ironing";
    cell3.textContent = "₹30";
    totalam += 30;
    total.textContent = totalam;
    ironBtn.textContent = "Remove Item ➖";
    ironBtn.style.backgroundColor = "lightcoral";
    updateSNo();
    updateCartUI();
  } 
  else {
    table.deleteRow(ironRow.rowIndex);
    ironRow = null;
    ironBtn.textContent = "Add Item ➕";
    totalam -= 30;
    total.textContent = totalam;
    ironBtn.style.backgroundColor = "rgb(165, 196, 227)";
    updateSNo();
    updateCartUI();
  }
});

stainBtn.addEventListener("click", () => {
  if (stainRow === null) {
    stainRow = table.insertRow(-1);
    const cell1 = stainRow.insertCell(0);
    const cell2 = stainRow.insertCell(1);
    const cell3 = stainRow.insertCell(2);
    cell2.textContent = "Stain Removal";
    cell3.textContent = "₹500";
    totalam += 500;
    total.textContent = totalam;
    stainBtn.textContent = "Remove Item ➖";
    stainBtn.style.backgroundColor = "lightcoral";
    updateSNo();
    updateCartUI();
  } 
  else {
    table.deleteRow(stainRow.rowIndex);
    stainRow = null;
    stainBtn.textContent = "Add Item ➕";
    totalam -= 500;
    total.textContent = totalam;
    stainBtn.style.backgroundColor = "rgb(165, 196, 227)";
    updateSNo();
    updateCartUI();
  }
});

leatherBtn.addEventListener("click", () => {
  if (leatherRow === null) {
    leatherRow = table.insertRow(-1);
    const cell1 = leatherRow.insertCell(0);
    const cell2 = leatherRow.insertCell(1);
    const cell3 = leatherRow.insertCell(2);
    cell2.textContent = "Leather and Seude Cleaning";
    cell3.textContent = "₹999";
    totalam += 999;
    total.textContent = totalam;
    leatherBtn.textContent = "Remove Item ➖";
    leatherBtn.style.backgroundColor = "lightcoral";
    updateSNo();
    updateCartUI();
  } 
  else {
    table.deleteRow(leatherRow.rowIndex);
    leatherRow = null;
    leatherBtn.textContent = "Add Item ➕";
    totalam -= 999;
    total.textContent = totalam;
    leatherBtn.style.backgroundColor = "rgb(165, 196, 227)";
    updateSNo();
    updateCartUI();
  }
});

weddingBtn.addEventListener("click", () => {
  if (weddingRow === null) {
    weddingRow = table.insertRow(-1);
    const cell1 = weddingRow.insertCell(0);
    const cell2 = weddingRow.insertCell(1);
    const cell3 = weddingRow.insertCell(2);
    cell2.textContent = "Wedding Dress Cleaning";
    cell3.textContent = "₹2800";
    totalam += 2800;
    total.textContent = totalam;
    weddingBtn.textContent = "Remove Item ➖";
    weddingBtn.style.backgroundColor = "lightcoral";
    updateSNo();
    updateCartUI();
  } 
  else {
    table.deleteRow(weddingRow.rowIndex);
    weddingRow = null;
    weddingBtn.textContent = "Add Item ➕";
    totalam -= 2800;
    total.textContent = totalam;
    weddingBtn.style.backgroundColor = "rgb(165, 196, 227)";
    updateSNo();
    updateCartUI();
  }
});

const successmsg = document.getElementById("successmsg");
bookForm.addEventListener("submit", function (e) {
  e.preventDefault();
if (submitBtn.disabled) return;
  if (table.rows.length <= 1) {
    alert("Add items to the cart before booking.");
    return;
  }

  let itemsText = "";
  for (let i = 1; i < table.rows.length; i++) {
    const name = table.rows[i].cells[1].textContent;
    const price = table.rows[i].cells[2].textContent;
    itemsText += `${i}. ${name} - ${price}\n`;
  }

  const templateParams = {
    to_name: bookForm.elements["to_name"].value,
    to_email: bookForm.elements["to_email"].value,
    phone: bookForm.elements["phone"].value,
    message: itemsText,
    total: `₹${totalam}`
  };

  successmsg.style.display = "none";
  errorMsg.style.display = "none";
  sendingMsg.style.display = "block";
  submitBtn.disabled = true;
  submitBtn.value = "Sending...";

  emailjs
    .send("service_lbj1cxb", "template_7gbf5tc", templateParams)
    .then(() => {
      sendingMsg.style.display = "none";
      successmsg.style.display = "block";
      bookForm.reset();
    table.innerHTML = '<tr><th>S.No</th><th>Service</th><th>Price</th></tr>';
    totalam = 0;
    total.textContent = totalam;
    dryRow != null; 
    washRow != null;
    ironRow != null;
    stainRow != null;
    leatherRow != null;
    weddingRow != null;
    dryBtn.textContent = "Add Item ➕";
    dryBtn.style.backgroundColor = "rgb(165, 196, 227)";
    washBtn.textContent = "Add Item ➕";
    washBtn.style.backgroundColor = "rgb(165, 196, 227)";
    ironBtn.textContent = "Add Item ➕";
    ironBtn.style.backgroundColor = "rgb(165, 196, 227)";
    stainBtn.textContent = "Add Item ➕";
    stainBtn.style.backgroundColor = "rgb(165, 196, 227)";
    leatherBtn.textContent = "Add Item ➕";
    leatherBtn.style.backgroundColor = "rgb(165, 196, 227)";
    weddingBtn.textContent = "Add Item ➕";
    weddingBtn.style.backgroundColor = "rgb(165, 196, 227)";
    updateCartUI();

      setTimeout(() => {
        successmsg.style.display = "none";
      }, 5000);
    })
    .catch((err) => {
      console.error(err);
      sendingMsg.style.display = "none";
      errorMsg.style.display = "block";
    })
    .finally(() => {
      submitBtn.disabled = false;
      submitBtn.value = "Book Now";
    })})
