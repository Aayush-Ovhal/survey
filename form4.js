class form4{

    constructor(){
 
     this.Q4 = createElement('h3');
     this.submit = createButton("SUBMIT")
     this.submit.position(200,300);

    //  this.finish = createButton("FINISH");
    //  this.finish.position(90,320);

     this.info = createElement("h3");
     this.info.html("answer saved press next to proceed");
 
     this.option = createRadio();
     this.option.option("strongly support");
     this.option.option("somewhat support");
     this.option.option("stongly oppose");
     this.option.option("somewhat oppose");
     this.option.style("width", "140px");
     this.option.position(20,230);

     this.Q4.hide();
    this.submit.hide();
    this.option.hide();
    this.info.hide();
    //this.finish.hide();
 
    }

    hide(){
     this.Q4.hide();
    this.submit.hide();
    this.option.hide();
    this.info.hide();
    }
 
    display(){

       this.Q4.show();
       this.option.show();
       this.submit.show();
 
     this.Q4.html("4. Do you think we should fund more research into renewable energy sources, such as solar and wind power?");
     this.Q4.position(20,80);
     this.Q4.size(450,100);

     this.submit.mousePressed(() => {
         this.Q4.hide();
         this.option.hide();
         users.ans4 = this.option.value();
         users.updateAns4();
         this.info.show();
         this.info.position(200,300);
        // this.finish.show();
         userCount++
         users.updateCount(userCount);
     })

    //  this.finish.mousePressed(() =>{
    //      this.hide();
    //      email.display();
    //  })
 
     this.submit.style("background-color");
    }
 
 }