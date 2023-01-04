function displayTransition(layer,transition){
    layer.noStroke()
    layer.fill(255,transition.anim)
    layer.rect(layer.width/2,layer.height/2,layer.width,layer.height)
    if(transition.trigger){
        transition.anim=round(transition.anim*10+1)/10
        if(transition.anim>1){
            transition.trigger=false
            stage.scene=transition.scene
        }
    }else if(transition.anim>0){
        transition.anim=round(transition.anim*10-1)/10
    }
}
function displaySide(layer,side,color){
    layer.fill(color[0],color[1],color[2],side.fade)
    switch(side.type){
        case 1:
            if(side.value[0]==1){
                layer.ellipse(0,0,16,16)
            }else if(side.value[0]==2){
                layer.ellipse(-30,-30,16,16)
                layer.ellipse(30,30,16,16)
            }else if(side.value[0]==3){
                layer.ellipse(-30,-30,16,16)
                layer.ellipse(0,0,16,16)
                layer.ellipse(30,30,16,16)
            }else if(side.value[0]==4){
                layer.ellipse(-30,-30,16,16)
                layer.ellipse(30,30,16,16)
                layer.ellipse(-30,30,16,16)
                layer.ellipse(30,-30,16,16)
            }else if(side.value[0]==5){
                layer.ellipse(-30,-30,16,16)
                layer.ellipse(30,30,16,16)
                layer.ellipse(0,0,16,16)
                layer.ellipse(-30,30,16,16)
                layer.ellipse(30,-30,16,16)
            }else if(side.value[0]==6){
                layer.ellipse(-30,-30,16,16)
                layer.ellipse(30,30,16,16)
                layer.ellipse(-30,0,16,16)
                layer.ellipse(30,0,16,16)
                layer.ellipse(-30,30,16,16)
                layer.ellipse(30,-30,16,16)
            }else if(side.value[0]==7){
                layer.ellipse(-30,-30,16,16)
                layer.ellipse(30,30,16,16)
                layer.ellipse(-30,0,16,16)
                layer.ellipse(0,-30,16,16)
                layer.ellipse(0,30,16,16)
                layer.ellipse(30,0,16,16)
                layer.ellipse(-30,30,16,16)
                layer.ellipse(30,-30,16,16)
            }else if(side.value[0]==8){
                layer.ellipse(-30,-30,16,16)
                layer.ellipse(30,30,16,16)
                layer.ellipse(-30,0,16,16)
                layer.ellipse(0,-30,16,16)
                layer.ellipse(0,0,16,16)
                layer.ellipse(0,30,16,16)
                layer.ellipse(30,0,16,16)
                layer.ellipse(-30,30,16,16)
                layer.ellipse(30,-30,16,16)
            }else{
                layer.textSize(50)
                layer.text(side.value[0],0,0)
            }
        break
    }
}
function pointInsideBox(point,box){
	if(point.position.x>box.position.x-box.width/2&&point.position.x<box.position.x+box.width/2&&point.position.y>box.position.y-box.height/2&&point.position.y<box.position.y+box.height/2){
		return true
	}
	else{
		return false
	}
}
function updateMouse(layer){
    inputs.mouse.x=mouseX
    inputs.mouse.y=mouseY
    inputs.rel.x=(inputs.mouse.x-width/2)/scale+layer.width/2
    inputs.rel.y=(inputs.mouse.y-height/2)/scale+layer.height/2
}