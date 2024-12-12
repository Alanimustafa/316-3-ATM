
// The Date Function
function getCurrentDate() {
  const now = new Date();
  return now.toLocaleDateString();
}

// The Time Function
function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString();
}

// Inserting date and time into the header
document.querySelector('.todayDate').textContent = `${getCurrentDate()}`;
document.querySelector('.currentTime').textContent = `${getCurrentTime()}`;



//-------------------------------------------------------------------------------


    const addToScreen = (info) => {
      theScreen.append(info)
    }
    const theValue = (evt) =>{
      addToScreen(evt.target.textContent)
    }




// Links to the ATM html elements
    let mainScreen = document.querySelector('.mainScreen');
    let theScreen = document.querySelector('.mainScreenText');


function theNumPad () {

}


// Enter pin Function
    function enterPinNumber () {

      
      let thePinNumber = document.createElement ('input');
      let pinSubmit = document.createElement('button');
      
      thePinNumber.setAttribute("class", "mainScreenText");
      pinSubmit.setAttribute("class", "btnCSS");

      thePinNumber.placeholder= "Enter PIN";
      thePinNumber.type="text";
      thePinNumber.style.background ="none";
      thePinNumber.style.marginTop ="1em";
      thePinNumber.style.border ="solid lightbule 2px";
      pinSubmit.textContent = "Confirme";
      pinSubmit.style.margin = "1em";
      pinSubmit.style.width = "40%";



    // Activating the Number Pad 
      const num0 = document.getElementById("number0");
      num0.addEventListener('click', ()=> {
        thePinNumber.value += num0.innerText;
      })

      const num1 = document.getElementById("number1");
      num1.addEventListener('click', ()=> {
        thePinNumber.value += num1.innerText;
      })

      const num2 = document.getElementById("number2");
      num2.addEventListener('click', ()=> {
        thePinNumber.value += num2.innerText;
      })

      const num3 = document.getElementById("number3");
      num3.addEventListener('click', ()=> {
        thePinNumber.value += num3.innerText;
      })

      const num4 = document.getElementById("number4");
      num4.addEventListener('click', ()=> {
        thePinNumber.value += num4.innerText;
      })

      const num5 = document.getElementById("number5");
      num5.addEventListener('click', ()=> {
        thePinNumber.value += num5.innerText;
      })

      const num6 = document.getElementById("number6");
      num6.addEventListener('click', ()=> {
        thePinNumber.value += num6.innerText;
      })

      const num7 = document.getElementById("number7");
      num7.addEventListener('click', ()=> {
        thePinNumber.value += num7.innerText;
      })

      const num8 = document.getElementById("number8");
      num8.addEventListener('click', ()=> {
        thePinNumber.value += num8.innerText;
      })

      const num9 = document.getElementById("number9");
      num9.addEventListener('click', ()=> {
        thePinNumber.value += num9.innerText;
      })


      const enterKey = document.getElementById("enterKey")
      enterKey.addEventListener("click", () => {
        thePinNumber.style.display = "none";
        pinSubmit.style.display = "none";        
      })

    //Appending the values to the input screen.
      theScreen.append(thePinNumber);

    //Appending the Submit button to the mainScreen.
      mainScreen.append(pinSubmit);


      pinSubmit.addEventListener('click', () => {
        thePinNumber.style.display = "none";
        pinSubmit.style.display = "none";
      });

    
      

    }
    enterPinNumber();

// Quick Withdrawal Functoin
    function withDrawal () {


        // The Function Variables.
        const functionLabel = document.querySelector('.mainScreenText');
        const enterAmount = document.createElement('input');
        const submitButton = document.createElement('button');



      // Assigning the Classes to the Divs
        functionLabel.textContent = "Quick Withdrawal";
        enterAmount.setAttribute("class", "mainScreenText");
        submitButton.setAttribute("class", "btnCSS");

      // The Submit Button
        submitButton.textContent = "Confirme"
        submitButton.style.margin = "1em"
        submitButton.style.width = "40%";
        submitButton.addEventListener('click', () => {
            submitButton.style.display = "none";
            

            const theReport = document.createElement ('div');
            const goHomeButton = document.createElement ('button');
            goHomeButton.setAttribute("class", "btnCSS");
            goHomeButton.textContent = "Home";
            goHomeButton.style.marginLeft = "100px;"
            goHomeButton.style.marginTop = "90px"
            goHomeButton.addEventListener('click', () => {
              theScreen.innerHTML = "Thank you!";
            })


            theReport.setAttribute("class", "mainScreenText");
            theReport.style.fontSize = "30px";
            theReport.textContent = enterAmount.value + " - has been withdrawaled.";
            theReport.style.marginTop = "1em";
            theScreen.append(theReport);
            theScreen.append(goHomeButton);
            
            
          }
        )

      // The Input field
        enterAmount.type="text";
        enterAmount.placeholder="$0.00";
        enterAmount.defaultValue = "$ ";
        enterAmount.style.background ="none";
        enterAmount.style.marginTop ="1em";
        enterAmount.style.border ="solid lightbule 2px";

        

        const num0 = document.getElementById("number0");
        num0.addEventListener('click', ()=> {
          enterAmount.value += num0.innerText;
        })
      
        const num1 = document.getElementById("number1");
        num1.addEventListener('click', ()=> {
          enterAmount.value += num1.innerText;
        })
      
        const num2 = document.getElementById("number2");
        num2.addEventListener('click', ()=> {
          enterAmount.value += num2.innerText;
        })
      
        const num3 = document.getElementById("number3");
        num3.addEventListener('click', ()=> {
          enterAmount.value += num3.innerText;
        })
      
        const num4 = document.getElementById("number4");
        num4.addEventListener('click', ()=> {
          enterAmount.value += num4.innerText;
        })
      
        const num5 = document.getElementById("number5");
        num5.addEventListener('click', ()=> {
          enterAmount.value += num5.innerText;
        })
      
        const num6 = document.getElementById("number6");
        num6.addEventListener('click', ()=> {
          enterAmount.value += num6.innerText;
        })
      
        const num7 = document.getElementById("number7");
        num7.addEventListener('click', ()=> {
          enterAmount.value += num7.innerText;
        })
      
        const num8 = document.getElementById("number8");
        num8.addEventListener('click', ()=> {
          enterAmount.value += num8.innerText;
        })
      
        const num9 = document.getElementById("number9");
        num9.addEventListener('click', ()=> {
          enterAmount.value += num9.innerText;
        })





        theScreen.append(enterAmount);
        mainScreen.append(submitButton);

    }


// Cash Transactions Function
    function cashTransaction () {
      const cashTRANS = document.createElement('img');
      

      cashTRANS.setAttribute('class', "imgClass");

      cashTRANS.style.backgroundImage = 'url("https://media.cheggcdn.com/media/c4f/c4f5cf23-2f90-4f7b-be71-d6ba5dc5144a/phpujMeC2")';
      
      cashTRANS.style.backgroundSize = "cover";
      
      cashTRANS.style.height ="99%";
      cashTRANS.style.width ="98%";
      cashTRANS.style.justifySelf ='center';




      
      mainScreen.append(cashTRANS);
      

      

    }


// Balance Statement Function
    function balanceStatement () {
      
      const balanceText = document.createElement('div');
      balanceText.setAttribute("class", "mainScreenText");
      balanceText.textContent = "Your current balance is $1,234";
      balanceText.style.fontSize = "40px"
      balanceText.style.marginTop= "150px"

      theScreen.append(balanceText);
    }


// Payments Function
    function payments () {

      const paymentMainScreen = document.createElement('div');
      paymentMainScreen.setAttribute('class','mainScreen');

      const paymentH1 = document.createElement('h1');
      paymentH1.setAttribute("class", "paymentHeader");
      paymentH1.textContent="Payments";
      paymentH1.style.textAlign = 'center';
      paymentH1.style.color = "white";

      const paymentImg = document.createElement('img');
      paymentImg.setAttribute("class", "paymentImg");
      paymentImg.style.backgroundImage = 'url("https://media.tenor.com/amJXxb_H62oAAAAM/baboon-office.gif")';
      paymentImg.style.backgroundSize = "cover";
      paymentImg.style.width = "99%";
      paymentImg.style.height = "80%";
      paymentImg.style.justifySelf = 'cente';

      paymentMainScreen.style.backgroundImage='url("https://media.istockphoto.com/id/1388657825/vector/futuristic-glowing-credit-card-on-a-blue-background-hologram-stock-vector.jpg?s=612x612&w=0&k=20&c=Z4wyUo6Oyggnk2aJ-PDcqgijQVT7LEv_5rXACdrkTcw=")';
      
      paymentMainScreen.style.width = "100%";
      paymentMainScreen.style.height = "100%";
      paymentMainScreen.color = "White";
      paymentMainScreen.fontSize = "30px;"
      

      paymentMainScreen.append(paymentH1);
      paymentMainScreen.append(paymentImg);
      mainScreen.append(paymentMainScreen);
      

    }


// Online Banking Function
    function atmHelp () {
      const helpMainScreen = document.createElement('div');
      helpMainScreen.setAttribute('class','mainScreen');

      const needHelpHeader = document.createElement('h1');
      needHelpHeader.setAttribute("class", "needHelpText");

      const helpText = document.createElement('pre');
      helpText.setAttribute("class", "helpText");

      needHelpHeader.style.color = 'White';
      needHelpHeader.style.size = "30px";
      needHelpHeader.style.fontWeight = "bold";
      needHelpHeader.textContent = "How to Start?";

      helpText.style.color = 'White';
      helpText.style.size = "30px";
      helpText.style.fontWeight = "bold";
      helpText.textContent = `   This device has a security device on the card slot
   Please shield your hand when entering your PIN
   Please enter your PIN
   One moment please
   Choose from: MyCash – Cash withdrawal – Account balance – MiniStatement – Funds Transfer – Prepay top up - Pay a bill - More services
   Withdrawal from which account?
   Select or enter an amount to withdraw
   Select continue to confirm this withdrawal – Choose from: Continue with ?`;
      helpText.style.fontSize = "30px"

      
      mainScreen.append(needHelpHeader);
      mainScreen.append(helpText);
    }


// other Services Function
    function otherServices () {
        
              //theScreen.innerHTML = "Thank you!";
              window.location.reload;
            }


