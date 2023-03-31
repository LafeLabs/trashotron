/**
 * @name Frequency Spectrum
 * @description <p>Visualize the frequency spectrum of live audio input.</p>
 * <p><em><span class="small"> To run this example locally, you will need the
 * <a href="http://p5js.org/reference/#/libraries/p5.sound">p5.sound library</a>
 * and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">local server</a>.</span></em></p>
 */
let mic, fft;



cellSize = 200;
if(innerHeight > innerWidth){
    portraitMode = true;
}
else{
    portraitMode = false;
}

function setup() {
  createCanvas(3*cellSize, 2*cellSize);
  noFill();

  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
}
function draw() {
//  background(159,144,103);
  background(0);
  let spectrum = fft.analyze();

  // Find the peak frequency bin
  let peakBin = 0;
  for (let i = 1; i < spectrum.length; i++) {
    if (spectrum[i] > spectrum[peakBin]) {
      peakBin = i;
    }
  }

  // Calculate the peak frequency in Hz
  let nyquistFreq = sampleRate() / 2;
  let binFreq = nyquistFreq / (spectrum.length);
  let peakFreq = binFreq * peakBin;


  setTrashotron(false,false,false,true,true,true,portraitMode,cellSize);


  if(peakFreq > 150 && peakFreq < 250){
    setTrashotron(true,false,false,true,true,true,portraitMode,cellSize);
  }
  if(peakFreq > 250 && peakFreq < 350){
    setTrashotron(true,false,false,false,true,true,portraitMode,cellSize);
  }
  if(peakFreq > 350 && peakFreq < 450){
    setTrashotron(false,true,false,true,true,true,portraitMode,cellSize);
  }
  if(peakFreq > 450 && peakFreq < 550){
    setTrashotron(false,true,false,true,false,true,portraitMode,cellSize);
  }
  if(peakFreq > 550 && peakFreq < 650){
    setTrashotron(false,false,true,true,true,true,portraitMode,cellSize);
  }
  if(peakFreq > 650 && peakFreq < 750){
    setTrashotron(false,false,true,true,true,false,portraitMode,cellSize);
  }

  beginShape();
  for (let i = 0; i < spectrum.length; i++) {
    vertex(i, map(spectrum[i], 0, 255, height, 0));
  }
  endShape();
  // Display the peak frequency in Hz
  textSize(24);
  textAlign(RIGHT);
  fill(0);
  text(peakFreq.toFixed(2) + " Hz", width - 20, 50);

}

function setTrashotron(en1,en2,en3,dir1,dir2,dir3,portrait,cellSize){
    if(!portrait){
        resizeCanvas(3*cellSize,2*cellSize);
    }
    else{
        resizeCanvas(2*cellSize,3*cellSize);
    }
    if(en1){//true=black, false=white
        fill(0);//black
        if(!portrait){//landscape
            rect(0,0, cellSize, cellSize);//upper left
        }
        else{//portrait
            rect(cellSize,0, cellSize, cellSize);//upper right
        }
    }
    else{
        fill(255);//white        
        if(!portrait){//landscape
            rect(0,0, cellSize, cellSize);//upper left
        }
        else{//portrait
            rect(cellSize,0, cellSize, cellSize);//upper right
        }
    }

    if(dir1){//true=black, false=white
        fill(0);//black
        if(!portrait){//landscape
            rect(0,cellSize, cellSize, cellSize);//lower left
        }
        else{//portrait
            rect(0,0, cellSize, cellSize);//upper left
        }
    }
    else{
        fill(255);//white        
        if(!portrait){//landscape
            rect(0,cellSize, cellSize, cellSize);//lower left
        }
        else{//portrait
            rect(0,0, cellSize, cellSize);//upper left
        }
    }
    if(en2){//true=black, false=white
        fill(0);//black
        if(!portrait){//landscape
            rect(cellSize,0, cellSize, cellSize);//upper middle
        }
        else{//portrait
            rect(cellSize,cellSize, cellSize, cellSize);//right middle
        }
    }
    else{
        fill(255);//white        
        if(!portrait){//landscape
            rect(cellSize,0, cellSize, cellSize);//upper middle
        }
        else{//portrait
            rect(cellSize,cellSize, cellSize, cellSize);//right middle
        }
    }
    if(dir2){//true=black, false=white
        fill(0);//black
        if(!portrait){//landscape
            rect(cellSize,cellSize, cellSize, cellSize);//bottom  middle
        }
        else{//portrait
            rect(0,cellSize, cellSize, cellSize);//left middle
        }
    }
    else{
        fill(255);//white        
        if(!portrait){//landscape
            rect(cellSize,cellSize, cellSize, cellSize);//bottom  middle
        }
        else{//portrait
            rect(0,cellSize, cellSize, cellSize);//left middle
        }
    }
    if(en3){//true=black, false=white
        fill(0);//black
        if(!portrait){//landscape
            rect(2*cellSize,0, cellSize, cellSize);//upper right
        }
        else{//portrait
            rect(cellSize,2*cellSize, cellSize, cellSize);//lower right
        }
    }
    else{
        fill(255);//white        
        if(!portrait){//landscape
            rect(2*cellSize,0, cellSize, cellSize);//upper right
        }
        else{//portrait
            rect(cellSize,2*cellSize, cellSize, cellSize);//lower right
        }
    }

    if(dir3){//true=black, false=white
        fill(0);//black
        if(!portrait){//landscape
            rect(2*cellSize,cellSize, cellSize, cellSize);//lower right
        }
        else{//portrait
            rect(0,2*cellSize, cellSize, cellSize);//lower left
        }
    }
    else{
        fill(255);//white        
        if(!portrait){//landscape
            rect(2*cellSize,cellSize, cellSize, cellSize);//lower right
        }
        else{//portrait
            rect(0,2*cellSize, cellSize, cellSize);//lower left
        }
    }    
}
