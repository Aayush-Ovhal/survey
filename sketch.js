var email,database;
var F1, F2, F3, F4;
var canvas;
var userCount;
var formCounter = 1;

function setup(){
    database = firebase.database();
    canvas = createCanvas(500,350);
    users = new Users();

    email = new Id();
    F1 = new form1();
    F2 = new form2();
    F3 = new form3();
    F4 = new form4();

    next = createButton("next>>");
    next.position(20,320);

    next.mousePressed(nextForm);

    finish = createButton("FINISH");
    finish.position(90,320);

    finish.mousePressed(form4hide);
    finish.hide();

}

function draw(){
    background(0,0,255);

    fill("red");
    rectMode(CENTER);
    rect(250,40,500,70);

    fill(255);
    textSize(50);
    textFont("georgia");
    text("SURVEY",150,60);

    if(formCounter === 1){
        email.display();
    } else if(formCounter === 2){
        email.hide();
        F1.display();
    } else if(formCounter === 3){
        F1.hide();
        F2.display();
    } else if(formCounter === 4){
        F2.hide();
        F3.display();
    } else if(formCounter === 5){
        F3.hide();
        F4.display();
    }else if(formCounter === 6){
        F4.hide();
        next.hide();
        finish.show();
    }

}

function nextForm(){
    formCounter++;
}

function form4hide(){
    F4.hide();
    email.display();
}