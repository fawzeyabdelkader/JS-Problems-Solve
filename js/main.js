//question-1
 

// var number = window.prompt("Enter Number")
// console.log("Output: " , number);


//End-1
//=======================================================================


//question-2

//  var number=Number( window.prompt("Enter Number"));
//  if(number % 3===0 && number % 4===0){
//     console.log("Yes")
//  } 
//  else{
//     console.log("No");
//  }
 

//End-2
//=======================================================================

//question-3

// var number1=Number( window.prompt("Enter Number1"));
// var number2=Number( window.prompt("Enter Number2"));
// if(number1>number2){
//     console.log(number1);
// }
// else{
//     console.log(number2);
// }

//End-3
//=======================================================================

//question-4


// var number=Number(window.prompt("Enter Number"));
// if(number<0)
// {
//     console.log("negative");
// }
// else{
//     console.log("positive");
// }

//End-4
//=======================================================================



//question-5

// var number1=Number( window.prompt("Enter Number1"));
// var number2=Number( window.prompt("Enter Number2"));
// var number3=Number( window.prompt("Enter Number3"));

//  if(number1>number2&&number1>number3)
//  {
//     console.log("Max Number is :" ,number1);
//  }
//  else if(number2>number1&&number2>number3)
//  {
//     console.log("Max Number is :" ,number2);
//  }
//  else if(number3>number1&&number3>number2)
//  {
//     console.log("Max Number is :" ,number3);
//  }


//  if(number1<number2&&number1<number3)
//  {
//     console.log("Min Number is :" ,number1);
//  }
//  else if(number2<number1&&number2<number3)
//  {
//     console.log("Min Number is :" ,number2);
//  }
//  else if(number3<number1&&number3<number2)
//  {
//     console.log("Min Number is :" ,number3);
//  }


//End-5
//=======================================================================





//question-6

//  var number=Number( window.prompt("Enter Number"));
 
//  if(number%2==0){
//     console.log("Number",number,"is Even");
//  }
//  else{
//     console.log("Number",number,"is Odd");
//  }

 //End-6
//=======================================================================




//question-8
// var chars =window.prompt("Enter Your Char")
// if (chars=="A"||chars=="a"||chars=="E"||chars=="e"||chars=="I"||chars=="O"||chars=="o"||chars=="U"||chars=="u") 
// {
//   console.log("Vowel");
// }
// else{
//   console.log("consonant");
// }

 //End-8
//=======================================================================



//question-9

//  var number=Number( window.prompt("Enter Number")); 

// for (var i = 1; i <= number; i+=1) {
    
//     console.log(i);
// }

    
//End-9
//=======================================================================




//question-10

//  var number=Number(window.prompt("Enter Number"));
//  for (var i = 1; i<=12; i++) {
    
//     console.log(i*number);
//  }

    
//End-10
//=======================================================================


//question-11

//  var number=Number(window.prompt("Enter Number"));
//  for (var i = 1; i<=number; i+=1) {
//     if (i%2==0) {
//         console.log(i);

//     }else{
//         console.log("Sorry");
//     }
//  }

//----------------------------------------------------------

// var number=Number(window.prompt("Enter Number"));
// for (var i = 2; i<=number; i+=2) {

//        console.log(i);
// }

// var number=Number(window.prompt("Enter Number"));
// for( var i=0;i<=number;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }
    
//End-11
//=======================================================================




//question-12-1

// var number=Number(window.prompt("Enter Number"));
// var power=Number(window.prompt("Enter power"));

// var output=number**power;
// console.log(output);

//-----------------------------------------------------

// var number=Number(window.prompt("Enter Number"));
// var power=Number(window.prompt("Enter power"));

// var output=1;
// for (var i = 0; i < power; i++) {
    
//     output*=number
// }
// console.log(output);

//End-12-1
//=======================================================================


//question-12-2

// var total=0;
// for(var i=0;i<5;i++){
//     total+=Number(window.prompt("Enter Subject "+(i+1 + " : ")));
// }
// console.log("Total = ",total);
// console.log("Avg = ",total/5);
// console.log("percentage = ",total/500*100 + "%");

//End-12-2
//=======================================================================
 

//question-13
    // var monthNumber=window.prompt("Enter Month Number");
    // if(monthNumber==1||monthNumber==3||monthNumber==5||monthNumber==7||monthNumber==8||monthNumber==10||monthNumber==12){
    //     console.log("31");
    // }
    // else if (monthNumber==2){
    //     console.log("28 days in a common year and 29 days in leap years");
    // }
    // else if(monthNumber==4||monthNumber==6||monthNumber==9||monthNumber==11){
    //     console.log("30");
    // }
 
//End-13
//=======================================================================
 

//question-14


// var physicsMark=Number(window.prompt("Enter mark of physic subject")); 
//  var chemistryMark=Number(window.prompt("Enter mark of chemistry subject")); 
//  var biologyMark=Number(window.prompt("Enter mark of biology subject")); 
//  var mathematicsMark=Number(window.prompt("Enter mark of mathematics subject")); 
//  var computerMark=Number(window.prompt("Enter mark of computer subject")); 

//  var percentage=(physicsMark+chemistryMark+biologyMark+mathematicsMark+computerMark)/500*100;

//     if (percentage>=90) {
//         console.log("Grade : A");
//     }
//     else if(percentage>=80){
//         console.log("Grade : B");
//     }
//     else if(percentage>=70){
//         console.log("Grade : C");
//     }
//     else if(percentage>=60){
//         console.log("Grade : D");
//     }
//     else if(percentage>=40){
//         console.log("Grade : E");
//     }
//     else if(percentage<40){
//         console.log("Grade : F");
//     }

//End-14
//=======================================================================
 

//question-15
// var monthNumber=window.prompt("Enter Month Number");
// switch (monthNumber) {
//   case "1":
//   case "3":
//   case "5":
//   case "7":
//   case "8":
//   case "10":
//   case "12":
//   console.log("Total number of days in the month:- 31");
    
//   break;
//   case"2":
//   console.log("28 days in a common year and 29 days in leap years");
//   break;
    
//   case"4":
//   case"6":
//   case"9":
//   case"11":
//   console.log("Total number of days in the month:- 30");
//   break;
 
// }
 
//End-15
//=======================================================================
 
//question-16

 
//   var chars =window.prompt("Enter Your Char")
//   switch (chars) {
//     case "A":
//     case "E":
//     case "I":
//     case "O":
//     case "U":
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
    
//   console.log("Vowel");
//         break;
//   default:console.log("consonant");
//         break;
//   }

 //End-16
//=======================================================================



//question-17

// var number1=Number(window.prompt("Enter Your Number One"));
// var number2=Number(window.prompt("Enter Your Number Two"));
// switch (number1>number2) {
//   case true:
//     console.log("numberOne : ",number1);
//     break;
//   case false:
//     console.log("numberTwo : ",number2);      
 
// }
 
 //End-17
//=======================================================================

//question-18

 
// var number=Number( window.prompt("Enter Number"));
// switch (number%2==0) {
//   case true:
//     console.log("Number",number,"is Even");
//     break;
//   case false:
//     console.log("Number",number,"is Odd");  
//     break;
// }

 //End-18
//=======================================================================
//question-19

 
// var number=Number( window.prompt("Enter Number"));
//  switch (number<0) {
//   case true:
//     console.log("Number",number,"is Negative");
//     break;


//   case false:
//      switch (number==0) {
//       case true:
//       console.log("Number",number,"is Zero");
//         break;
//      case false:
//         console.log("Number",number,"is positive");
//         break;
//      }
//      break;
  
//  }

 //End-19
//=======================================================================

//question-20

 
// var number1=Number( window.prompt("Enter NumberOne"));
// var sign= window.prompt("Enter Sign");
// var number2=Number( window.prompt("Enter NumberTwo"));

// switch (sign) {
//    case "+":
//       console.log(number1+number2);
//       break;
//    case "-":
//       console.log(number1-number2);
//       break;
//    case "*":
//       console.log(number1*number2);
//       break;
//    case "/":
//       console.log(number1/number2);
//       break;
// }
 
 //End-20
//=======================================================================



