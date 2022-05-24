

// HTML fetching

const cutButton = document.getElementById("cutButton")
const upgradeButton = document.getElementById("upgradeButton")
const UIDisplay = document.getElementById("UI-panel")
const upgradeToolDisplay = document.getElementById("upgrade-tool")
const moneyDisplay = document.getElementById("money-display")
const toolImg = document.getElementById("tool-img")
const grassImg = document.getElementsByClassName("grass")


//Setting up the game
let tools =[];
let toolIndex = 0;
let upgradeCounter=1;


//Tool creation
const toolNames = ["Teeth","Rusty Scissors","Push Lawnmower","Battery-Powered Lawnmower","Team of starving students"]
const toolProfit = [1,5,50,100,250]
const toolCost = [0,5,25,250,500]
const toolImgs = ["./assets/tool-teeth.png","./assets/tool-shears.png","./assets/tool-manual-lawn-mower.png","./assets/tool-bat-lawnmower.png","./assets/tool-team.png"]

class Tool{
   constructor(name,profit,cost,img){
       this.name = name;
       this.profit = profit;
       this.cost = cost;
       this.img = img;
   } 
}

for(let i = 0; i<toolNames.length; i++){
    tools.push(new Tool(toolNames[i],toolProfit[i],toolCost[i],toolImgs[i]))
}

let currentTool=tools[toolIndex]
let upgradeTool =tools[toolIndex+1]
toolImg.src=tools[toolIndex].img



//Set display elements for start
upgradeToolDisplay.innerHTML = `Buy ${upgradeTool.name} for${upgradeTool.cost}`
for(let i=0; i<grassImg.length; i++){
    grassImg[i].classList.add("animate-growth")
    }
//game variables

let money = 0;

//let currentTool =tools[upgradeCounter];



//Button actions
function cutGrassGrabCash(tool){
    tool = currentTool
    money += tool.profit
    moneyDisplay.innerHTML = money;
    // console.log(money)
    cutGrassGrowGrass()
    }
    
    function buyTool(tool,upgradeTool){
       tool =currentTool
        if(money>=upgradeTool.cost && toolIndex<tools.length-1){
            money -= upgradeTool.cost
            toolIndex += 1
            upgradeCounter += 1 
            toolImg.src=tools[toolIndex].img
            //console.log(upgradeTool.cost)

        }
    }
    
    cutButton.addEventListener("click",()=>cutGrassGrabCash(currentTool))
    upgradeButton.addEventListener("click",()=>buyTool(currentTool,upgradeTool))



//update screen
function updateScreen(){
    currentTool=tools[toolIndex]
    upgradeTool =tools[upgradeCounter]
    moneyDisplay.innerHTML = money;
    // console.log(toolIndex)
    // console.log(tools.length)
    if(toolIndex<tools.length-1){
    upgradeToolDisplay.innerHTML = `Buy ${upgradeTool.name} for ${upgradeTool.cost}` 

        if(money<upgradeTool.cost || toolIndex>tools.length){
            upgradeButton.disabled = true
        }
        else if(money >= upgradeTool.cost){
            upgradeButton.disabled = false
        }
    }else if(toolIndex>=tools.length-1){
        upgradeButton.disabled = true
        upgradeToolDisplay.innerHTML = `all upgrades purchased`
    }
    


}

setInterval(updateScreen,100)

//growing grass
function cutGrassGrowGrass(){
    isGrowingyooo= false
    console.log("grass should grow")
    for(let i=0; i<grassImg.length; i++){
        if(grassImg[i].classList.contains("animate-growth")){
            isGrowingyooo = true;
        }else{
            isGrowingyooo = false;
        }
    }
    if(!isGrowingyooo){
        for(let i=0; i<grassImg.length; i++){
        grassImg[i].classList.add("animate-growth")
        }
    }else{
        for(let i=0; i<grassImg.length; i++){
            console.log("bring it back to cero, then grow")
        grassImg[i].classList.remove("animate-growth") 
        void grassImg[i].offsetWidth
        grassImg[i].classList.add("animate-growth")
        }  
    }
    // var growth = 0;
    // var perMinute = 200;
    // var perSecond = perMinute / 60;
    // // for(i=0; i<grassImg.lengt; i++){
    // //     if(grassImg.style.width==0 && grassImg.style.width < 300){
    // //     setInterval(()=>{grassImg.style.width += Math.round(perSecond), 1000/perSecond})
    // //     }
    // // }
    // console.log(grassImg[1].width)
    // for(let i=0; i<grassImg.lengt; i++){
    //     console.log("grass should be cut")
    //     grassImg[i].style.width="0%"
    //     console.log(`grass is this long ${grassImg[1].style.width}`)
    //     if(grassImg[i].style.width.strip('%').parseInt()=="0" && grassImg[i].style.width.strip('%').parseInt() < 300){
    //     setInterval(()=>{grassImg[i].style.width=`${(grassImg[i].style.width.strip('%').parseInt() += Math.round(perSecond), 1000/perSecond)}`}
    //     )
    //     }
    // }
    
}

