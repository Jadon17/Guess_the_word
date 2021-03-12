function adduser(){
    var player_1_name = document.getElementById("player_1_name_input").value ;
    var player_2_name = document.getElementById("player_2_name_input").value;

    localStorage.setItem("name1" , player_1_name);
    localStorage.setItem("name2" , player_2_name);

    window.location = "game_page.html";
}
