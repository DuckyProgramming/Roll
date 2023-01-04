function setup(){
    createCanvas(windowWidth-50,windowHeight-50)
    setupGraphics()

    dice=new group(graphics.main)
    dice.addDie([
        {type:1,value:[1]},
        {type:1,value:[2]},
        {type:1,value:[3]},
        {type:1,value:[4]},
        {type:1,value:[5]},
        {type:1,value:[6]},
    ])
}
function windowResized(){
    resizeCanvas(windowWidth-50,windowHeight-50)
}