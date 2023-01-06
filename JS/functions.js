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
function displaySide(layer,x,y,side,color,fade){
    layer.translate(x,y)
    layer.fill(color[0],color[1],color[2],fade)
    layer.noStroke()
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
                layer.ellipse(0,0,16,16)
                layer.ellipse(30,0,16,16)
                layer.ellipse(-30,30,16,16)
                layer.ellipse(30,-30,16,16)
            }else if(side.value[0]==8){
                layer.ellipse(-30,-30,16,16)
                layer.ellipse(30,30,16,16)
                layer.ellipse(-30,0,16,16)
                layer.ellipse(0,-30,16,16)
                layer.ellipse(0,30,16,16)
                layer.ellipse(30,0,16,16)
                layer.ellipse(-30,30,16,16)
                layer.ellipse(30,-30,16,16)
            }else if(side.value[0]==9){
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
    layer.translate(-x,-y)
}
function displayItem(layer,item,x,y,flag){
    layer.translate(x,y)
    layer.noStroke()
    if(flag){
        layer.fill(types.style[graphics.style].point[0],types.style[graphics.style].point[1],types.style[graphics.style].point[2])
        layer.rect(0,0,88,88,14)
    }
    layer.fill(types.style[graphics.style].item[0],types.style[graphics.style].item[1],types.style[graphics.style].item[2])
    layer.rect(0,0,80,80,10)
    switch(item.type){
        case 0:
            layer.noFill()
            layer.stroke(types.style[graphics.style].no[0],types.style[graphics.style].no[1],types.style[graphics.style].no[2])
            layer.strokeWeight(8)
            layer.ellipse(0,0,48,48)
            layer.line(-12*sqrt(2),-12*sqrt(2),12*sqrt(2),12*sqrt(2))
        break
        case 1:
            layer.noFill()
            layer.stroke(types.style[graphics.style].no[0],types.style[graphics.style].no[1],types.style[graphics.style].no[2])
            layer.strokeWeight(8)
            layer.line(-20,-20,20,20)
            layer.line(-20,20,20,-20)
        break
        case 2:
            layer.fill(types.style[graphics.style].background[1][0],types.style[graphics.style].background[1][1],types.style[graphics.style].background[1][2])
            layer.rect(0,0,50,50,6)
            layer.fill(types.style[graphics.style].item[0],types.style[graphics.style].item[1],types.style[graphics.style].item[2])
            layer.rect(0,0,40,40,5)
        break
        case 3:
            layer.fill(types.style[graphics.style].refresh[0],types.style[graphics.style].refresh[1],types.style[graphics.style].refresh[2])
            layer.triangle(0,-12,0,-32,10,-22)
            layer.triangle(0,12,0,32,-10,22)
            layer.noFill()
            layer.stroke(types.style[graphics.style].refresh[0],types.style[graphics.style].refresh[1],types.style[graphics.style].refresh[2])
            layer.strokeWeight(8)
            layer.arc(0,0,44,44,135,270)
            layer.arc(0,0,44,44,-45,90)
        break
        case 4:
            layer.fill(types.style[graphics.style].point[0],types.style[graphics.style].point[1],types.style[graphics.style].point[2])
            layer.textSize(40)
            layer.text('+'+item.value[0],0,0)
        break
    }
    layer.translate(-x,-y)
}
function pointInsideBox(point,box){
	if(point.position.x>box.position.x-box.width/2&&point.position.x<box.position.x+box.width/2&&point.position.y>box.position.y-box.height/2&&point.position.y<box.position.y+box.height/2){
		return true
	}
	else{
		return false
	}
}
function numberForm(number){
    if(number>=1000000000000){
        return nfc(round(number/1000000000))+'B'
    }else if(number>=1000000000){
        return nfc(round(number/1000000))+'M'
    }else if(number>=1000000){
        return nfc(round(number/1000))+'K'
    }else{
        return nfc(number)
    }
}
function updateMouse(layer){
    inputs.mouse.x=mouseX
    inputs.mouse.y=mouseY
    inputs.rel.x=(inputs.mouse.x-width/2)/stage.scale+layer.width/2
    inputs.rel.y=(inputs.mouse.y-height/2)/stage.scale+layer.height/2
}