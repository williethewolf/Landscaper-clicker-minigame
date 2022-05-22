//game variables

let money = 0;
let currentTool;
let upgradeTool =1;
let tools =[];

//Tool creation
const toolNames = ["Teeth","Rusty Scissors","Push Lawnmower","Battery-Powered Lawnmower","Team of starving students"]
const toolProfit = [1,5,50,100,250]
const toolCost = [0,5,25,250,500]

class Tool{
   constructor(name,profit,cost){
       this.name = name;
       this.profit = profit;
       this.cost = cost;
   } 
}

for(let i = 0; i<toolNames.length; i++){
    tools.push(new Tool(toolNames[i],toolProfit[i],toolCost[i]))
}
// HTML fetching

const cutButton = document.getElementById("cutButton")
const upgradeButton = document.getElementById("upgradeButton")
const currentToolDisplay = document.getElementById("current-tool")
const upgradeToolDisplay = document.getElementById("upgrade-tool")
const moneyDisplay = document.getElementById("money-display")

//Button actions
function cutGrassGrabCash(tool){
tool = currentTool
money += tool.profit
moneyDisplay.innerHTML = money;
console.log(money)
}

function buyTool(upgradeTool){
    if(money>upgradeTool){}
}

cutButton.addEventListener("click",()=>cutGrassGrabCash(currentTool))

//Setting up the game
currentTool=tools[0]

