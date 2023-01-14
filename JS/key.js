keyPressed=function(){
    if(!transition.trigger){
        switch(stage.scene){
            case 'roll':
                main.onKeyRoll(key,keyCode)
            break
            case 'shop':
                main.onKeyShop(key,keyCode)
            break
            case 'select':
                main.onKeySelect(key,keyCode)
            break
        }
    }
}