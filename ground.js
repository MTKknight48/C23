class Ground{
constructor(x,y,width,height){
    var GroundOptions={
        isStatic:true
    }
    this.body=Bodies.rectangle(x,y,width,height,GroundOptions);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
}
display(){
    rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
}
}