class ModalBox{
    #screen;
    #view;
    constructor(){
        // this.#screen = document.createElement("div");
        // this.#screen.style.background = "#000";
        // this.#screen.style.position = "fixed";
        // this.#screen.style.left = "0px";
        // this.#screen.style.top = "0px";
        // this.#screen.style.width = "100%";
        // this.#screen.style.height = "100%";
        // this.#screen.style.opacity = "0.6"; 

        //2.
        //this.#screen = `<div style="background: #000;position: fixed;left:0px;top:0px;width:100%;height: 100%;opacity: 0.6;"></div>`;
        //this.#view = `<div style="background:#fff;position:fixed;left:100px;top:100px;width:500px;height:300px;"></div>`;

        //3.
        // opacity로 트랜지션 한정하기.
        let screenHTML = `<div id="screen" style="background: #000;position: fixed;left:0px;top:0px;width:100%;height: 0%;opacity: 0;transition: opacity 5s;"></div>`;   
        let viewHTML = `<div id="view" style="background:#fff;position:fixed;left:100px;top:100px;width:500px;height:0px;"></div>`;

        document.body.insertAdjacentHTML("beforeend", screenHTML);
        let tag = document.querySelector("#screen");
        console.log(tag.style["transition"]);
        console.log(tag.style["opacity"]);

        this.#screen = document.querySelector("#screen");
        this.#view = document.querySelector("#view");
        console.log("생성자");

    }
    alert(message){
        console.log("alert");
        //3.
        // opacity만 트랜지션
        this.#screen.style.height="100%";
        this.#screen.style.opacity="0.6";
        
        // 2.
        // document.body.insertAdjacentHTML("beforeend", this.#screen);
        // document.body.insertAdjacentHTML("beforeend", this.#view);

        //document.body.append(this.#screen);
    }
    confirm(){

    }    
}

export default ModalBox;