
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

// Links to the ATM html elements
let mainScreen = document.querySelector('.mainScreen');
let theScreen = document.querySelector('.mainScreenText');

// Enter pin Function
function enterPinNumber () {

}


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
      function imClicked () {
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

}


// Balance Statement Function
function balanceStatement () {

}


// Payments Function
function payments () {

}


// Online Banking Function
function onlineBanking () {

}


// other Services Function
function otherServices () {

}











// const openButton = document.getElementById('openButton');
// const closeButton = document.getElementById('closeButton');
// const modal = document.getElementById('modal');
// const overlay = document.getElementById('overlay');

// // Function to open the modal
// function openModal() {
//   modal.style.display = 'block';
//   overlay.style.display = 'block';
// }

// // Function to close the modal
// function closeModal() {
//   modal.style.display = 'none';
//   overlay.style.display = 'none';
// }

// // Add event listeners
// openButton.addEventListener('click', openModal);
// closeButton.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);