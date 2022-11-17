let pic= document.getElementById("slid-img");
let titleOnimage=document.querySelector(".slid-section-describtion-title")
let describtion=document.querySelector(".slid-section-describtion-discribtion")
let clientslogo1=document.querySelector(".clients-logo-img1")
let clientslogo2=document.querySelector(".clients-logo-img2")
let clientslogo3=document.querySelector(".clients-logo-img3")
let clientslogo4=document.querySelector(".clients-logo-img4")
let clientslogo5=document.querySelector(".clients-logo-img5")
let clientslogo6=document.querySelector(".clients-logo-img6")
let loading =document.querySelector(".loading")
let loader =document.querySelector(".loader")

let pictures=[1,2,3,4,5,6];
let titleimg=['Mine planning software','Mining operations software','ESG software','Geology software','Mining operations software','ESG software']
let discrib=[
"Our mining engineering products provide a suite of design, scheduling, optimisation and execution solutions that cover multiple planning horizons from strategic planning through to operations",
"Datamine’s proven technology suite covers every aspect of the mining process, supported by our global team of more than 700 experts providing implementation, professional training, and advisory services.",
"From digital shift allocation, open pit and underground drill and blast, to critical ore control and dilution modeling, Datamine has the most comprehensive and sophisticated suite of solutions for your operational needs",
"Seize new opportunities and realise your sustainability & ESG goals. Together, let us build a sustainable future",
"Our mining engineering products provide a suite of design, scheduling, optimisation and execution solutions that cover multiple planning horizons from strategic planning through to operations",
"Datamine’s proven technology suite covers every aspect of the mining process, supported by our global team of more than 700 experts providing implementation, professional training, and advisory services.",
]
// titleOnimage.innerHTML= "ali"; 



//  for (var load= 0; load < 100; load++) {
//     setTimeout(() => {
//         loading.style="width:"+[load]+"%;"
//     }, 1000);
    
//  }   
var load=0;
setInterval(() => {
    
    if(load<=100){
        loading.style="width:"+[load]+"%;"

    load++;
        }

    if(load==100){
       loader.style="display:none;"
       
    }
},70);


var i=1;
pic.src="images/1.jpg"
setInterval(() => {
    
    if(i<=pictures.length){
    pic.src="images/"+ pictures[i]+".jpg";
    titleOnimage.textContent=titleimg[i]
    describtion.textContent=discrib[i]
    i++;
        }

    if(i==pictures.length){
        i=0;
    }
}, 7000);



// clientslogo.src="images/5.jpg"
// clientslogo.style="left:30px;"
var f=20
var m1=0;
var m2=-f;
var m3=-f*2;
var m4=-f*3;
var m5=-f*4;
var m6=-f*5;
var j=120;
setInterval(() => {
    if(m1<=j){
        clientslogo1.style="left:"+m1+"%";
        m1=m1+0.02;
    }
    if(m1>j){
        m1=0;}
        console,console.log(m1);
}, 1);

setInterval(() => {
    
    if(m2<=j){
        clientslogo2.style="left:"+m2+"%";  
        m2=m2+0.02;
    }
    if(m2>j){
        m2=0;}
}, 1);

setInterval(() => {
   
    if(m3<=j){
        clientslogo3.style="left:"+m3+"%";  
        m3=m3+0.02;
    }
    if(m3>j){
        m3=0;
    }
}, 1);

setInterval(() => {
   
    if(m4<=j){
        clientslogo4.style="left:"+m4+"%";  
        m4=m4+0.02;
    }
    if(m4>j){
        m4=0;
    }
}, 1);

setInterval(() => {
   
    if(m5<=j){
        clientslogo5.style="left:"+m5+"%";  
        m5=m5+0.02;
    }
    if(m5>j){
        m5=0;
    }
}, 1);

setInterval(() => {
   
    if(m6<=j){
        clientslogo6.style="left:"+m6+"%";  
        m6=m6+0.02;
    }
    if(m6>j){
        m6=0;
    }
}, 1);

// clientslogo4.style="left:100px;"

// var m1=0;
// var m2=-20;
// var m3=-40;
// setInterval(() => {
//     if(m1<=140){
//         clientslogo1.style="left:"+m1+"%";
//         m1=m1+0.02;
//     }
//     if(m1>140){
//         m1=0;}
//         console,console.log(m1);
// }, 1);

// setInterval(() => {
    
//     if(m2<=120){
//         clientslogo2.style="left:"+m2+"%";  
//         m2=m2+0.02;
//     }
//     if(m2>120){
//         m2=-20;}
// }, 1);

// setInterval(() => {
   
//     if(m3<=102){
//         clientslogo3.style="left:"+m3+"%";  
//         m3=m3+0.02;
//     }
//     if(m3>102){
//         m3==-40;
//     }
// }, 1);

// var j=0;
// var k=-20;
// var f=-40;
// setInterval(() => {
//     if(j<=140){
//         clientslogo1.style="left:"+j+"%";
//         j=j+0.02;
//     }
//     if(j>140){
//         j=0;}
//         console,console.log(j);
// }, 1);

// setInterval(() => {
    
//     if(k<=120){
//         clientslogo2.style="left:"+k+"%";  
//         k=k+0.02;
//     }
//     if(k>120){
//         k=-20;}
// }, 1);

// setInterval(() => {
   
//     if(f<=102){
//         clientslogo3.style="left:"+f+"%";  
//         f=f+0.02;
//     }
//     if(f>102){
//         f==-40;
//     }
// }, 1);