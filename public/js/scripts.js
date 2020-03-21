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
		var formatedList = separete(reponse[0]);
	  $('#rsslist').val(formatedList);
	  $('#debug').val(generateMail(stringToArray(response[0]));
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


function separete(str)
{
	return str.replace(/:/g, "\n");
}

function generateMail(rssListArray)
{
	
	
	return "This is your email: \n";
}
function stringToArray(str)
{
	return str.split(":");
}





















