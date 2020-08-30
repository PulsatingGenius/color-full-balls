var canvas=document.getElementById("can");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var ctx=canvas.getContext("2d");
var x,y,r,minR,dx,dy,color;

function Circle(x,y,r,dx,dy,color){
  this.x=x;
  this.y=y;
  this.r=r;
  this.minR=r;
  this.dx=dx;
  this.dy=dy;
  this.color=color;
  
  this.draw=function(){
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.r,0,2*Math.PI,false);
    ctx.fillStyle=this.color;
    ctx.fill();
  }
  
  this.update = function() {
    this.draw();
    
    this.x+=this.dx;
    this.y+=this.dy;
    
    if(this.x + this.r >innerWidth || this.x-this.r<0) this.dx=-this.dx;
    if(this.y + this.r >innerHeight || this.y-this.r<0) this.dy=-this.dy;
   
    
  }
}

var circleArray=[];

var colorArray=["green","brown","gold","red","orange","lightblue","violet","yellow"];

for(var i=0;i<200;i++)
{
  r=Math.random()*50;
  x=Math.random()*(innerWidth-r*2)+r;
  y=Math.random()*(innerHeight-r*2)+r;
  dx=(Math.random()-0.5)*10;
  dy=(Math.random()-0.5)*10;
  color=colorArray[Math.floor(Math.random()*colorArray.length)];
  circleArray.push(new Circle(x,y,r,dx,dy,color));
}


function anime(){
  
  requestAnimationFrame(anime);
  ctx.clearRect(0,0,innerWidth, innerHeight);

  
  for(var i=0;i<circleArray.length;i++)
  {
    circleArray[i].update();
  }
    
}

anime();
