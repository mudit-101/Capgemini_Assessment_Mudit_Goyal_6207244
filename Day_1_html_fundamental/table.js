  let table = document.createElement('table');
  table.setAttribute('border', '1');
  table.style.borderCollapse = 'collapse';
  table.style.backgroundColor = 'pink';
  table.style.width = '50%';
  table.style.height = '200px';
  table.style.textAlign = 'center';
  table.style.margin = '20px auto';
  for(let i = 0; i<5; i++){
    let row = document.createElement('tr');
    for(let j = 0; j<5; j++){
        let col = document.createElement('td');
        col.textContent = `${i}-${j}`;
        row.appendChild(col);
    }
    table.appendChild(row);
    document.body.appendChild(table);
  }
