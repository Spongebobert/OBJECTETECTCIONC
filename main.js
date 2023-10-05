

status1 ="";
objects = [];


function setup(){

canvas = createCanvas(380,380)
canvas.center()


video = createCapture(VIDEO)
video.size(380,380)
video.hide()
objectdetector = ml5.objectDetector('cocossd', modelloaded)
 document.getElementById("status").innerHTML = "Status : detecting objects ";
}

function modelloaded(){
    console.log("Model is loaded")
    status1 = true;
    objectdetector.detect(video,gotResults);
}

function gotResults(error,results){
 if(error){
    console.error(error)
 }
 else{
    console.log(results)
    objects = results;
 }
}

function draw(){
 image(video,0,0,380,380);
r = random(255);
g = random(255);
b = random(255);


 //fill("#040202")
 //text("dog 100%",70,70)
// noFill()
  //  stroke("#040202")
   // rect(50,50,300,360)

   // fill("#040202")
   // text("cat 100%",270, 60 )
   // noFill()
     //   stroke("#040202")
     //   rect(270, 50,250,350)
     
if(status1 != ""){
   for(i = 0; i < objects.length; i++){
      document.getElementById("status").innerHTML = "Status : detected objects ";
      document.getElementById("numberofobjects").innerHTML = " Number of Objects detected are"+ objects.length +" ";
     fill(r,g,b)
     percent = floor(objects[i].confidence * 100)
     text(objects[i].label + " "+ percent, objects[i].x, objects[i].y);
     noFill()
     stroke(r,g,b)
     rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
   }}
}

