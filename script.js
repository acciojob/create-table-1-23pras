function insert_Row() {
    let tab = document.getElementById('sampleTable');
    let add = document.createElement('tr');
    
    add.innerHTML = `<td>New Cell1</td><td>New Cell2</td>`;
    
    tab.insertBefore(add, tab.rows[0]);
}
