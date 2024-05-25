let gameState = 'bush';
let storyText = '';
let buttons = [];
let sound;

let finalBtn = [
  { text: 'Go to the hill', action: () => { gameState = 'hill'; } },
  { text: 'Go to the riverside', action: () => { gameState = 'riverside'; } },
  { text: 'Go to the forest', action: () => { gameState = 'forest'; } }
]

let reStartBtn = [
  { text: 'Restart', action: () => { gameState = 'start'; } }
]

let gameStateSet = ["bush", "whale"];
let sceneDict = {}

function preload() {
  for(let i = 0; i<gameStateSet.length; i++){
    sceneDict[gameStateSet[i]] = loadImage("images/" + gameStateSet[i] + ".png");
  }
  sound = loadSound("music.mp3");
}

function setup() {
    createCanvas(800, 800);
    textSize(30);
    textAlign(CENTER, CENTER);
}

function draw() {
    background(255);
    fill(0);
    image(sceneDict[gameState], 0, 0);
    text(storyText, 0, -height/4, width, height);

    if (gameState === 'bush') {
        storyText = 'Lets have some fun.                                                            What was the scariest movie you saw as a child? \n Personally, I think it was Disneys version of Pinocchio. Remember how the whale swallows up poor Pinocchio. \n He thinks he will trapped in that enviroment his whole life. All you have to do is click the button below and you will be transported into the whales mouth. Come on it will be fun! \n This is something you have never experienced before. All you have to do is click the button and you can see how it feels to be Pinocchio...';
        buttons = [{ text: 'Click Here To Become Pinnochio', action: () => { gameState = 'whale'; } }];
    } else if (gameState === 'whale') {
        storyText = '';
        sound.play();
        buttons = []
        // buttons = [
        //     { text: 'Explore the bushes', action: () => { gameState = 'bush'; } },
        //     { text: 'follow the footprints', action: () => { gameState = 'footprints'; } },
        //     { text: 'climb the mountain', action: () => { gameState = 'mountain'; } }
        // ];
    } 
    // if (gameState == 'bush') {
    //   storyText = "You decide to take the left path. There is a narrow trail in the thicket of bushes, and you follow it forward, hoping to find a clue. You discover a set of footprints that seem to be human, and you decide to follow them.\n ";
    //   storyText += "You continue to move forward and eventually arrive at an open area, where you see three paths: \n one leading to the mountainous area, one leading to the riverbank, and one leading to a dense forest.";
    //   buttons = finalBtn;
    // } else if (gameState == "footprints"){
    //   storyText = "You decide to take the middle path. There are fresh animal footprints on the path, and you carefully follow them forward. Suddenly, you see a wolf hunting, and you find a cave where you hide until the wolf leaves. \n ";
    //   storyText += "You continue to move forward and eventually arrive at an open area, where you see three paths: \n one leading to the mountainous area, one leading to the riverbank, and one leading to a dense forest.";
    //   buttons = finalBtn;
    // } else if (gameState == "mountain"){
    //   storyText = "You decide to take the right path. The hill is not very high, but from the top, you can overlook the forest, hoping to find a way out. From the summit, you see a village in the distance and find a path leading down the mountain.\n ";
    //   storyText += "You continue to move forward and eventually arrive at an open area, where you see three paths: \n one leading to the mountainous area, one leading to the riverbank, and one leading to a dense forest.";
    //   buttons = finalBtn;
    // } 

    // if (gameState == 'hill') {
    //   storyText = "You follow the path leading to the mountainous area and eventually find a trail that leads you out of the forest and back home.";
    //   buttons = reStartBtn;
    // } else if (gameState == "riverside"){
    //   storyText = "You walk along the riverbank and discover a small boat. You decide to row downstream with the current and eventually return home.";
    //   buttons = reStartBtn;
    // } else if (gameState == "forest"){
    //   storyText = "You become lost in the forest and are unable to find your way home.";
    //   buttons = reStartBtn;
    // } 



    let yOffset = height - 200;
    for (let btn of buttons) {
        fill(202,10,10);
        rect(500 / 2 - 100, yOffset, 550, 70);
        fill(0);
        text(btn.text, width / 2, yOffset + 20);
        yOffset += 50;
    }
}

function mouseClicked() {
    let yOffset = height - 200;
    for (let i = 0; i < buttons.length; i++) {
        if (mouseX > width / 2 - 100 && mouseX < width / 2 + 100 && mouseY > yOffset && mouseY < yOffset + 40) {
            buttons[i].action();
        }
        yOffset += 50;
    }
}
