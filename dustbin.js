class Dustbin{
constructor(x,y){
    this.x=x
    this.y=y
   this.dustbinWidth=200
   this.dustbinHeigth=1001
   this.wallThickness=20

   this.bottomBody=Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness,{isStatic:true})
this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeigth,{isStatic:true})
this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
World.add(world, this.bottomBody)
 World.add(world, this.leftWallBody)
 World.add(world, this.rightWallBody);
}
display(){
rect(this.x,this.y)

}





}