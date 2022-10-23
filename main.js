noseX=0;
noseY=0;
difference=0;
leftWristX=0;
rightWristX=0;

function setup() {
    video=createCapture(VIDEO);
    video.size(550, 500);
    
    canvas=createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#add8e6');
}

function modelLoaded() {
    console.log('model is loaded');
}

function gotPoses(results) {
    if (results.length>0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
}

function draw() {
    background('#ffc0c0');
    document.getElementById("square_side").innerHTML = "Width & Height of the square will be = " + difference + "px";
    fill('#566fff');
    stroke('#566fff');
    square(noseX, noseY, difference);
}