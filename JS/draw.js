function draw(){
    clear()
    switch(graphics.style){
        case 0:
            background(190,247,252)
        break
        case 1:
            background(180)
        break
    }
    graphics.main.clear()
    switch(stage.scene){
        case 'menu':
        break
        case 'roll':
            switch(graphics.style){
                case 0:
                    graphics.main.background(214,249,252)
                break
                case 1:
                    graphics.main.background(200)
                break
            }
            dice.display()
        break
        case 'shop':
        break
    }
    displayTransition(graphics.main,transition)
    stage.scale=min(width/graphics.main.width,height/graphics.main.height)
    image(graphics.main,width/2-stage.scale*graphics.main.width/2,height/2-stage.scale*graphics.main.height/2,stage.scale*graphics.main.width,stage.scale*graphics.main.height)
    updateMouse(graphics.main)
}