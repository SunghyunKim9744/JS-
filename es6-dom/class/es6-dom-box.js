import DragBox from "./DragBox.js";
import ModalBox from "./ModalBox.js";
window.addEventListener("load",(e)=>{
    
    // 1. 객체를 넘겨주거나
    // let container = document.querySelector("#s1 .container");
    //  let dragBox = new DragBox(container);

    // 2. 객체를 선택하라고 하거나
    let dragBox = new DragBox("#s1 .container");
    
});

window.addEventListener("load",(e)=>{
    
   let section = document.querySelector("#s2");
   let alertButton = section.querySelector(".alert-button");

   //3
// let modalBox = new ModalBox();

   alertButton.onclick = (e)=>{
    let modalBox = new ModalBox();
    // let time = 0;
    // setTimeout(() => {
    //     modalBox.alert("he");
    //     console.log(time);
    // }, 100);
    modalBox.alert("he");
    //    2
    //    let modalBox = new ModalBox();
    //    alert("hello");
    //    modalBox.alert("he");
       
   }
    
});