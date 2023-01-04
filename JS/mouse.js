function mouseClicked(){
    inputs.press=false
    updateMouse(graphics.main)
    if(!transition.trigger){
        switch(stage.scene){
            case 'roll':
                dice.onClick()
            break
        }
    }
}
function mousePressed(){
    inputs.press=true
}