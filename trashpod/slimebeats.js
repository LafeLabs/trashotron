/*
 * @name Oscillator Frequency
 * @description <p>Control an Oscillator and view the waveform using FFT.
 * MouseX is mapped to frequency, mouseY is mapped to amplitude.</p>
 * <p><em><span class="small"> To run this example locally, you will need the
 * <a href="http://p5js.org/reference/#/libraries/p5.sound">p5.sound library</a> and a
 * sound file.</span></em></p>
 */
let osc, fft;

frameIndex = -5;

pulseIndex = -5;

pulse1 = 0;
pulse2 = 0;
en1 = true;
en2 = true;
en3 = true;
dir1 = false;
dir2 = false;
dir3 = false;

imagemode = false;

beatframes = 15;//number of frames per beat
loopmode = false;


function setup() {
  createCanvas(innerWidth, innerHeight);
  mic = new p5.AudioIn();
  mic.start();
  fft2 = new p5.FFT();
  fft2.setInput(mic);

  osc = new p5.SinOsc(); // set frequency and type
  osc.amp(0);
  osc2 = new p5.SinOsc(); // set frequency and type
  osc2.amp(0);
  osc.start();
  osc2.start();
  freq = 697;
  osc.freq(freq);  
  
  
}


function draw() {

  frameRate(30);
//  background(255);

//  let waveform = fft.waveform(); // analyze the waveform

 /* 
  beginShape();
  strokeWeight(5);
  for (let i = 0; i < waveform.length; i++) {
    let x = map(i, 0, waveform.length, 0, width);
    let y = map(waveform[i], -1, 1, height, 0);
    vertex(x, y);
  }
  endShape();
*/
  
 
  if(pulseIndex >= -5 && pulseIndex < 0){
         //1
      freq = 697;
      osc.freq(freq);
      amp = 0.5;
      osc.amp(amp);
      freq2 = 1209;
      osc2.freq(freq2);
      amp2 = 0.5;
      osc2.amp(amp2);

  }
  if(pulseIndex < 5 && pulseIndex >=0){
        //4, direction change on x axis
        freq = 770;
        osc.freq(freq);
        osc.amp(0.5);
        freq2 = 1209;
        osc2.freq(freq2);
        osc2.amp(0.5);
  }
  if(pulseIndex >= 5){
        osc.amp(0);
        osc2.amp(0);
  }  
  pulseIndex++;
  if(loopmode && pulseIndex > beatframes){
    pulseIndex = 0;
  }
  let spectrum = fft2.analyze();
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
    point(frameIndex,height - 3*i);
//     stroke('rgb(' + red + ',' + green + ',' + blue + ')');
    stroke('rgba(' + redz + ',' + greenz + ',' + bluez + ',' + spectrum[i]/10 + ')');
    
    point(frameIndex,height - 3*i);
  }

//  i1000 = 
  frameIndex += 3;
  if(frameIndex > width){
      frameIndex = 0;
  }
  
}


function keyPressed() {

  if (key === "g") {
      //g for go
       loopmode =true;
       pulseIndex = -5;
  }
  if (key === "s") {
      //s for stop      
       loopmode =false;
       pulseIndex = -5;

  }
  if (key === "a") {
      //faster
      beatframes--;
      if(beatframes == -1){
        beatframes = 0;
      }
  }
  if (key === "z") {
      //slower
      beatframes++;
  }
  
}
