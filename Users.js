class Users{

    constructor(){
        // https://console.firebase.google.com/u/1/project/quizs-7185c/database/quizs-7185c/data/~2F
        this.UID = 0;
        this.emailID = null;
        this.name = null;
        this.ans1 = null;
        this.ans2 = null;
        this.ans3 = null;
        this.ans4 = null;

    }

    getCount(){
        var UserCountRef = database.ref('userCount');

        UserCountRef.on("value",(data) => {
            userCount = data.val();
        })
    }

    updateCount(count){
      database.ref('/').update({
          userCount: count
      })
    }

    updateAns1(){
        var userIndex = "users/" + userCount;
        database.ref(userIndex).update({
            ans1: this.ans1,
        })
    }
    
    updateAns2(){
        var userIndex = "users/" + userCount;
        database.ref(userIndex).update({
            ans2: this.ans2,
        })
    }
    
    updateAns3(){
        var userIndex = "users/" + userCount;
        database.ref(userIndex).update({
            ans3: this.ans3,
        })
    }
    
    updateAns4(){
        var userIndex = "users/" + userCount;
        database.ref(userIndex).update({
            ans4: this.ans4,
        })
    }
    

    CreateRec(){
        var userIndex = "users/" + userCount;

        database.ref(userIndex).set({
            Id: this.UID,
            Name: this.name,
            emailID: this.emailID,
            ans1:"",
            ans2:"",
            ans3:"",
            ans4:""
        })
    }

}