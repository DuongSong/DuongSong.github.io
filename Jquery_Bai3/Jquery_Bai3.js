//function create leaves when page loading
$(document).ready(function () {
	var sumLeaf = 5;
	for( var i=0; i<=50; i++){
		var random = 1 + Math.floor(Math.random() * sumLeaf);
		var leaf = 'leaves' + random;
		var myImage = $('<img/>');
		myImage.attr('class', 'leaves');
		myImage.attr('id','L'+i);
		myImage.attr('src', 'image/' + leaf + '.png');
		$('#container').append(myImage);
		leavesFall('#L'+i);
	}
});

//function handle fall speed of leaves
function leavesFall(leaves) {
	TweenMax.set($(leaves), {attr:{class:'leaves'},x:(900-900)*Math.random() + 200,y:0,z:600*Math.random()});
	TweenMax.to($(leaves), (15-6)*Math.random() + 6,{y:900,ease:Linear.easeNone,repeat:-1,delay:-15});
	TweenMax.to($(leaves), (10-5)*Math.random() + 5,{x:'+=50',rotationZ:180*Math.random(),repeat:-1,yoyo:true,ease:Sine.easeInOut});
	TweenMax.to($(leaves), (8-4)*Math.random() + 4,{rotationX:360*Math.random(),rotationY:360*Math.random(),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-1});
}



