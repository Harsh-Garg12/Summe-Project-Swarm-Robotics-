let canvas_size=500;
let numrows=50;
let numcol=50;
let width=canvas_size/numrows;
let Bot=[];
let numBots=10;
let Goal=[];//ignored for now
let vel=[];//velocity of bots 
let pot=[]; //potential of each cell
let numVisited=numBots;//stores number of visited cells
let flag=0;    //flag
function fitnessFunc(x){
   // return numrows*numcol*10/(numcol*numrows-numVisited+1);
  return 1;
}
function velCalc(a,b){
  let updatedVel=[1000000000,10000000000];
  let VEL2=[];//vector storing velocity towards possible cells with minimum distance
  for(let i=0;i<numrows;i++){
    for(let j=0;j<numcol;j++){
        if(pot[i][j]==-1&&abs(updatedVel[0])+abs(updatedVel[1])>abs(i-int(a/width))+abs(j-int(b/width))){
          VEL2=[]; 
          updatedVel[0]=fitnessFunc(numVisited)*(i-int(a/width));
           updatedVel[1]=fitnessFunc(numVisited)*(j-int(b/width));
           VEL2[0]=[];
           VEL2[0][0]=updatedVel[0];
           VEL2[0][1]=updatedVel[1];
        }
      else if(pot[i][j]==-1&&abs(updatedVel[0])+abs(updatedVel[1])==abs(i-int(a/width))+abs(j-int(b/width))){
        VEL2.push([updatedVel[0],updatedVel[1]]);
      }
    }
  } 
  if(VEL2.length==0) return [0,0];
  let x=int(random(0,VEL2.length));
  
  return [VEL2[x][0]*width,VEL2[x][1]*width];
}
function setup() {
  createCanvas(canvas_size,canvas_size);
  
  // i stands for Rows , j stands for column
  for(let i=0;i<numrows;i++){
    pot[i]=[];
    for(let j=0;j<numcol;j++){
      pot[i][j]=-1; //initially every cell has potential -1
      rect(width*i,width*j,width,width);
    }
  }
  
//Any Random position of Goal in grid  
  let x=int(random(0,canvas_size));
  let y=int(random(0,canvas_size));
  
  //for Goal colored with Blue
  Goal[0]=x;
  Goal[1]=y;
  fill(0,0,255);
  rect(width*int(x/width),width*int(y/width),width,width);  
  

  /* For Bots, Bot[i][0]->Indicate x-coordinate of ith Bot
Bot[i][1]->Indicate y-coordinate of jth Bot*/
  
  for(let i=0;i<numBots;i++){
  //Assigning Random Position to Bots , colored with Green/
    Bot[i]=[];
    vel[i]=[];
    vel[i][0]=0;//taking initial velocity as zero
    vel[i][1]=0;// taking initial velocity as zero
    Bot[i][0]=random(0,canvas_size);
    Bot[i][1]=random(0,canvas_size);
    pot[int(Bot[i][0]/width)][int(Bot[i][1]/width)]=0;
    
    fill(0,255,0);
rect(width*int(Bot[i][0]/width),width*int(Bot[i][1]/width),width,width);
  }
  
}
function mouseDragged() {
  pot[int(mouseX/width)][int(mouseY/width)] = 10000;
  // set high potential on obstacles
  
  fill(0,0,0);    //fill black color in obstacle cell
  rect(width*int(mouseX/width),width*int(mouseY/width), width, width);
  // prevent default
  return false;
}

function draw(){
  if(keyIsPressed==true){
    flag=1;
  }
  if(flag){
  for(let i=0;i<numBots;i++){
    fill(150,150,150);
    rect(width*int(Bot[i][0]/width),width*int(Bot[i][1]/width),width,width);
    newVel=velCalc(Bot[i][0],Bot[i][1]);//calculating the new velocity
    if(abs(newVel[0])>abs(newVel[1])){
       velx=min(width,newVel[0]);
      velx=max(-width,newVel[0]);
      let f=0;
      for(let k=0;k<numBots;k++){
        if(i!=k&&int((Bot[i][0]+velx)/width)==int(Bot[k][0]/width)&&int(Bot[i][1]/width)==int(Bot[k][1]/width)){
             f=1;
             break;
           }
      }
      if(f==0){
      Bot[i][0]=min(canvas_size-1,Bot[i][0]+velx);
      Bot[i][0]=max(1,Bot[i][0]);}
    }
    else{
      vely=min(width,newVel[1]);
      vely=max(-width,newVel[1]);
      
      let f=0;
      for(let k=0;k<numBots;k++){
        if(i!=k&&int((Bot[i][1]+vely)/width)==int(Bot[k][1]/width)&&int(Bot[i][0]/width)==int(Bot[k][0]/width)){
             f=1;
             break;
           }
      }
      if(f==0){
      Bot[i][1]=min(canvas_size-1,Bot[i][1]+vely);
      Bot[i][1]=max(1,Bot[i][1]);}
      // Bot[i][1]=min(canvas_size-1,Bot[i][1]+vely);
      // Bot[i][1]=max(1,Bot[i][1]);
    }
    fill(0,255,0);
    
    pot[int(Bot[i][0]/width)][int(Bot[i][1]/width)]=0;
    numVisited+=1;
    rect(width*int(Bot[i][0]/width),width*int(Bot[i][1]/width),width,width);
    
  }
  frameRate(20);}
}
