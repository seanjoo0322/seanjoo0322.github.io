// Toggle menu visibility on mobile views
function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Handle form submission for selling coins
document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const username = document.getElementById('username').value;
    const amount = document.getElementById('amount').value;
    const price = document.getElementById('price').value;

    // Add the new transaction to the posts table
    const table = document.getElementById('posts-Table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Insert new cells for the transaction details
    const cellIndex = newRow.insertCell(0);
    const cellName = newRow.insertCell(1);
    const cellAmount = newRow.insertCell(2);
    const cellPrice = newRow.insertCell(3);

    // Populate cells with data
    cellIndex.innerHTML = table.rows.length;  // Increment ID for each new row
    cellName.innerHTML = username;
    cellAmount.innerHTML = amount;
    cellPrice.innerHTML = price;

    // Clear the form fields after submission
    document.getElementById('username').value = '';
    document.getElementById('amount').value = '';
    document.getElementById('price').value = '';
});
