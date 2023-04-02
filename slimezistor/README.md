![](https://raw.githubusercontent.com/LafeLabs/trashotron/main/slimezistor/trashmagic/qrcode.png)

# [THE SCROLL OF SLIME](https://github.com/LafeLabs/trashotron/blob/main/slimezistor/README.md)
 
### What is the slimezistor?

The SlimeZistor is a device which allows us to sense our electrical environment using sound.  

### What can this be used for?

 - Getting attention. It is loud and very weird sounding, which gets attention, which can help replicate the whole system
 - Making experimental music. it can be used to create new kinds of sounds which people can integrate into electronic musical systems like modular synthesizers.
 - Building playable synthesizers. It is possible to build a whole electronic synth with a keyboard or other input devices using a  single circuit(which costs under 5 dollars to make)
 - Chemical sensors.  If the surface of an electrode has a film or coating on it  which changes electrical characteristics when a chemical is present, that chemical can be sensed in real time, and used for feedback loops in control of chemical and electrochemical processes.
 - Circuit fabrication. This is the primary reason for the existence of this technology. By building feedback loops between the electrical sensor and the trajectory of some kind of electromechanical probe over a sample, we can evolve the sample over time toward some kind of circuit function objective.  This can be applied to the drying out of a wet sample, crystal growth, mycelium growth, plant growth, or any other kind of process by which structures are formed over time.  
 - Physics studies nonlinear characteristics of various systems.  Linear devices will have a filtered version of a simple sawtooth wave.  As devices get more and more nonlinear, the shape of the wave will change, and harmonics will appear.  These harmonics can be used to learn what kinds of electrical dynamics are present in a system. These systems can then be integrated into the electrical fabrication process above.

### How does the SlimeZistor work?

The slimezistor is a [relaxation oscillator](https://en.wikipedia.org/wiki/Relaxation_oscillator) in which a capacitor is charged and discharged through some type of slime which is connected to a pair of electrodes.  The resistance of the slime determines the rate of charge/discharge of the capacitor and hence the frequency.  Any nonlinearities in the current-voltage characteristic of the slime are represented by changes in the frequency components in the output signal on the speaker.  

Thus we are creating a sort of synthesizer in which the frequency of the tone is set by the resistance of the slime and the shape of the waveform is set by the nonlinear characteristics or time dependent dynamics of the slime system.

The slimezistor has a USB power input which can be driven directly off a solar USB charger, and has an audio output cable which can go into a speaker on battery(like a Bluetooth speaker).  Then there are two electrodes coming out of the square which connect to the slime.  The enclosure is made from a stack of 4 inch squares of corrugated cardboard we can get from trash.  We can distribute the slimezistor using the TRASH CARTS.

### How do we build these?

We must first create kits for distribution. To do that we will do decentralized manufacturing, where people all over the world will buy the circuit boards and parts and sell kits to people who will assemble the kits and sell the completed slimezistor as a synth unit.

You can either buy the circuit boards in a bulk order from pcbway.com or you can modify the designs in Eagle and get your own made.

 - [buy boards from pcbway.com](https://www.pcbway.com/project/shareproject/SlimeZistor_d6c918ee.html)
 - [download Eagle .brd file](https://raw.githubusercontent.com/LafeLabs/trashotron/main/boards/trashotron-slimezistor.brd)
 - [download Eagle .sch file](https://raw.githubusercontent.com/LafeLabs/trashotron/main/boards/trashotron-slimezistor.sch) 
 - [zip of Gerber files](https://github.com/LafeLabs/trashotron/raw/main/boards/gerber-zip-files-2023-03-06/trashotron-slimezistor_2023-03-06.zip)

The needed parts for this kit are LM358 op amps, 10k axial resistors, 0.1 microfarad capacitors, 0.47 microfarad capacitors, and 10 microfarad capacitors, as well as some headers and USB cables we get from the trash and audio cables we get from the trash and speakers we find or get from the trash.  

We will assemble kits and distribute them.  You can buy all the parts for a kit and give the kits away or sell them and assemble them into slimezistors which you give away or sell.  

We color code the boards and capacitors using a paint pen and color the 0.1 uF capacitors red, the 0.47 uF capacitors green, and the 10 uF capacitors blue.  Then we do this on the board as well. Note that 0.1 uF is "104" in the capacitor code, which represents 10 times 10 to the fourth power picofarads, which is 1e5 times 1e-12 or 1e-7 or 0.1e-6. Similarly, 0.47 uF is "474" and 10 uF is "106".

These are the kit parts:

![](https://raw.githubusercontent.com/LafeLabs/trashotron/main/trashmagic/slimezistor-kit-parts.png)

Here are links to buy the parts from amazon(enough for about 50 units for about 40 dollars):

 - [$15 bojack capacitor kit](https://www.amazon.com/BOJACK-Ceramic-Capacitor-Assortment-Capacitors/dp/B07P7HRGT9/)
 - [$6.32 10k resistors 100 units](https://www.amazon.com/Projects-100EP51210K0-10k-Resistors-Pack/dp/B0185FIOTA/)
 - [$10 50 pin 0.1 inch pitch right angle header strips](https://www.amazon.com/Yohii-Single-Right-Header-Connector/dp/B07C89T16T/)
 - [$7 50 units LM358P op amps](https://www.amazon.com/BOJACK-LM358P-Operational-Amplifier-LM358N/dp/B07WQWPLSP/)
 - [$90 Digikey cart link with part set for 100 units](https://www.digikey.com/short/44n3w1tp)

Having gathered the electrical parts, you want to use the circuit board to make a 1x4 inch ruler from cereal box cardboard, which you will use to construct a square with a hole in it which can be used to replicate all the layers of the enclosure.  

Use the ruler to make a 4 inch square with a 1x2 inch cutout in the center which the circuit board will sit in.  Cut it all out with a box cutter.  Make three of those: one which will sit directly around the circuit board, one which will be cut up and surround the wires in and wires out and one for replication.  Copy the schematic on paper, cut that out and glue to the bottom.  Copy the top as shown.  Make extras with cardboard trash that you can give away or sell on the street, connected to the trash servers and trash books.


Color codes:

![](https://raw.githubusercontent.com/LafeLabs/trashotron/main/trashmagic/slimezistor-pcb-photo2.png)

![](https://raw.githubusercontent.com/LafeLabs/trashotron/main/trashmagic/slimezistor-capacitor-1.png)

![](https://raw.githubusercontent.com/LafeLabs/trashotron/main/trashmagic/slimezistor-capacitor-2.png)

![](https://raw.githubusercontent.com/LafeLabs/trashotron/main/trashmagic/slimezistor-capacitor-3.png)


Tiktok electronics assembly video sequence:

 - [part 1](https://www.tiktok.com/@trash_robot/video/7211991737861016874)
 - [part 2](https://www.tiktok.com/@trash_robot/video/7211994523478658350)
 - [part 3](https://www.tiktok.com/@trash_robot/video/7211997833069710635)
 - [part 4](https://www.tiktok.com/@trash_robot/video/7212001378787527978)


The enclosure is made from 4 squares each 4x4 inches in size cut from corrugated cardboard using the tools of Geometron:

![](https://raw.githubusercontent.com/LafeLabs/trashotron/main/trashmagic/slimezistor-box-assembly-parts.png)

Stack and glue with Elmer's glue or wheat paste:

![](https://raw.githubusercontent.com/LafeLabs/trashotron/main/trashmagic/slimezistor-box-assembly-2layers.png)

Second layer:

![](https://raw.githubusercontent.com/LafeLabs/trashotron/main/trashmagic/slimezistor-box-assembly-3layers.png)

Add the circuit board to the box before adding the lid:

![](https://raw.githubusercontent.com/LafeLabs/trashotron/main/trashmagic/slimezistor-box-assembly-withboard.png)

Schematic on the bottom(important documentation!):

![](https://raw.githubusercontent.com/LafeLabs/trashotron/main/trashmagic/slimezistor-schematic-bottomsquare.png)

Full assembly with lid and rubber bands:

![](https://raw.githubusercontent.com/LafeLabs/trashotron/main/trashmagic/slimezistor-box-assembly-assembled.png)

Fully assembled system with speaker connected to audio output and a solar panel connected to the USB power:

![](https://raw.githubusercontent.com/LafeLabs/trashotron/main/trashmagic/slimezistor-sand.png)

![](https://raw.githubusercontent.com/LafeLabs/trashotron/main/trashmagic/slimezistor-board-photo.png)


If you want to not buy circuit boards, you can use cardboard cereal boxes as boards instead, with the following design:

The circuit board is a 1x2 inch rectangle cut out of thin cardboard like a cereal box:

![](https://raw.githubusercontent.com/LafeLabs/trashotron/main/trashmagic/slimezistor-trashboard-photo.png)

Remove pins 1,2, and 3 of the 8 pin IC:

![](https://raw.githubusercontent.com/LafeLabs/trashotron/main/trashmagic/slimezistor-chip-legs-clipped1.png)

![](https://raw.githubusercontent.com/LafeLabs/trashotron/main/trashmagic/slimezistor-chip-legs-clipped2.png)

![](https://raw.githubusercontent.com/LafeLabs/trashotron/main/trashmagic/slimezistor-chip-legs-clipped3.png)

Assemble as follows, with 0.1 uF capacitor to the far left, then 1 uF and then the two to the far right which are horizontal are the 10 uF capacitors:

![](https://raw.githubusercontent.com/LafeLabs/trashotron/main/trashmagic/slimezistor-trashboard-assembled.png)

This is a 5x blowup of the board, with parts labeled. Replicate this as a tool for replication to carry with you as you replicate the set:

![](https://raw.githubusercontent.com/LafeLabs/trashotron/main/trashmagic/slimezistor-board-5x.png)

An array can also be cut out using a laser cutter with the following .svg file(cut out a 4 inch square of this, with the blue layer as raster and black layer as cut):

![](https://raw.githubusercontent.com/LafeLabs/trashotron/main/trashmagic/slimezistor-trashboards-2x4.svg)

Here is an .svg of just one board:

![](https://raw.githubusercontent.com/LafeLabs/trashotron/main/trashmagic/slimezistor-circuit-trash.svg)

This is what the bottom looks like after full assembly:

![](https://raw.githubusercontent.com/LafeLabs/trashotron/main/trashmagic/slimezistor-board-bottom.png)

You can also make this work using just an Adafruit Circuit Playground:


# THE "TRASH THERAMIN"

BUY OR GET DONATED AN [ADAFRUIT  CIRCUIT PLAYGROUND EXPRESS BOARD ](https://www.adafruit.com/product/3333) AND [USB CABLE](https://www.adafruit.com/product/592) FROM ADAFRUIT...IF THEY'RE IN STOCK, WHICH THEY NEVER ARE...

[...IF ADAFRUIT IS SOLD OUT CHECK DIGIKEY FOR STOCK](https://www.digikey.com/en/products/detail/adafruit-industries-llc/3517/7310915)  THE KIT FROM DIGIKEY COMES WITH THE USB CABLE AND A BATTERY PACK AND BATTERIES, WHICH IS USEFUL!  


THE DEVICE UNDER TEST IS THE CONNECTION BETWEEN THE A0 AND A1(DIGITAL PIN 6) PIN!

### PINOUT FOR CIRCUIT PLAYGROUND EXPRESS:

![](https://cdn-learn.adafruit.com/assets/assets/000/047/156/large1024/circuit_playground_Adafruit_Circuit_Playground_Express_Pinout.png?1507829017)

### TOP OF BOARD, NOTE LOCATION OF A0 AND A1 IN LOWER RIGHT QUADRANT:

![](https://cdn-shop.adafruit.com/970x728/3333-03.jpg)

ON THE BOTTOM OF THE BOARD, THE ELECTRODES WHICH ARE BEING MEASURED ARE IN THE LOWER LEFT QUADRANT, ABOVE AND TO THE LEFT OF THE "C" IN "CIRCUIT PLAYGROUND"

![](https://cdn-shop.adafruit.com/970x728/3333-06.jpg)

[DOWNLOAD AND INSTALL THE ARDUINO SOFTWARE FROM ARDUINO.CC](https://wiki-content.arduino.cc/en/software)

[SET UP ARDUINO FOR THE CIRCUIT PLAYGROUND EXPRESS IN ORDER TO INSTALL THE SLIMEZISTOR ON THE BOARD](https://learn.adafruit.com/adafruit-circuit-playground-express/set-up-arduino-ide)

COPY AND PASTE THE CODE BELOW INTO THE ARDUINO IDE AND UPLOAD IT:

```
int outpin = 6;
int x0 = 0;//value of analog pin A0
int vmin = 250;//upper voltage trigger to toggle digital LOW
int vmax = 750;//lower voltage trigger to toggle digital HIGH

void setup() {

    pinMode(outpin,OUTPUT);
    digitalWrite(outpin,LOW);
    Serial.begin(115200);

}

void loop() {
  x0 = analogRead(A0);
  if(x0 > vmax){
    digitalWrite(outpin,LOW);  
  }
  if(x0 < vmin){
    digitalWrite(outpin,HIGH);
  }
  Serial.println(x0);

}
```

TO TEST, OPEN THE SERIAL PLOTTER, BE SURE TO SET THE BAUD RATE TO 115200, AND OBSERVE THE DATA!

GROW MYCELIUM IN THE SPACE ALONG THE BOARD BETWEEN THE A1 AND A0 ELECTRODES!  

PUT A MICROPHONE(COULD BE FROM A SMART PHONE) RIGHT NEXT TO THE SPEAKER!

RECORD THE SOUND WITH A LIVESTREAM AND USE THAT AS A DATASET FOR THE WHOLE INTERNET TO PLAY WITH TO MAKE MUSIC AND ALSO 3D AND 4D POINT CLOUDS FOR BLENDER, VECTOR GRAPHICS GRAPHS FOR INKSCAPE, AND  BITMAP IMAGES FOR MEMES!

COMBINE WITH TIMELAPS MICROSCOPE IMAGES OF THE GROWING MYCELIUM ON THE BOARD!

INSTALL JUPYTER ON YOUR MACHINE!

CONNECT TO THE SERIAL!

USE THE FOLLOWING CODE IN A JUPYTER NOTEBOOK CELL TO RECORD 1 SECOND OF DATA AND PLOT IT!  THIS IS VERY BAD CODE IT LOSES MOST OF THE POINTS! FIX THIS CODE!


```
import serial
import json
import time
import matplotlib.pyplot as plt

# Open the serial port at 115200 baud rate
ser = serial.Serial('COM16', 115200)

# Initialize variables for recording data
data = []
start_time = time.time()
end_time = start_time + 1

# Record data for 10 seconds
while time.time() < end_time:
    line = ser.readline()
    data.append(line.decode().strip())

# Close the serial port
ser.close()

# Save the data as a JSON object
with open('data.json', 'w') as f:
    json.dump(data, f)

# Plot the data
plt.plot(data)
plt.show()
```


