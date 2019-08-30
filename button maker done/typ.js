
	function typ()
	{
		var typ;
		typ=document.getElementById('type').value;
		if(typ=="1")
		{
		var i="<input type=button id=but>";
		

		document.getElementById("main").innerHTML=i;
	
	    }
	    else if(typ=="2")
		{
		var i="<input type=checkbox id=but>";
		document.getElementById("main").innerHTML=i;
	    }
	    else if(typ=="3")
		{
		var i="<input type=color id=but>"
		document.getElementById("main").innerHTML=i;
	    }
	    else if(typ=="4")
		{
		var i="<input type=date id=but>";
		document.getElementById("main").innerHTML=i;
	    }
	    else if(typ=="5")
		{
		var i="<input type=datetime-local id=but>";
		document.getElementById("main").innerHTML=i;
	    }	
	    else if(typ=="6")
		{
		var i="<input type=email id=but>";
		document.getElementById("main").innerHTML=i;
	    }
	    else if(typ=="7")
		{
		var i="<input type=file id=but>";
		document.getElementById("main").innerHTML=i;
	    }	
	    else if(typ=="8")
		{
		var i="<input type=hidden id=but>";
		document.getElementById("main").innerHTML=i;
	    }
	    else if(typ=="9")
		{
		var i="<input type=image id=but>"
		document.getElementById("main").innerHTML=i;
	    }	
	    else if(typ=="10")
		{
		var i="<input type=month id=but>"
		document.getElementById("main").innerHTML=i;
	    }
	    else if(typ=="11")
		{
		var i="<input type=number id=but>"
		document.getElementById("main").innerHTML=i;
	    }	
	    else if(typ=="12")
		{
		var i="<input type=password id=but>"
		document.getElementById("main").innerHTML=i;
	    }
	    else if(typ=="13")
		{
		var i="<input type=radio id=but>"
		document.getElementById("main").innerHTML=i;
	    }	
	    else if(typ=="14")
		{
		var i="<input type=range id=but>"
		document.getElementById("main").innerHTML=i;
	    }
	    else if(typ=="15")
		{
		var i="<input type=reset id=but>"
		document.getElementById("main").innerHTML=i;
	    }
	    else if(typ=="16")
		{
		var i="<input type=search id=but>"
		document.getElementById("main").innerHTML=i;
	    }
	    else if(typ=="17")
		{
		var i="<input type=submit id=but>"
		document.getElementById("main").innerHTML=i;
	    }
	    else if(typ=="18")
		{
		var i="<input type=tel id=but>"
		document.getElementById("main").innerHTML=i;
	    }
	    else if(typ=="19")
		{
		var i="<input type==text id=but>"
		document.getElementById("main").innerHTML=i;
	    }
	    else if(typ=="20")
		{
		var i="<input type=time id=but>"
		document.getElementById("main").innerHTML=i;
	    }
	     else if(typ=="21")
		{
		var i="<input type=url id=but>"
		document.getElementById("main").innerHTML=i;
	    }
	     else if(typ=="22")
		{
		var i="<input type=week id=but>"
		document.getElementById("main").innerHTML=i;
	    }
	    else if(typ=="23")
		{
		var i="<div id=but></div>"
		document.getElementById("main").innerHTML=i;
	    }
	     else if(typ=="24")
		{
		var i="<p id=but></p>"
		document.getElementById("main").innerHTML=i;
	    }
	     else if(typ=="25")
		{
		var i="<form id=but></form>"
		document.getElementById("main").innerHTML=i;
	    }
	    var x=document.getElementById("main").innerHTML;
	    document.getElementById("para4").innerHTML="<xmp>"+x+"</xmp>";
	    document.getElementById("demo").innerHTML=x;

	    
	    	
	}

