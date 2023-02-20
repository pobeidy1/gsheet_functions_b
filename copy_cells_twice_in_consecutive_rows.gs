/**
 * Iterates over cells in column A and duplicates any cells containing a specific string
 * twice in consecutive rows.
 */
function duplicateString() {
  // Get the active sheet and the values in column A
  var sheet = SpreadsheetApp.getActiveSheet();
  var range = sheet.getRange("A1:A" + sheet.getLastRow());
  var values = range.getValues();

  // Iterate over the cells in the values array and duplicate any cells containing "duplicate"
  for (var i = 0; i < values.length; i++) {
    var cellValue = values[i][0];

    if (cellValue.indexOf("duplicate") !== -1) {
      // Insert a new row below the current row
      sheet.insertRowAfter(i+1);

      // Set the cell value in the new row to the cell value in the current row
      sheet.getRange(i+2, 1).setValue(cellValue);

      // Set the cell value in the next new row to the cell value in the current row
      sheet.getRange(i+3, 1).setValue(cellValue);

      // Increment i by 2 to skip the next two rows
      i += 2;
    }
  }
}