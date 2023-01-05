class group{
    constructor(layer){
        this.layer=layer
        this.bits=[]
        this.dice=[]
        this.points=0
        this.genPoints=0
        this.rolls=1000
        this.shop={level:0,items:[{price:0,type:0,value:0}]}

        this.setupShop()
    }
    addDie(sides){
        this.dice.push(new die(this.layer,sides))
    }
    roll(){
        if(this.rolls>0){
            this.rolls--
            for(let a=0,la=this.dice.length;a<la;a++){
                this.dice[a].side=floor(random(0,6))
                this.dice[a].determineValue(0)
            }
            for(let a=0,la=this.dice.length;a<la;a++){
                this.genPoints=this.dice[a].value
                while(this.genPoints>10){
                    this.genPoints-=5
                    this.bits.push(new bit(this.layer,this.dice[a].position.x+random(-40,40)*this.dice[a].size,this.dice[a].position.y+random(-40,40)*this.dice[a].size,5))
                }
                while(this.genPoints>0){
                    this.genPoints--
                    this.bits.push(new bit(this.layer,this.dice[a].position.x+random(-40,40)*this.dice[a].size,this.dice[a].position.y+random(-40,40)*this.dice[a].size,1))
                }
            }
        }
    }
    positionDice(){
        if(this.dice.length==1){
            this.dice[0].position.x=this.layer.width/2
            this.dice[0].position.y=this.layer.height/2
            this.dice[0].size=1
        }
    }
    displayPoints(){
        this.layer.fill(types.style[graphics.style].pointText[0],types.style[graphics.style].pointText[1],types.style[graphics.style].pointText[2])
        this.layer.noStroke()
        this.layer.textSize(30)
        this.layer.textAlign(LEFT,CENTER)
        this.layer.text(this.points,40,25)
        this.layer.textAlign(CENTER,CENTER)
        this.layer.fill(types.style[graphics.style].point[0],types.style[graphics.style].point[1],types.style[graphics.style].point[2])
        this.layer.ellipse(23,23,14,14)
    }
    displayRolls(){
        this.layer.fill(types.style[graphics.style].rollText[0],types.style[graphics.style].rollText[1],types.style[graphics.style].rollText[2])
        this.layer.noStroke()
        this.layer.textSize(30)
        this.layer.textAlign(RIGHT,CENTER)
        this.layer.text(this.rolls,this.layer.width-40,25)
        this.layer.textAlign(CENTER,CENTER)
        this.layer.fill(types.style[graphics.style].roll[0],types.style[graphics.style].roll[1],types.style[graphics.style].roll[2])
        this.layer.rect(this.layer.width-23,23,12,12,2)
    }
    displayItem(item,x,y){
        this.layer.translate(x,y)
        this.layer.fill(types.style[graphics.style].item[0],types.style[graphics.style].item[1],types.style[graphics.style].item[2])
        this.layer.noStroke()
        this.layer.rect(0,0,80,80,10)
        switch(item.type){
            case 0:
                this.layer.noFill()
                this.layer.stroke(types.style[graphics.style].no[0],types.style[graphics.style].no[1],types.style[graphics.style].no[2])
                this.layer.strokeWeight(8)
                this.layer.ellipse(0,0,48,48)
                this.layer.line(-12*sqrt(2),-12*sqrt(2),12*sqrt(2),12*sqrt(2))
            break
            case 1:
                this.layer.fill(types.style[graphics.style].point[0],types.style[graphics.style].point[1],types.style[graphics.style].point[2])
                this.layer.textSize(40)
                this.layer.text('+'+item.value[0],0,0)
            break
        }
        this.layer.translate(-x,-y)
    }
    displayRoll(){
        this.positionDice()
        for(let a=0,la=this.dice.length;a<la;a++){
            this.dice[a].display()
        }
        for(let a=0,la=this.bits.length;a<la;a++){
            this.bits[a].display()
        }
        this.displayPoints()
        this.displayRolls()
    }
    updateRoll(){
        for(let a=0,la=this.dice.length;a<la;a++){
            this.dice[a].update()
        }
        for(let a=0,la=this.bits.length;a<la;a++){
            this.bits[a].update()
            if(this.bits[a].remove){
                this.bits.splice(a,1)
                a--
                la--
            }
        }
    }
    onClickRoll(){
        if(pointInsideBox({position:inputs.rel},{position:{x:23,y:23},width:46,height:46})){
            transition.trigger=true
            transition.scene='shop'
        }else{
            this.roll()
        }
    }
    setupShop(){
        switch(this.shop.level){
            case 0:
                this.shop.items=[]
                for(let a=0;a<4;a++){
                    let b=floor(random(1,6))
                    this.shop.items.push({cost:round(random(b*20,b*30)),type:1,value:[b]})
                }
                for(let a=0;a<8;a++){
                    this.shop.items.push({cost:0,type:0,value:[0]})
                }
            break
        }
    }
    displayShop(){
        for(let a=0,la=this.shop.items.length;a<la;a++){
            this.displayItem(this.shop.items[a],300+(a%4)*150,150+floor(a/4)*150)
            if(this.shop.items[a].type>0){
                this.layer.fill(types.style[graphics.style].point[0],types.style[graphics.style].point[1],types.style[graphics.style].point[2])
                this.layer.textSize(20)
                if(this.shop.items[a].cost==0){
                    this.layer.text('Free',300+(a%4)*150,210+floor(a/4)*150)
                }else{
                    this.layer.text(numberForm(this.shop.items[a].cost),300+(a%4)*150,205+floor(a/4)*150)
                }
            }
        }
        this.displayPoints()
        this.displayRolls()
    }
    onClickShop(){
        if(pointInsideBox({position:inputs.rel},{position:{x:this.layer.width-23,y:23},width:46,height:46})){
            transition.trigger=true
            transition.scene='roll'
        }
    }
}