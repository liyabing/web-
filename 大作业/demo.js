function changeToLeft() {
	var Pscroll=document.getElementById("picScroll");
	var Pscrolls=Pscroll.childNodes[0];
	Pscroll.scrollLeft++;
	if(Pscroll.scrollLeft>Pscrolls.offsetWidth){
		Pscroll.scrollLeft=0;
	}
}
var One;
function changeToRight() {
	var Pscrolll=document.getElementById("two");
	var Pscrollss=Pscrolll.childNodes[0];
	Pscrolll.scrollLeft++;
	if(Pscrolll.scrollLeft>Pscrollss.offsetWidth){
		Pscrolll.scrollLeft=0;
	}
}
var Two;
window.onload = function() {
	var Pscroll=document.getElementById("picScroll");
	Pscroll.scrollLeft=0;
	One=setInterval("changeToLeft()",10);
	var liNodes = document.getElementsByTagName("li");
	for (var i=0; i<liNodes.length; i++)
	{
		liNodes[i].onmouseover = function(){
			this.className = "subMenuShow";
		}
		liNodes[i].onmouseout = function(){
			this.className = "";
		}
	}
	var Pscrolll=document.getElementById("two");
	Pscrolll.scrollLeft=0;
	Two=setInterval("changeToRight()",10);
}

