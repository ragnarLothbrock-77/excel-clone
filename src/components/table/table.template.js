const CODES = {
  A: 65,
  Z: 90
}


function createRow(index, content) {
  return `
    <div class="row">
      <div class="row-info">${index ? index : ''}</div>
      <div class="row-data">${content}</div>
    </div>
  `
}

function toColumn(col) {
  return `
    <div class="column">${col}</div>
  `
}

function toCell() {
  return `
    <div class="cell" contenteditable></div>
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