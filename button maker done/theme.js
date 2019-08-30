function mode()
{
	var t=document.getElementById('theme').value;

    if(t=="Light")
	{
		var bdy=document.getElementById('bdy').style;
		var main=document.getElementById('main').style;
		var hd=document.getElementById('hd').style;
		var footer=document.getElementById('footer').style;
		bdy.color="#D3D3D3";
		bdy.backgroundColor="#D3D3D3";
		bdy.backgroundImage="linear-gradient(#D3D3D3 , #D3D3D3)";
        bdy.boxShadow="2px 2px 2px 2px #D3D3D3";

		main.backgroundColor="#D3D3D3";
		main.backgroundImage="linear-gradient(#D3D3D3 , #D3D3D3)";
		main.borderColor="#D3D3D3";
		main.boxShadow="2px 2px 2px 2px #D3D3D3";

		hd.backgroundColor="#ff8344";
		hd.borderColor="#808080";
		hd.borderRadius="0px";
		hd.borderWidth="2px";
		hd.fontColor="#000000";
        hd.backgroundImage="linear-gradient(#646464 , #afafaf)";
        hd.boxShadow="2px 2px 2px 2px #afafaf";

        footer.backgroundColor="#ff8344";
        footer.borderColor="#808080";
        footer.backgroundImage="linear-gradient(#646464 , #afafaf)";
        footer.fontColor="#000000";
    
        var v=['#lft','#rgt','#rgt2'],i,b;
        for(i=0;i<3;i++)
		{
			b=v[i];
			document.querySelector(""+b).style.backgroundImage="linear-gradient(#818181 , #cecece)";
			document.querySelector(""+b).style.boxShadow="2px 2px 2px 2px #6b6b6b";
			document.querySelector(""+b).style.borderWidth="2px";
			document.querySelector(""+b).style.borderColor="#ff8344";
			document.querySelector(""+b).style.backgroundColor="#ff8344";
		}
		var p=['#para','#para2','#para3','#para4'];
		for(i=0;i<4;i++)
		{b=p[i];
			document.querySelector(""+b).style.backgroundImage="linear-gradient(#afafaf, #afafaf)";

		}
		document.querySelector(".bdy").style.color="black";

	}
	else if(t=="Dark")
	{
		var v=['#lft','#rgt','#rgt2','#para','#para2','#para3','#para4','#footer','#main','#hd','#bdy'],i,b;
		for(i=0;i<11;i++)
		{
			b=v[i];
			document.querySelector(""+b).style.backgroundImage="linear-gradient(black , black)";
			document.querySelector(""+b).style.borderWidth="2px";
			document.querySelector(""+b).style.borderColor="DARKSLATEGRAY";
			document.querySelector(""+b).style.backgroundColor="black";
			if(b=='#para'||b=='#para2'||b=='#para3'||b=='#para4')
			{
				document.querySelector(""+b).style.boxShadow="0px 0px 0px 0px DARKSLATEGRAY";
			}
			else
			{
			document.querySelector(""+b).style.boxShadow="1px 8px 1px 1px DARKSLATEGRAY";
		    }
		}
		document.querySelector(".bdy").style.color="white";
	}
	else if(t=="pink")
	{
		var w=['#lft','#rgt','#rgt2','#para','#para2','#para3','#para4','#footer','#main','#hd','#bdy'],i,b;
		for(i=0;i<11;i++)
		{
			b=w[i];
			document.querySelector(""+b).style.backgroundImage="linear-gradient(HOTPINK , LIGHTPINK)";
			document.querySelector(""+b).style.borderWidth="2px";
			document.querySelector(""+b).style.borderColor="HOTPINK";
			document.querySelector(""+b).style.backgroundColor="LIGHTPINK";

			if(b=='#para'||b=='#para2'||b=='#para3'||b=='#para4')
			{
				document.querySelector(""+b).style.boxShadow="0px 0px 0px 0px DARKSLATEGRAY";
			}
			else
			{
			document.querySelector(""+b).style.boxShadow="1px 8px 1px 1px HOTPINK";
		    }
		}
		document.querySelector(".bdy").style.color="DARKRED";

	}
}