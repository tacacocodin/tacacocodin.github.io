 var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1T7nWIVk8KFPBE99bxboeIzI9Dclc70XZFmh_BUGTlb4/edit#gid=0'

// Compile the Handlebars template for HR leaders.
var template = Handlebars.compile($('#evento-template').html());

// Load top five HR leaders.
$('#evento').sheetrock({
  url: mySpreadsheet,
  rowTemplate: template
});