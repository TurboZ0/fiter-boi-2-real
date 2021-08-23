

function preload() {
 
}


function setup() {
    canvas= createCanvas(500, 500);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    
    posenet=ml5.poseNet(video, foundresult);
    posenet.on("pose", poseing); 
}
function foundresult() {
    console.log("Posenet has finally been loaded");
}
function poseing(onresult) {
    console.log(onresult);
    console.log(onresult[0].pose.nose.x);
    console.log(onresult[0].pose.nose.y);
    
    noseX=onresult[0].pose.nose.x;
    noseY=onresult[0].pose.nose.y;

    }


function draw() {
    image(video, 0, 0, 500, 500);

}