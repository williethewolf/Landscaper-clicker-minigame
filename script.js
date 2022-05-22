let money = 0;
let currentTool;
let upgradeTool;
const tools = ["Teeth","Rusty Scissors","Push Lawnmower","Battery-Powered Lawnmower","Team of starving students"]
const toolProfit = [1,5,50,100,250]
const toolCost = [0,5,25,250,500]
const cutButton = document.getElementById("cutButton")
const upgradeButton = document.getElementById("upgradeButton")
const currentToolDisplay =document.getElementById("current-tool")
const upgradeToolDisplay =document.getElementById("upgrade-tool")

