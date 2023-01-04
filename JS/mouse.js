function mouseClicked(){
    inputs.press=false
    updateMouse(graphics.main)
    switch(stage.scene){
        case 'roll':
            dice.roll()
        break
    }
}
function mousePressed(){
    inputs.press=true
}