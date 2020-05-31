class form1{

   constructor(){

    this.index = null;
    this.Email = null;

    this.Q1 = createElement('h3');
    this.next = createButton("next>>")

    this.info = createElement("h3");

    this.info.html("answer saved press next to proceed");

    this.option = createRadio();
    this.option.option("yes");
    this.option.option("no");
    this.option.style("width", "60px");
    this.option.position(20,230);

    this.submit = createButton("SUBMIT");

    this.Q1.hide();
    this.next.hide();
    this.option.hide();
     this.submit.hide();
    this.info.hide();


   }

   hide(){
    this.Q1.hide();
    this.next.hide();
    this.option.hide();
    this.submit.hide();
    this.info.hide();
   }

   display(){

       this.Q1.show();
       this.option.show();
       this.submit.show();

       this.submit.mousePressed(() =>{
        users.ans1 = this.option.value();
        users.updateAns1();
        this.info.show();
        this.info.position(200,300);
        this.next.show();
    })

    this.Q1.html("1. Climate Change(or Global Warming) is the idea that the Earths average tempature has been on the rise for the past 150 years and the worlds climate may change as a result: Do you think that Climate Change is happening?");
    this.Q1.position(20,80);
    this.Q1.size(450,100);

    this.submit.position(200,300);

    this.next.position(20,320);
    this.next.style("background-color");

   }

}