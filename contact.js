//first name input
const FnameCont = document.querySelector(".name");
const Fname = document.getElementById("First-Name");

//last name input and conttener
const LnameCont = document.querySelector(".last-name");
const Lname = document.getElementById("last-Name2");

//email input and continer
const emailCont = document.querySelector(".second-section");
const email = document.getElementById("email");

//cheack box and continer
const radioContiner = document.querySelector(".third-section");
const radio1 = document.getElementById("unique1");
const radio2 = document.getElementById("unique");
const query1 = document.querySelector(".query1");
const query2 = document.querySelector(".query2");

//textArea box and container
const Message = document.getElementById("Message");
const messageCont = document.querySelector(".fouth-section");

//box cheacker
const boxCheker = document.querySelector(".ch-all");
const checkbox = document.getElementById("checkbox");


//submit button
const submit = document.getElementById("butt");


//function for creat element
function FildReq(countainer, input){
  let p = document.createElement("p");
  p.className = "p1";
  p.innerHTML = "This field is required";
  countainer.appendChild(p)
  input.style.border = "1px solid red"
}

function emailErrorState(EmailCountainer, EmailInput){
  let pEmail = document.createElement("p");
  pEmail.className = "p2";
  pEmail.innerHTML = "Please enter a valid email address";
  EmailCountainer.appendChild(pEmail)
  EmailInput.style.border = "1px solid red"
}

function radioError(radioContiner){
  let pRadio = document.createElement("p");
  pRadio.className = "p3";
  pRadio.innerHTML = "Please select a query type";
  radioContiner.appendChild(pRadio)
}

function cheackBoxError(checkBoxCont){
  let pBox = document.createElement("p");
  pBox.className = "p4";
  pBox.innerHTML = "To submit this form please consent to being contacted";
  boxCheker.appendChild(pBox)
  
}

//
let isCreateEl1 = false;
let isCreateEl2 = false;
let isCreateEl3 = false;
let isCreateEl4 = false;
let isCreateEl5 = false;
let isCreateEl6 = false;


submit.addEventListener("click", function(){
  // input vallues
  let firstNInput = Fname.value;
  let lasttNInput = Lname.value;
  let emailInput = email.value;
  let textArea = Message.value;
  
  //ajust error
  if(/\w/g.test(firstNInput)){
    if(isCreateEl1){
      FnameCont.removeChild(FnameCont.lastElementChild)
      Fname.style.border = "0.1px solid var(--Green)"
      isCreateEl1 = false;
    }
  }

  if(/\w/g.test(lasttNInput)){
    if(isCreateEl2){
      LnameCont.removeChild(LnameCont.lastElementChild)
      Lname.style.border = "0.1px solid var(--Green)"
      isCreateEl2 = false
    }
  }

  if(/@/.test(emailInput)){
    if(isCreateEl3){
      emailCont.removeChild(emailCont.lastElementChild)
      email.style.border = "0.1px solid var(--Green)"
      isCreateEl3 = false
    }
  }

    
    if(radio1.checked || radio2.checked){
      if(isCreateEl4){
        radioContiner.removeChild(radioContiner.lastElementChild);
        isCreateEl4 = false;
      }
    }

    if(/\w/g.test(textArea)){
      if(isCreateEl5){
        messageCont.removeChild(messageCont.lastElementChild)
        Message.style.border = "0.1px solid var(--Green)"
        isCreateEl5 = false
      }
    }
    checkbox.checked
    if(checkbox.checked){
      if(isCreateEl6){
        boxCheker.removeChild(boxCheker.lastElementChild);
        isCreateEl6 = false;
      }
    }

  //crate elemnt of error
  if(firstNInput === ""){
    if(!isCreateEl1){
      FildReq(FnameCont,Fname)
      isCreateEl1 = true;
    }
  }

  if(lasttNInput === ""){
    if(!isCreateEl2){
      FildReq(LnameCont,Lname)
      isCreateEl2 = true;
    }
  }

  if(!(/@/.test(emailInput))){
    if(!isCreateEl3){
      emailErrorState(emailCont,email)
      isCreateEl3 = true;
    }
  }

  
    if(!radio1.checked && !radio2.checked){
      if(!isCreateEl4){
        radioError(radioContiner)
        isCreateEl4 = true;
      }
    }

    if(textArea === ""){
      if(!isCreateEl5){
        emailErrorState(messageCont,Message)
        isCreateEl5 = true;
      }
    }

    checkbox
    if(!checkbox.checked){
      if(!isCreateEl6){
        cheackBoxError(boxCheker)
        isCreateEl6 = true;
      }
    }
  
})


