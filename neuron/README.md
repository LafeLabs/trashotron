![](https://raw.githubusercontent.com/LafeLabs/trashotron/main/neuron/trashmagic/qrcodes.png)

# [TRASHOTRON OPTICAL NEURON](https://github.com/LafeLabs/trashotron/blob/main/neuron/README.md)

# [home](index.html)

The Trashotron Optical Neuron is a device which picks up light from a screen or the sun and uses it to control a set of 6 digital lines.  The photodiodes which detect the light are arranged in the centers of six 1.5x1.5 inch squares in a 2x3 array.  All this is enclosed in a cardboard stack enclosure constructed using the tools of Geometron and Action Geometry. 

# TRASHOTRON OPTICAL NEURON

![](https://raw.githubusercontent.com/LafeLabs/trashotron/main/trashmagic/optical-neuron-pcbs.png)

Replicate the circuit boards with the following links:

 - [trashotron-optical-neuron.brd](https://raw.githubusercontent.com/LafeLabs/trashotron/main/boards/trashotron-optical-neuron.brd)
 - [trashotron-optical-neuron.sch](https://raw.githubusercontent.com/LafeLabs/trashotron/main/boards/trashotron-optical-neuron.sch) 
 - [buy pcb's at pcbway.com](https://www.pcbway.com/project/shareproject/W224521BSI37_trashotron_optical_neuron_2023_03_06_ae2b0405.html)
- [download zip of gerber files for manufacturing](https://github.com/LafeLabs/trashotron/raw/main/boards/gerber-zip-files-2023-03-06/trashotron-optical-neuron_2023-03-06.zip)

### Kit parts:

- [ribbon cables from amazon](https://www.amazon.com/dp/B0789F2Y1T)
- [100 op amps from amazon](https://www.amazon.com/dp/B082HMTTQX)
- [0.1 inch headers from amazon](https://www.amazon.com/MCIGICM-Header-2-45mm-Arduino-Connector/dp/B07PKKY8BX/)
- [30 megaohm resistors from digikey](https://www.digikey.com/en/products/detail/yageo/HHV-25FR-52-30M/2813033)
- [0.1 uF capacitors from digikey](https://www.digikey.com/en/products/detail/kyocera-avx/SR211C104KARTR1/3066560)
- [pd204-6c photodiodes from digikey](https://www.digikey.com/en/products/detail/everlight-electronics-co-ltd/PD204-6C/2675631)



The optical neuron reads out six PD204-6C photodiodes with three dual-channel [LM358](https://en.wikipedia.org/wiki/LM358) [operational amplifiers](https://en.wikipedia.org/wiki/Operational_amplifier) in the 8 pin DIP configuration.  30 megaohm bias resistors are used to set the gain for the 6 channels.  0.1 microfarad capacitors are used to filter the power supplies.  An 8 pin header connects to the ribbon cable.

The Trashotron Optical Neuron connects to the [trashotron driver](scrolls/driver) by way of an [8 pin ribbon cable](https://www.amazon.com/dp/B0789F2Y1T).

To build a Trashotron Neuron, it's probably best to assemble enough parts to build a bunch because of economies of scale.  Buy at least 10 circuit boards, and it's probably best to get them along with the [driver](scrolls/driver) board and also the [slimezistor](scrolls/slimezistor) as well as the parts for those.  

That said, the optical neuron can also be a product by itself, and can be used with breadboards to do any kind of digital control from a web browser.


When you have all the parts and the boards, assemble them with the parts all on the side with the writing on it and the photodiodes on the opposite side.  Note that the shorter pin is the cathode and also that the flat side as seen from the top is the cathode.  The cathode is the "top" of the board when the writing is all right side up.  Thus when you look on the side opposite the writing, you should see the flats of all the diodes going across the top.  

![](https://raw.githubusercontent.com/LafeLabs/trashotron/main/trashmagic/photodiode-drawing.png)

![](https://raw.githubusercontent.com/LafeLabs/trashotron/main/trashmagic/trashotron-optical-neuron.png)

![](https://raw.githubusercontent.com/LafeLabs/trashotron/main/trashmagic/neuron-bottom-assembled.png)

![](https://raw.githubusercontent.com/LafeLabs/trashotron/main/trashmagic/neuron-on-screen.png)


![](https://raw.githubusercontent.com/LafeLabs/trashotron/main/trashmagic/optical-neuron-pcbs.png)

### FOR THE LID CUT OUT A 3"X4.5" CARDBOARD RECTANGLE, PAINT AS SHOWN  WITH 1.5 INCH SQURES:

![](https://raw.githubusercontent.com/LafeLabs/trashotron/main/trashmagic/optical-neuron-lid.svg)

### LAYOUT OF STACK:

Cut out 5 total rectangles each 4.5x3 inches in size. Note that the board from the [driver](scrolls/driver) is also a geometry tool specifically for the construction of these patterns.  It has squares in the silk screen which are 1.5"x1.5" in size.  The slimezistor board can be used as a geometry tool to make a ruler which can be used along with the neuron board to do all the layout for all three types of rectangle. The lid is just a rectangle with squares marked so they're easy to align on the [trashotron sreen](trashotron.html).  Then you want two units with the six cutouts shown below and two units with the center cut out for the board, which is the same as running a 1/2 inch edge around the center.

![](https://raw.githubusercontent.com/LafeLabs/trashotron/main/trashmagic/neuron-top-layout.svg)

![](https://raw.githubusercontent.com/LafeLabs/trashotron/main/trashmagic/neuron-boxes.svg)

### CUT OUT THREE LAYERS OF THESE AND STACK THEM ABOVE THE BOARD 

![](https://raw.githubusercontent.com/LafeLabs/trashotron/main/trashmagic/neuron-board-cutout.svg)

### BOARD DIMENSIONS:

![](https://raw.githubusercontent.com/LafeLabs/trashotron/main/trashmagic/neuron-board-dimensions.svg)

### LAYER WITH PHOTODIOES PUSHED THROUGH SLITS CUT WITH BOX CUTTER:

![](https://raw.githubusercontent.com/LafeLabs/trashotron/main/trashmagic/photodiode-cutouts.svg)

### 2 LAYERS OF CARDBOARD WITH 1 INCH SQUARES CUT OUT:

![](https://raw.githubusercontent.com/LafeLabs/trashotron/main/trashmagic/optical-cavities-cutout-oneinch.svg)

rectangles cut out so borders are all 1/2 inch:

![](https://raw.githubusercontent.com/LafeLabs/trashotron/main/trashmagic/neuron-board-bottom-cutout.svg)


![](https://raw.githubusercontent.com/LafeLabs/trashotron/main/trashmagic/optical-neuron-qrcode.png)

