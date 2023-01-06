function draw(){
    clear()
    background(types.style[graphics.style].background[0][0],types.style[graphics.style].background[0][1],types.style[graphics.style].background[0][2])
    graphics.main.clear()
    graphics.main.background(types.style[graphics.style].background[1][0],types.style[graphics.style].background[1][1],types.style[graphics.style].background[1][2])
    switch(stage.scene){
        case 'menu':
            main.displayMenu()
        break
        case 'roll':
            main.displayRoll()
            main.updateRoll()
        break
        case 'shop':
            main.displayShop()
        break
        case 'select':
            main.displaySelect()
        break
    }
    displayTransition(graphics.main,transition)
    stage.scale=min(width/graphics.main.width,height/graphics.main.height)
    image(graphics.main,width/2-stage.scale*graphics.main.width/2,height/2-stage.scale*graphics.main.height/2,stage.scale*graphics.main.width,stage.scale*graphics.main.height)
    updateMouse(graphics.main)
}