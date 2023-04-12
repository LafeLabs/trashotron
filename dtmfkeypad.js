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
  createCanvas(720, 256);

  osc = new p5.SinOsc(); // set frequency and type
  osc.amp(0);
  osc2 = new p5.SinOsc(); // set frequency and type
  osc2.amp(0);
  fft = new p5.FFT();
  osc.start();
  osc2.start();

  freq = 697;
  osc.freq(freq);  

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
  press7 = createButton('7');
  press7.position(120, 0);
  press7.mousePressed(seven)
  press8 = createButton('8');
  press8.position(140, 0);
  press8.mousePressed(eight)

  
  press9 = createButton('9');
  press9.position(160, 0);
  press9.mousePressed(nine)
  press0 = createButton('0');
  press0.position(180, 0);
  press0.mousePressed(zero)
  pressstar = createButton('*');
  pressstar.position(200, 0);
  pressstar.mousePressed(star)
  presspound = createButton('#');
  presspound.position(220, 0);
  presspound.mousePressed(pound)

  
  pressA = createButton('A');
  pressA.position(240, 0);
  pressA.mousePressed(A)
  pressB = createButton('B');
  pressB.position(260, 0);
  pressB.mousePressed(B)
  pressC = createButton('C');
  pressC.position(280, 0);
  pressC.mousePressed(C)
  pressD = createButton('D');
  pressD.position(300, 0);
  pressD.mousePressed(D)

  
}


function draw() {

  background(255);

  let waveform = fft.waveform(); // analyze the waveform
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


