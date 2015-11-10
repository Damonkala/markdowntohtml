'use strict';

$(document).ready(init);

function init() {
  $('#buttton').click(clicky);
}

function clicky (){

	var markdownText = $('.markdown').val();

	$.post('/',{markey: markdownText})
	.done(writeHTML)
};


function writeHTML(data){
	console.log(data);
	var $parsy = $.parseHTML(data);
	$('#htmlz').append($parsy);
}
