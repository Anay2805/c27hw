class Ball {
constructor(x, y, r){
    var options = {
       density : 1.0, 
       restitution : 0.8
    }

 this.body = Bodies.circle(x, y, r, options)
 this.r = r
 World.add(world, this.body);

}

display(){

    var pos = this.body.position;
push();
ellipseMode(RADIUS)
fill("blue");
ellipse(pos.x, pos.y, this.r, this.r)
pop();

}


}