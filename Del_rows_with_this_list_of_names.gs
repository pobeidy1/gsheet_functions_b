/**
 * Deletes rows in the active sheet where column C contains the value "clear label",
 * "Label Name", or the row is completely empty.
 */
function deleteRows() {
  // Get the active sheet and its data range
  var sheet = SpreadsheetApp.getActiveSheet();
  var range = sheet.getDataRange();

  // Get the values in the data range and the number of rows
  var values = range.getValues();
  var numRows = range.getNumRows();

  // Iterate over the rows in reverse order
  for (var i = numRows - 1; i >= 0; i--) {
    // Get the values in the current row and the value in column b(used to be c)
    var rowValues = values[i];
    var labelValue = rowValues[1];

    // Check if the current row is empty
    var isEmpty = rowValues.every(function(cell) {
      return cell === '';
    });

    // If the value in column C is "clear label", "Label Name", or the row is empty, delete the row
    if (labelValue == "Clear Label" || labelValue == "Label Name" || labelValue == "Label 5"|| isEmpty) {
      sheet.deleteRow(i+1);
    }
  }
}