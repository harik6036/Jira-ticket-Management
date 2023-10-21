//first we are creating modal when we used to click add btn.....
// const shortid = require('shortid');
// var shortid = require('shortid');
const addbtn = document.querySelector(".add-btn");
let addflag = false;
let removeFlag=false;

// let lockActive=document.querySelector(".lock-button");
let maincont=document.querySelector(".main-cont");
let removeBtn=document.querySelector(".remove-btn");
let Modalcont = document.querySelector(".modal-cont");

let textArea=document.querySelector(".textarea-cont");

let priorityColor=document.querySelectorAll(".priority-color");

let lock="fa-lock";
let unlock="fa-lock-open"

let colors=["lightpink","lightgreen","lightblue","black"];

let ModalPrioritycolor=colors[0];




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
})

  Modalcont.addEventListener("keydown",(e)=>{

    let key=e.key;  //when  we used it directly, it was giving an error....
    if((key)=="Shift")
{

    createTicket(ModalPrioritycolor,textArea.value,shortid());
    Modalcont.style.display = "none";
    addflag=false;
    textArea.value="";




}
})

removeBtn.addEventListener("click",(e)=>{

    removeFlag=!removeFlag;



  })

  function createTicket(ticketColor,ticketTask, ticketid ) {
    let ticketcont = document.createElement("div");
    ticketcont.setAttribute("class", "ticket-cont");
    ticketcont.innerHTML = 
    
        `
        <div class="ticket-color " style="background-color:${ticketColor}"></div>
        <div class="ticket-id">${ticketid}</div>
        <div class="task-area">
           ${ticketTask}
        </div>

        <div class="lock-button">
  <i class="fa-solid fa-lock"></i>
        `
    ;
//use ` when we are writing inner html ...

    maincont.appendChild(ticketcont);


    handleremoval(ticketcont);
    handleLock(ticketcont);
    handlecolor(ticketcont);



  }



  function handleremoval(ticket){
    //remove task
    // console.log(removeFlag);


    if(removeFlag){
        ticket.remove();
    }

}

function handlecolor(ticket){
//  console.log(ModalPrioritycolor) 
// console.log(ticket.getAttribute("background-style"));
let ticketColor2=ticket.querySelector(".ticket-color");
ticketColor2.addEventListener('click',()=>{

    for(let i=0;i<colors.length;i++)

    {
        let idx=0;
 
        

        if(ModalPrioritycolor==colors[i])
        {
            // i=i%colors.length;
           
           
            ModalPrioritycolor=colors[i+1];
            let newcolor= ticket.ticketColor=ModalPrioritycolor;
            // console.log(ticket.ticketColor)
        //    console.log(ticket.ticketcont);
        ticketColor2.style.backgroundColor=ModalPrioritycolor;
        
            // console.log(newcolor);
            // console.log(ticketColor2.style.backgroundColor);
            break;



        }
        idx=idx++;


    }  

    
    

});
// function ChangeColor(){
//    
// }



    }




function handleLock(ticket){
    let ticketTaskarea=ticket.querySelector(".task-area")
    let ticketLockElement=ticket.querySelector(".lock-button");
    let ticketLock=ticketLockElement.children[0];
    ticketLock.addEventListener("click",(e)=>{

        if(ticketLock.classList.contains(lock)){

            ticketLock.classList.remove(lock);
            ticketLock.classList.add(unlock);
ticketTaskarea.setAttribute("contenteditable","true");

        }
        else{

            ticketLock.classList.remove(unlock);
            ticketLock.classList.add(lock);
ticketTaskarea.setAttribute("contenteditable",false);


        }

    })


}


//task need to be done-1 apply color filter in task
// 2-on the top when we click priority color, we should only get the task having same priority..
//implementation of remove button....when we clickon remove button and after that when we click on task , the task should be removed.
//implementation of lock button, when we click on lock button.
//we need to give value to our task and also generate unique id.
//when we single click on priority color, the task of that priority-color should be shown... and if we double click on priority -color, it should show all the task.


priorityColor.forEach((ColorElement,index)=>{
    ColorElement.addEventListener("click",(e)=>{

        priorityColor.forEach((colorEle)=>{
            colorEle.classList.remove("border")
        }
        )

        ColorElement.classList.add("border"); 
        ModalPrioritycolor  =ColorElement.classList[0];

    })
})


