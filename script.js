function insert_Row() {
    let tab = document.getElementById('sampleTable');
    let add = document.createElement('tr');

    add.innerHTML = `<td>New Cell1</td><td>New Cell2</td>`;

    if (tab.rows.length > 0) {
        tab.insertBefore(add, tab.rows[0]); 
    } else {
        tab.appendChild(add); 
    }
}
