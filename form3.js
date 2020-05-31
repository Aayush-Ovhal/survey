class form3{

    constructor(){
 
     this.Q3 = createElement('h3');
     this.next = createButton("next>>")

     this.submit = createButton("SUBMIT");
     this.submit.position(200,300);

     this.info = createElement("h3");
     this.info.html("answer saved press next to proceed");
 
     this.option = createRadio();
     this.option.option("not at all");
     this.option.option("a little");
     this.option.option("moderate amount");
     this.option.option("a great deal");
     this.option.style("width", "140px");
     this.option.position(20,230);

     this.Q3.hide();
    this.next.hide();
    this.option.hide();
    this.info.hide();
    this.submit.hide();
 
    }

    hide(){
    this.Q3.hide();
    this.next.hide();
    this.option.hide();
    this.info.hide();
    this.submit.hide();
    }

    display(){

       this.submit.show();
       this.Q3.show();
       this.option.show();
       this.next.show();
        
     this.Q3.html("3. How much do you think climate change will harm future generations?");
     this.Q3.position(20,80);
     this.Q3.size(450,100);

     this.submit.mousePressed(() => {
        users.ans3 = this.option.value();
        users.updateAns3();
        this.info.show();
        this.info.position(200,300);
    })

     this.next.mousePressed(() => {
         this.Q3.hide();
         this.option.hide();
     })
 
     this.next.position(20,320);
     this.next.style("background-color");
    }
 
 }