function insert_Row() {
    // Select the table
    let tab = document.getElementById('sampleTable');
    
    // Create a new row
    let newRow = tab.insertRow(0); // Insert at the top
    
    // Create and add the first cell
    let cell1 = newRow.insertCell(0);
    cell1.textContent = 'New Cell1';
    
    // Create and add the second cell
    let cell2 = newRow.insertCell(1);
    cell2.textContent = 'New Cell2';
}
