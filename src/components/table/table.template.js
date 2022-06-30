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

function toCell(_, col) {
  return `
    <div class="cell" contenteditable data-type="resizable" data-col="${col}"></div>
  `
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

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(columnsCount + 1)
        .fill('')
        .map(toCell)
        .join('')
    rows.push(createRow(i + 1, cells))
  }

  return rows.join('')
}