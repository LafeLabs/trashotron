let tones = ["1209","1336","1477","1633","697","770","852","941"]; // DTMF frequencies
let row = ["1", "2", "3", "A"]; // DTMF row labels
let col = ["4", "5", "6", "B"]; // DTMF column labels
let dtmf = ""; // Stores decoded DTMF tone
let lastTone = ""; // Stores the last DTMF tone decoded
let mic;
let debug = true; // Debug mode flag

function setup() {
  createCanvas(400, 400);
  textSize(32);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(220);
  text("DTMF: " + dtmf, 50, 50);
  text("Last tone: " + lastTone, 50, 100);
  
  // Get the current audio input level
  let level = mic.getLevel();
  
  // Calculate the DTMF tone frequencies at the current time
  let frequencies = [];
  for (let i = 0; i < 8; i++) {
    let frequency = (i < 4 ? tones[i] : tones[i-4]);
    frequencies.push(sin(2*PI*frequency*frameCount/60) * level);
  }
  
  // Analyze the current DTMF tone based on the current frequencies
  let tone = -1;
  for (let i = 0; i < row.length; i++) {
    for (let j = 0; j < col.length; j++) {
      let k = i * col.length + j;
      if (frequencies[k] > 0.1 && tone === -1) {
        tone = k;
      } else if (frequencies[k] > 0.1 && tone !== -1) {
        tone = -1;
        break;
      }
    }
    if (tone !== -1) {
      break;
    }
  }

  // If debug mode is enabled, draw the frequency graph and input level meter
  if (debug) {
    let x = 50;
    let y = 150;
    for (let i = 0; i < frequencies.length; i++) {
      fill(frequencies[i] > 0.1 ? "red" : "black");
      rect(x, y, 20, frequencies[i] * 100);
      x += 30;
    }
    fill("blue");
    rect(50, 300, map(level, 0, 1, 0, 300), 50);
  }
  
  // If a valid DTMF tone was found, decode it and update the lastTone and dtmf variables
  if (tone >= 0) {
    let frequency = tones[tone];
    lastTone = row[Math.floor(tone/col.length)] + col[tone%col.length];
    if (dtmf.length >= 1) {
      dtmf += " ";
    }
    dtmf += lastTone;
  }
}

// Toggle debug mode when the 'd' key is pressed
function keyPressed() {
  if (key === 'd') {
    debug = !debug;
  }
}
