class group{
    constructor(layer){
        this.layer=layer
        this.bits=[]
        this.dice=[]
        this.points=0
        this.hiddenPoints=0
        this.genPoints=0
        this.rolls=1000
        this.flag=0
        this.shop={level:0,items:[{price:0,type:0,value:0}]}
        this.context={type:0,value:[]}

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
                this.hiddenPoints+=this.dice[a].value
                this.genPoints=this.dice[a].value
                while(this.genPoints>200){
                    this.genPoints-=100
                    this.bits.push(new bit(this.layer,this.dice[a].position.x+random(-40,40)*this.dice[a].size,this.dice[a].position.y+random(-40,40)*this.dice[a].size,100))
                }
                while(this.genPoints>40){
                    this.genPoints-=20
                    this.bits.push(new bit(this.layer,this.dice[a].position.x+random(-40,40)*this.dice[a].size,this.dice[a].position.y+random(-40,40)*this.dice[a].size,20))
                }
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
    positionDice(size){
        if(this.dice.length==1){
            this.dice[0].position.x=this.layer.width/2
            this.dice[0].position.y=this.layer.height/2
            this.dice[0].size=size
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
    displayDice(){
        this.layer.fill(types.style[graphics.style].roll[0],types.style[graphics.style].roll[1],types.style[graphics.style].roll[2])
        this.layer.rect(this.layer.width/2-7,19,6,6,2)
        this.layer.rect(this.layer.width/2-7,26,6,6,2)
        this.layer.rect(this.layer.width/2,19,6,6,2)
        this.layer.rect(this.layer.width/2,26,6,6,2)
        this.layer.rect(this.layer.width/2+7,19,6,6,2)
        this.layer.rect(this.layer.width/2+7,26,6,6,2)
    }
    displayRoll(){
        this.positionDice(1)
        for(let a=0,la=this.dice.length;a<la;a++){
            this.dice[a].displayRoll()
        }
        for(let a=0,la=this.bits.length;a<la;a++){
            this.bits[a].display()
        }
        this.displayPoints()
        this.displayRolls()
        this.displayDice()
    }
    updateRoll(){
        for(let a=0,la=this.dice.length;a<la;a++){
            this.dice[a].updateRoll()
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
        }else if(pointInsideBox({position:inputs.rel},{position:{x:this.layer.width/2,y:23},width:46,height:46})){
            transition.trigger=true
            transition.scene='select'
            this.context={type:0,value:0}
        }else if(this.flag==0||this.hiddenPoints<this.flag){
            this.roll()
        }
    }
    onKeyRoll(key,code){
        if(this.flag==0||this.hiddenPoints<this.flag){
            this.roll()
        }
    }
    setupShop(){
        switch(this.shop.level){
            case 0:
                this.shop.items=[]
                for(let a=0;a<4;a++){
                    let b=floor(random(1,6))
                    this.shop.items.push({cost:round(random(b*30,b*40)),type:4,value:[b],position:{x:300+a*150,y:150}})
                }
                for(let a=0;a<8;a++){
                    this.shop.items.push({cost:0,type:0,value:[0],position:{x:300+(a%4)*150,y:300+floor(a/4)*150}})
                }
                this.shop.items.push({cost:750,type:2,value:[],position:{x:150,y:225}})
                this.shop.items.push({cost:round(random(90,120)),type:3,value:[],position:{x:150,y:375}})
            break
            case 1:
            break
        }
    }
    displayShop(){
        for(let a=0,la=this.shop.items.length;a<la;a++){
            displayItem(this.layer,this.shop.items[a],this.shop.items[a].position.x,this.shop.items[a].position.y,this.flag==this.shop.items[a].cost&&this.flag>0)
            if(this.shop.items[a].type>0){
                this.layer.noStroke()
                this.layer.fill(types.style[graphics.style].point[0],types.style[graphics.style].point[1],types.style[graphics.style].point[2])
                this.layer.textSize(20)
                if(this.shop.items[a].cost==0){
                    this.layer.text('Free',this.shop.items[a].position.x,this.shop.items[a].position.y+56)
                }else{
                    this.layer.text(numberForm(this.shop.items[a].cost),this.shop.items[a].position.x,this.shop.items[a].position.y+56)
                }
            }
        }
        this.displayPoints()
        this.displayRolls()
        this.displayDice()
    }
    onClickShop(){
        if(pointInsideBox({position:inputs.rel},{position:{x:this.layer.width-23,y:23},width:46,height:46})){
            transition.trigger=true
            transition.scene='roll'
        }else if(pointInsideBox({position:inputs.rel},{position:{x:this.layer.width/2,y:23},width:46,height:46})){
            transition.trigger=true
            transition.scene='select'
            this.context={type:0,value:0}
        }
        for(let a=0,la=this.shop.items.length;a<la;a++){
            if(pointInsideBox({position:inputs.rel},{position:this.shop.items[a].position,width:80,height:80})&&this.shop.items[a].type>=2){
                if(this.points>=this.shop.items[a].cost){
                    switch(this.shop.items[a].type){
                        case 2:
                            this.shop.level++
                            this.setupShop()
                        break
                        case 3:
                            this.setupShop()
                        break
                        case 4:
                            transition.trigger=true
                            transition.scene='select'
                            this.context={type:1,value:this.shop.items[a].value}
                        break
                    }
                    this.points-=this.shop.items[a].cost
                    this.hiddenPoints-=this.shop.items[a].cost
                    this.flag=0
                    if(this.shop.items[a].type>=4){
                        this.shop.items[a].type=1
                    }
                }else{
                    this.flag=this.shop.items[a].cost
                }
            }
        }
    }
    displaySelect(){
        this.positionDice(0.4)
        for(let a=0,la=this.dice.length;a<la;a++){
            this.dice[a].displaySelect()
        }
        this.displayPoints()
        this.displayRolls()
        this.displayDice()
    }
    onClickSelect(){
        if(pointInsideBox({position:inputs.rel},{position:{x:23,y:23},width:46,height:46})){
            transition.trigger=true
            transition.scene='shop'
        }
        if(pointInsideBox({position:inputs.rel},{position:{x:this.layer.width-23,y:23},width:46,height:46})){
            transition.trigger=true
            transition.scene='roll'
        }
        for(let a=0,la=this.dice.length;a<la;a++){
            this.dice[a].onClickSelect()
        }
    }
}