//name the class
class Elastic {
    constructor(bodyA,pointB)
    {
        var options = 
        {
            bodyA : bodyA,
            pointB : pointB,
            length : 10,
            stiffness : 0.004
        }

        this.body = Constraint.create(options);
        World.add(world,this.body);
        this.pointB = pointB;

    }

    fly()
    {
        this.body.bodyA = null;
    }

    attach(newBodyA)
    {
        this.body.bodyA = newBodyA;
    }

    display()
    {

        if(this.body.bodyA)
        {
            
            var posA = this.body.bodyA.position;
            var posB = this.pointB;
            strokeWeight(5);
            line(posA.x,posA.y,posB.x,posB.y);

        }

    }

}