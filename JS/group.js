class group{
    constructor(layer){
        this.layer=layer
        this.dice=[]
        this.points=0
        this.rolls=1000
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
                this.points+=this.dice[a].value
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
    display(){
        this.positionDice()
        for(let a=0,la=this.dice.length;a<la;a++){
            this.dice[a].display()
        }
        switch(graphics.style){
            case 0:
                this.layer.fill(188,67,85)
            break
            case 1:
                this.layer.fill(0)
            break
        }
        this.layer.textSize(30)
        this.layer.textAlign(LEFT,CENTER)
        this.layer.text(this.points,30,25)
        switch(graphics.style){
            case 0:
                this.layer.fill(252,124,123)
            break
            case 1:
                this.layer.fill(0)
            break
        }
        this.layer.textAlign(RIGHT,CENTER)
        this.layer.text(this.rolls,this.layer.width-30,25)
        this.layer.textAlign(CENTER,CENTER)
        switch(graphics.style){
            case 0:
                this.layer.fill(198,70,89)
            break
            case 1:
                this.layer.fill(40)
            break
        }
        this.layer.noStroke()
        this.layer.ellipse(18,23,14,14)
        switch(graphics.style){
            case 0:
                this.layer.fill(247,218,233)
            break
            case 1:
                this.layer.fill(235)
            break
        }
        this.layer.rect(this.layer.width-18,23,12,12)
    }
}