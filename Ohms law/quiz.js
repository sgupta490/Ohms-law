function check() {

    var q1 = document.quiz.q1.value;
    var q2 = document.quiz.q2.value;
    var q3 = document.quiz.q3.value;
    var q4 = document.quiz.q4.value;
    var q5 = document.quiz.q5.value;
    var result=document.getElementById("result");
    var quiz=document.getElementById("quiz");
    var count = 0;
    if (q1 == "D") {
        count++;

    }

    if (q2 == "D") {
        count++;
    }
    if (q3 == "A") {
        count++;
    }
    if (q4 == "B") {
        count++;
    }
    if (q5 == "B") {
        count++;
    }
   
   quiz.style.display="none";
    
    if (count<=3){
        document.write("Your result is ",count," out of 5 . Keep learning");        
    }
    else{
        document.write("Your result is ",count," out of 5 . Its Awesome"); 
    }

}