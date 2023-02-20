/**
 * Iterate over cells in column A and duplicate each string once in the empty cell below it,
 * and then duplicate the last string twice in the next two empty cells.
 */
function duplicateColumnA() {
  var sheet = SpreadsheetApp.getActiveSheet(); // get the active sheet
  var range = sheet.getRange("A1:A" + sheet.getLastRow()); // get the range of values in column A
  var values = range.getValues(); // get the values in the range as a 2D array
  
  var lastValueIndex = 0; // initialize a variable to store the index of the last non-empty cell
  for (var i = 0; i < values.length; i++) {
    var cellValue = values[i][0]; // get the value of the current cell in column A
    if (cellValue !== "") { // if the current cell is not empty
      lastValueIndex = i; // update the last non-empty cell index
    }
    else { // if the current cell is empty
      sheet.getRange(i+1, 1).setValue(values[lastValueIndex][0]); // set the value of the empty cell to the value of the last non-empty cell
    }
  }
  
  sheet.getRange(lastValueIndex+2, 1).setValue(values[lastValueIndex][0]); // set the value of the cell two rows below the last non-empty cell to the last non-empty cell value
  sheet.getRange(lastValueIndex+3, 1).setValue(values[lastValueIndex][0]); // set the value of the cell three rows below the last non-empty cell to the last non-empty cell value
}