cellSize  = 200;
function setup() {
    createCanvas(cellSize*3, cellSize*2);
}

framesPerSecond= 30;//
side = 30;
en1 = false;
en2 = true;
en3 = true;
dir1 = false;
dir2 = false;
dir3 = false;
sideIndex = 0;
function draw() {
    frameRate(framesPerSecond);//frames per second
    background(0);
    //move to the left for "side" frames
    fill(255);
    if(en1){
        rect(0, 0, cellSize, cellSize);//
    }
    if(en2){
        rect(cellSize, 0, cellSize, cellSize);//
    }
    if(en3){
        rect(2*cellSize, 0, cellSize, cellSize);//
    }
    if(dir1){
        rect(0, cellSize, cellSize, cellSize);//
    }
    if(dir2){
        rect(cellSize, cellSize, cellSize, cellSize);//
    }
    if(dir3){
        rect(2*cellSize, cellSize, cellSize, cellSize);//
    }


    sideIndex++;
    if(sideIndex == side){
        sideIndex = 0;
        dir1 = !dir1;
    }    
    
}
