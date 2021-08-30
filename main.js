var SpeechRecognition = window.webkitSpeechRecognition;
var sra = new SpeechRecognition();

function begin(){
    document.getElementById("textBox").innerHTML = "";
    sra.start();
}
 sra.onresult = 
 function (event){
console.log(event);
var content = event.results[0][0].transcript;
console.log(content);

document.getElementById("textBox").innerHTML = content;
if(content == "take my selfie"){
    talk();
}


 }

 function talk(){
    var synth = window.speechSynthesis; 
    speak_data = "Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data); 
    synth.speak(utterThis);
    Webcam.attach(camera);
    
    setTimeout(pic, 5000);
    function pic(){
        take_photo();
        save();
    }
 }

function take_photo(){
    Webcam.snap(smell);
    function smell(data_uri){
        document.getElementById("result").innerHTML = '<img id="YAY" src="'+data_uri+'">'; 
            }
}

 camera = document.getElementById("cam");
 Webcam.set({
width : 360,
height : 300,
image_format : 'jpg',
jpg_quality : 100
 });
 
function save(){
    var link = document.getElementById("link_1.0");
    var image = document.getElementById("YAY").src;
    link.href= image;
    link.click();
}