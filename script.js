window.addEventListener("load", function () {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;

  class Particle{
    constructor(effect){
      this.effect=effect;
      this.x=Math.random()*this.effect.width;
      this.y=Math.random()*this.effect.height;
      this.size=10;
      this.vx=Math.random() * 2 - 1;
      this.vy=Math.random() * 2 - 1;
    }
    draw(context){
      context.fillRect(this.x, this.y, this.size, this.size);
    }
    update(){
      this.x+=this.vx;
      this.y+=this.vy;
    }
  }

  class Effect{
    constructor(width,height){
      this.width=width;
      this.height=height;
      this.particlesArray=[];
      this.image1=document.getElementById('image1')
      this.centerX=this.width*0.5;
      this.centerY=this.height*0.5;
      this.x=this.centerX-this.image1.width*0.5;
      this.y=this.centerY-this.image1.height*0.5;
    }
    init(context){
      context.drawImage(this.image1, this.x, this.y);
      const pixels=context.getImageData(0,0,this.width,this.height);
      console.log(pixels);
    }
    draw(context){
      this.particlesArray.forEach(particle=>particle.draw(context));
    }
    update(){
      this.particlesArray.forEach(particle=>particle.update());
    }
  }
  
  const effect= new Effect(canvas.width, canvas.height);
  effect.init(ctx);

  function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  effect.draw(ctx);
  effect.update();
  requestAnimationFrame(animate)
  }
  //animate();

})
