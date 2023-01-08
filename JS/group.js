class group{
    constructor(layer){
        this.layer=layer
        this.bits=[]
        this.dice=[]
        this.diceAmount=0
        this.points=0
        this.hiddenPoints=0
        this.totalPoints=0
        this.genPoints=0
        this.highestValue=[0,0]
        this.rolls=2023
        this.flag=0
        this.flagKey=0
        this.calc={list:[]}
        this.shop={level:0,items:[{price:0,type:0,value:0}]}
        this.context={type:0,value:[],sides:[]}

        this.initialDice()
        this.setupShop()
    }
    initialDice(){
        for(let a=0;a<7;a++){
            for(let b=0;b<5;b++){
                this.dice.push(new die(this.layer,[]))
                this.dice[a*5+b].positionSelf(a*5+b)
            }
        }
    }
    addDie(sides,position,number){
        if(position>=0){
            this.dice[position]=new die(this.layer,sides)
            this.dice[position].positionSelf(position)
            this.diceAmount++
        }else{
            transition.trigger=true
            transition.scene='select'
            this.context.type=7
            this.context.value[0]=number
            this.context.sides=sides
        }
    }
    scaleDice(size){
        for(let a=0,la=this.dice.length;a<la;a++){
            this.dice[a].size=size
        }
    }
    roll(){
        if(this.rolls>0){
            this.rolls--
            this.highestValue=[0,0]
            for(let a=0,la=this.dice.length;a<la;a++){
                this.calc.list=[]
                for(let b=0,lb=this.dice[a].sides.length;b<lb;b++){
                    for(let c=0;c<this.dice[a].sides[b].weight;c++){
                        this.calc.list.push(b)
                    }
                }
                this.dice[a].side=this.calc.list[floor(random(0,this.calc.list.length))]
                this.dice[a].reroll=0
            }
            for(let a=0;a<5;a++){
                for(let b=0,lb=this.dice.length;b<lb;b++){
                    this.dice[b].determineValue(a)
                }
            }
            for(let a=0,la=this.dice.length;a<la;a++){
                this.dice[a].saveValue=this.dice[a].value
                this.dice[a].value=0
                if(this.dice[a].reroll>0){
                    this.calc.list=[]
                    for(let b=0,lb=this.dice[a].sides.length;b<lb;b++){
                        for(let c=0;c<this.dice[a].sides[b].weight;c++){
                            this.calc.list.push(b)
                        }
                    }
                    this.dice[a].side=this.calc.list[floor(random(0,this.calc.list.length))]
                }
            }
            for(let a=0;a<5;a++){
                for(let b=0,lb=this.dice.length;b<lb;b++){
                    this.dice[b].determineValue(a)
                }
            }
            for(let a=0,la=this.dice.length;a<la;a++){
                if(this.dice[a].reroll>0){
                    this.dice[a].value=max(this.dice[a].value,this.dice[a].saveValue)
                }else{
                    this.dice[a].value=this.dice[a].saveValue
                }
                this.hiddenPoints+=ceil(this.dice[a].value)
                this.totalPoints+=ceil(this.dice[a].value)
                this.genPoints=ceil(this.dice[a].value)
                if(this.bits.length>2000){
                    this.bits.push(new bit(this.layer,this.dice[a].position.x+random(-40,40)*this.dice[a].size,this.dice[a].position.y+random(-40,40)*this.dice[a].size,this.genPoints))
                    this.genPoints=0
                }else{
                    if(this.dice.value>40000&&this.genPoints>0){
                        this.bits.push(new bit(this.layer,this.dice[a].position.x+random(-40,40)*this.dice[a].size,this.dice[a].position.y+random(-40,40)*this.dice[a].size,this.genPoints))
                        this.genPoints=0
                    }else{
                        while(this.genPoints>4000){
                            this.genPoints-=2000
                            this.bits.push(new bit(this.layer,this.dice[a].position.x+random(-40,40)*this.dice[a].size,this.dice[a].position.y+random(-40,40)*this.dice[a].size,2000))
                        }
                    }
                    if(this.dice.value>10000&&this.genPoints>0){
                        this.bits.push(new bit(this.layer,this.dice[a].position.x+random(-40,40)*this.dice[a].size,this.dice[a].position.y+random(-40,40)*this.dice[a].size,this.genPoints))
                        this.genPoints=0
                    }else{
                        while(this.genPoints>1000){
                            this.genPoints-=500
                            this.bits.push(new bit(this.layer,this.dice[a].position.x+random(-40,40)*this.dice[a].size,this.dice[a].position.y+random(-40,40)*this.dice[a].size,500))
                        }
                    }
                    if(this.dice.value>2000&&this.genPoints>0){
                        this.bits.push(new bit(this.layer,this.dice[a].position.x+random(-40,40)*this.dice[a].size,this.dice[a].position.y+random(-40,40)*this.dice[a].size,this.genPoints))
                        this.genPoints=0
                    }else{
                        while(this.genPoints>200){
                            this.genPoints-=100
                            this.bits.push(new bit(this.layer,this.dice[a].position.x+random(-40,40)*this.dice[a].size,this.dice[a].position.y+random(-40,40)*this.dice[a].size,100))
                        }
                    }
                    if(this.dice.value>400&&this.genPoints>0){
                        this.bits.push(new bit(this.layer,this.dice[a].position.x+random(-40,40)*this.dice[a].size,this.dice[a].position.y+random(-40,40)*this.dice[a].size,this.genPoints))
                        this.genPoints=0
                    }else{
                        while(this.genPoints>40){
                            this.genPoints-=20
                            this.bits.push(new bit(this.layer,this.dice[a].position.x+random(-40,40)*this.dice[a].size,this.dice[a].position.y+random(-40,40)*this.dice[a].size,20))
                        }
                    }
                    if(this.dice.value>100&&this.genPoints>0){
                        this.bits.push(new bit(this.layer,this.dice[a].position.x+random(-40,40)*this.dice[a].size,this.dice[a].position.y+random(-40,40)*this.dice[a].size,this.genPoints))
                        this.genPoints=0
                    }else{
                        while(this.genPoints>10){
                            this.genPoints-=5
                            this.bits.push(new bit(this.layer,this.dice[a].position.x+random(-40,40)*this.dice[a].size,this.dice[a].position.y+random(-40,40)*this.dice[a].size,5))
                        }
                    }
                    if(this.dice.value>20&&this.genPoints>0){
                        this.bits.push(new bit(this.layer,this.dice[a].position.x+random(-40,40)*this.dice[a].size,this.dice[a].position.y+random(-40,40)*this.dice[a].size,this.genPoints))
                        this.genPoints=0
                    }else{
                        while(this.genPoints>0){
                            this.genPoints--
                            this.bits.push(new bit(this.layer,this.dice[a].position.x+random(-40,40)*this.dice[a].size,this.dice[a].position.y+random(-40,40)*this.dice[a].size,1))
                        }
                    }
                }
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
        this.scaleDice(1)
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
                for(let a=0;a<4;a++){
                    this.shop.items.push({cost:0,type:0,value:[],position:{x:300+a*150,y:300}})
                }
                for(let a=0;a<2;a++){
                    this.shop.items.push({cost:0,type:0,value:[],position:{x:450+a*150,y:450}})
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
                            b=floor(random(2,6))
                            this.shop.items.push({cost:round(random(b*300,b*400)*(1+this.totalPoints/5000)),type:5,value:[b],position:{x:300+a*150,y:300}})
                        break
                        case 1:
                            b=floor(random(2,7))
                            this.shop.items.push({cost:round(random(b*300,b*400)*(1+this.totalPoints/5000)),type:6,value:[b*5],position:{x:300+a*150,y:300}})
                        break
                        case 2:
                            b=floor(random(1,3))
                            this.shop.items.push({cost:round(random(b*1200,b*1600)*(1+this.totalPoints/5000)),type:9,value:[b],position:{x:300+a*150,y:300}})
                        break
                    }
                }
                for(let a=0;a<2;a++){
                    this.shop.items.push({cost:0,type:0,value:[],position:{x:450+a*150,y:450}})
                }
                this.shop.items.push({cost:1500,type:2,value:[],position:{x:150,y:225}})
                this.shop.items.push({cost:round(random(135,180)*(1+this.totalPoints/5000)),type:3,value:[],position:{x:150,y:375}})
            break
            case 2:
                this.shop.items=[]
                for(let a=0;a<4;a++){
                    let c=floor(random(0,10))
                    let b=0
                    switch(c){
                        case 0: case 1: case 2: case 3: case 4: case 5:
                            b=floor(random(1,6))
                            this.shop.items.push({cost:round(random(b*30,b*40)*(1+this.totalPoints/5000)),type:4,value:[b],position:{x:300+a*150,y:150}})
                        break
                        case 6:
                            this.shop.items.push({cost:round(random(450,600)*(1+this.totalPoints/5000)),type:7,value:[1],position:{x:300+a*150,y:150}})
                        break
                        case 7:
                            this.shop.items.push({cost:round(random(1975,2700)*(1+this.totalPoints/5000)),type:11,value:[1],position:{x:300+a*150,y:150}})
                        break
                        case 8: case 9:
                            b=floor(random(2,6))
                            this.shop.items.push({cost:round(random(b*525,b*700)*(1+this.totalPoints/5000)),type:12,value:[b],position:{x:300+a*150,y:150}})
                        break
                    }
                }
                for(let a=0;a<4;a++){
                    let c=floor(random(0,4))
                    let b=0
                    switch(c){
                        case 0:
                            b=floor(random(2,6))
                            this.shop.items.push({cost:round(random(b*300,b*400)*(1+this.totalPoints/5000)),type:5,value:[b],position:{x:300+a*150,y:300}})
                        break
                        case 1:
                            b=floor(random(2,7))
                            this.shop.items.push({cost:round(random(b*300,b*400)*(1+this.totalPoints/5000)),type:6,value:[b*5],position:{x:300+a*150,y:300}})
                        break
                        case 2:
                            b=floor(random(1,3))
                            this.shop.items.push({cost:round(random(b*1200,b*1600)*(1+this.totalPoints/5000)),type:9,value:[b],position:{x:300+a*150,y:300}})
                        break
                        case 3:
                            b=floor(random(10,101))
                            this.shop.items.push({cost:round(random(b*15,b*20)*(1+this.totalPoints/5000)),type:8,value:[b],position:{x:300+a*150,y:300}})
                        break
                    }
                }
                for(let a=0;a<2;a++){
                    let c=floor(random(0,6))
                    switch(c){
                        case 0: case 4: case 5:
                            this.shop.items.push({cost:round(random(600,800)),type:10,value:[],sides:types.die.default,position:{x:450+a*150,y:450}})
                        break
                        case 1:
                            this.shop.items.push({cost:round(random(2700,3375)),type:10,value:[],sides:types.die.inc,position:{x:450+a*150,y:450}})
                        break
                        case 2:
                            this.shop.items.push({cost:round(random(2400,3000)),type:10,value:[],sides:types.die.rand,position:{x:450+a*150,y:450}})
                            for(let b=0,lb=this.shop.items[this.shop.items.length-1].sides.length;b<lb;b++){
                                this.shop.items[this.shop.items.length-1].sides[b].value[0]=floor(random(10,51))
                            }
                        break
                        case 3:
                            this.shop.items.push({cost:round(random(900,1200)),type:10,value:[],sides:types.die.default2,position:{x:450+a*150,y:450}})
                        break
                    }
                }
                this.shop.items.push({cost:3000,type:2,value:[],position:{x:150,y:225}})
                this.shop.items.push({cost:round(random(225,300)*(1+this.totalPoints/5000)),type:3,value:[],position:{x:150,y:375}})
            break
            case 3:
                this.shop.items=[]
                for(let a=0;a<4;a++){
                    let c=floor(random(0,10))
                    let b=0
                    switch(c){
                        case 0: case 1:
                            b=floor(random(1,11))
                            this.shop.items.push({cost:round(random(b*30,b*40)*(1+this.totalPoints/5000)),type:4,value:[b],position:{x:300+a*150,y:150}})
                        break
                        case 2:
                            this.shop.items.push({cost:round(random(450,600)*(1+this.totalPoints/5000)),type:7,value:[1],position:{x:300+a*150,y:150}})
                        break
                        case 3:
                            this.shop.items.push({cost:round(random(1975,2700)*(1+this.totalPoints/5000)),type:11,value:[1],position:{x:300+a*150,y:150}})
                        break
                        case 4: case 5:
                            d=[2,3,4,5,10]
                            b=d[floor(random(0,d.length))]
                            this.shop.items.push({cost:round(random(b*525,b*700)*(1+this.totalPoints/5000)),type:12,value:[b],position:{x:300+a*150,y:150}})
                        break
                        case 6:
                            this.shop.items.push({cost:round(random(4500,6000)*(1+this.totalPoints/5000)),type:13,value:[2],position:{x:300+a*150,y:150}})
                        break
                        case 7:
                            this.shop.items.push({cost:round(random(9000,12000)*(1+this.totalPoints/5000)),type:17,value:['? = #'],sides:types.die.copy,position:{x:300+a*150,y:150}})
                        break
                        case 8:
                            this.shop.items.push({cost:round(random(600,800)*(1+this.totalPoints/5000)),type:23,value:[1],position:{x:300+a*150,y:150}})
                        break
                        case 9:
                            this.shop.items.push({cost:round(random(2700,3600)*(1+this.totalPoints/5000)),type:24,value:[1],position:{x:300+a*150,y:150}})
                        break
                    }
                }
                for(let a=0;a<4;a++){
                    let c=floor(random(0,18))
                    let b=0
                    switch(c){
                        case 0: case 11:
                            d=[2,3,4,5,10]
                            b=d[floor(random(0,d.length))]
                            this.shop.items.push({cost:round(random(b*300,b*400)*(1+this.totalPoints/5000)),type:5,value:[b],position:{x:300+a*150,y:300}})
                        break
                        case 1: case 12:
                            d=[2,3,4,5,6,10]
                            b=d[floor(random(0,d.length))]
                            this.shop.items.push({cost:round(random(b*300,b*400)*(1+this.totalPoints/5000)),type:6,value:[b*5],position:{x:300+a*150,y:300}})
                        break
                        case 2: case 13:
                            d=[1,2,3,5]
                            b=d[floor(random(0,d.length))]
                            this.shop.items.push({cost:round(random(b*1200,b*1600)*(1+this.totalPoints/5000)),type:9,value:[b],position:{x:300+a*150,y:300}})
                        break
                        case 3: case 14:
                            b=floor(random(10,101))
                            this.shop.items.push({cost:round(random(b*15,b*20)*(1+this.totalPoints/5000)),type:8,value:[b],position:{x:300+a*150,y:300}})
                        break
                        case 4:
                            this.shop.items.push({cost:round(random(6000,8000)*(1+this.totalPoints/5000)),type:14,value:[],position:{x:300+a*150,y:300}})
                        break
                        case 5:
                            this.shop.items.push({cost:round(random(750,1000)*(1+this.totalPoints/5000)),type:16,value:[100],position:{x:300+a*150,y:300}})
                        break
                        case 6: case 15: case 16:
                            b=floor(random(0,3))
                            switch(b){
                                case 0:
                                    this.shop.items.push({cost:round(random(675,900)*(1+this.totalPoints/5000)),type:18,value:[200,4],position:{x:300+a*150,y:300}})
                                break
                                case 1:
                                    this.shop.items.push({cost:round(random(1350,18900)*(1+this.totalPoints/5000)),type:18,value:[1000,10],position:{x:300+a*150,y:300}})
                                break
                                case 2:
                                    this.shop.items.push({cost:round(random(7500,10000)*(1+this.totalPoints/5000)),type:18,value:[77777,100],position:{x:300+a*150,y:300}})
                                break
                            }
                        break
                        case 7: case 17:
                            d=[2,2,3,3,4,4,10]
                            b=d[floor(random(0,d.length))]
                            this.shop.items.push({cost:round(random(b*3750,b*5000)*(1+this.totalPoints/5000)),type:19,value:[b],position:{x:300+a*150,y:300}})
                        break
                        case 8:
                            this.shop.items.push({cost:round(random(6750,9000)*(1+this.totalPoints/5000)),type:20,value:[],position:{x:300+a*150,y:300}})
                        break
                        case 9:
                            this.shop.items.push({cost:round(random(375,500)*(1+this.totalPoints/5000)),type:21,value:[4,5],position:{x:300+a*150,y:300}})
                        break
                        case 10:
                            this.shop.items.push({cost:round(random(900,2400)*(1+this.totalPoints/5000)),type:22,value:[50],position:{x:300+a*150,y:300}})
                        break
                    }
                }
                for(let a=0;a<2;a++){
                    let c=floor(random(0,16))
                    let b=0
                    let d=0
                    switch(c){
                        case 0: case 13:
                            this.shop.items.push({cost:round(random(600,800)),type:10,value:[],sides:types.die.default,position:{x:450+a*150,y:450}})
                        break
                        case 1:
                            this.shop.items.push({cost:round(random(2700,3375)),type:10,value:[],sides:types.die.inc,position:{x:450+a*150,y:450}})
                        break
                        case 2:
                            this.shop.items.push({cost:round(random(2400,3000)),type:10,value:[],sides:types.die.rand,position:{x:450+a*150,y:450}})
                            for(let b=0,lb=this.shop.items[this.shop.items.length-1].sides.length;b<lb;b++){
                                this.shop.items[this.shop.items.length-1].sides[b].value[0]=floor(random(10,51))
                            }
                        break
                        case 3:
                            this.shop.items.push({cost:round(random(900,1200)),type:10,value:[],sides:types.die.default2,position:{x:450+a*150,y:450}})
                        break
                        case 4:
                            this.shop.items.push({cost:round(random(1800,2400)),type:10,value:[],sides:types.die.default6,position:{x:450+a*150,y:450}})
                        break
                        case 5: case 14: case 15:
                            d=[2,3,4,5,10]
                            b=d[floor(random(0,d.length))]
                            this.shop.items.push({cost:round(random(b*450,b*600)),type:15,value:[b],sides:types.die.one,position:{x:450+a*150,y:450}})
                        break
                        case 6:
                            this.shop.items.push({cost:round(random(4200,5250)),type:10,value:[],sides:types.die.rand,position:{x:450+a*150,y:450}})
                            for(let b=0,lb=this.shop.items[this.shop.items.length-1].sides.length;b<lb;b++){
                                this.shop.items[this.shop.items.length-1].sides[b].value[0]=floor(random(10,101))
                            }
                        break
                        case 7:
                            this.shop.items.push({cost:round(random(3600,4800)),type:10,value:[],sides:types.die.modded,position:{x:450+a*150,y:450}})
                        break
                        case 8:
                            this.shop.items.push({cost:round(random(6000,8000)),type:10,value:[],sides:types.die.hundred,position:{x:450+a*150,y:450}})
                        break
                        case 9:
                            this.shop.items.push({cost:round(random(1500,2000)),type:10,value:[],sides:types.die.default4,position:{x:450+a*150,y:450}})
                        break
                        case 10:
                            this.shop.items.push({cost:round(random(2250,3000)),type:10,value:[],sides:types.die.default10,position:{x:450+a*150,y:450}})
                        break
                        case 11:
                            this.shop.items.push({cost:round(random(3000,4000)),type:10,value:[],sides:types.die.faceMulti,position:{x:450+a*150,y:450}})
                        break
                        case 12:
                            this.shop.items.push({cost:round(random(7500,10000)),type:10,value:[],sides:types.die.farmer,position:{x:450+a*150,y:450}})
                        break
                    }
                }
                this.shop.items.push({cost:3000,type:1,value:[],position:{x:150,y:225}})
                this.shop.items.push({cost:round(random(450,600)*(1+this.totalPoints/5000)),type:3,value:[],position:{x:150,y:375}})
            break
        }
    }
    displayShop(){
        for(let a=0,la=this.shop.items.length;a<la;a++){
            if(pointInsideBox({position:inputs.rel},{position:this.shop.items[a].position,width:80,height:80})){
                this.layer.fill(types.style[graphics.style].item[0],types.style[graphics.style].item[1],types.style[graphics.style].item[2])
                this.layer.noStroke()
                this.layer.rect(this.shop.items[a].position.x,this.shop.items[a].position.y,200,80,10)
                this.layer.noStroke()
                this.layer.fill(types.style[graphics.style].point[0],types.style[graphics.style].point[1],types.style[graphics.style].point[2])
                this.layer.textSize(16)
                this.layer.text(types.item[this.shop.items[a].type].name,this.shop.items[a].position.x,this.shop.items[a].position.y-25)
                this.layer.textSize(8)
                this.layer.text(types.item[this.shop.items[a].type].desc,this.shop.items[a].position.x,this.shop.items[a].position.y+10)
            }else{
                displayItem(this.layer,this.shop.items[a],this.shop.items[a].position.x,this.shop.items[a].position.y,this.flag==this.shop.items[a].cost&&this.flagKey==a&&this.flag>0)
            }
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
                    this.points-=this.shop.items[a].cost
                    this.hiddenPoints-=this.shop.items[a].cost
                    switch(this.shop.items[a].type){
                        case 2:
                            this.shop.level++
                            this.setupShop()
                            main.addDie(copyList(types.die.default),-1,1)
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
                        case 10:
                            this.addDie(copyList(this.shop.items[a].sides),-1,1)
                        break
                        case 11:
                            transition.trigger=true
                            transition.scene='select'
                            this.context={type:8,value:this.shop.items[a].value}
                        break
                        case 12:
                            transition.trigger=true
                            transition.scene='select'
                            this.context={type:9,value:this.shop.items[a].value}
                        break
                        case 13:
                            transition.trigger=true
                            transition.scene='select'
                            this.context={type:10,value:this.shop.items[a].value}
                        break
                        case 14:
                            transition.trigger=true
                            transition.scene='select'
                            this.context={type:11,value:[]}
                        break
                        case 15:
                            this.addDie(copyList(this.shop.items[a].sides),-1,this.shop.items[a].value[0])
                        break
                        case 16:
                            transition.trigger=true
                            transition.scene='select'
                            this.context={type:12,value:this.shop.items[a].value}
                        break
                        case 17:
                            transition.trigger=true
                            transition.scene='select'
                            this.context={type:13,value:this.shop.items[a].value}
                        break
                        case 18:
                            transition.trigger=true
                            transition.scene='select'
                            this.context={type:14,value:this.shop.items[a].value}
                        break
                        case 19:
                            transition.trigger=true
                            transition.scene='select'
                            this.context={type:15,value:this.shop.items[a].value}
                        break
                        case 20:
                            transition.trigger=true
                            transition.scene='select'
                            this.context={type:16,value:this.shop.items[a].value}
                        break
                        case 21:
                            transition.trigger=true
                            transition.scene='select'
                            this.context={type:17,value:this.shop.items[a].value}
                        break
                        case 22:
                            transition.trigger=true
                            transition.scene='select'
                            this.context={type:18,value:this.shop.items[a].value}
                        break
                        case 23:
                            transition.trigger=true
                            transition.scene='select'
                            this.context={type:19,value:this.shop.items[a].value}
                        break
                        case 24:
                            transition.trigger=true
                            transition.scene='select'
                            this.context={type:20,value:this.shop.items[a].value}
                        break
                    }
                    this.flag=0
                    this.flagKey=-1
                    if(this.shop.items[a].type>=4){
                        this.shop.items[a].type=1
                    }
                }else{
                    this.flag=this.shop.items[a].cost
                    this.flagKey=a
                }
            }
        }
    }
    displaySelect(){
        this.scaleDice(0.32)
        for(let a=0,la=this.dice.length;a<la;a++){
            this.dice[a].displaySelect()
        }
        this.displayPoints()
        this.displayRolls()
        this.displayDice()
    }
    updateSelect(){
        for(let a=0,la=this.dice.length;a<la;a++){
            this.dice[a].updateSelect()
        }
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