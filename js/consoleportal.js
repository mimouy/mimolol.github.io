          $(function(){

            if(Cookies.get("inside")){
              showPage();
            }else{
              $("#body").addClass("portail");
              $("#loader").show();
            }
            
    
            $("#Input").focus()
            $(document).click(function() { $("#Input").focus() });
    
            var name = Cookies.get("nameCookie");
            if(name!=undefined&&name!=null&&name!=""){// Si le nom est déjà renseigné
              
              $("#username").html(name);
              //addLine("<p>> Type help to see a list of commands</p>");
              addLine("<p>Welcome to my portfolio !</p>");
              addLine("<p>Oh it's "+name+" ! (☞ﾟヮﾟ)☞ How have you been ?</p>");
              addLine("<p>You can enter by typing 'Enter'</p>")
    
    
            }else{
                addLine("<p>Welcome to my portfolio !</p>");
                addLine("<p>Is it the first time you come here ? (Or I just don't remember you... ¯\\_(ツ)_/¯ ).</p>");
                addLine("<p>What's your name ?</p>");
            }
    
    
            function addLine(str){
    
                $("#dialog").append(str)
            }
    
            function enter(text){
                if(text!=""){
                var response = ManageInput(text);
    
                var str = "<p>> "+text+response+"</p>";
                addLine(str);
                }
    
            }
    
            function ManageInput(text){
                
                if(name==undefined||name==null||name=="")
                { 
                    if(text.lenght>20){return "</br>I'm afraid this name is a little bit too long :/ can you give me another one ?"}
                    else{
                        Cookies.set("nameCookie",text,{ expires : 30 });
                        name = Cookies.get("nameCookie");
                        $("#username").html(name);
                        return "</br>Nice to meet you "+name+" !</br>You can enter by typing 'Enter'.";
                    }
    
                }
                else if(text=="enter"||text=="Enter")
                {
                    Cookies.set("inside",true, { expires : 1 });
                    var myVar = setTimeout(showPage, 1250);
                    return "</br>Welcome ! :D"; //enter the portfolio
                }
                else{
                    return "</br>This function is not recognized.";
                }
            }
    
            $(document).on('keypress',function(e) {
                if(e.which == 13) {
                    var temp = $("#Input").val()
                    if(temp!=undefined&&temp!=""&&temp!=null){
                        enter(temp);
                        $("#Input").val("")
                    }
    
                }
            });
    
            function showPage() {
            document.getElementById("loader").style.display = "none";
            document.getElementById("content").style.display = "block";
            $("#body").removeClass('portail');
            }
          })
