//first we are creating modal when we used to click add btn.....

const addbtn = document.querySelector(".add-btn");
let addflag = false;
let maincont=document.querySelector(".main-cont")

let Modalcont = document.querySelector(".modal-cont");

let textArea=document.querySelector(".textarea-cont");



addbtn.addEventListener("click", (e) => {
  //we have to display modal and generate tickett...
  //IF ADDFAG becomes true then we have to display our modal.
  addflag = !addflag; //this will change value every time we click on add button.
  // console.log(addflag);
  if (addflag) {
    Modalcont.style.display = "flex";
  } else {
    Modalcont.style.display = "none";
  }


  Modalcont.addEventListener("keydown",(e)=>{

    let key=e.key;  //when  we used it directly, it was giving an error....
    if((key)=="Shift")
{

    createTicket();
    Modalcont.style.display = "none";
    addflag=false;
    textArea.value="";


}
})

  function createTicket() {
    let ticketcont = document.createElement("div");
    ticketcont.setAttribute("class", "ticket-cont");
    ticketcont.innerHTML = 
    
        `<div class="ticket-color"></div>
        <div class="ticket-id">Sample_id</div>
        <div class="task-area">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur,
            sit vitae. Iure, magnam ab.
        </div>`
    ;
//use ` when we are writing inner html ...

    maincont.appendChild(ticketcont);



  }
});


//task need to be done-1 apply color filter in task
// 2-on the top when we click priority color, we should only get the task having same priority..
//implementation of remove button....when we clickon remove button and after that when we click on task , the task should be removed.
//implementation of lock button, when we click on lock button

