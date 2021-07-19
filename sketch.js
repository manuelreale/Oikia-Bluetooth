let a = ['La mia esperienza con ', "Tutto sommato l'esperienza con ", 'In fin dei conti la mia permanenza con ', 'La mia sosta da ', "Tutto sommato la mia sosta a casa di ", "Ripensando a tutto, la mia esperienza nella dimora di ", "Fondamentalmente la mia esperienza nel tempo passato da " ];
let nome ='Eugenio Trafelotti ';
let b =['la valuterei come ', 'mi è sembrata ', 'è andata in maniera ', 'è stata ', 'la ricorderò come ', 'la categorizzerei come ', 'la ricorderò come una permanenza ', 'da quel che mi ricordo è stata ', 'se non vado errando è stata '];
let c0 = ['terribile ', 'oscena ', 'tremenda ', 'a dir poco imbarazzante ', 'drammatica ', 'insopportabile ', 'orribile ', 'straordinariamente deludente ', 'brutta ', 'molto sgradevole ', ', pessima, sarà da dimenticare ', 'davvero pessima ', 'incredibilmente brutta ', 'molto negativa'];
let c1 = ['deludente ', 'dimenticabile ', 'scadente ', 'abbastanza negativa ', 'misera ', 'scarsa ', 'abbastanza sconfortante ', 'un po` deludente ', 'insoddisfacente ', 'sotto la media ', 'inappagante ', 'inadeguata ', 'insufficente '];
let c2 = ['passabile ', 'sufficiente ', 'quasi buona ', 'abbastanza mediocre ', 'adeguata ', 'scarsa ', 'abbastanza sopportabile ', 'tollerabile ', 'decente ', 'nella media ', 'discreta ', 'modesta ', 'ordinaria '];
let c3 = ['buona dai ', 'decisamente sufficiente ', 'onesta ', 'molto rispettosa ', 'felice ', 'considerevole ', 'più che accettabile ', 'soddisfacente ', 'appagante ', 'lieta ', 'piacevole ', 'divertente ', 'molto buona '];
let c4 = ['eccellente ', 'praticamente perfetta ', 'esemplare ', 'sublime ', 'sopraffina ', 'meravigliosa ' , 'decisamente pregevole ', 'più che soddisfacente ', 'estremamente appagante ', 'molto molto lieta ', 'più che piacevole ', 'a livelli elevatissimi ', 'una gioia '];
let d0= ["c'era quasi sempre troppa luce, ", 'mi teneuto in un posto decisamente troppo illuminato, ', 'illuminazione terribile, ','non ce la facevo più a stare così alla luce, ','la luce mi accecava, ','', 'il posto era davvero illuminato male, ', 'illuminazione da dimenticare, ']
let d1= ['non sempre mi ha sempre tenuto in un posto ben illuminato, ', 'mi teneuto in un posto mediamente illuminato, ', 'la luce lì non era il massimo, ','','', 'il posto era discreto, ', 'illuminazione mediocre, ']
let d2= ['mi ha sempre tenuto in buon luce, ', 'mi ha lasciato in un posto ben illuminato, ', '','', 'il posto era bello, ', 'illuminazione perfetta, '];
let e0= ['il rumore era insopportabile, ', 'decisamente troppo rumore, ', 'stavo diventando sordo dal rumore, ','insopportabilmente rumoroso, ','non ho trovato nemmeno un attimo di silenzio, ', 'davvero troppo casino, ', 'il posto era rumorosissimo, '];
let e1= ['il rumore era appena tollerabile, ', 'spesso ce stato troppo rumore, ', 'forse troppo rumoroso, ','a tratti è stato silenzioso, ','ce stato un po di rumore ma niente di troppo fastidioso, ', 'è stato discretamente tranquillo, ', 'il posto era mediamente tranquillo, ','',''];
let e2= ['mi sono davvero rilassato posto silenziosissimo, ', 'è stato silenzioso, ', 'mi ha lasciato in pace senza fare troppo casino, ','il luogo è stato sempre silenzioso, ','luogo molto tranquillo e silenzioso, ', 'per quanto riguarda la rumorosità direi che è stato molto tranquillo, ', 'il posto era molto tranquillo, ','',''];
let f0= ['e direi che non mi ha dedicato abbastanza tempo.', 'e sfortunatamente mi ha lasciato un po troppo da solo.', 'infine non mi ha calcolato più di tanto.','e mi ha lasciato troppo in disparte.'];
let f1= ['e alla fine mi ha intrattenuto bene.', 'c`è sempre stato quando ne avevo bisogno.', 'ed infine non mi ha mai fatto annoiare.','non mi ha lasciato troppo in disparte.'];
let guestNames =['Antonia Panicucci', 'Gerardino Russo', 'Liliana Marino', 'Ludovica Bianchi', 'Rosanna Pisani', 'Giorgio Nottoli', 'Dario Zetticci', 'Alberico Costa', 'Giovanni Stoppino', 'Giacomo Paludoso', 'Federico Insegni', 'Roberta Saltasete', 'Federica Nossignore', 'Alessio Roteo', 'Roberta Arnoldi', 'Giangiulio Pietrini', 'Luca Birberto', 'Maria Regionali', 'Camilla Beffa', 'Ludovica Giacchetta', 'Silvio Rinato', 'Eugenio Riccardi', 'Gino Brodini', 'Paolo Bibitini', 'Arturo Morganno', 'Leonardo Soli', 'Alessandro Rizzi', 'Lorenzo Mancini', 'Mattia Santoro', 'Andrea Rompella', 'Sofia Furbi', 'Giulia Ardogoni', 'Aurora Brezza', 'Alice Castelli', 'Emma Mastrota', 'Beatrice Nocche', 'Gabriele Saltimbanco', 'Walter Taglietti', 'Greta Lungobrembo', 'Anna Luppoli'];

let guestPrestige =[1,2,3,4,5,6,7,8,10,9,10,1,2,3,4,5,6,7,8,9,1,2,3,4,10,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6];

let frase;
let phase=0;
let voto=0;
let voto1=0;
let voto2=0;
let voto3=0;
let nome1;
let guesta;
let selectora=13;

let fraseb;
let votob=0;
let voto1b=0;
let voto2b=0;
let voto3b=0;
let nome2;
let guestb;
let selectorb=14;

let fredoka;
let productSans;
let productSansBold;
let ospiti=0;
let ospiti2=0;
var frame;

let written=0;

let people = [];
let face = [];
let guests = [];

let serial; // variable for the serial object
let serial2; // variable for the serial object
var outData; // for data output
var outData2; // for data output
let sensors = [0, 0, 0, 0]; // array to hold data from arduino
let sensors2 = [0, 0, 0, 0]; // array to hold data from arduino2



//roba blueTooth
let blueToothCharacteristic;//this is a blu
let receivedValue = "";

let blueTooth;
let isConnected = false;

var millisecondTimerStart;

var l=1;
var value;

var fine=0;

var timerValue = 10;




function preload(){
  fredoka = loadFont('./assets/FredokaOne-Regular.ttf');
  productSans = loadFont('./assets/Product Sans Regular.ttf');
  productSansBold = loadFont('./assets/Product Sans Bold.ttf');

  button = loadImage('./assets/button.png');
  podio = loadImage('./assets/podio.png');
  blueGrad = loadImage('./assets/blue.jpg');
  logo = loadImage('./assets/logo.png');
  pattern = loadImage('./assets/pattern.png');
  up = loadImage('./assets/up.png');
  down = loadImage('./assets/down.png');

  data = loadJSON("./assets/people.json");

  for (var m=1; m<=18; m++) {face[m] = loadImage("./assets/faces/p" + m + ".png");}
  for (var k=1; k<=40; k++) {guests[k-1] = loadImage("./assets/ospiti/Risorsa " + k + ".png");}
}

function setup() {

  input1 = createInput("Giocatore 1", "text");

  button = createButton('Inizia!');
  button.mousePressed(start);

setInterval(timeIt, 1000);


//roba bluetooth
  console.log("setting up");
blueTooth = new p5ble();

push()
const connectButton = createButton('Connect');
connectButton.mousePressed(connectToBle);

connectButton.position(windowWidth-35-200*u, 15);
connectButton.size(200*u, 60*u);
connectButton.style('font-family', 'Fredoka One');
connectButton.style('font-size', '30px');
connectButton.style('border-radius', '60px');
connectButton.style('background-color', '#3366FF');
connectButton.style('border-radius', '20px');
connectButton.style('border', '5px solid #FFFFFF');
connectButton.style('color', 'white');
pop()
// connectButton.style('font-family', 'Product Sans Regular');
// connectButton.style('font-size', '30px');
//connectButton.style('border-radius', '20px');
//connectButton.style('border', '5px solid #3366FF');
// connectButton.style('padding-left', '12px')




millisecondTimerStart = millis();






  // voto=floor(random(0,5));
  // voto1=floor(random(0,3));
  // voto2=floor(random(0,3));
  // voto3=floor(random(0,2));
  //
  // votob=floor(random(0,5));
  // voto1b=floor(random(0,3));
  // voto2b=floor(random(0,3));
  // voto3b=floor(random(0,2));




  // frame = createElement("iframe");
  // frame.attribute('src', "http://localhost:8002/index.html");
  // frame.style('border', "none");
  //frame.attribute('scrolling', "no");
  //console.log(data);

for (let i = 0; i < data.people.length; i++) {
  addPeople(
    (windowWidth/2)-174*u,
    (windowHeight*5 / 50)+(i*76.3*u)+289*u,
    data.people[i].score,
    data.people[i].title,
    data.people[i].name,
    data.people[i].face,
    (i+1),
    0,
    0
  );
}

data.people.sort(function (b, a) {return a.score - b.score;});

people[10].type=1;
people[10].score=0;
people[10].face=13;
people[11].type=2;
people[11].score=0;
people[11].face=14;

// serial = new p5.SerialPort();

// serial port to use - you'll need to change this
// serial.open('COM7');
//
//
// // what to do when we get serial data
// serial.on('data', gotData);
//
//
// // when to do when the serial port opens
// serial.on('open', gotOpen);


}



function windowResized() {
  resizeCanvas(windowWidth-18, (windowHeight*5 / 50)+522+((data.people.length-1)*76.3));
  for(let i = 0; i < people.length; i++) {
    people[i].updatePositionFast();
  }
}

function start(){
  if(blueTooth.isConnected()){
  people[10].name = input1.value();

  nome1=input1.value();

  //outData=1;
  // serial.write(outData);
  phase=1;
}
}



let u=1;
let tot=0;

function draw() {
//people[4].name="Manuel Reale"
if (windowHeight<windowWidth){

  // frame.position(windowWidth-(windowWidth / 20)-400*u,(windowHeight*5 / 50)+205*u);
  // frame.attribute('width', 400*u);
  // frame.attribute('height', 270*u);
  if(windowWidth<1550){
    u=(windowWidth/1550);
  }else{
    u=1;
  }

  tot=0;

if(phase==1){
  input1.remove();
  button.remove();
  updateScore();

}

if(phase==2){
  updateScore();
  //console.log(timerValue, phase)

  timeIt()


  if(timerValue == 0 && phase==2){
    //sendData("5" + "\n");
    //console.log("invio 5")
  }

}


  people.sort(function (b, a) {return a.score - b.score;});
  //console.log(people)

  background('white')
  noStroke()
  createCanvas(windowWidth-18,(windowHeight*5 / 50)+522+((data.people.length-1)*76.3))
  push()




  image(blueGrad, 0, 0,windowWidth,windowHeight/7);
  image(pattern, -20, -20, windowHeight*4*4/40, windowHeight*6.5/40);

  push()
  imageMode(CENTER)
  translate(windowWidth / 50 +windowHeight/9, windowHeight/20)
  scale(windowHeight/1300)
  image(logo, 0,0);
  pop()

  push()
  drawingContext.shadowOffsetX = 10;
  drawingContext.shadowOffsetY = 10;
  drawingContext.shadowBlur = 60;
  drawingContext.shadowColor = 'rgba(34, 119, 255, .35)';
  rect(windowWidth / 50, windowHeight*5 / 50, windowWidth- windowWidth / 25, 335+((data.people.length)*76.3), 30);
  rect(windowWidth / 20, (windowHeight*5 / 50)+105*u, 400*u, 400*u, 30);

  rect((windowWidth/2)-278.5*u, (windowHeight*5 / 50)+105*u, 557*u, (115+((data.people.length+1)*76.3))*u, 30);
  rect(windowWidth-(windowWidth / 20)-400*u, (windowHeight*5 / 50)+105*u, 400*u, 400*u, 30);
  pop()

  showReviews()

  for(let i=0; i<(data.people.length-3);i++){
    push();
    textFont(fredoka);
    fill('#3366FF')
    textSize(45*u);
    textAlign(CENTER);
    text(i+4, (windowWidth / 2)-224*u, ((windowHeight*5 / 50) + 565*u)+76*u*i);
    //console.log("hello")
    pop();
  }

  textFont(fredoka);
  fill('#3366FF')
  textSize(40*u);
  text('Classifica', 40*u+windowWidth / 20, (windowHeight*5 / 50)+80*u);

  textFont(productSansBold);
  fill('#6387BA')
  textSize(29*u);
  text('Classe 5ºE\nC.D.S. Castromediano', 40*u+windowWidth / 20, (windowHeight*5 / 50)+170*u);


  textFont(productSansBold);
  fill('#6387BA')
  textSize(29*u);
  text('Le mie recensioni', windowWidth-350*u - windowWidth / 20, (windowHeight*5 / 50)+170*u);


 //recensioni

  // textFont(productSans);
  // fill('#9CB6DB')
  // textSize(15*u);
  // text(frase2, windowWidth-280*u-150*u, (windowHeight*5 / 50)+200*u, 280*u, 400*u);



  textFont(productSans);
  fill('#9CB6DB')
  textSize(21*u);
  text('Docente', 40*u+windowWidth / 20, (windowHeight*5 / 50)+245*u);

  textFont(productSansBold);
  fill('#6387BA')
  textSize(21*u);
  text('                   Alessia Menegozzi', 40*u+windowWidth / 20, (windowHeight*5 / 50)+245*u);

  textSize(29*u);
  text('Statistiche gruppo', 40*u+windowWidth / 20, (windowHeight*5 / 50)+320*u);

  textFont(productSans);
  fill('#9CB6DB')
  textSize(21*u);
  text('Ospiti ospitati: '+ (ospiti+34), 40*u+windowWidth / 20, (windowHeight*5 / 50)+370*u);
  text('Ospiti rifiutati: '+ (ospiti2), 40*u+windowWidth / 20, (windowHeight*5 / 50)+410*u);
  text('Punti totali: '+ (tot), 40*u+windowWidth / 20, (windowHeight*5 / 50)+450*u);



  fill('#3366FF')
  rect(0, height-65, windowWidth, 65);

  push()
  translate(50, height-45)
  image(logo, 0, 0, 90, 27);
  pop()

  push()
  imageMode(CENTER);
  image(podio, windowWidth / 2, (windowHeight*5 / 50)+188*u+146*u,488*u,293*u);
  pop()


  for(let i = 0; i < people.length; i++) {
    people[i].run();
  }


pop()



//mobile version


}else{

  pixelDensity(0.5);
  // frame.position(windowWidth/2-(windowWidth / 20)-420*0.5*u,100*u+(windowHeight*5 / 50)+155*u+(115+((data.people.length+1)*76.3))*u);
  // frame.attribute('width', 450*u);
  // frame.attribute('height', 260);
  u=1;
tot=0;
if(phase==1){
  input1.remove();
  button.remove();
  updateScore();
}

  people.sort(function (b, a) {return a.score - b.score;});
  //console.log(people)

  background('white')
  noStroke()
  createCanvas(windowWidth-18,(windowHeight*5 / 50)+922+((data.people.length-1)*76.3))
  push()

  image(blueGrad, 0, 0,windowWidth,windowHeight/7);
  image(pattern, -20, -20, windowHeight*4*4/40, windowHeight*6.5/40);

  push()
  imageMode(CENTER)
  translate(-10+windowWidth / 2, windowHeight/20)
  scale(windowHeight/1300)
  image(logo, 0,0);
  pop()

  push()
  drawingContext.shadowOffsetX = 10;
  drawingContext.shadowOffsetY = 10;
  drawingContext.shadowBlur = 60;
  drawingContext.shadowColor = 'rgba(34, 119, 255, .35)';
  rect(windowWidth / 50, windowHeight*5 / 50, windowWidth- windowWidth / 25, 865+((data.people.length)*76.3), 30);

  rect((windowWidth/2)-278.5*u, (windowHeight*5 / 50)+105*u, 557*u, (115+((data.people.length+1)*76.3))*u, 30);
  rect((windowWidth/2)-278.5*u, (windowHeight*5 / 50)+235*u+(115+((data.people.length+1)*76.3))*u, 557*u,300 , 30);
  pop()

  for(let i=0; i<(data.people.length-3);i++){
    push();
    textFont(fredoka);
    fill('#3366FF')
    textSize(45*u);
    textAlign(CENTER);
    text(i+4, (windowWidth / 2)-224*u, ((windowHeight*5 / 50) + 565*u)+76*u*i);
    //console.log("hello")
    pop();
  }

  textFont(fredoka);
  fill('#3366FF')
  textSize(40*u);
  text('Classifica', 40*u+windowWidth / 20, (windowHeight*5 / 50)+70*u);

push()
textAlign(CENTER)
  text('Le mie recensioni',windowWidth/2, 100*u+(windowHeight*5 / 50)+105*u+(115+((data.people.length+1)*76.3))*u);
pop()
  textFont(productSansBold);
  fill('#6387BA')
  textSize(20*u);
  text('Classifica classe 5ºE\nC.D.S. Castromediano', windowWidth-(windowWidth / 20) -220*u, (windowHeight*5 / 50)+50*u);

  fill('#3366FF')
  rect(0, height-65, windowWidth, 65);


  push()
  translate(50, height-45)
  image(logo, 0, 0, 90, 27);
  pop()

  push()
  imageMode(CENTER);
  image(podio, windowWidth / 2, (windowHeight*5 / 50)+188*u+146*u,488*u,293*u);
  pop()


  for(let i = 0; i < people.length; i++) {
    people[i].run();
  }


pop()
}


if(phase==0){



background("white")

textFont(productSansBold);
fill('#6387BA')
textSize(25*u);
text("Seleziona il tuo avatar",-120*u+ windowWidth / 2, 280);
if(!blueTooth.isConnected()){
  textSize(17*u);
  textFont(productSans);
text("Connetti l'Ospite per iniziare",-105*u+ windowWidth / 2, 550);}

input1.position(windowWidth/2-210*u, 165);
input1.size(400*u, 60*u);

input1.style('font-family', 'Product Sans Regular');
input1.style('font-size', '30px');
input1.style('border-radius', '20px');
input1.style('border', '5px solid #8FB4FF');
input1.style('padding-left', '12px')



button.position(windowWidth/2-100*u, 600);
button.size(200*u, 60*u);
button.style('font-family', 'FredokaOne-Regular');
button.style('font-size', '30px');
button.style('border-radius', '60px');
button.style('background-color', '#3366FF');
button.style('color', 'white');
button.style('border', 'none');

push()
rectMode(CENTER)
imageMode(CENTER)
for(let h=13; h<=15;h++){
  strokeWeight(10)
  if(selectora==h){strokeWeight(15);stroke("#32D2AD")}else{stroke("#8FB4FF")}
  rect(windowWidth/2+(h-14)*150*u,350,60,45,5)
  image(face[h], windowWidth/2+(h-14)*150*u, 350,60,45)
}
for(let h=16; h<=18;h++){
  strokeWeight(10)
  if(selectora==h){strokeWeight(15);stroke("#32D2AD")}else{stroke("#8FB4FF")}
  rect(windowWidth/2+(h-17)*150*u,450,60,45,5)
  image(face[h], windowWidth/2+(h-17)*150*u, 450,60,45)
}
pop()


if(mouseIsPressed && dist(mouseX,mouseY,windowWidth/2+(13-14)*150*u,350)<40){people[10].face=13; selectora=13}
if(mouseIsPressed && dist(mouseX,mouseY,windowWidth/2+(14-14)*150*u,350)<40){people[10].face=14; selectora=14 }
if(mouseIsPressed && dist(mouseX,mouseY,windowWidth/2+(15-14)*150*u,350)<40){people[10].face=15; selectora=15 }

if(mouseIsPressed && dist(mouseX,mouseY,windowWidth/2+(16-17)*150*u,450)<40){people[10].face=16; selectora=16 }
if(mouseIsPressed && dist(mouseX,mouseY,windowWidth/2+(17-17)*150*u,450)<40){people[10].face=17; selectora=17 }
if(mouseIsPressed && dist(mouseX,mouseY,windowWidth/2+(18-17)*150*u,450)<40){people[10].face=18; selectora=18 }

}

if(fine==1 && phase==1){
  phase=2;
}




//roba blueTooth
if (isConnected) {
} else {}

text(receivedValue, 15, 40);

if(millis()-millisecondTimerStart>2000 && isConnected ){
  if(mouseIsPressed){
    //sendData("5" + "\n");
    //console.log("invio 5")
  }else{
    sendData("1" + "\n");
    console.log("message sent")
  }

  millisecondTimerStart = millis();
}

//text(value, windowWidth/2, windowHeight/2)

//text(phase, windowWidth/2, windowHeight/2)



}

function showReviews(){

for(let i = 0; i < people.length; i++) {

  if(phase==1){

    outData=1;
    //serial.write(outData);

  if(people[i].type==0 && people[i].selected==1){
    textFont(productSans);
    fill('#9CB6DB')
    textSize(18*u);
    text("Non puoi vedere le recensioni altrui", windowWidth-(windowWidth / 20)-350*u, (windowHeight*5 / 50)+220*u, 280*u, 400*u);
  }
  if(people[i].type==1 && people[i].selected==1){
    textFont(productSans);
    fill('#9CB6DB')
    textSize(18*u);
    text("Non hai ancora nessuna recensione", windowWidth-(windowWidth / 20)-350*u, (windowHeight*5 / 50)+220*u, 280*u, 400*u);
  }
}



if(phase==2){
  gotData();
if(people[i].type==0 && people[i].selected==1){
  textFont(productSans);
  fill('#9CB6DB')
  textSize(18*u);
  text("Non puoi vedere le recensioni altrui", windowWidth-(windowWidth / 20)-350*u, (windowHeight*5 / 50)+220*u, 280*u, 400*u);
}
if(people[i].type==1 && people[i].selected==1){
  push()
  imageMode(CENTER);
  image(guests[guesta], windowWidth-(windowWidth / 20)-330*u, (windowHeight*5 / 50)+230*u,44,33);
  pop()

  textFont(productSansBold);
  fill('#6387BA')
  textSize(21*u);
  text(guestNames[guesta], windowWidth-(windowWidth / 20)-290*u, (windowHeight*5 / 50)+220*u, 280*u, 400*u);

   textFont(productSansBold);
   fill('#9CB6DB')
   textSize(15*u);

   text("+"+(guestPrestige[guesta]), windowWidth-(windowWidth / 20)-80*u, (windowHeight*5 / 50)+220*u, 280*u, 400*u);
 textFont(productSans);
   text(frase, windowWidth-(windowWidth / 20)-350*u, (windowHeight*5 / 50)+260*u, 280*u, 400*u);
}
}


}

}



function addPeople(x, y, size, title, name, face, rank, type, selected) {
  let bubbleColor = "white";
  const aNewBubble = new Bubble(x, y, size, bubbleColor, name, face, rank, type, selected)
  people.push(aNewBubble);
}

class Bubble {
  constructor(temp_x,temp_y,temp_r,temp_color,temp_name,temp_face, temp_rank, temp_type, temp_selected) {
    this.x=temp_x;
    this.y=temp_y;
    this.r=temp_r;
    this.color=temp_color;
    this.name = temp_name;
    this.score = temp_r;
    this.face = temp_face;
    this.rank = temp_rank;
    this.status = 0;
    this.oldRank = temp_rank;
    this.oldStatus=0;
    this.timer=0;
    this.flag=0;
    this.type=temp_type;
    this.selected=0;
  }

  display() {

    if(mouseIsPressed && (dist(this.x+174*u,0,mouseX,0))<174*u && (dist(0,this.y+30*u,0,mouseY))<30*u){
    for(let o=0;o<people.length;o++){
      people[o].selected=0;
    }
      this.selected=1;
    }



    if(this.rank>3){
    push();
    if(this.selected==1){
      stroke(255,126,39);
      strokeWeight(3.5*u);
      fill('white');
      rect(this.x,this.y, 348*u,60*u, 15*u);
    }else{
      stroke(51,102,255,76.5);
      strokeWeight(3.5*u);
      fill('white');
      rect(this.x,this.y, 348*u,60*u, 15*u);
    }
    noStroke();
    textFont(productSansBold);
    fill('#6387BA')
    textSize(14*u);
    text(this.name, this.x+85*u, this.y+35*u);
    image(face[this.face], this.x+9*u, this.y+10*u, 121*0.42*u, 91*0.45*u );
    fill('#9CB6DB')
    textSize(16.65*u);
    text(this.score + ' crediti', this.x+250*u, this.y+35*u);
    if(this.status==0){
    }else{
    if(this.status>0){
      image(up, this.x+388*u,this.y+15*u,21*u,36*u);
    }
    if(this.status<0){
    image(down, this.x+388*u,this.y+15*u,21*u,36*u);
  }}
    pop();
  }else if(this.rank==1){
    push();
    noStroke();
    textFont(productSansBold);
    fill('#6387BA')
    textSize(16.65*u);
    textAlign(CENTER);
    text(this.name+"\n"+this.score+" crediti" , windowWidth/2, this.y-142*u);
    push();
    imageMode(CENTER);
    image(face[this.face], 2+windowWidth/2, this.y-23*u, 121*0.53*u, 91*0.53*u );
    pop()
    pop();
  }else if(this.rank==2){
    push();
    noStroke();
    textFont(productSansBold);
    fill('#6387BA')
    textSize(16.65*u);
    textAlign(CENTER);
    text(this.name+"\n"+this.score+" crediti" , (windowWidth/2)-165*u, this.y-157*u);
    push();
    imageMode(CENTER);
    image(face[this.face], (windowWidth/2)-164*u, this.y-36*u, 121*0.53*u, 91*0.53*u );
    pop()
    pop();
  }else if(this.rank==3){
    push();
    noStroke();
    textFont(productSansBold);
    fill('#6387BA')
    textSize(16.65*u);
    textAlign(CENTER);
    text(this.name+"\n"+this.score+" crediti" , (windowWidth/2)+167*u, this.y-440*u+232*u);
    push();
    imageMode(CENTER);
    image(face[this.face], (windowWidth/2)+168*u, this.y-440*u+352*u, 121*0.53*u, 91*0.53*u );
    pop()
    pop();
  }
// circle(this.x+174*u,this.y+30*u,5)
  }

  selectHost(){

  }

  updatePositionFast() {
    this.y=(windowHeight*5 / 50)+((this.rank-1)*76.3*u)+289*u;
    this.x=(windowWidth/2)-174*u;

  }

  updatePosition() {
    //this.x=lerp(this.x, mouseX, 0.002)+random(-1,1);
    //this.y=lerp(this.y, mouseY, 0.002)+random(-1,1);
    if(this.status != this.oldStatus){
      this.flag=1;
      this.timer=0;
      }

    if(this.flag==1){
      if(this.timer<=500){
      this.timer++
    }else{
      this.flag=0;
      this.timer=0;
      this.oldRank=this.rank;
      console.log("helo")
    }
    }

    this.oldStatus = this.status;
    this.status=this.oldRank-this.rank;

    if(this.oldRank<=3 || this.rank<=3){
      this.y=lerp(this.y,((windowHeight*5 / 50)+((this.rank-1)*76.3*u)+289*u),0.08)
    }else{
    this.y=lerp(this.y,((windowHeight*5 / 50)+((this.rank-1)*76.3*u)+289*u),0.05)}
    this.x=(windowWidth/2)-174*u;

  }



  run() {
    this.display();
    this.updatePosition();
  }
}

function writeReview(){
written=1
  if(voto==0){
  frase=random(a)+nome1+" "+random(b)+random(c0)+", "}
  if(voto==1){
  frase=random(a)+nome1+" "+random(b)+random(c1)+", "}
  if(voto==2){
  frase=random(a)+nome1+" "+random(b)+random(c2)+", "}
  if(voto==3){
  frase=random(a)+nome1+" "+random(b)+random(c3)+", "}
  if(voto==4){
  frase=random(a)+nome1+" "+random(b)+random(c4)+", "}

  if(voto1==0){
  frase+=random(d0)}
  if(voto1==1){
  frase+=random(d1)}
  if(voto1==2){
  frase+=random(d2)}

  if(voto2==0){
  frase+=random(e0)}
  if(voto2==1){
  frase+=random(e1)}
  if(voto2==2){
  frase+=random(e2)}

  if(voto3==0){
  frase+=random(f0)}
  if(voto3==1){
  frase+=random(f1)}

}

function writeReviewb(){

  if(votob==0){
  fraseb=random(a)+nome2+" "+random(b)+random(c0)+", "}
  if(votob==1){
  fraseb=random(a)+nome2+" "+random(b)+random(c1)+", "}
  if(votob==2){
  fraseb=random(a)+nome2+" "+random(b)+random(c2)+", "}
  if(votob==3){
  fraseb=random(a)+nome2+" "+random(b)+random(c3)+", "}
  if(votob==4){
  fraseb=random(a)+nome2+" "+random(b)+random(c4)+", "}

  if(voto1b==0){
  fraseb+=random(d0)}
  if(voto1b==1){
  fraseb+=random(d1)}
  if(voto1b==2){
  fraseb+=random(d2)}

  if(voto2b==0){
  fraseb+=random(e0)}
  if(voto2b==1){
  fraseb+=random(e1)}
  if(voto2b==2){
  fraseb+=random(e2)}

  if(voto3b==0){
  fraseb+=random(f0)}
  if(voto3b==1){
  fraseb+=random(f1)}

}

function updateScore(){
  for (let i = 0; i < people.length; i++) {
    if(people[i].type==0){
      people[i].rank=(i+1)
      tot+=people[i].score
      if(people[i].face==floor(random(0,13))&&frameCount%floor(random(300,1000))==0){
        people[i].score+=floor(random(0,7))
        ospiti+=1;
        ospiti2+=floor(random(0,1.1));
      }
    }else if(people[i].type!=0){
      people[i].rank=(i+1)
    }


  }
}



function gotData() {
  let currentString = value; // store the data in a variable
  trim(currentString); // get rid of whitespace
  if (!currentString) return; // if there's nothing in there, ignore it
  sensors = split(currentString, ',');
console.log(sensors);
  //sensors[0]=

  if(sensors[0]>70){voto1=2;}
  else if(sensors[0]>40){voto1=1}
  else if(sensors[0]<=40){voto1=0}

  if(sensors[1]>70){voto2=2;}
  else if(sensors[1]>40){voto2=1}
  else if(sensors[1]<=40){voto2=0}

  if(sensors[2]>70){voto3=2;}
  else if(sensors[2]>40){voto3=1}
  else if(sensors[2]<=40){voto3=1}
let a=Number(sensors[0])
let b=Number(sensors[1])
let c=Number(sensors[2])
  let media=((a+b+c)/3)

  if(media>80){voto=4}
  else if(media>60){voto=3}
  else if(media>40){voto=2}
  else if(media>20){voto=1}
  else if(media<=20){voto=0}

  guesta=Number(sensors[3])-1;


  if(written==0 && guesta!=0 && phase==2){
  writeReview();
  writeReview();
  people[10].score= people[10].score + floor(guestPrestige[guesta]*(1+media/100))
}

  console.log(sensors);
  console.log(voto,voto1,voto2,voto3);
  console.log(media);
  //serial.write('A');
}

function gotOpen() {
  print("Serial Port is Open");
  serial.clear(); // clears the buffer of any outstanding data
//  serial.write('A'); // send a byte to the Arduino
}

function timeIt() {
  if (timerValue > 0) {
    timerValue--;
  }
}
