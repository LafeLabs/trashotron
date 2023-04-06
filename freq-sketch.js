/**
 * @name Frequency Spectrum
 * @description <p>Visualize the frequency spectrum of live audio input.</p>
 * <p><em><span class="small"> To run this example locally, you will need the
 * <a href="http://p5js.org/reference/#/libraries/p5.sound">p5.sound library</a>
 * and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">local server</a>.</span></em></p>
 */
let mic, fft;

C= 7.11e-7;
R = 1000;
gnarl = 1.0;
integral = 0;
frameIndex = 0;
fcurve = [];
fplot = 0;

function setup() {
  createCanvas(710, 400);
  noFill();
  for(var index = 0;index < width;index++){
      fcurve.push(height);
  }

  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
}

function draw() {
  background(159,144,103);

  let spectrum = fft.analyze();

  // Find the peak frequency bin
  let peakBin = 0;
  integral = 0;
  for (let i = 1; i < spectrum.length; i++) {
    if (spectrum[i] > spectrum[peakBin]) {
      peakBin = i;
    }
    integral += spectrum[peakBin];
  }
  
  // Calculate the peak frequency in Hz
  let nyquistFreq = sampleRate() / 2;
  let binFreq = nyquistFreq / (spectrum.length);
  let peakFreq = binFreq * peakBin;

  fill(0);
  beginShape();
  vertex(0,height);
  stroke(0);
  strokeWeight(1);
  for (let i = 0; i < spectrum.length; i++) {
    vertex(i, map(spectrum[i], 0, 255, height, 0));
  }
  vertex(width,height);
  endShape();


  fplot = height-peakFreq/3;
  
  stroke("blue");
  strokeWeight(8);
  
  fcurve[frameIndex] = fplot;
 
  noFill();
  beginShape();
  for (let i = 0; i < width; i++) {
    vertex(i, fcurve[i]);
  }
  endShape();


  fill(255,0,100);
  stroke(255,0,100);

  circle(frameIndex,fplot,20);

  // Display the peak frequency in Hz
  textSize(24);
  textAlign(RIGHT);
  fill(0);
  text(peakFreq.toFixed(2) + " Hz", width - 20, 50);
  R = 1.0/(C*peakFreq);
  text(R.toFixed(2) + " Ohms", width - 20, 80);
  gnarl = spectrum[2*peakBin]/spectrum[peakBin];
  text(spectrum[peakBin].toFixed(2) + " peak", width - 20, 120);
  text(gnarl.toFixed(2) + " 2f ratio", width - 20, 150);
  text(integral.toFixed() + " integral", width - 20, 180);


  frameIndex++;
  if(frameIndex > width){
      frameIndex = 0;
  }
}
