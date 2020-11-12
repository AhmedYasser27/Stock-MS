$(document).ready(function(){

  $('.table').paging({limit:8});
  NProgress.start();
  NProgress.done();
  $(".datetimeinput").datepicker({changeYear: true,changeMonth: true, dateFormat: 'YYYY-MM-DD'});
 

});