let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
screenValue=" ";
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        // console.log('the value for button is',buttonText);
        if(buttonText=="X"){
            buttonText="*";
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText=="C"){
          screenValue = " ";
          screen.value=screenValue;
        }
        else if(buttonText=="="){
         screen.value=eval(screenValue);
        }
        else if(buttonText=="sin"){
            screenValue=Math.sin(x);
            screen.value=screenValue;
        }
        else if(buttonText=="cos"){
            screenValue=Math.cos(x);
            screen.value=screenValue;
        }
        else if(buttonText=="Del"){
            screenValue=screen.value.substr(0,screen.value.length-1);
            screen.value=screenValue;
        }
        else{
            screenValue+=buttonText;
            screen.value=screenValue
        }

    })
}