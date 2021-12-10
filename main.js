var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    if(content == "take my selfie") {
        console.log("taking selfie");
        speak();

    }
}

function speak(){
 var synth = window.speechSynthesis;
 speakdata = "taking your selfie in 5 seconds";
 var utter = new SpeechSynthesisUtterance(speakdata);
 synth.speak(utter);
 Webcam.attach(camera);
 setTimeout(function(){
     takesnap();
     save();
 },5000);}
 camera = document.getElementById("camera");
 Webcam.set({
     width:360,
     height:250,
     Image_format:"jpg",
     jpg_quality:90
 });
 function takesnap(){
   Webcam.snap(function(data_uri){
       document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
   })
 }
 function save(){
     link = document.getElementById("link");
     image = document.getElementById("selfie_image").src;
     link.href = image;
     link.click();

 }