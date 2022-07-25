/// <reference path="../typings/globals/jquery/index.d.ts" />
let logo = document.querySelector("#home h1");
let homeImage = document.querySelector("#home .seifImage");
let homeDesc = document.querySelector("#home .description h2");
let iconAnimationDown = document.querySelector(".scroll-down i");
let aboutSec = document.querySelector("#about");
let navbar = document.querySelector(".navbar");
let aboutImg = document.querySelector(".aboutSec .image");
let aboutImgDes = document.querySelector(".aboutSec .imageDesc");

let skillsSec = document.querySelector("#skills");
let skillsdescLeft = document.querySelector(".skiilsSec .skillsdescLeft");
let skillsdescRight = document.querySelector(".skiilsSec .skillsdescRight");


// ----------------- start Loading ----------------------

$(document).ready(function(){
  $('#loading').fadeOut(2000, function(){
      $('body').css('overflow-y','visible')
  })
})

// ----------------- End Loading ----------------------

// ----------------- start Header ----------------------


VANTA.HALO({
  el: "#home",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  amplitudeFactor: 0.90,
  xOffset: 0.25,
  yOffset: -0.04,
  size: 2.10
})


var typed = new Typed("#home .typing", {
  strings: ["Front End Web Developer", "Freelancer"],
  typeSpeed: 130,
  backDelay: 2000,
  backSpeed: 60,
  smartBackspace: true,
  loop: true,
});


setTimeout(() => {

  homeImage.style.display = "block"
  homeDesc.style.display = "block"
  logo.style.display = "block"
  iconAnimationDown.style.display = "block"
  homeImage.classList.add("animate__fadeInRightBig", "d-block")
  homeDesc.classList.add("animate__fadeInLeftBig")
  logo.classList.add("animate__bounce")

}, 200)
// ----------------- End Header ----------------------
// ----------------- start about ----------------------
window.addEventListener("scroll",()=>{
  // about sec
  console.log(aboutSec.offsetTop);

  console.log(scrollY);
  if(aboutSec.offsetTop-100<scrollY)
  {
    aboutImg.style.visibility = "visible "
    aboutImgDes.style.visibility = "visible"
    aboutImgDes.classList.add("animate__flipInX")
    aboutImg.classList.add("animate__fadeInUpBig")
    navbar.style.setProperty('background-color', '#171e48', 'important');
  }
  else
  {
    navbar.style.setProperty('background-color', 'transparent', 'important');
    
  }
   // skills sec
   if(skillsSec.offsetTop<scrollY)
   {
    skillsdescLeft.style.visibility = "visible "
    skillsdescRight.style.visibility = "visible "
    skillsdescLeft.classList.add("animate__lightSpeedInLeft")
    skillsdescRight.classList.add("animate__lightSpeedInRight")
   }
})
var typed = new Typed(".aboutSec .typing", {
  strings: ["Front End Web Developer", "Freelancer"],
  typeSpeed: 130,
  backDelay: 2000,
  backSpeed: 60,
  smartBackspace: true,
  loop: true,
});

// ----------------- End about ----------------------
// ----------------- Start Skills ----------------------

VANTA.BIRDS({
  el: "#skills",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00
})

// ----------------- End Skills ----------------------


// ----------------- Start Contact ----------------------



// when user press on send message button...

$('#sendMessage').click(function(){
  sendValidMessage();
})

// validation message...

function sendValidMessage(){
  if(isInputEmpty() != true && validUserName() == true && validUserEmail() == true && validTextMessage() == true)
  {
      $('#alertSend').html('The message was sent Successfully');
      $('#alertSend').css({'display':'block' , 'color':'green'});
      resetForm();
  }
  else if (isInputEmpty())
  {
      $('#alertSend').html('all fields are important.. You should fill them correctly');
      $('#alertSend').css({'display':'block' , 'color':'red'});
      resetForm();
  }
  else if(validUserName() == false || validUserEmail() == false || validTextMessage() == false)
  {
      $('#alertSend').html('There are Invalid fields.. You should fill them correctly');
      $('#alertSend').css({'display':'block' , 'color':'red'});
      resetForm();
  }
}


// ...check if inputs are empty...

let inputs = Array.from($('.form-control'));

function isInputEmpty(){
  for(var i = 0; i < inputs.length; i++){
      if(inputs[i].value == '')
      {
          return true;
      }
      else
      {
          return false;
      }
  }
}

// when user want to send a message...

if($('#name') != null){
  $('#name').on('input' , function(){
      validUserName();
  })
}

if($('#email') != null){
  $('#email').on('input' , function(){
      validUserEmail();
  })
}

if($('#message') != null){
  $('#message').on('input' , function(){
      validTextMessage();
  })
}


// Validation for form...

function validUserName(){
  let regexName = /^[A-Z][a-z- ]{2,15}$/;

  if(regexName.test($('#name').val()))
  {
      $('#name').addClass('is-valid');
      $('#name').removeClass('is-invalid');
      $('#alertName').css('display' , 'none');
      return true;
  }
  else
  {
      $('#name').addClass('is-invalid');
      $('#name').removeClass('is-valid');
      $('#alertName').css('display' , 'block');
      return false;
  }
}


function validUserEmail(){
  let regexEmail = /^[a-zA-Z0-9_]{3,15}(@[a-zA-Z0-9]{3,15}\.com)$/;

  if(regexEmail.test($('#email').val()))
  {
      $('#email').addClass('is-valid');
      $('#email').removeClass('is-invalid');
      $('#alertEmail').css('display' , 'none');
      return true;
  }
  else
  {
      $('#email').addClass('is-invalid');
      $('#email').removeClass('is-valid');
      $('#alertEmail').css('display' , 'block');
      return false;
  }
}


function validTextMessage(){
  let regexMsg = /^[a-zA-Z0-9- ]{1,150}$/;

  if(regexMsg.test($('#message').val()))
  {
      $('#message').addClass('is-valid');
      $('#message').removeClass('is-invalid');
      $('#alertMessage').css('display' , 'none');
      return true;
  }
  else
  {
      $('#message').addClass('is-invalid');
      $('#message').removeClass('is-valid');
      $('#alertMessage').css('display' , 'block');
      return false;
  }
}


// when user want to reset message form..

$('#reset').click(function(){
  resetForm();
})

//... reset Messages form...

function resetForm(){
  for(var i = 0; i < inputs.length; i++){
      inputs[i].value = '';
      inputs[i].classList.remove('is-valid');
      inputs[i].classList.remove('is-invalid');
      $('#alertName').css('display' , 'none');
      $('#alertEmail').css('display' , 'none');
      $('#alertMessage').css('display' , 'none');
  }

}

// ----------------- End Contact ----------------------
