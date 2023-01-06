class group{
    constructor(layer){
        this.layer=layer
        this.bits=[]
        this.dice=[]
        this.points=99999
        this.hiddenPoints=0
        this.totalPoints=0
        this.genPoints=0
        this.highestValue=0
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
            this.highestValue=0
            for(let a=0,la=this.dice.length;a<la;a++){
                this.dice[a].side=floor(random(0,6))
            }
            for(let a=0,la=this.dice.length;a<la;a++){
                this.dice[a].determineValue(0)
            }
            for(let a=0,la=this.dice.length;a<la;a++){
                this.dice[a].determineValue(1)
            }
            for(let a=0,la=this.dice.length;a<la;a++){
                this.hiddenPoints+=this.dice[a].value
                this.totalPoints+=this.dice[a].value
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
            this.dice[0].diePosition.x=0
            this.dice[0].diePosition.y=0
            this.dice[0].size=size
        }else if(this.dice.length==3||this.dice.length==2){
            for(let a=0,la=this.dice.length;a<la;a++){
                this.dice[a].position.x=this.layer.width/2+60-60*la+a*120
                this.dice[a].diePosition.x=a
                this.dice[a].diePosition.y=0
                this.dice[a].position.y=this.layer.height/2
                this.dice[a].size=size
            }
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
                    this.shop.items.push({cost:round(random(b*30,b*40)*(1+this.totalPoints/5000)),type:4,value:[b],position:{x:300+a*150,y:150}})
                }
                for(let a=0;a<8;a++){
                    this.shop.items.push({cost:0,type:0,value:[0],position:{x:300+(a%4)*150,y:300+floor(a/4)*150}})
                }
                this.shop.items.push({cost:750,type:2,value:[],position:{x:150,y:225}})
                this.shop.items.push({cost:round(random(90,120)*(1+this.totalPoints/5000)),type:3,value:[],position:{x:150,y:375}})
            break
            case 1:
                this.shop.items=[]
                for(let a=0;a<4;a++){
                    let c=floor(random(0,10))
                    let b=0
                    switch(c){
                        case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8:
                            b=floor(random(1,6))
                            this.shop.items.push({cost:round(random(b*30,b*40)*(1+this.totalPoints/5000)),type:4,value:[b],position:{x:300+a*150,y:150}})
                        break
                        case 9:
                            this.shop.items.push({cost:round(random(450,600)*(1+this.totalPoints/5000)),type:7,value:[1],position:{x:300+a*150,y:150}})
                        break
                    }
                }
                for(let a=0;a<4;a++){
                    let c=floor(random(0,3))
                    let b=0
                    switch(c){
                        case 0:
                            b=floor(random(2,5))
                            this.shop.items.push({cost:round(random(b*300,b*400)*(1+this.totalPoints/5000)),type:5,value:[b],position:{x:300+a*150,y:300}})
                        break
                        case 1:
                            b=floor(random(2,7))
                            this.shop.items.push({cost:round(random(b*300,b*400)*(1+this.totalPoints/5000)),type:6,value:[b*5],position:{x:300+a*150,y:300}})
                        break
                        case 2:
                            this.shop.items.push({cost:round(random(1200,1600)*(1+this.totalPoints/5000)),type:9,value:[1],position:{x:300+a*150,y:300}})
                        break
                    }
                }
                for(let a=0;a<4;a++){
                    this.shop.items.push({cost:0,type:0,value:[0],position:{x:300+a*150,y:450}})
                }
                this.shop.items.push({cost:1500,type:2,value:[],position:{x:150,y:225}})
                this.shop.items.push({cost:round(random(90,120)*(1+this.totalPoints/5000)),type:3,value:[],position:{x:150,y:375}})
            break
            case 2:
                this.shop.items=[]
                for(let a=0;a<4;a++){
                    let c=floor(random(0,10))
                    let b=0
                    switch(c){
                        case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8:
                            b=floor(random(1,6))
                            this.shop.items.push({cost:round(random(b*30,b*40)*(1+this.totalPoints/5000)),type:4,value:[b],position:{x:300+a*150,y:150}})
                        break
                        case 9:
                            this.shop.items.push({cost:round(random(450,600)*(1+this.totalPoints/5000)),type:7,value:[1],position:{x:300+a*150,y:150}})
                        break
                    }
                }
                for(let a=0;a<4;a++){
                    let c=floor(random(0,4))
                    let b=0
                    switch(c){
                        case 0:
                            b=floor(random(2,5))
                            this.shop.items.push({cost:round(random(b*300,b*400)*(1+this.totalPoints/5000)),type:5,value:[b],position:{x:300+a*150,y:300}})
                        break
                        case 1:
                            b=floor(random(2,7))
                            this.shop.items.push({cost:round(random(b*300,b*400)*(1+this.totalPoints/5000)),type:6,value:[b*5],position:{x:300+a*150,y:300}})
                        break
                        case 2:
                            this.shop.items.push({cost:round(random(1200,1600)*(1+this.totalPoints/5000)),type:9,value:[1],position:{x:300+a*150,y:300}})
                        break
                        case 3:
                            b=floor(random(10,101))
                            this.shop.items.push({cost:round(random(b*15,b*20)*(1+this.totalPoints/5000)),type:8,value:[b],position:{x:300+a*150,y:300}})
                        break
                    }
                }
                for(let a=0;a<4;a++){
                    this.shop.items.push({cost:0,type:0,value:[0],position:{x:300+a*150,y:450}})
                }
                this.shop.items.push({cost:1500,type:2,value:[],position:{x:150,y:225}})
                this.shop.items.push({cost:round(random(90,120)*(1+this.totalPoints/5000)),type:3,value:[],position:{x:150,y:375}})
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
                            main.addDie(copyList(types.die.default))
                        break
                        case 3:
                            this.setupShop()
                        break
                        case 4:
                            transition.trigger=true
                            transition.scene='select'
                            this.context={type:1,value:this.shop.items[a].value}
                        break
                        case 5:
                            transition.trigger=true
                            transition.scene='select'
                            this.context={type:2,value:this.shop.items[a].value}
                        break
                        case 6:
                            transition.trigger=true
                            transition.scene='select'
                            this.context={type:3,value:this.shop.items[a].value}
                        break
                        case 7:
                            transition.trigger=true
                            transition.scene='select'
                            this.context={type:4,value:this.shop.items[a].value}
                        break
                        case 8:
                            transition.trigger=true
                            transition.scene='select'
                            this.context={type:5,value:this.shop.items[a].value}
                        break
                        case 9:
                            transition.trigger=true
                            transition.scene='select'
                            this.context={type:6,value:this.shop.items[a].value}
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
        this.positionDice(0.32)
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