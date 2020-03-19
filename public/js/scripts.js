$(function(){
  const BASE_URL = 'http://localhost/public/';
  $('#send-button').on('click', (event) => {
    event.preventDefault();
    $.ajax({
      url: BASE_URL + 'send.php',
	  type:'POST',
      data: {
        'email': $('#email').val(),
        'rss': $('#rss').val()
      }
    }).done((data) => {
      $('#response').text(data);
    }).fail(() => {
      alert( "error" );
    });
  });

  $('#get-button').on('click', (event) => {
    event.preventDefault();
    $.ajax({
      url: BASE_URL + 'get.php?email=' + $('#email').val(),
    }).done((data) => {  
		let reponse = JSON.parse(data);		
		let rss = response[0];
	  $('#rsslist').val(rss);
    }).fail(() => {
      alert( "error" );
    });
  });
  
  $('#save-button').on('click', (event) => {
    event.preventDefault();
    $.ajax({
      url: BASE_URL + 'save.php',
	  type:'POST',
      data: {
        'email': $('#email').val(),
        'rss': $('#rss').val()
      }
    }).done((data) => {
      $('#response').text(data);
    }).fail(() => {
      alert( "error" );
    });
  });

});


