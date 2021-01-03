var ball;
var database
var position
function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red"
    database=firebase.database();
    var ref = database.ref('Position')
    ref.on("value",info)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-3,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(3,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-3);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+3);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref('Position').set({
        x : position.x +x,
        y : position.y +y
    })
    
}

function info(data) {
position=data.val();
ball.x = position.x
ball.y = position.y


}
