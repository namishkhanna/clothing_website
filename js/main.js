if(typeof(localStorage.clickcount) == "undefined")
{
    localStorage.clickcount = 0;
}

function addtocart()
{
    alert("Added to Cart");
    if(typeof(Storage)!="undefined")
    {
        if(localStorage.clickcount)
        {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        }
        else
        {
            localStorage.clickcount = 1;
        }
        document.getElementById("cartvalue").innerHTML=localStorage.clickcount;
    }
    else
    {
        document.getElementById("cartvalue").innerHTML=0;
    }
}

function onnewpage()
{
    document.getElementById("cartvalue").innerHTML=localStorage.clickcount;
}

function validation()
{
	var gender;
	var first_name = document.getElementById("first_name").value;
	var last_name = document.getElementById("last_name").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var password1 = document.getElementById("password1").value;
	var password2 = document.getElementById("password2").value;
	
	if(first_name == "")
	{
		document.getElementById("first_name1").innerHTML="Please Enter First Name";
	}
	else
	{
		if(first_name.match(/^[A-Za-z]+$/))
		{
			document.getElementById("first_name1").innerHTML="";   
		}
		else
		{
			document.getElementById("first_name").value="";
			document.getElementById("first_name1").innerHTML="Character Only";   
		}
	}

	if(last_name == "")
	{
		document.getElementById("last_name1").innerHTML="Please Enter Last Name";
	}
	else
	{
		if(last_name.match(/^[A-Za-z]+$/))
		{
			document.getElementById("last_name1").innerHTML="";   
		}
		else
		{
			document.getElementById("last_name").value="";
			document.getElementById("last_name1").innerHTML="Character Only";   
		}
	}

	if(document.getElementById('male').checked)
	{
		document.getElementById("gender1").innerHTML="";
	}
	else
	{
		if(document.getElementById('female').checked)
		{
			document.getElementById("gender1").innerHTML="";
		}
		else
		{
			document.getElementById("gender1").innerHTML="Please Select Gender";
		}
	}

	if(document.getElementById("list").value=="")
	{
		document.getElementById("list1").innerHTML="Please Select Country";
	}
	else
	{
		document.getElementById("list1").innerHTML="";
	}

	if(email == "")
	{
		document.getElementById("email1").innerHTML="Please Enter Email";
	}
	else
	{
		if(email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))
		{
			document.getElementById("email1").innerHTML="";   
		}
		else
		{
			document.getElementById("email").value="";
			document.getElementById("email1").innerHTML="Not valid Email Format";   
		}
	}

	if(phone == "")
	{
		document.getElementById("phone1").innerHTML="Please Enter Phone";
	}
	else
	{
		if(phone.length<10)
		{
			document.getElementById("phone1").innerHTML="Phone Number cannot be less than 10";  
		}
		else
		{
			if(phone.match(/^[0-9]+$/))
			{
				document.getElementById("phone1").innerHTML="";   
			}
			else
			{
				document.getElementById("phone").value="";
				document.getElementById("phone1").innerHTML="Number only";   
			}
		}
	}

	if(password1 == "")
	{
		document.getElementById("password11").innerHTML="Please Enter Password";
	}
	else
	{
		if(password1.length<8)
		{
			document.getElementById("password11").innerHTML="Password cannot be less than 8";
		}
		else
		{
			if(password1.match(/^[A-Za-z0-9@_.]+$/))
			{
				document.getElementById("password11").innerHTML="";   
			}
			else
			{
				document.getElementById("password1").value="";
				document.getElementById("password11").innerHTML="Must be only @ OR _ OR . OR Number OR Character";   
			}
		}
	}

	if(password2 == "")
	{
		document.getElementById("password22").innerHTML="Please Enter Password";
	}
	else
	{
		if(password2.length<8)
		{
			document.getElementById("password22").innerHTML="Password cannot be less than 8";
		}
		else
		{
			if(password2.match(/^[A-Za-z0-9@_.]+$/))
			{
				document.getElementById("password22").innerHTML="";   
			}
			else
			{
				document.getElementById("password2").value="";
				document.getElementById("password22").innerHTML="Must be only @ OR _ OR . OR Number OR Character";   
			}
		}
	}

	if(password1 != "" && password2 != "" && password1.length>=8 && password2.length>=8 && password1.match(/^[A-Za-z0-9@_.]+$/) && password2.match(/^[A-Za-z0-9@_.]+$/))
	{
		if(password1 == password2)
		{
			document.getElementById("password11").innerHTML="";
			document.getElementById("password22").innerHTML="";
		}
		else
		{
			document.getElementById("password1").value="";
			document.getElementById("password2").value="";
			document.getElementById("password11").innerHTML="Password doesnot Match";
			document.getElementById("password22").innerHTML="Password doesnot Match";
		}
	}

	if(document.getElementById("agreecheck").checked)
	{
		document.getElementById("agreecheck1").innerHTML="";
	}
	else
	{
		document.getElementById("agreecheck1").innerHTML="Please Select CheckBox";
	}
}

$(document).ready(function() {

    var all_panels = $('.templatemo-accordion > li > ul').hide();

    $('.templatemo-accordion > li > a').click(function() {
        console.log('Hello world!');
        var target =  $(this).next();
        if(!target.hasClass('active')){
            all_panels.removeClass('active').slideUp();
            target.addClass('active').slideDown();
        }
      return false;
    });

    $('.product-links-wap a').click(function(){
      var this_src = $(this).children('img').attr('src');
      $('#product-detail').attr('src',this_src);
      return false;
    });

    $('#btn-minus').click(function(){
      var val = $("#var-value").html();
      val = (val=='1')?val:val-1;
      $("#var-value").html(val);
      $("#product-quanity").val(val);
      return false;
    });

    $('#btn-plus').click(function(){
      var val = $("#var-value").html();
      val++;
      $("#var-value").html(val);
      $("#product-quanity").val(val);
      return false;
    });
    
    $('.btn-size').click(function(){
      var this_val = $(this).html();
      $("#product-size").val(this_val);
      $(".btn-size").removeClass('btn-secondary');
      $(".btn-size").addClass('btn-success');
      $(this).removeClass('btn-success');
      $(this).addClass('btn-secondary');
      return false;
    });

});
