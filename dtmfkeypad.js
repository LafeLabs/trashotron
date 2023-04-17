/*
 * @name Oscillator Frequency
 * @description <p>Control an Oscillator and view the waveform using FFT.
 * MouseX is mapped to frequency, mouseY is mapped to amplitude.</p>
 * <p><em><span class="small"> To run this example locally, you will need the
 * <a href="http://p5js.org/reference/#/libraries/p5.sound">p5.sound library</a> and a
 * sound file.</span></em></p>
 */
let osc, fft;

frameIndex = -30;

function setup() {
  createCanvas(innerWidth, innerHeight);

  osc = new p5.SinOsc(); // set frequency and type
  osc.amp(0);
  osc2 = new p5.SinOsc(); // set frequency and type
  osc2.amp(0);
  fft = new p5.FFT();

  freq = 697;
  osc.freq(freq);  

}


function draw() {

  background(159,135,103);

  let waveform = fft.waveform(); // analyze the waveform
  noFill();
  beginShape();
  strokeWeight(5);
  for (let i = 0; i < waveform.length; i++) {
    let x = map(i, 0, waveform.length, 0, width);
    let y = map(waveform[i], -1, 1, height, 0);
    vertex(x, y);
  }
  endShape();
      

  // change oscillator frequency based on mouseX


  
  if (keyIsDown(061)) {// 1 enable x motion
    one();
  }
  if (keyIsDown(062)) {// 2 enable y motion
    two();
  }
  if (keyIsDown(063)) {// 3  enable z motion
    three();
  }
  if (keyIsDown(0101)) {// A
    A();
  }
  
  if (keyIsDown(064)) {// 4 shared DIR pin
    four(); 
  }

  if (keyIsDown(065)) {// 5 
    
    five(); 
  }

  if (keyIsDown(066)) {// 6 
    six(); 
  }

    if (keyIsDown(0102)) {// b
      B(); 
  }

  
  if (keyIsDown(067)) {// 7
        seven(); 
  }

  if (keyIsDown(070)) {// 8 
    eight(); 
  }

  if (keyIsDown(071)) {// 9
      nine(); 
  }
    if (keyIsDown(0103)) {// c
        C(); 
  }
  
  if (keyIsDown(0123)) {//s for star
    star(); 
  } 

  if (keyIsDown(060)) {// 0
    zero();
  }



  if (keyIsDown(0120)) {// p  for pound
      pound();
 
  }

  if (keyIsDown(0104)) {// d
    D(); 
  }
  

  frameIndex++;
  if(frameIndex>5){
    amp = 0;
    osc.amp(amp);
    amp2 = 0;
    osc2.amp(amp2);
  }
}


function one(){ 
    frameIndex = 0;
    freq = 697;
    osc.freq(freq);
    osc.amp(0.5);
    freq2 = 1209;
    osc2.freq(freq2);  
    osc2.amp(0.5);
}

function two(){
    frameIndex = 0;
    freq = 697;
    osc.freq(freq);
    osc.amp(0.5);
    freq2 = 1336;
    osc2.freq(freq2);
    osc2.amp(0.5);
}
function three(){
    frameIndex = 0;
    freq = 697;
    osc.freq(freq);
    osc.amp(0.5);
    freq2 = 1477;
    osc2.freq(freq2);
    osc2.amp(0.5); 
}
function four(){
    frameIndex = 0; 
    freq = 770;
    osc.freq(freq);
    osc.amp(0.5);
    freq2 = 1209;
    osc2.freq(freq2);
    amp2 = 0.5;
    osc2.amp(0.5);
}

function five(){
    frameIndex = 0;
    freq = 770;
    osc.freq(freq);
    amp = 0.5;
    osc.amp(amp);
    freq2 = 1336;
    osc2.freq(freq2);
    amp2 = 0.5;
    osc2.amp(amp2);
}

function six(){
    frameIndex = 0;
    freq = 770;
    osc.freq(freq);
    amp = 0.5;
    osc.amp(amp);
    freq2 = 1477;
    osc2.freq(freq2);
    amp2 = 0.5;
    osc2.amp(amp2);

}

function seven(){
     frameIndex = 0;
    freq = 852;
    osc.freq(freq);
    amp = 0.5;
    osc.amp(amp);
    freq2 = 1209;
    osc2.freq(freq2);
    amp2 = 0.5;
    osc2.amp(amp2);
 
}

function eight(){
         frameIndex = 0;
    freq = 852;
    osc.freq(freq);
    amp = 0.5;
    osc.amp(amp);
    freq2 = 1336;
    osc2.freq(freq2);
    amp2 = 0.5;
    osc2.amp(amp2);
 
}

function nine(){
  
        frameIndex = 0;
    freq = 852;
    osc.freq(freq);
    amp = 0.5;
    osc.amp(amp);
    freq2 = 1477;
    osc2.freq(freq2);
    amp2 = 0.5;
    osc2.amp(amp2);

}

function zero(){
  frameIndex = 0;
    freq = 941;
    osc.freq(freq);
    amp = 0.5;
    osc.amp(amp);
    freq2 = 1336;
    osc2.freq(freq2);
    amp2 = 0.5;
    osc2.amp(amp2);
 
}
function pound(){
      frameIndex = 0;

    freq = 941;
    osc.freq(freq);
    amp = 0.5;
    osc.amp(amp);
    freq2 = 1477;
    osc2.freq(freq2);
    amp2 = 0.5;
    osc2.amp(amp2);
}
function star(){
          frameIndex = 0;

    freq = 941;
    osc.freq(freq);
    amp = 0.5;
    osc.amp(amp);
    freq2 = 1209;
    osc2.freq(freq2);
    amp2 = 0.5;
    osc2.amp(amp2);

}
function A(){
    frameIndex = 0;
    freq = 697;
    osc.freq(freq);
    osc.amp(0.5);
    freq2 = 1633;
    osc2.freq(freq2);
    osc2.amp(0.5);

}
function B(){
         frameIndex = 0;
    freq = 770;
    osc.freq(freq);
    amp = 0.5;
    osc.amp(amp);
    freq2 = 1633;
    osc2.freq(freq2);
    amp2 = 0.5;
    osc2.amp(amp2);
 
}
function C(){
          frameIndex = 0;

    freq = 852;
    osc.freq(freq);
    amp = 0.5;
    osc.amp(amp);
    freq2 = 1633;
    osc2.freq(freq2);
    amp2 = 0.5;
    osc2.amp(amp2);

}
function D(){
      frameIndex = 0;
    freq = 941;
    osc.freq(freq);
    amp = 0.5;
    osc.amp(amp);
    freq2 = 1633;
    osc2.freq(freq2);
    amp2 = 0.5;
    osc2.amp(amp2);

}


function mousePressed(){
  osc.start();
  osc2.start();
  return false();
}

function keyPressed() {
  osc.start();
  osc2.start();
  return false; // prevent any default behaviour
}