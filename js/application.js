var prepTable = []

$(document).ready(function(){
    $('#new_batch').submit(function(e){
      e.preventDefault();
      var type = $(this).find('input[type=text]').val();
      var time = $(this).find('input[type=number]').val();
      var newCookie = new Cookie(type, time);
      $('#new_batch')[0].reset();
      prepTable.push(newCookie);
      if (prepTable.length <= 3){
        $('#prep_batches').append('<li>'+ prepTable[prepTable.length - 1].batchType + '<button id="prep_submit">Add Batch</button></li>');
      }  
    });

    $('body').on('click', '#prep_submit', function(){
      
    });
});
