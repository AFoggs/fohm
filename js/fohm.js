//TODO: Use a function closure and release global $

$(document).ready(function() {
/*
   $('#name_form').on('submit', function(event) {
    var nameinput = $('#namelabel').val();
    $.get(
      'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&cacheBuster=' + Math.random(),
      function(data) {
        var q = data[0];
        $('#primary').html(q.content);
        $('#aname').html('By: ' +q.title);
        $('#username').html( 'Hello, ' +nameinput + '! Your inspirational quote is below!');
        });
    event.preventDefault();
});          */


  $('#quote_form').on('submit', function(event2) {
   var query = $('#quotelabel').val();
   var urL = 'http://horoscope-api.herokuapp.com/horoscope/today/' + query;
   
$.ajax({
    type: 'GET',
    url: urL,
    dataType: 'jsonp',
    success: function(data){
      $('#secondary').html(data.horoscope);
      $('#bname').html('Date: ' +data.date);
      $('#qtitle').html('Sunsign: ' +data.sunsign);
      });
    event2.preventDefault();
})

    
}); 

});


/*  $('#uc-form').on('submit', function(e) {
      $('#loading').empty();
      $('#loading').append('Loading...');
      tkn = '68b2621e05c8479086e984a98ea8e716'; //This is the Dandelion token
      text = ($('#uc-text').val()).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");//Gets text & deletes punctuation
      sentQuery = 'https://api.dandelion.eu/datatxt/sent/v1/?text='+text+'&token='+tkn+'&lang=en';
      primaQuery = 'https://api.dandelion.eu/datatxt/nex/v1/?text='+text+'&token='+tkn+'&lang=en';
      text = text.replace(/ /g, "%20");//Replaces spaces with %20
      
      getSent = function() { //Gets the sentiment of text
        $.ajax({
          type: 'GET',
          url: sentQuery,
          success: function(data) {
            $("#sent").empty(); //Empties out the #sent list
            type = data.sentiment.type; //Get either positive, negative of neutral
            score = data.sentiment.score; //Get score of sentiment
            addSentToDom(type, score); //Add the sentiment and the GIF to DOM
          }
        });
      } */

