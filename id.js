class Id{

    constructor(){

        this.IdInput = createInput(1);
        this.EmailInput = createInput("EMAIL Id");
        this.NMInput = createInput("Name");
        this.confirm = createButton("CONFIRM");
        this.title = createElement('h3');
        this.title1 = createElement('h3');

        this.IdInput.hide();
        this.EmailInput.hide();
        this.NMInput.hide();
        this.confirm.hide();
        this.title.hide();
        this.title1.hide();

        this.name = null;
        this.emailID = null;
        this.id = 1;
        this.title.html("Please enter your details!!");
    }   

    hide(){
        this.IdInput.hide();
        this.EmailInput.hide();
        this.confirm.hide();
        this.NMInput.hide();
        this.title.hide();
        this.title1.hide();
    }

    display(){
        
        this.IdInput.show();
        this.EmailInput.show();
        this.confirm.show();
        this.NMInput.show();
        this.title.show();

        this.NMInput.position(100,150);
        this.IdInput.position(100,120);
        this.EmailInput.position(100,180);
        this.confirm.position(304,200);
        this.title.position (100,220);
        this.title1.position (100,240);

        this.IdInput.size(200,20);
        this.confirm.size(80,26);
        this.confirm.style("background-color");

        users.getCount();

        this.IdInput.value(userCount);

        this.confirm.mousePressed(() => {

            this.id = this.IdInput.value();
            users.name = this.NMInput.value();
            users.emailID = this.EmailInput.value();
            users.UID = this.IdInput.value();
            users.CreateRec();

            this.IdInput.value(this.id);
            this.NMInput.value('Name');
            this.EmailInput.value('EmailID');
            this.title.html("Your details created successfully!!"); 
            this.title1.show();
            this.title1.html("Please press 'next' button"); 

        })

    }

}