function mouseClicked(){
    inputs.press=false
    updateMouse(graphics.main)
    if(!transition.trigger){
        switch(stage.scene){
            case 'roll':
                dice.onClickRoll()
            break
            case 'shop':
                dice.onClickShop()
            break
            case 'select':
                dice.onClickSelect()
            break
        }
    }
}
function mousePressed(){
    inputs.press=true
}