function setup(){
    createCanvas(windowWidth-50,windowHeight-50)
    setupGraphics()

    main=new group(graphics.main)
    main.addDie(copyList(types.die.default),12)

    //dice (2)
    //99 decrementor
    //random 1-100 die
    //set all faces
    //10% 1000 lottery
    //1x10 weighted, 1x5 modded die
    //omni multiplier 2-4
    //wild card
    //20% 1/4 omni multiplier lottery
}
function windowResized(){
    resizeCanvas(windowWidth-50,windowHeight-50)
}