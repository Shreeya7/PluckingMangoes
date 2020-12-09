
class Mango {

   
    constructor (x,y,width,height){

        
        var options = {
            isStatic:true,
            restitution:0,
            friction:1
        }

       
        this.body = Bodies.rectangle(x,y,width,30,options);

        
        this.image = loadImage("Plucking mangoes/mango.png");

        
        World.add(world,this.body);
        
        
        this.width = width;
        this.height = height;

    }

    display(){

       
        var pos = this.body.position;
        var angle = this.body.angle;
       
       
        push();
        
        translate(pos.x,pos.y);
        rotate(angle);
        
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);

        pop();
    }

}