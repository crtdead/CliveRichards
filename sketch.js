let size = 90;

let cols = 10;

function setup() {
  createCanvas(2000, 2000, WEBGL);
   background(237,234,229);
  ortho()
  angleMode(DEGREES)
  rectMode(CENTER)
  //fill(243,206,126)
  noFill()
   
}

function draw() {
  
  strokeWeight(1)
  //stroke(182,179,174)
  
  push()
  
  for (let i = 0; i <cols; i ++){
    
    push()
    translate(-720,720)
    rotateX(i * 10)
    box(size);
    pop() 
    translate(0,- 160)

    
  }
  pop()
  
  push()
  
  for (let i = 0; i <cols; i ++){
    
    push()
    translate(-560,720)
    rotateX(i * 10)
    rotateZ(- 10)
    box(size);
    pop() 
    translate(0,-160)

    
  }
  pop()
  
  push()
  
  for (let i = 0; i <cols; i ++){
    
    push()
    translate(-400,720)
    rotateX(i * 10)
    rotateZ(- 20)
    box(size);
    pop() 
    translate(0,-160)

    
  }
  pop()
  
  push()
  
  for (let i = 0; i <cols; i ++){
    
    push()
    translate(-240,720)
    rotateX(i * 10)
    rotateZ(- 30)
    box(size);
    pop() 
    translate(0,- 160)

    
  }
  pop()
  
  push()

  for (let i = 0; i <cols; i ++){
    
    push()
    translate(-80,720)
    rotateX(i * 10)
    rotateZ(- 40)
    box(size);
    pop() 
    translate(0,- 160)

    
  }
  pop()
  
  push()
  
  for (let i = 0; i <cols; i ++){
    
    push()
    translate(80,720)
    rotateX(i * 10)
    rotateZ(- 50)
    box(size);
    pop() 
    translate(0,- 160)

    
  }
  pop()
  
  push()
  
  for (let i = 0; i <cols; i ++){
    
    push()
    translate(240,720)
    rotateX(i * 10)
    rotateZ(- 60)
    box(size);
    pop() 
    translate(0, - 160)

    
  }
  pop()
  
  push()
  
  for (let i = 0; i <cols; i ++){
    
    push()
    translate(400,720)
    rotateX(i * 10)
    rotateZ(- 70)
    box(size);
    pop() 
    translate(0,- 160)

    
  }
  pop()
  
  push()
  
  for (let i = 0; i <cols; i ++){
    
    push()
    translate(560,720)
    rotateX(i * 10)
    rotateZ(- 80)
    box(size);
    pop() 
    translate(0,- 160)

    
  }
  pop()
  
  push()
  
  for (let i = 0; i <cols; i ++){
    
    push()
    translate(720, 720)
    rotateX(i * 10)
    rotateZ(- 90)
    box(size);
    pop() 
    translate(0,- 160)

    
  }
  pop()
  
}
