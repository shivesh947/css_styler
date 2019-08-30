
	function fun(pass)
	{
		var hov,y,u,s,t,v,w,su,arr,x,h,wi,bs,tg,bg,bi,l,tc,ts,ta,tff,rot,sk,skx,sky,sclx,scly,sclz,scl,tm,lfm,opa;

		hov=document.getElementById('buttonstate').value;

        tm=document.getElementById('topmargin').value;
		lfm=document.getElementById('leftmargin').value;

		h=document.getElementById('height').value;
		wi=document.getElementById('width').value;
		y=document.getElementById('bdrradius').value;
		t=document.getElementById('bdrwidth').value;
		w=document.getElementById('shadow').value;
		v=document.getElementById('bdrcolor').value;
	    s=document.getElementById('col').value;
	    x=document.getElementById('shadowcolor').value;
	    bs=document.getElementById('boderstyle').value;
	    tg=document.getElementById('topgrd').value;
	    bg=document.getElementById('butgrd').value;
	    l=document.getElementById('lable').value;
        tc=document.getElementById('textcolor').value;
        ts=document.getElementById('textsize').value;
        ta=document.getElementById('textalign').value;
        tff=document.getElementById('fontfamily').value;
        rot=document.getElementById('rotate').value;
        
        opa=document.getElementById('opacity').value;
        skx=document.getElementById('skewx').value;
        sky=document.getElementById('skewy').value;

        sclx=document.getElementById('scalex').value;
        scly=document.getElementById('scaley').value;
       
        tm=tm+"px";
        lfm=lfm+"px";

       
	    y= y+"px";
		t=t+"px";
		w= w+"px " +w+"px " +w+"px " +w+"px ";
		x=w+ ""+x;
		h= h+"px";
	    wi= wi+"px";
	    bi="linear-gradient("+tg+ " , " +bg+ ")";
	    ts=ts+"px";
	    rot= "rotate("+rot+"deg) ";	
	    
	    scl="scale("+sclx+","+scly+") ";
	    sk=scl+rot+"skew("+skx+"deg,"+sky+"deg)";
	   

	  	

	    document.getElementById('but').style.background= ""+s;
	    document.getElementById('but').style.borderRadius=""+y;
	    document.getElementById('but').style.borderWidth= ""+t;
	    document.getElementById('but').style.borderColor= ""+v;
	    document.getElementById('but').style.boxShadow= ""+x;
	    document.getElementById('but').style.marginTop=""+tm;

	    document.getElementById('but').style.marginLeft=""+lfm;
	    document.getElementById('but').style.height=""+h;
	    document.getElementById('but').style.width=""+wi;
	    document.getElementById('but').style.borderStyle =""+bs;
	    document.getElementById('but').style.backgroundImage =""+bi;

	    var big=document.getElementById("backimg").value;
	    if(big!="not use")
	    {
	    big="url('"+big+"')";
	    document.getElementById('but').style.backgroundImage =""+big;
	    document.getElementById('but').style.backgroundRepeat = "no-repeat";
	     document.getElementById('but').style.backgroundSize="cover";
	    bi=big;
	    }


	    document.getElementById('but').value=""+l;
	    document.getElementById('but').style.color= ""+tc;
	    document.getElementById('but').style.fontSize=""+ts;
	    document.getElementById('but').style.textAlign=""+ta;
	    document.getElementById('but').style.fontFamily=""+tff;
	    document.getElementById('but').style.transform= ""+sk;
	    document.getElementById('but').style.opacity= ""+opa;

	   


        arr=[hov,s,y,t,v,x,h,wi,bs,bi,tc,ts,ta,tff,sk,opa];
        
        su=document.getElementById('sub').value;


		if(pass==1)
		{
			vnum(arr);  
		}
		
	}
	function vnum(arr)
	{ 
	   var samfoal="background-repeat:no-repeat;background-size:cover;";
	   var postmrg="position:absolute;margin-top:40px;margin-left:50px;";

	   var backgroundcolor="background-color:"+arr[1]+";";
	   var borderRadius="border-radius:"+arr[2]+";";
	   var borderwidth="border-width:"+arr[3]+";";
	   var bordercolor="border-color:"+arr[4]+";";
	   var boxShadow="box-shadow:"+arr[5]+";";
	   var height="height:"+arr[6]+";";
	   var width="width:"+arr[7]+";";
	   var borderStyle="border-Style:"+arr[8]+";";
	   var backgroundImage="background-image:"+arr[9]+";";
	   var textcolor="color:"+arr[10]+";";
	   var textsize="font-size:"+arr[11]+";";
	   var textalign="text-align:"+arr[12]+";";
	   var fontFamily="font-family:"+arr[13]+";";
	   var transform="transform:"+arr[14]+";";
	   var opacity="opacity:"+arr[15]+";";

      if(arr[0]=="normal")
      {
      	var vl="#but{"+postmrg+height+width+backgroundcolor+bordercolor+borderRadius+borderwidth+borderStyle+boxShadow+backgroundImage+samfoal+textcolor+textsize+textalign+fontFamily+transform+opacity+"}#but:focus{outline:none;}";
      	document.getElementById("para").innerHTML=vl;
      	document.getElementById("script1").innerHTML=vl;
      }
      if(arr[0]=="hover")
      {
      	var vl="#but:hover{"+postmrg+height+width+backgroundcolor+bordercolor+borderRadius+borderwidth+borderStyle+boxShadow+backgroundImage+samfoal+textcolor+textsize+textalign+fontFamily+transform+opacity+"}";
      	document.getElementById("para2").innerHTML=vl;
      	document.getElementById("script2").innerHTML=vl;
      }
      if(arr[0]=="active")
      {
      	var vl="#but:active{"+postmrg+height+width+backgroundcolor+bordercolor+borderRadius+borderwidth+borderStyle+boxShadow+backgroundImage+samfoal+textcolor+textsize+textalign+fontFamily+transform+opacity+"}";
      	document.getElementById("para3").innerHTML=vl;
      	document.getElementById("script3").innerHTML=vl;
      }
  
	}
