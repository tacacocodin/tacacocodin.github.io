 var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1T7nWIVk8KFPBE99bxboeIzI9Dclc70XZFmh_BUGTlb4/edit#gid=0'

// Compile the Handlebars template for HR leaders.
var template = Handlebars.compile($('#evento-template').html());

// Load top five HR leaders.
$('#evento').sheetrock({
  url: mySpreadsheet,
  query: "select A,B,C,D,E",
  labels: ['Hora', 'Performance', 'Performers', 'Contacto', 'url'],
  rowTemplate: template
});

(function(){
  _386.magicCursor();
  _386.scrollLock();
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();

  $(window).scroll(function() {
    var top = $(document).scrollTop();
    if(top > 50)
      $('#home > .navbar').removeClass('navbar-transparent');
    else
      $('#home > .navbar').addClass('navbar-transparent');
  });

  $("a[href='#']").click(function(e) {
    e.preventDefault();
  });

})();
