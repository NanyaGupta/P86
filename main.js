var canvas= new fabric.Canvas("myCanvas");

var playerX=10;
var playerY=10;

var blockImageHeight=30;
var blockImageWidth=30;

var playerObject="";
var blockImageObject="";

function playerUpload(){
    fabric.Img.fromURL("player.png",function(Img){
    playerObject=Img;
    playerObject.scaleToWidth(150);
    playerObject.scaleToHeigh(140);
    playerObject.set({
        top:playerY,
        left:playerX
    });
    canvas.add(playerObject);

});
}

function newImage(get_image){
    fabric.Img.fromURL(get_image,function(Img){
        blockImageObject=Img;
        blockImageObject.scaleToWidth(blockImageWidth);
        blockImageObject.scaleToHeigh(blockImageHeight);
        blockImageObject.set({
        top:playerY,
        left:playerX
    });
    canvas.add(blockImageObject);

});
}


