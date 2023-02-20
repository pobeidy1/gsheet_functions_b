/**
 * Replaces all occurrences of "Whole Brian" with "WB" in the selected column.
 */
function replaceText() {
  // Get the active sheet and the selected column
  var sheet = SpreadsheetApp.getActiveSheet();
  var column = sheet.getActiveRange().getColumn();

  // Get the values in the selected column
  var range = sheet.getRange(1, column, sheet.getLastRow(), 1);
  var values = range.getValues();

  // Iterate over the rows in the selected column
  for (var i = 0; i < values.length; i++) {
    if (values[i][0] == "C_lesion") {
      // Replace "Whole Brian" with "WB"
      sheet.getRange(i+1, column).setValue("CL");
    }
  }
}