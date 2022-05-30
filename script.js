

// HTML fetching

const cutButton = document.getElementById("cutButton")
const upgradeButton = document.getElementById("upgradeButton")
const UIDisplay = document.getElementById("UI-panel")
const upgradeToolDisplay = document.getElementById("upgrade-tool")
const moneyDisplay = document.getElementById("money-display")
const toolImg = document.getElementById("tool-img")
const grassImg = document.getElementsByClassName("grass")
const waitTimer = document.getElementById("timer")

//HTML FETCHING FOR UI INTERACTION
const close = document.getElementById('close')
const restart = document.getElementById('restart')
const welcomeModal = document.getElementById('welcome-modal')
const victoryModal = document.getElementById('victory-modal')


//Setting up the game
let tools =[];
let toolIndex = 0;
let upgradeCounter=1;
let cutIndex=0;


//Tool creation
const toolNames = ["Teeth","Rusty Scissors","Push Lawnmower","Battery-Powered Lawnmower","Team of starving students"]
const toolProfit = [1,5,50,100,250]
const toolCost = [0,5,25,250,500]
const toolDelay = [1,0.75,0.50,0.25,0.05]
const toolImgs = ["./assets/tool-teeth.png","./assets/tool-shears.png","./assets/tool-manual-lawn-mower.png","./assets/tool-bat-lawnmower.png","./assets/tool-team.png"]

class Tool{
   constructor(name,profit,cost,delay,img){
       this.name = name;
       this.profit = profit;
       this.cost = cost;
       this.delay = delay;
       this.img = img;
   } 
}

for(let i = 0; i<toolNames.length; i++){
    tools.push(new Tool(toolNames[i],toolProfit[i],toolCost[i],toolDelay[i],toolImgs[i]))
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
moneyDisplay.innerHTML = `$${money}`;




//Button actions
function cutGrassGrabCash(tool){
    tool = currentTool
    cutGrassGrowGrass(tool)
    waitForTool(tool)
    
    
    }
    
    function buyTool(tool,upgradeTool){
       tool =currentTool
        if(money>=upgradeTool.cost && toolIndex<tools.length-1){
            money -= upgradeTool.cost
            toolIndex += 1
            upgradeCounter += 1 
            toolImg.src=tools[toolIndex].img
            moneyDisplay.innerHTML = `$${money}`
        }
    }
    
    const closeWelcomeModal = () => {welcomeModal.style.display = 'none'}
    const reload = () => {welcomeModal.style.display = 'none';window.location.reload(true)}
    
    cutButton.addEventListener("click",()=>cutGrassGrabCash(currentTool))
    upgradeButton.addEventListener("click",()=>buyTool(currentTool,upgradeTool))

    close.addEventListener('click', closeWelcomeModal)
    restart.addEventListener('click', reload)
    
    



//update screen
function updateScreen(){
    currentTool=tools[toolIndex]
    upgradeTool =tools[upgradeCounter]
    
    if(toolIndex<tools.length-1){
    upgradeToolDisplay.innerHTML = `Buy ${upgradeTool.name} for $${upgradeTool.cost}` 

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
    if(money>=1000 && toolIndex>=tools.length-1){
        victoryModal.style.display ='block'

    }
    


}

setInterval(updateScreen,100)

//growing grass

function waitForTool(tool){
    cutButton.disabled=true
    
    t = currentTool.delay*1000
    waitTimer.innerHTML = `wating for ${currentTool.delay}s...`
    setTimeout(function(){cutButton.disabled = false;waitTimer.innerHTML = "";},t);


}

function cutGrassGrowGrass(tool){
    isGrowingyooo= false
		
	if(grassImg.length-1>cutIndex){
		grassImg[cutIndex].classList.add("cut-grass")
		cutIndex++
	}else{
        //reset index and grow all patches
		cutIndex=0
        //Check for growth
        for(let i=0; i<grassImg.length; i++){
            if(grassImg[i].classList.contains("animate-growth")){
                isGrowingyooo = true;
            }else{
                isGrowingyooo = false;
            }
        }
        //if it's not growing
        if(!isGrowingyooo){
            for(let i=0; i<grassImg.length; i++){
                grassImg[i].classList.remove("cut-grass")
                grassImg[i].classList.add("animate-growth")
            }
        }else{
            for(let i=0; i<grassImg.length; i++){
               //brings grass lenght down and grows back
            grassImg[i].classList.remove("animate-growth") 
                void grassImg[i].offsetWidth
                grassImg[i].classList.remove("cut-grass")
                grassImg[i].classList.add("animate-growth")
                        
            }  
                money += tool.profit
        moneyDisplay.innerHTML = `$${money}`;
        }
	}
}
