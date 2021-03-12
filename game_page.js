var player1_name = localStorage.getItem("name1");
var player2_name = localStorage.getItem("name2");

score_1 = 0;
score_2 = 0;

document.getElementById("player1_name").innerHTML= player1_name + " : " ;
document.getElementById("player2_name").innerHTML= player2_name + " : " ;

document.getElementById("player1_score").innerHTML = score_1;
document.getElementById("player2_score").innerHTML = score_2;

document.getElementById("player_q").innerHTML = "Question turn - " + player1_name;
document.getElementById("player_a").innerHTML = "Answer turn - " + player2_name;

function send(){
    getWord = document.getElementById("word").value;
    word = getWord.toLowerCase();
    
    var first_char = word.charAt(1);
    console.log(first_char);

    var mid = Math.floor(word.length / 2);
    mid_char = word.charAt(mid);
    console.log(mid_char);

    var end = word.length - 1;
    end_char = word.charAt(end);
    console.log (end_char);


    R1 = word.replace(first_char, "_");
    R_mid = R1.replace(mid_char, "_");
    R_end = R_mid.replace(end_char, "_");

    console.log(R_end);

    question_word = "<h4 id = 'word_display' > Q. " + R_end + "</h4>";
    input_box = "<br> Answer : <input type= 'text' id = 'input_checkbox' >";
    check_button = "<br><br> <button class= 'btn btn-info' onclick = 'check()' > Check </button> ";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

question_turn = "player_1";
answer_turn = "player_2";

function check(){
    get_ans = document.getElementById("input_checkbox").value;
    answer = get_ans.toLowerCase();
    console.log(answer);

    if (answer == word){
        if(answer_turn == "player_1"){
            score_1 = score_1 + 1;
            document.getElementById("player1_score").innerHTML = score_1;
        
        }
        else { 
            score_2 = score_2 + 1;
            document.getElementById("player2_score").innerHTML = score_2;
        }
        
    }

    if (question_turn == "player_1"){
        question_turn = "player_2";
        document.getElementById("player_q").innerHTML = "Question Turn = " + player2_name;
    }

    else {
        question_turn = "player_1";
        document.getElementById("player_q").innerHTML = "Question Turn = " + player1_name;
    }

    if (answer_turn == "player_1"){
        answer_turn = "player_2";
        document.getElementById("player_a").innerHTML = "Answer Turn = " + player2_name;
    }

    else {
        answer_turn = "player_1";
        document.getElementById("player_a").innerHTML = "Answer Turn = " + player1_name;
    }

    document.getElementById("output").innerHTML = " ";
}