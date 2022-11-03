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
    teams.value = "TX";
}


function teamslistDropdown()
{
    const teamList = document.getElementById("teamList")
    
    for (let i = 0; i < teams.length; i++) 
    {
    let tName = teams[i].name
    let tCode = teams[i].code
    let tPlays = teams[i].plays

    
    
    let option = new Option (tName, tCode); //+ tCode); can add this to bring both name and code to menu 

    teamList.appendChild(option);
    }
}

function displayInfo()
{   
    let teamInfo = document.getElementById("teamInfo")
    
    for (let i = 0; i < teams.length; i++) 
    {
    let tName = teams[i].name
    let tCode = teams[i].code
    let tPlays = teams[i].plays
    let blankTeam = ""

    if (teamList.value == teamList[i].value) 
    {
        teamInfo.innerHTML = "You selected " + tName + "( " + tCode + " )" +  " who plays in " + tPlays

    }
    else if (teamList.value == blankTeam)
    {
        teamInfo.innerHTML = "Please pick a team"
    }
}
return false;
}