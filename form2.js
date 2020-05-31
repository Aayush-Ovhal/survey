class form2{

    constructor(){
 
     this.Q2 = createElement('h3');
     this.next = createButton("next>>")

     this.submit = createButton("SUBMIT");
     this.submit.position(200,300);

     this.info = createElement("h3");
     this.info.html("answer saved press next to proceed");
 
     this.option = createRadio();
     this.option.option("yes");
     this.option.option("no");
     this.option.style("width", "60px");
     this.option.position(20,230);

     this.Q2.hide();
    this.next.hide();
    this.option.hide();
    this.info.hide();
    this.submit.hide();
 
    }

    hide(){
        this.Q2.hide();
        this.next.hide();
        this.option.hide();
        this.submit.hide();
        this.info.hide();
    }
 
    display(){

       this.Q2.show();
       this.option.show();
       this.submit.show();
 
     this.Q2.html("2. Do you think the severity of recent hurricanes like Harvey and Irma is most likely the result of global climate change, or is it just the kind of severe weather events that happen from time to time?");
     this.Q2.position(20,80);
     this.Q2.size(450,100);

     this.submit.mousePressed(() => {
        users.ans2 = this.option.value();
        users.updateAns2();
        this.info.show();
        this.info.position(200,300);
        this.next.show();
    })

     this.next.mousePressed(() => {
         this.Q2.hide();
         this.option.hide();
     })
 
     this.next.position(20,320);
     this.next.style("background-color");
    }
 
 }