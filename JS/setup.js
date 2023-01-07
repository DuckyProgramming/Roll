function setup(){
    createCanvas(windowWidth-50,windowHeight-50)
    setupGraphics()

    main=new group(graphics.main)
    main.addDie(copyList(types.die.default),12)

    //wild card
    //20% 1/4 omni multiplier lottery
    //die adder?
}
function windowResized(){
    resizeCanvas(windowWidth-50,windowHeight-50)
}