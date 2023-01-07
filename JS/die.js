class die{
    constructor(layer,sides){
        this.layer=layer
        this.sides=sides
        this.side=0
        this.position={x:0,y:0}
        this.diePosition={x:0,y:0}
        this.size=1
        this.value=0
        this.fade=0
        for(let a=0,la=this.sides.length;a<la;a++){
            this.sides[a].fade=0
        }
    }
    determineValue(stage){
        if(this.sides.length>0){
            switch(stage){
                case 0:
                    this.value=0
                    switch(this.sides[this.side].type){
                        case 1:
                            if(this.sides[this.side].inc>0){
                                this.sides[this.side].value[0]=min(this.sides[this.side].value[0]+this.sides[this.side].inc,100)
                            }
                            if(this.sides[this.side].inc<0){
                                this.sides[this.side].value[0]=max(this.sides[this.side].value[0]+this.sides[this.side].inc,1)
                            }
                            this.value=this.sides[this.side].value[0]
                            if(this.sides[this.side].multi>1){
                                this.value*=this.sides[this.side].multi
                            }
                            main.highestValue[0]=max(main.highestValue[0],this.value)
                        break
                        case 3:
                            this.value=this.sides[this.side].value[0]*main.dice.length
                        break
                        case 6:
                            if(floor(random(0,this.sides[this.side].value[1]))==0){
                                this.value=this.sides[this.side].value[0]
                            }
                        break
                    }
                break
                case 1:
                    switch(this.sides[this.side].type){
                        case 2:
                            this.value=main.highestValue[0]*this.sides[this.side].value[0]
                        break
                        case 4:
                            for(let a=0,la=main.dice.length;a<la;a++){
                                if((
                                    main.dice[a].diePosition.x==this.diePosition.x-1&&main.dice[a].diePosition.y==this.diePosition.y||
                                    main.dice[a].diePosition.x==this.diePosition.x+1&&main.dice[a].diePosition.y==this.diePosition.y||
                                    main.dice[a].diePosition.x==this.diePosition.x&&main.dice[a].diePosition.y==this.diePosition.y-1||
                                    main.dice[a].diePosition.x==this.diePosition.x&&main.dice[a].diePosition.y==this.diePosition.y+1
                                )&&main.dice[a].sides.length>0&&main.dice[a].sides[main.dice[a].side].type==1){
                                    this.value+=main.dice[a].value
                                }
                            }
                        break
                    }
                break
                case 2:
                    switch(this.sides[this.side].type){
                        case 7:
                            for(let a=0,la=main.dice.length;a<la;a++){
                                if(main.dice[a].sides.length>0&&types.side[main.dice[a].sides[main.dice[a].side].type].phase<2){
                                    this.value+=main.dice[a].value*this.sides[this.side].value[0]
                                }
                            }
                        break
                        case 9:
                            if(floor(random(0,this.sides[this.side].value[1]))==0){
                                for(let a=0,la=main.dice.length;a<la;a++){
                                    if(main.dice[a].sides.length>0&&types.side[main.dice[a].sides[main.dice[a].side].type].phase<2){
                                        this.value+=main.dice[a].value/this.sides[this.side].value[0]
                                    }
                                }
                            }
                        break
                    }
                    main.highestValue[1]=max(main.highestValue[1],this.value)
                break
                case 3:
                    switch(this.sides[this.side].type){
                        case 8:
                            this.value=main.highestValue[1]
                        break
                    }
                break
                case 4:
                    for(let a=0,la=this.sides.length;a<la;a++){
                        if(this.sides[a].type==5){
                            this.value*=2
                        }
                    }
                break
            }
        }
    }
    positionSelf(position){
        this.position.x=210+(position%5)*120
        this.position.y=60+floor(position/5)*120
        this.diePosition.x=position%5
        this.diePosition.y=floor(position/5)
    }
    displayRoll(){
        if(this.sides.length>0){
            this.layer.translate(this.position.x,this.position.y)
            this.layer.scale(this.size)
            this.layer.fill(types.style[graphics.style].die[0][0],types.style[graphics.style].die[0][1],types.style[graphics.style].die[0][2],this.fade)
            this.layer.stroke(types.style[graphics.style].die[1][0],types.style[graphics.style].die[1][1],types.style[graphics.style].die[1][2],this.fade)
            this.layer.strokeWeight(10)
            this.layer.rect(0,0,100,100,10)
            for(let a=0,la=this.sides.length;a<la;a++){
                if(this.sides[a].fade>0){
                    displaySide(this.layer,0,0,1,this.sides[a],types.style[graphics.style].point,this.sides[a].fade*this.fade)
                }
            }
            this.layer.scale(1/this.size)
            this.layer.translate(-this.position.x,-this.position.y)
        }
    }
    updateRoll(){
        for(let a=0,la=this.sides.length;a<la;a++){
            if(this.side==a&&this.sides[a].fade<1){
                this.sides[a].fade=round(this.sides[a].fade*5+1)/5
            }else if(this.side!=a&&this.sides[a].fade>0){
                this.sides[a].fade=round(this.sides[a].fade*5-1)/5
            }
        }
        if(this.sides.length>0&&this.fade<1){
            this.fade=round(this.fade*5+1)/5
        }
    }
    displaySelect(){
        this.layer.translate(this.position.x,this.position.y)
        this.layer.scale(this.size)
        this.layer.fill(types.style[graphics.style].die[0][0],types.style[graphics.style].die[0][1],types.style[graphics.style].die[0][2],this.fade)
        this.layer.stroke(types.style[graphics.style].die[1][0],types.style[graphics.style].die[1][1],types.style[graphics.style].die[1][2],this.fade)
        this.layer.strokeWeight(10)
        for(let a=0,la=this.sides.length;a<la;a++){
            this.layer.rect(-120+(a%3)*120,-60+floor(a/3)*120,100,100,10)
        }
        for(let a=0,la=this.sides.length;a<la;a++){
            displaySide(this.layer,-120+(a%3)*120,-60+floor(a/3)*120,1,this.sides[a],types.style[graphics.style].point,this.fade)
        }
        this.layer.scale(1/this.size)
        this.layer.translate(-this.position.x,-this.position.y)
    }
    displaySelectOption(sides,fade){
        this.layer.translate(this.position.x,this.position.y)
        this.layer.scale(this.size)
        this.layer.fill(types.style[graphics.style].die[0][0],types.style[graphics.style].die[0][1],types.style[graphics.style].die[0][2],fade)
        this.layer.stroke(types.style[graphics.style].die[1][0],types.style[graphics.style].die[1][1],types.style[graphics.style].die[1][2],fade)
        this.layer.strokeWeight(10)
        for(let a=0,la=sides.length;a<la;a++){
            this.layer.rect(-120+(a%3)*120,-60+floor(a/3)*120,100,100,10)
        }
        for(let a=0,la=sides.length;a<la;a++){
            displaySide(this.layer,-120+(a%3)*120,-60+floor(a/3)*120,1,sides[a],types.style[graphics.style].point,fade)
        }
        this.layer.scale(1/this.size)
        this.layer.translate(-this.position.x,-this.position.y)
    }
    updateSelect(){
        if(this.sides.length>0&&this.fade<1){
            this.fade=round(this.fade*5+1)/5
        }
        if(pointInsideBox({position:inputs.rel},{position:this.position,width:360*this.size,height:240*this.size})){
            switch(main.context.type){
                case 7:
                    if(this.sides.length==0){
                        this.displaySelectOption(main.context.sides,0.5)
                    }
                break
            }
        }
    }
    onClickSelect(){
        if(pointInsideBox({position:inputs.rel},{position:this.position,width:360*this.size,height:240*this.size})){
            switch(main.context.type){
                case 7:
                    if(this.sides.length==0){
                        this.sides=copyList(main.context.sides)
                        for(let a=0,la=this.sides.length;a<la;a++){
                            this.sides[a].fade=0
                        }
                        main.context.value[0]--
                        if(main.context.value<=0){
                            transition.trigger=true
                            transition.scene='shop'
                        }
                    }
                break
                case 8:
                    for(let a=0,la=this.sides.length;a<la;a++){
                        if(this.sides[a].type==1){
                            this.sides[a].inc=main.context.value[0]
                            transition.trigger=true
                            transition.scene='shop'
                        }
                    }
                break
            }
        }
        for(let a=0,la=this.sides.length;a<la;a++){
            if(pointInsideBox({position:inputs.rel},{position:{x:this.position.x+(-120+(a%3)*120)*this.size,y:this.position.y+(-60+floor(a/3)*120)*this.size},width:100*this.size,height:100*this.size})){
                switch(main.context.type){
                    case 1:
                        if(this.sides[a].type==1&&this.sides[a].value[0]<100){
                            this.sides[a].value[0]=min(this.sides[a].value[0]+main.context.value[0],100)
                            transition.trigger=true
                            transition.scene='shop'
                        }
                    break
                    case 2:
                        this.sides[a].type=2
                        this.sides[a].value[0]=main.context.value[0]
                        transition.trigger=true
                        transition.scene='shop'
                    break
                    case 3:
                        this.sides[a].type=3
                        this.sides[a].value[0]=main.context.value[0]
                        transition.trigger=true
                        transition.scene='shop'
                    break
                    case 4:
                        if(this.sides[a].type==1){
                            this.sides[a].inc=main.context.value[0]
                            transition.trigger=true
                            transition.scene='shop'
                        }
                    break
                    case 5:
                        this.sides[a].type=1
                        this.sides[a].value[0]=main.context.value[0]
                        transition.trigger=true
                        transition.scene='shop'
                    break
                    case 6:
                        this.sides[a].type=4
                        this.sides[a].value[0]=main.context.value[0]
                        transition.trigger=true
                        transition.scene='shop'
                    break
                    case 9:
                        if(this.sides[a].type==1){
                            this.sides[a].multi=main.context.value[0]
                            transition.trigger=true
                            transition.scene='shop'
                        }
                    break
                    case 10:
                        this.sides[a].weight=3
                        transition.trigger=true
                        transition.scene='shop'
                    break
                    case 11:
                        this.sides[a].type=5
                        this.sides[a].value=[]
                        transition.trigger=true
                        transition.scene='shop'
                    break
                    case 12:
                        this.sides[a].type=1
                        this.sides[a].value[0]=main.context.value[0]
                        this.sides[a].inc=-1
                        transition.trigger=true
                        transition.scene='shop'
                    break
                    case 13:
                        for(let b=0,lb=this.sides.length;b<lb;b++){
                            if(a!=b){
                                this.sides[b]=copySide(this.sides[a])
                            }
                        }
                        transition.trigger=true
                        transition.scene='shop'
                    break
                    case 14:
                        this.sides[a].type=6
                        this.sides[a].value=main.context.value
                        transition.trigger=true
                        transition.scene='shop'
                    break
                    case 15:
                        this.sides[a].type=7
                        this.sides[a].value=main.context.value
                        transition.trigger=true
                        transition.scene='shop'
                    break
                    case 16:
                        this.sides[a].type=8
                        transition.trigger=true
                        transition.scene='shop'
                    break
                    case 17:
                        this.sides[a].type=9
                        this.sides[a].value=main.context.value
                        transition.trigger=true
                        transition.scene='shop'
                    break
                }
            }
        }
    }
}