class die{
    constructor(layer,sides){
        this.layer=layer
        this.sides=sides
        this.side=0
        this.position={x:0,y:0}
        this.diePosition={x:0,y:0}
        this.size=1
        this.value=0
        for(let a=0,la=this.sides.length;a<la;a++){
            this.sides[a].fade=0
        }
    }
    determineValue(stage){
        switch(stage){
            case 0:
                this.value=0
                switch(this.sides[this.side].type){
                    case 1:
                        if(this.sides[this.side].inc>0){
                            this.sides[this.side].value[0]=min(this.sides[this.side].value[0]+this.sides[this.side].inc,100)
                        }
                        this.value=this.sides[this.side].value[0]
                    break
                    case 3:
                        this.value=this.sides[this.side].value[0]*main.dice.length
                    break
                }
                main.highestValue=max(main.highestValue,this.value)
            break
            case 1:
                switch(this.sides[this.side].type){
                    case 2:
                        this.value=main.highestValue*this.sides[this.side].value[0]
                    break
                    case 4:
                        for(let a=0,la=main.dice.length;a<la;a++){
                            if((
                                main.dice[a].diePosition.x==this.diePosition.x-1&&main.dice[a].diePosition.y==this.diePosition.y||
                                main.dice[a].diePosition.x==this.diePosition.x+1&&main.dice[a].diePosition.y==this.diePosition.y||
                                main.dice[a].diePosition.x==this.diePosition.x&&main.dice[a].diePosition.y==this.diePosition.y-1||
                                main.dice[a].diePosition.x==this.diePosition.x&&main.dice[a].diePosition.y==this.diePosition.y+1
                            )&&main.dice[a].sides[main.dice[a].side].type==1){
                                this.value+=main.dice[a].value
                            }
                        }
                    break
                }
            break
        }
    }
    displayRoll(){
        this.layer.translate(this.position.x,this.position.y)
        this.layer.scale(this.size)
        this.layer.fill(types.style[graphics.style].die[0][0],types.style[graphics.style].die[0][1],types.style[graphics.style].die[0][2])
        this.layer.stroke(types.style[graphics.style].die[1][0],types.style[graphics.style].die[1][1],types.style[graphics.style].die[1][2])
        this.layer.strokeWeight(10)
        this.layer.rect(0,0,100,100,10)
        for(let a=0,la=this.sides.length;a<la;a++){
            if(this.sides[a].fade>0){
                displaySide(this.layer,0,0,1,this.sides[a],types.style[graphics.style].point,this.sides[a].fade)
            }
        }
        this.layer.scale(1/this.size)
        this.layer.translate(-this.position.x,-this.position.y)
    }
    updateRoll(){
        for(let a=0,la=this.sides.length;a<la;a++){
            if(this.side==a&&this.sides[a].fade<1){
                this.sides[a].fade=round(this.sides[a].fade*5+1)/5
            }else if(this.side!=a&&this.sides[a].fade>0){
                this.sides[a].fade=round(this.sides[a].fade*5-1)/5
            }
        }
    }
    displaySelect(){
        this.layer.translate(this.position.x,this.position.y)
        this.layer.scale(this.size)
        this.layer.fill(types.style[graphics.style].die[0][0],types.style[graphics.style].die[0][1],types.style[graphics.style].die[0][2])
        this.layer.stroke(types.style[graphics.style].die[1][0],types.style[graphics.style].die[1][1],types.style[graphics.style].die[1][2])
        this.layer.strokeWeight(10)
        for(let a=0,la=this.sides.length;a<la;a++){
            this.layer.rect(-120+(a%3)*120,-60+floor(a/3)*120,100,100,10)
        }
        for(let a=0,la=this.sides.length;a<la;a++){
            displaySide(this.layer,-120+(a%3)*120,-60+floor(a/3)*120,1,this.sides[a],types.style[graphics.style].point,1)
        }
        this.layer.scale(1/this.size)
        this.layer.translate(-this.position.x,-this.position.y)
    }
    onClickSelect(){
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
                }
            }
        }
    }
}