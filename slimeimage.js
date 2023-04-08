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
  createCanvas(innerWidth, innerHeight);

  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
    background(0);

    
}

function draw() {

  let spectrum = fft.analyze();
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
            red = 255;
            green = Math.round(z);
            blue = 0;
        }
        if(H >= 60 && H < 120){
            red = Math.round(z);
            green = 255;
            blue = 0;
        }
        if(H >= 120 && H < 180){
            red = 0;
            green = 255;
            blue = Math.round(z);
        }
        if(H >= 180 && H < 240){
            red = 0;    
            green = Math.round(z);
            blue = 255;
        }
        if(H >= 240 && H < 300){
            red = Math.round(z);    
            green = 0;
            blue = 255;
        }
        if(H >= 300 && H < 360){
            red = 255;    
            green = 0;
            blue = Math.round(z);
        }    
    
    stroke(0);
    point(frameIndex,height - 3*i);
//     stroke('rgb(' + red + ',' + green + ',' + blue + ')');
    stroke('rgba(' + red + ',' + green + ',' + blue + ',' + spectrum[i]/10 + ')');
    
    point(frameIndex,height - 3*i);
  }

//  i1000 = 
  frameIndex += 3;
  if(frameIndex > width){
      frameIndex = 0;
  }
}


        