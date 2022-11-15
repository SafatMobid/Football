"use strict";
let teams = [
    { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
    { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
    { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
    { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" }
];

window.onload = function () {
    teamslistDropdown();
    const infoBtn = document.getElementById("teaminfoBtn");
    infoBtn.onclick = displayInfo;

}


function teamslistDropdown() {
    const teamList = document.getElementById("teamList")
    let blankTeam = document.createElement("option");
    blankTeam.value = "";
    blankTeam.textContent = "--- Select A Team ---"
    teamList.appendChild(blankTeam)

    let teamsLength = teams.length
    for (let i = 0; i < teamsLength; i++) {
        let tName = teams[i].name
        let tCode = teams[i].code
        let tPlays = teams[i].plays

        let option = document.createElement("option");
        option.value = tCode;
        option.textContent = tName;

        /* let option = new Option (tName, tCode); //+ tCode); can add this to bring both name and code to menu 
         */
        teamList.appendChild(option);
    }
}

function displayInfo() {
    const teamList = document.getElementById("teamList")
    let teamInfo = document.getElementById("teamInfo")

    for (let i = 0; i < teams.length; i++) {
 
        if (teamList.value == teams[i].code) {
            let tName = teams[i].name
            let tCode = teams[i].code
            let tPlays = teams[i].plays
            teamInfo.innerHTML = "You selected " + tName + "( " + tCode + " )" + " who plays in " + tPlays
        }
        
    }
    return false;
}

/* option.value = "blankTeam" = "";
else if (selectedValue == "blankTeam"){
    document.getElementById("teamInfo").innerHTML = "";
}
else if (selectedValue == "blankTeam")
{teamInfo.innerHTML = ""}

let blankTeam = document.createElement("blankTeam");
blankTeam.innerHTML = "--- Select A Team ---";
teamList.appendChild(blankTeam);

document.getElementById("") */