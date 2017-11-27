function changeToLeft() {
	var Pscroll=document.getElementById("picScroll");
	var Pscrolls=Pscroll.childNodes[0];
	Pscroll.scrollLeft++;
	if(Pscroll.scrollLeft>Pscrolls.offsetWidth){
		Pscroll.scrollLeft=0;
	}
}
var One;
window.onload = function() {
	var Pscroll=document.getElementById("picScroll");
	Pscroll.scrollLeft=0;
	One=setInterval("changeToLeft()",10);
}