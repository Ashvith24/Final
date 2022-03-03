var man, manSprite
var chest, chestSprite
var torch, torchSprite
var boss, bossSprite
var sword, swordSprite
var armor, armorSprite
var darkRoom, darkRoomBg
var startingRoom, startingRoomBg
var bossFight, bossFightBg
var bossHealth
var playerHealth


function preload(){
    man = loadImage('man.png');
    chest = loadImage('chest.png');
    torch = loadImage('torch.png');
    boss = loadImage('ogre.png');
    sword = loadImage('sword.png');
    armor = loadImage('armor.png');
    darkRoom = loadImage('darkroom.jpg');
    //startingRoom = loadImage('light background.jpg')
    bossFight = loadImage('boss fight.jpg')
    backgroundImg = loadImage('light background.jpg');
}

function setup() {
 createCanvas(windowWidth,windowHeight)
 manSprite = createSprite(200,150)
 manSprite.addImage(man)
 manSprite.scale = 0.6

 chestSprite = createSprite(350, 180)
 chestSprite.addImage(chest)
 chestSprite.scale = 0.3

 torchSprite = createImg('torch.png');
 torchSprite.position(225,75);
 torchSprite.size(100,100);
 //torchSprite.mouseClicked(changeBk);
 




}

function draw() {
    background(darkRoom)
    torchSprite.mouseClicked(changeBk);
    drawSprites()
}
function changeBk() {
    if(backgroundImg) 
    background(backgroundImg);
}
