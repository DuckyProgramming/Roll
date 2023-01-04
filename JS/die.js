class die{
    constructor(layer,sides){
        this.layer=layer
        this.sides=sides
        this.side=0
        this.position={x:0,y:0}
        this.size=1
        this.value=0
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
    display(){
        this.layer.translate(this.position.x,this.position.y)
        this.layer.scale(this.size)
        switch(graphics.style){
            case 0:
                this.layer.fill(247,218,233)
                this.layer.stroke(243,202,223)
                this.layer.strokeWeight(10)
                this.layer.rect(0,0,100,100,10)
                this.layer.fill(198,70,89)
            break
            case 1:
                this.layer.fill(235)
                this.layer.stroke(240)
                this.layer.strokeWeight(10)
                this.layer.rect(0,0,100,100,10)
                this.layer.fill(40)
            break
        }
        this.layer.noStroke()
        switch(this.sides[this.side].type){
            case 1:
                if(this.sides[this.side].value[0]==1){
                    this.layer.ellipse(0,0,16,16)
                }else if(this.sides[this.side].value[0]==2){
                    this.layer.ellipse(-30,-30,16,16)
                    this.layer.ellipse(30,30,16,16)
                }else if(this.sides[this.side].value[0]==3){
                    this.layer.ellipse(-30,-30,16,16)
                    this.layer.ellipse(0,0,16,16)
                    this.layer.ellipse(30,30,16,16)
                }else if(this.sides[this.side].value[0]==4){
                    this.layer.ellipse(-30,-30,16,16)
                    this.layer.ellipse(30,30,16,16)
                    this.layer.ellipse(-30,30,16,16)
                    this.layer.ellipse(30,-30,16,16)
                }else if(this.sides[this.side].value[0]==5){
                    this.layer.ellipse(-30,-30,16,16)
                    this.layer.ellipse(30,30,16,16)
                    this.layer.ellipse(0,0,16,16)
                    this.layer.ellipse(-30,30,16,16)
                    this.layer.ellipse(30,-30,16,16)
                }else if(this.sides[this.side].value[0]==6){
                    this.layer.ellipse(-30,-30,16,16)
                    this.layer.ellipse(30,30,16,16)
                    this.layer.ellipse(-30,0,16,16)
                    this.layer.ellipse(30,0,16,16)
                    this.layer.ellipse(-30,30,16,16)
                    this.layer.ellipse(30,-30,16,16)
                }else if(this.sides[this.side].value[0]==7){
                    this.layer.ellipse(-30,-30,16,16)
                    this.layer.ellipse(30,30,16,16)
                    this.layer.ellipse(-30,0,16,16)
                    this.layer.ellipse(0,-30,16,16)
                    this.layer.ellipse(0,30,16,16)
                    this.layer.ellipse(30,0,16,16)
                    this.layer.ellipse(-30,30,16,16)
                    this.layer.ellipse(30,-30,16,16)
                }else if(this.sides[this.side].value[0]==8){
                    this.layer.ellipse(-30,-30,16,16)
                    this.layer.ellipse(30,30,16,16)
                    this.layer.ellipse(-30,0,16,16)
                    this.layer.ellipse(0,-30,16,16)
                    this.layer.ellipse(0,0,16,16)
                    this.layer.ellipse(0,30,16,16)
                    this.layer.ellipse(30,0,16,16)
                    this.layer.ellipse(-30,30,16,16)
                    this.layer.ellipse(30,-30,16,16)
                }else{
                    this.layer.textSize(50)
                    this.layer.text(this.sides[this.side].value[0],0,0)
                }
            break
        }
        this.layer.scale(1/this.size)
        this.layer.translate(-this.position.x,-this.position.y)
    }
    update(){
    }
}