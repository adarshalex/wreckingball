class Ball{

constructor(x,y,width,height,angle){
var options={
    density:1,
    frictionAir:0.005
}

this.body = Bodies.rectangle(x,y,width,height,options);
this.height = height;
this.width = width;
World.add(world,this.body);


}
display() {

var angle = this.body.angle;
push();
translate(this.body.position.x,this.body.position.y);
rotate(angle);
ellipse(0,0,width,height);
pop();


}

}