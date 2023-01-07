keyPressed=function(){
    if(!transition.trigger){
        switch(stage.scene){
            case 'roll':
                main.onKeyRoll(key,keyCode)
            break
        }
    }
}