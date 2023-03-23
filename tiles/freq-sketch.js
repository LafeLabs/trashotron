/**
 * @name Frequency Spectrum
 * @description <p>Visualize the frequency spectrum of live audio input.</p>
 * <p><em><span class="small"> To run this example locally, you will need the
 * <a href="http://p5js.org/reference/#/libraries/p5.sound">p5.sound library</a>
 * and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">local server</a>.</span></em></p>
 */
let mic, fft;

function setup() {
  createCanvas(710, 400);
  noFill();

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
  for (let i = 1; i < spectrum.length; i++) {
    if (spectrum[i] > spectrum[peakBin]) {
      peakBin = i;
    }
  }

  // Calculate the peak frequency in Hz
  let nyquistFreq = sampleRate() / 2;
  let binFreq = nyquistFreq / (spectrum.length / 2);
  let peakFreq = binFreq * peakBin;

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
