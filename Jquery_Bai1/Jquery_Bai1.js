var preIndex = 0;			//take index of item.

$(document).ready(function () {
	//function handle when clicking into title button
	$(".btnTitle").click(function () {
		var index = this.id;										//take id of title index.
		if($('#'+index).attr('src') === 'images/about' + index + '_mb_hover.jpg'){     //comparison two string image
			$('#content'+index).animate({height: 'toggle'});													//slide down infomation at the index of title button
			preIndex = 0;
			$('#'+index).attr('src','images/about' + index + '_mb.jpg');		//assign value is image for title button
		}
		else {
			if(preIndex > 0) {																												//checking already have information slide down or not
				$("#"+preIndex).attr('src','images/about' + preIndex + '_mb.jpg');  //assign value is image for title button
				$("#content"+preIndex).animate({height: 'toggle'});								//information at the previous index will slide up
			}
			$('#content'+index).animate({height: 'toggle'});										//information at the index currently will slide down
			preIndex = index;																														//storing index current
			$('#'+index).attr('src','images/about' + index + '_mb_hover.jpg');    //assign value is image for title button
		}
	});

	//function handle when clicking into about button
	$(".btnAbout").click(function () {
		$('.btnTitle').css('pointer-events', 'none');			//disable event click of title button
		var split = $(this).parent().attr('id').split('t');			//take id of parent element then split a string into an of substrings
		var index = parseInt(split[2]);																//take element at index 2 in array and convert into integer
		if(index%2){																									//if index is even number, slide down information popup1
			$('#popup1').animate({height:'toggle'});
		}
		else{																														//if index is odd number, slide down information popup2.
			$('#popup2').animate({height:'toggle'});
		}
	});

	//function handle when clicking into close button
	$('.btnClose').click(function () {
		$('.btnTitle').css('pointer-events', 'auto');		//enable event click of title button
		var index = $(this).parent().attr('id');
		$("#"+index).animate({height: 'toggle'});		//slide up information.
	});
});

