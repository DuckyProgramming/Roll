function mouseClicked(){
    inputs.press=false
    updateMouse(graphics.main)
    if(!transition.trigger){
        switch(stage.scene){
            case 'roll':
                main.onClickRoll()
            break
            case 'shop':
                main.onClickShop()
            break
            case 'select':
                main.onClickSelect()
            break
        }
    }
}
function mousePressed(){
    inputs.press=true
}