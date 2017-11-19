var arr=document.getElementsByTagName('img');
var arr1=["差","不合格","合格","良好","优秀"];
var con = false;
function starPic(i){			
	for(var j=0;j<=i;j++)
	{	
		arr[j].src="images/star2.png";
		if(i<2)
			arr[j].src="images/star1.png";		
		document.getElementById('text').value=arr1[j];						
	}	
}
function hide(){
	if(con==false)
		for(var j=0;j<5;j++){
			arr[j].src="images/star0.png";
			document.getElementById('text').value=' ';
		}
	else
		return;
}
function qd(i){
	con = true;
	if(con==true)
	{
		for(var j=0;j<=i;j++)
		{				
			arr[j].src="images/star2.png";
			for(var j=i+1;j<5;j++){
				arr[j].src="images/star0.png";
			}
			document.getElementById('text').value=arr1[j];		
		}
	}	
}