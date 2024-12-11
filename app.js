
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
  theScreen.append(thePinNumber);
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
    submitButton.addEventListener('click', 
      
      
      // Function when a submit button click.
      () => {
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

    
    theScreen.append(enterAmount);
    mainScreen.append(submitButton);

}


// Cash Transactions Function
function cashTransaction () {
  const cashTRANS = document.createElement('img');
  const cashTRANSBtn = document.createElement('button');

  cashTRANS.setAttribute('class', "imgClass");

  cashTRANS.style.backgroundImage = 'url("https://media.cheggcdn.com/media/c4f/c4f5cf23-2f90-4f7b-be71-d6ba5dc5144a/phpujMeC2")';


  
  theScreen.append(cashTRANS);
  

  

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

}


// Online Banking Function
function onlineBanking () {

}


// other Services Function
function otherServices () {
    
          //theScreen.innerHTML = "Thank you!";
          window.location.reload;
        }


