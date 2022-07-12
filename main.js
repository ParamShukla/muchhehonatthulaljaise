

function Take(){
    save("मुझे मूछों का फोटो दे दो.png");
}

function setup(){
    canvas = createCanvas(350,350);
    canvas.center();
Video = createCapture(VIDEO);
Video.size(350,350);
Video.hide();
poseyournet = ml5.poseNet(Video,modelloaded);
poseyournet.on("pose",gotposes);

}
function draw(){
    image(Video,0,0,350,350);
}


function modelloaded(){
    console.log("Pose Net jaag chuka Hai");
}

function gotposes(results){
 if (results.length>0){
    console.log(results);
    console.log("मूंछें x = "+results[0].pose.nose.x +" मूंछें y = "+results[0].pose.nose.y)
}
}