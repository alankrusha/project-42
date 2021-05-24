class Drops{
    constructor(x, y){
        var options = {
            friction : 0.1,
            isStatic : false
        } 
        this.rain = Bodies.circle(x, y, 5, options);
        World.add(world, this.rain);
    }
   update(){
       if(this.rain.position.y > height){
        Matter.Body.setPosition(this.rain, {x: random(0, 400), y: random(0, 400)});
       }
    }
    display(){
        var pos = this.rain.position;
        ellipse(pos.x, pos.y, 5);
    }
   
}