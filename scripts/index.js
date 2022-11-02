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


function teamslistDropdown()
{
    const teamList = document.getElementById("teamList")
    for (let i = 0; i < teams.length; i++) 
    {
    let tName = teams[i].name
    let tCode = teams[i].code
    let tPlays = teams[i].plays

    let option = new Option (tName, tCode);

    teamList.appendChild(option);

    }
}