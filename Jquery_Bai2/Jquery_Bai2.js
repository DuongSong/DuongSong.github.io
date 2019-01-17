$(document).ready( function () {
	var countItem = 0;												//position item
	var sumItem = $('.imageItem').length;			//sum item
	chooseProduct(countItem);
	//this function handle when clicking arrow left
	$('#btnLeft').click(function () {
		countItem--;														//decrease index item
		if(countItem < 0)												//if index item < 0, position item will return index 0
			countItem = sumItem - 1;
		moveProduct(countItem);
		chooseProduct(countItem);
	});

	//this function handle when clicking arrow right
	$('#btnRight').click(function () {
		turnRight();
	});
	function turnRight() {
		countItem++;
		if(countItem >= sumItem)
			countItem = 0;
		moveProduct(countItem);
		chooseProduct(countItem);
	}
	//function handle when clicking an item in list
	$('.imageItemNavi').click(function () {
		countItem = this.id;
		moveProduct(countItem);
		chooseProduct(countItem);
	});

	//automatic select item
	setInterval(turnRight, 5000);
});

//function handle the coordinate changing of the item.
function moveProduct(indexItem) {
	var position = indexItem * 650;
	$('#ul_up').animate({left: -position});
}

//function handle select item.
function chooseProduct(indexItem) {
	$('.imageItemNavi')[indexItem].style.opacity = 0.5;
	for( var i=0; i< $('.imageItemNavi').length; i++)
		if(i != indexItem)
			$('.imageItemNavi')[i].style.opacity = 1;
}