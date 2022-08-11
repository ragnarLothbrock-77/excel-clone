const CODES = {
  A: 65,
  Z: 90
}


function createRow(index, content) {
  const resize = index ? '<div class="row-resize" data-resize="row"></div>' : ''
  return `
    <div class="row" data-type="resizable">
      <div class="row-info">
        ${index ? index : ''}
        ${resize}
      </div>
      <div class="row-data">${content}</div>
    </div>
  `
}

function toColumn(col, index) {
  return `
    <div class="column" data-type="resizable" data-col="${index}">
      ${col}
      <div class="column-resize" data-resize="column"></div>
    </div>
  `
}

// function toCell(row, col) {
//   return `
//     <div class="cell" contenteditable data-type="resizable" data-col="${col}" data-row="${row}"></div>
//   `
// }

function toCell(row) {
  return function(_, col) {
    return `
      <div 
        class="cell" 
        contenteditable 
        data-col="${col}" 
        data-type="cell"
        data-id="${`${row}:${col}`}"
      ></div>
    `
  }
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index);
}

export function createTable(rowsCount = 15) {
  const columnsCount = CODES.Z - CODES.A;
  const rows = []

  const columns = new Array(columnsCount + 1)
      .fill('')
      .map(toChar)
      .map(toColumn) // В map можно передать функцию как референс и по умолчанию в параметр этой функции передастся итерируемый элемент
      .join('')

  rows.push(createRow(null, columns))

  for (let row = 0; row < rowsCount; row++) {
    const cells = new Array(columnsCount + 1)
        .fill('')
        // .map((_, col) => toCell(row, col))
        .map(toCell(row)) // Замыкание
        .join('')
    rows.push(createRow(row + 1, cells))
  }

  return rows.join('')
}