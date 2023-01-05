class die{
    constructor(layer,sides){
        this.layer=layer
        this.sides=sides
        this.side=0
        this.position={x:0,y:0}
        this.size=1
        this.value=0
        for(let a=0,la=this.sides.length;a<la;a++){
            this.sides[a].fade=0
        }
    }
    determineValue(stage){
        switch(stage){
            case 0:
                switch(this.sides[this.side].type){
                    case 1:
                        this.value=this.sides[this.side].value[0]
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
        this.layer.noStroke()
        for(let a=0,la=this.sides.length;a<la;a++){
            if(this.sides[a].fade>0){
                displaySide(this.layer,this.sides[a],types.style[graphics.style].point)
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
        this.layer.rect(-100,-50,100,100,10)
        this.layer.rect(-100,50,100,100,10)
        this.layer.rect(0,-50,100,100,10)
        this.layer.rect(0,50,100,100,10)
        this.layer.rect(100,-50,100,100,10)
        this.layer.rect(100,50,100,100,10)
        this.layer.noStroke()

        this.layer.scale(1/this.size)
        this.layer.translate(-this.position.x,-this.position.y)
    }
}