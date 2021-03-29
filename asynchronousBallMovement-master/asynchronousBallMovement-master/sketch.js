var Ball1;
var database;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    Ball1 = createSprite(250,250,10,10);
    Ball1.shapeColor = "red";
    var ballposition = database.ref('Ball/position');
    ballposition.on("value",readPosition);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-4,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(4,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-4);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+4);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref('Ball/position').set({
        'x':position.x + x,
        'y':position.y + y
    })                                                                                                                                                                                                                                 
}

function readPosition(data){
    position = data.val();
    Ball1.x = position.x;
    Ball1.y = position.y;
}