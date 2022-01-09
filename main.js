function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.js.Soundclassifier('https://teachablemachine.withgoogle.com/models/V8XTaP3FF/model.json',modelReady);

}
function modelReady(){
    classifer.classify(gotResult);
}
function gotResult(error,results){
    console.log("gotResult");
}