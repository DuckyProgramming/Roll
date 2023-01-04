function setupLayer(layer){
    layer.angleMode(DEGREES)
    layer.textAlign(CENTER,CENTER)
    layer.rectMode(CENTER)
    layer.colorMode(RGB,255,255,255,1)
}
function setupGraphics(){
    angleMode(DEGREES)
    textAlign(CENTER,CENTER)
    rectMode(CENTER)
    colorMode(RGB,255,255,255,1)
    graphics.main=createGraphics(900,600)
    setupLayer(graphics.main)
}