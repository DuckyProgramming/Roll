function setup(){
    createCanvas(windowWidth-50,windowHeight-50)
    setupGraphics()

    main=new group(graphics.main)
    main.addDie(copyList(types.die.default),12)
}
function windowResized(){
    resizeCanvas(windowWidth-50,windowHeight-50)
}