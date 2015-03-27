/**
 * Created by harvey on 15-3-27.
 */

var can, ctx, w, h;
var girPic = new Image();
var starPic = new Image();
var num = 60;
var starts = [];
var lastTime;
var deltaTime;

var switchy = false;
var life =0;
function init()
{
    can = document.getElementById("canvas");
    ctx = can.getContext("2d");
    w = can.height;
    h = can.height;

    document.addEventListener("mousemove", mousemove, false);

    girPic.src = "src/girl.jpg";
    starPic.src = "src/star.png";

    for (var i=0; i<num; i++)
    {
        var obj = new starObj();
        starts.push(obj);
        starts[i].init();
    }

    lastTime = Date.now();
    gameloop();
}
document.body.onload = init;

function gameloop()
{

    window.requestAnimFrame(gameloop);
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    drawBackground();
    drawGirl();
    drawStarts();
    aliveUpdate();
}

function drawBackground()
{
    ctx.fillStyle = "#393550";
    ctx.fillRect(0, 0, w, h);
}

function drawGirl(){
    ctx.drawImage(girPic, 100, 150, 600, 300)
}

function mousemove(e)
{
    if(e.offsetX || e.layerX)
    {
        var px = e.offsetX == undefined ? e.layerX : e.offsetX;
        var py = e.offsetY == undefined ? e.layerY : e.offsetY;
        //out switchy=false; in switchy=true

        if(px>100 && px<700 && py>150 && py<450){
            switchy = true;
        }else{
            switchy = false;
        }
    }

}