class bit{
    constructor(layer,x,y,value){
        this.layer=layer
        this.position={x:x,y:y}
        this.value=value
        this.fade=0
        this.direction=0
        this.speed=2
        this.used=false
        this.remove=false
    }
    display(){
        this.layer.fill(types.style[graphics.style].point[0],types.style[graphics.style].point[1],types.style[graphics.style].point[2])
        this.layer.noStroke()
        this.layer.ellipse(this.position.x,this.position.y,log(this.value)*4+8)
    }
    update(){
        if(this.fade<1&&!this.used){
            this.fade=round(this.fade*5+1)/5
        }else if(this.used){
            this.fade=round(this.fade*5-1)/5
            if(this.fade<=0){
                this.remove=true
            }
        }
        if(dist(this.position.x,this.position.y,23,23)<this.speed&&!this.used){
            this.used=true
            dice.points+=this.value
        }else if(!this.used){
            this.direction=atan2(23-this.position.x,this.position.y-23)
            this.position.x+=sin(this.direction)*this.speed
            this.position.y-=cos(this.direction)*this.speed
            this.speed+=1/5
        }
    }
}