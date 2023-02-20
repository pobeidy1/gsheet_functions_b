function calPectDifference() {
  var spreadsheet = SpreadsheetApp.getActive();
  var ui = SpreadsheetApp.getUi();
  
  // Prompt user to select three columns
  var response = ui.prompt("Enter the indices of the three columns to compare separated by commas (e.g. 1,2,3)");
  var columns = response.getResponseText().split(",");
  var col1 = parseInt(columns[0]);
  var col2 = parseInt(columns[1]);
  var col3 = parseInt(columns[2]);
  
  // Get data range for the two columns to compare
  var range1 = spreadsheet.getActiveSheet().getDataRange().offset(0, col1 - 1);
  var range2 = spreadsheet.getActiveSheet().getDataRange().offset(0, col2 - 1);
  
  // Get values for the two columns to compare
  var values1 = range1.getValues();
  var values2 = range2.getValues();
  
  // Calculate percentage difference for each pair of values
  var percentageDifferences = [];
  for (var i = 0; i < values1.length; i++) {
    var value1 = values1[i][0];
    var value2 = values2[i][0];
    var avg = (value1 + value2) / 2;
    var percentageDifference = Math.abs((value1 - value2) / avg) * 100;
    percentageDifferences.push([percentageDifference]);
  }
  
  // Get range for the third column and write percentage differences
  var range3 = spreadsheet.getActiveSheet().getDataRange().offset(0, col3 - 1);
  range3.setValues(percentageDifferences);
  
  // Set the format of the third column to percentage
  var numberFormat = SpreadsheetApp.NumberFormat.PERCENT;
  range3.setNumberFormat(numberFormat);
}
