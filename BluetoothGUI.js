//globals
let blueToothCharacteristic;//this is a blu
let receivedValue = "";

let blueTooth;
let isConnected = false;


var millisecondTimerStart;


var l=1;
var value;


function setup() {

  createCanvas(windowWidth, windowHeight);

  // Create a p5ble class
  console.log("setting up");
  blueTooth = new p5ble();

  const connectButton = createButton('Connect');
  connectButton.mousePressed(connectToBle);
  connectButton.position(15, 15);

  millisecondTimerStart = millis();
}





function draw() {

  if (isConnected) {
  } else {}

  text(receivedValue, 15, 40);

  if(millis()-millisecondTimerStart>2000 && isConnected ){
    if(mouseIsPressed){
      sendData("5" + "\n");
      console.log("invio 5")
    }else{
      sendData("1" + "\n");
      console.log("message sent")
    }

    millisecondTimerStart = millis();
  }

  text(value, windowWidth/2, windowHeight/2)

}
