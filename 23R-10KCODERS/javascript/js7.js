//Traffic light system
var trafficLight="yellow";
if(trafficLight=="red"){
  console.log("Stop");
}else if(trafficLight=="yellow"){
  console.log("Get ready to move");
}else if(trafficLight=="green"){
  console.log("Go");
}else{
  console.log("Invalid input");//o/p:Get ready to move
}
//Weather Description
var temperature=15;
 if(temperature===0){
   console.log("it's freezing cold");
 }else if(temperature===15){
   console.log("it's a cool day");
 }else if(temperature===25){
   console.log("it's a pleasant day");
 }else{
   console.log("Unknown Weather");
 }
 //Day of the week
 var day=1;
if(day===1){
  console.log("Today is Monday");
}else if(day===2){
  console.log("Today is Tuesday");
}else if(day===3){
  console.log("Today is Wednesday");
}else if(day===4){
  console.log("Today is Thursday");
}else if(day===5){
  console.log("Today is Friday");
}else if(day===6){
  console.log("Today is Saturday");
}else if(day===7){
  console.log("Today is Sunday");
}else{
  console.log("Invalid day number")
}
//Air travel check in process
var hasTicket=true;
var baggageWeight=22;
var baggageLimit=20;
if(hasTicket){
 console.log('Ticket is valid proceed to baggage check');
 if(baggageLimit>=baggageWeight){
    console.log("Excess baggage detected. Please pay extra charges.");
 }else{
   console.log("Baggage is within limit. you can proceed");
 }
}
else{
    console.log("No valid ticket");
    
}
//Grade score
var score=15;
if(score>=90){
    console.log("O grade")
}else if(score>=75){
    console.log("A grade");
} else if(score>=60){
    console.log("B grade");
}else if(score>=50){
    console.log("C grade");
}else if(score>=35){
    console.log("D grade");
}else{
    console.log("Failed the exam"); 
}
//Restaruant dinning experience
var diningchoice="dine in";
var seatingPreference="indoor";
if(diningchoice==="dine in"){
    if(seatingPreference==="indoor"){
        console.log("Please follow me to your indoor table");
        
    }else if(seatingPreference==="outdoor"){
        console.log("Please follow me to your outdoor table");
    }else{
        console.log("Invalid seating preference");
    }
}else if(diningchoice==="takeout"){
    console.log("You've chosen take out. Your order will be ready shortly.");
}else{
    console.log("Invalid dining option.");
}
//job application
var hasDegree=true;
var exp=3;
if(hasDegree){
    console.log("You meet the minimum educational qualification.");
    if(exp>=2){
        console.log("You also have enough experience. Proceed to the interview round.");
        
    }else{
        console.log("You do not have enough experience for this role.");
    }
}else{
    console.log("You do not meet the educational qualifications for this job.");
}
