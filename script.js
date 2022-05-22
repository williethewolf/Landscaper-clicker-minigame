let money = 0;
let currentTool =0;
let upgradeTool =1;
const tools = ["Teeth","Rusty Scissors","Push Lawnmower","Battery-Powered Lawnmower","Team of starving students"]
const toolProfit = [1,5,50,100,250]
const toolCost = [0,5,25,250,500]

// class Tool{
//    constructor(name,profit,cost){
//        this.name = name;
//        this.profit = profit;
//        this.cost = cost;
//    } 
// }
const cutButton = document.getElementById("cutButton")
const upgradeButton = document.getElementById("upgradeButton")
const currentToolDisplay = document.getElementById("current-tool")
const upgradeToolDisplay = document.getElementById("upgrade-tool")
const moneyDisplay = document.getElementById("money-display")

function cutGrassGrabCash(tool){
tool = currentTool
money += curentoolProfit[toolProfit[tool]] 
moneyDisplay.innerHTML = money;
console.log(money)

}

function buyTool(upgradeTool){
    if(money>upgradeTool)
}

cutButton.addEventListener("click",()=>cutGrassGrabCash(currentTool))

