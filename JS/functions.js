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
function displaySide(layer,x,y,size,side,color,fade){
    layer.translate(x,y)
    layer.scale(size)
    layer.fill(color[0],color[1],color[2],fade)
    layer.noStroke()
    switch(side.type){
        case 1:
            if(side.value[0]==1){
                layer.ellipse(0,0,12,12)
            }else if(side.value[0]==2){
                layer.ellipse(-25,-25,12,12)
                layer.ellipse(25,25,12,12)
            }else if(side.value[0]==3){
                layer.ellipse(-25,-25,12,12)
                layer.ellipse(0,0,12,12)
                layer.ellipse(25,25,12,12)
            }else if(side.value[0]==4){
                layer.ellipse(-25,-25,12,12)
                layer.ellipse(25,25,12,12)
                layer.ellipse(-25,25,12,12)
                layer.ellipse(25,-25,12,12)
            }else if(side.value[0]==5){
                layer.ellipse(-25,-25,12,12)
                layer.ellipse(25,25,12,12)
                layer.ellipse(0,0,12,12)
                layer.ellipse(-25,25,12,12)
                layer.ellipse(25,-25,12,12)
            }else if(side.value[0]==6){
                layer.ellipse(-25,-25,12,12)
                layer.ellipse(25,25,12,12)
                layer.ellipse(-25,0,12,12)
                layer.ellipse(25,0,12,12)
                layer.ellipse(-25,25,12,12)
                layer.ellipse(25,-25,12,12)
            }else if(side.value[0]==7){
                layer.ellipse(-25,-25,12,12)
                layer.ellipse(25,25,12,12)
                layer.ellipse(-25,0,12,12)
                layer.ellipse(0,0,12,12)
                layer.ellipse(25,0,12,12)
                layer.ellipse(-25,25,12,12)
                layer.ellipse(25,-25,12,12)
            }else if(side.value[0]==8){
                layer.ellipse(-25,-25,12,12)
                layer.ellipse(25,25,12,12)
                layer.ellipse(-25,0,12,12)
                layer.ellipse(0,-25,12,12)
                layer.ellipse(0,25,12,12)
                layer.ellipse(25,0,12,12)
                layer.ellipse(-25,25,12,12)
                layer.ellipse(25,-25,12,12)
            }else if(side.value[0]==9){
                layer.ellipse(-25,-25,12,12)
                layer.ellipse(25,25,12,12)
                layer.ellipse(-25,0,12,12)
                layer.ellipse(0,-25,12,12)
                layer.ellipse(0,0,12,12)
                layer.ellipse(0,25,12,12)
                layer.ellipse(25,0,12,12)
                layer.ellipse(-25,25,12,12)
                layer.ellipse(25,-25,12,12)
            }else{
                layer.textSize(50)
                layer.text(side.value[0],0,0)
            }
        break
        case 2:
            layer.fill(types.style[graphics.style].die[0][0]*0.8,types.style[graphics.style].die[0][1]*0.8,types.style[graphics.style].die[0][2]*0.8)
            layer.rect(-20,0,18,18,3)
            layer.fill(types.style[graphics.style].point[0],types.style[graphics.style].point[1],types.style[graphics.style].point[2])
            layer.textSize(30)
            layer.text('x'+side.value[0],8,0)
            layer.textSize(15)
            layer.text('?',-20,1)
        break
        case 3:
            layer.fill(types.style[graphics.style].die[0][0]*0.8,types.style[graphics.style].die[0][1]*0.8,types.style[graphics.style].die[0][2]*0.8)
            layer.rect(-22,0,18,18,3)
            layer.fill(types.style[graphics.style].point[0],types.style[graphics.style].point[1],types.style[graphics.style].point[2])
            layer.textSize(24)
            layer.text('x'+side.value[0],10,0)
            layer.textSize(15)
            layer.text('#',-22,1)
        break
        case 4:
            layer.fill(types.style[graphics.style].die[0][0]*0.8,types.style[graphics.style].die[0][1]*0.8,types.style[graphics.style].die[0][2]*0.8)
            layer.rect(0,0,12,36)
            layer.rect(0,0,36,12)
            layer.triangle(-12,-18,12,-18,0,-30)
            layer.triangle(-18,-12,-18,12,-30,0)
            layer.triangle(12,18,-12,18,0,30)
            layer.triangle(18,12,18,-12,30,0)
            layer.fill(types.style[graphics.style].point[0],types.style[graphics.style].point[1],types.style[graphics.style].point[2])
            layer.textSize(15)
            layer.text('x'+side.value[0],0,1)
        break
    }
    if(side.inc>0){
        layer.fill(types.style[graphics.style].inc[0],types.style[graphics.style].inc[1],types.style[graphics.style].inc[2])
        layer.triangle(-44,-42,-36,-42,-40,-46)
        layer.rect(-40,-38,2,8)
        layer.fill(types.style[graphics.style].point[0],types.style[graphics.style].point[1],types.style[graphics.style].point[2])
        layer.textSize(3)
        layer.text(side.inc,-40,-40)
    }
    if(side.multi>1){
        layer.fill(types.style[graphics.style].point[0],types.style[graphics.style].point[1],types.style[graphics.style].point[2])
        layer.textSize(15)
        layer.text('x'+side.multi,40,-40)
    }
    layer.scale(1/size)
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
        case 5:
            displaySide(layer,0,0,1,{type:2,value:item.value},[0,0,0],1)
        break
        case 6:
            displaySide(layer,0,0,1,{type:3,value:item.value},[0,0,0],1)
        break
        case 7:
            layer.fill(types.style[graphics.style].inc[0],types.style[graphics.style].inc[1],types.style[graphics.style].inc[2])
            layer.triangle(-20,-10,20,-10,0,-30)
            layer.rect(0,10,12,40)
            layer.fill(types.style[graphics.style].point[0],types.style[graphics.style].point[1],types.style[graphics.style].point[2])
            layer.textSize(15)
            layer.text(item.value[0],0,0)
        break
        case 8:
            displaySide(layer,0,0,1,{type:1,value:item.value},types.style[graphics.style].point,1)
        break
        case 9:
            displaySide(layer,0,0,1,{type:4,value:item.value},[0,0,0],1)
        break
        case 10:
            layer.fill(types.style[graphics.style].die[0][0],types.style[graphics.style].die[0][1],types.style[graphics.style].die[0][2])
            layer.stroke(types.style[graphics.style].die[1][0],types.style[graphics.style].die[1][1],types.style[graphics.style].die[1][2])
            layer.strokeWeight(2)
            for(let a=0,la=item.sides.length;a<la;a++){
                layer.rect(-24+(a%3)*24,-12+floor(a/3)*24,20,20,2)
            }
            for(let a=0,la=item.sides.length;a<la;a++){
                displaySide(layer,-24+(a%3)*24,-12+floor(a/3)*24,0.2,item.sides[a],types.style[graphics.style].point,1)
            }
        break
        case 11:
            layer.fill(types.style[graphics.style].inc[0],types.style[graphics.style].inc[1],types.style[graphics.style].inc[2])
            layer.triangle(-30,-10,10,-10,-10,-30)
            layer.rect(-10,10,12,40)
            layer.fill(types.style[graphics.style].point[0],types.style[graphics.style].point[1],types.style[graphics.style].point[2])
            layer.textSize(24)
            layer.text('x6',15,0)
            layer.textSize(15)
            layer.text(item.value[0],-10,0)
        break
        case 12:
            layer.fill(types.style[graphics.style].point[0],types.style[graphics.style].point[1],types.style[graphics.style].point[2])
            layer.textSize(30)
            layer.text('+x'+item.value[0],0,1)
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
function copyArray(base){
	let a=[]
	for(let b=0,lb=base.length;b<lb;b++){
		a.push(base[b])
	}
	return a
}
function copyList(base){
	let a=[]
	for(let b=0,lb=base.length;b<lb;b++){
		a.push({type:base[b].type,value:copyArray(base[b].value),inc:base[b].inc,multi:base[b].multi})
	}
	return a
}
function updateMouse(layer){
    inputs.mouse.x=mouseX
    inputs.mouse.y=mouseY
    inputs.rel.x=(inputs.mouse.x-width/2)/stage.scale+layer.width/2
    inputs.rel.y=(inputs.mouse.y-height/2)/stage.scale+layer.height/2
}