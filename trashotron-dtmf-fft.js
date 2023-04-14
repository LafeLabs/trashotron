/*
THIS CREATES A 4X4 ARRAY OF Z SCANS ALL ON A GRID OF 1 SECOND TRAVEL TIME

*/

x = 0;
y = 0;
z = 0;
t = 0;
t0 = 0;

value = "1";
amplitude = 0;
freq1 = 697;
freq2 = 1209;
duration = 2;
frameIndex = 0;
toneIndex = 0;
displayIndex = 0;


//https://www.w3schools.com/jsref/jsref_concat_array.asp

unit = 30;
side = unit;

json_data_array = [];
en1 = false;
en2 = false;
en3 = false;
dir1 = false;
dir2 = false;
dir3 = false;


toneArray = [];

scan = [];

//z up and down, then move y away

stepAway = [
  {
    "value":"3",//start z
    "duration":3
  },
  {
    "value":"none",//go 30 frames
    "duration":30
  },
  {
    "value":"6",//reverse z
    "duration":3
  },
  {
    "value":"none",//go 30 frames
    "duration":30
  },
  {
    "value":"3",//stop z
    "duration":3
  },
  {
    "value":"none",//pause
    "duration":3
  },
  {
    "value":"6",//reverse z
    "duration":3
  },
  {
    "value":"none",//pause
    "duration":3
  },
  {
    "value":"2",//start y move away
    "duration":3
  },
  {
    "value":"none",//move away for 1 second in y
    "duration":30   
  },
  {
    "value":"2",//stop y move
    "duration":3
  },
  {
    "value":"none",//pause
    "duration":3
  }
]


scan  = scan.concat(stepAway);
scan  = scan.concat(stepAway);
scan  = scan.concat(stepAway);
scan  = scan.concat(stepAway);

yReturn = [
  {
    "value":"5",//reverse y direction
    "duration":3
  },
  {
    "value":"none",//pause
    "duration":3
  },
  {
    "value":"2",//start y movement
    "duration":3
  },
  {
    "value":"none",//move in y direction for 4 seconds
    "duration":120
  },
  {
    "value":"2",//stop y movement
    "duration":3
  },
  {
    "value":"none",//pause
    "duration":3
  },
  {
    "value":"5",//reverse y direction
    "duration":3
  },
  {
    "value":"none",//pause
    "duration":3
  }
]

scan  = scan.concat(yReturn);

xShift = [
  {
    "value":"1",//start x movement
    "duration":3
  },
  {
    "value":"none",//wait a second while move to right
    "duration":30
  },
  {
    "value":"1",//stop x movement
    "duration":3
  },
  {
    "value":"none",//stop x movement
    "duration":3
  }
]

scan  = scan.concat(xShift);


scan  = scan.concat(stepAway);
scan  = scan.concat(stepAway);
scan  = scan.concat(stepAway);
scan  = scan.concat(stepAway);
scan  = scan.concat(yReturn);
scan  = scan.concat(xShift);

scan  = scan.concat(stepAway);
scan  = scan.concat(stepAway);
scan  = scan.concat(stepAway);
scan  = scan.concat(stepAway);
scan  = scan.concat(yReturn);
scan  = scan.concat(xShift);

scan  = scan.concat(stepAway);
scan  = scan.concat(stepAway);
scan  = scan.concat(stepAway);
scan  = scan.concat(stepAway);
scan  = scan.concat(yReturn);
scan  = scan.concat(xShift);


xReturn = [
  {
    "value":"4",//reverse x direction
    "duration":3
  },
  {
    "value":"none",//pause
    "duration":3
  },
  {
    "value":"1",//start x movement
    "duration":3
  },
  {
    "value":"none",//wait 4 seconds while move back to left
    "duration":120
  },
  {
    "value":"1",//stop x movement
    "duration":3
  },
  {
    "value":"none",//pause
    "duration":3
  },
  {
    "value":"4",//reverse x direction
    "duration":3
  },
  {
    "value":"none",//pause
    "duration":3
  }
]
scan  = scan.concat(xReturn);

pulse1 = [
    {
        "value":"1",
        duration:3
    },
    {
        "value":"none",
        duration:3
    }
];

pulse2 = [
    {
        "value":"2",
        duration:3
    },
    {
        "value":"none",
        duration:3
    }
];

pulse3 = [
    {
        "value":"3",
        duration:3
    },
    {
        "value":"none",
        duration:3
    }
];

pulse4 = [
    {
        "value":"4",
        duration:3
    },
    {
        "value":"none",
        duration:3
    }
];

pulse5 = [
    {
        "value":"5",
        duration:3
    },
    {
        "value":"none",
        duration:3
    }
];

pulse6 = [
    {
        "value":"6",
        duration:3
    },
    {
        "value":"none",
        duration:3
    }
];

//toneArray = scan;


function setup() {
  frameRate(30);
  createCanvas(innerWidth, innerHeight);
  osc = new p5.SinOsc(); // set frequency and type
  osc.amp(amplitude);
  osc.freq(freq1);
  osc2 = new p5.SinOsc(); // set frequency and type
  osc2.amp(amplitude);
  osc2.freq(freq2);
  osc.start();
  osc2.start();

  mic = new p5.AudioIn();
  mic.start();
  fft2 = new p5.FFT();
  fft2.setInput(mic);

  background(0);
  t0 = millis();
  
  press1 = createButton('1');
  press1.position(0, 0);
  press1.mousePressed(one)
  press2 = createButton('2');
  press2.position(20, 0);
  press2.mousePressed(two)
  press3 = createButton('3');
  press3.position(40, 0);
  press3.mousePressed(three)
  press4 = createButton('4');
  press4.position(60, 0);
  press4.mousePressed(four)
  press5 = createButton('5');
  press5.position(80, 0);
  press5.mousePressed(five)
  press6 = createButton('6');
  press6.position(100, 0);
  press6.mousePressed(six)

  pressscan = createButton('SCAN');
  pressscan.position(120, 0);
  pressscan.mousePressed(run)

  pressstop = createButton('STOP');
  pressstop.position(170, 0);
  pressstop.mousePressed(stop)

}

function draw() {
  
  if(frameIndex > duration){
    frameIndex = 0;
    if(toneIndex < toneArray.length){
      textSize(24);
      textAlign(RIGHT);
      text(toneArray[toneIndex].value, width - 20, 50);

      duration = toneArray[toneIndex].duration;//in frame counts
      if(toneArray[toneIndex].value == "none"){
            amplitude = 0;
        }
        else{
            amplitude = 0.5;
            if(toneArray[toneIndex].value == "1"){
              freq1 = 697;
              freq2 = 1209;
              en1 = !en1;
            }
            if(toneArray[toneIndex].value == "2"){
              freq1 = 697;
              freq2 = 1336;
              en2 = !en2;
            }
            if(toneArray[toneIndex].value == "3"){
              freq1 = 697;
              freq2 = 1477;
              en3 = !en3;
            }
            if(toneArray[toneIndex].value == "4"){
              freq1 = 770;
              freq2 = 1209;
              dir1 = !dir1;
            }
            if(toneArray[toneIndex].value == "5"){
              freq1 = 770;
              freq2 = 1336;
              dir2 = !dir2;

            }
            if(toneArray[toneIndex].value == "6"){
              freq1 = 770;
              freq2 = 1477;
              dir3 = !dir3; 
            }
        }
        osc.amp(amplitude);
        osc.freq(freq1);
        osc2.amp(amplitude);
        osc2.freq(freq2);

    }

    toneIndex++;
  }
    frameIndex++;
  if(toneIndex > toneArray.length){
    amplitude = 0;
    osc.amp(amplitude);
    osc2.amp(amplitude);
  }
  
  spectrum = fft2.analyze();
  nyquistFreq = sampleRate() / 2;
  binFreq = nyquistFreq / (spectrum.length);
  i1000 = Math.round(1000/binFreq);
  stroke(0,255,0);
  line(0,height - 3*i1000,width,height - 3*i1000);

  strokeWeight(5);
  for (let i = 0; i < spectrum.length; i++) {
    //stroke(spectrum[i]);
    
        n = 256;
        H = spectrum[i]*360/n;
        z = 255*(1 - Math.abs((H/60)%2 - 1));
    
        if(H < 60){
            redz = 255;
            greenz = Math.round(z);
            bluez = 0;
        }
        if(H >= 60 && H < 120){
            redz = Math.round(z);
            greenz = 255;
            bluez = 0;
        }
        if(H >= 120 && H < 180){
            redz = 0;
            greenz = 255;
            bluez = Math.round(z);
        }
        if(H >= 180 && H < 240){
            redz = 0;    
            greenz = Math.round(z);
            bluez = 255;
        }
        if(H >= 240 && H < 300){
            redz = Math.round(z);    
            greenz = 0;
            bluez = 255;
        }
        if(H >= 300 && H < 360){
            redz = 255;    
            greenz = 0;
            bluez = Math.round(z);
        }    
    
    stroke(0);
    point(displayIndex,height - 3*i);
//     stroke('rgb(' + red + ',' + green + ',' + blue + ')');
    stroke('rgba(' + redz + ',' + greenz + ',' + bluez + ',' + spectrum[i]/10 + ')');
    
    point(displayIndex,height - 3*i);
  }

  displayIndex +=3; 
  if(displayIndex > innerWidth){
      displayIndex = 0;
  } 
  
  
  if(en1 && !dir1){
    x += 1/30;
  }  
  if(en1 && dir1){
    x -= 1/30;
  }
  if(en2 && !dir2){
    y += 1/30;
  }  
  if(en2 && dir2){
    y -= 1/30;
  }
  if(en3 && !dir3){
    z += 1/30;
  }  
  if(en3 && dir3){
    z -= 1/30;
  }

  
  var jsondata = {};
  jsondata.spectrum = spectrum;
  jsondata.t = millis() - t0;
  jsondata.x = x;
  jsondata.y = y;
  jsondata.z = z;
  json_data_array.push(jsondata);
}

function one(){ 
    duration = 2;
    frameIndex = 0;
    toneIndex = 0;
    toneArray = pulse1;
    t0 = millis();
    x = 0;
    y = 0;
    z = 0;
}

function two(){ 
    duration = 2;
    frameIndex = 0;
    toneIndex = 0;
    toneArray = pulse2;
    t0 = millis();
    x = 0;
    y = 0;
    z = 0;
}

function three(){
    duration = 2;
    frameIndex = 0;
    toneIndex = 0;
    toneArray = pulse3;
    t0 = millis();
    x = 0;
    y = 0;
    z = 0;
    
}


function four(){
    duration = 2;
    frameIndex = 0;
    toneIndex = 0;
    toneArray = pulse4;
    t0 = millis();
    x = 0;
    y = 0;
    z = 0;
    
}

function five(){
    duration = 2;
    frameIndex = 0;
    toneIndex = 0;
    toneArray = pulse5;
    t0 = millis();
    x = 0;
    y = 0;
    z = 0;

}

function six(){
    duration = 2;
    frameIndex = 0;
    toneIndex = 0;
    toneArray = pulse6;
    t0 = millis();
    x = 0;
    y = 0;
    z = 0;

}

function run(){
    duration = 2;
    frameIndex = 0;
    toneIndex = 0;
    toneArray = scan;
    t0 = millis();
    x = 0;
    y = 0;
    z = 0;

}

function stop(){
    duration = 2;
    frameIndex = 0;
    toneIndex = 0;
    toneArray = [];
    t0 = millis();
    x = 0;
    y = 0;
    z = 0;
}
