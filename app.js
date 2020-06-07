// //Q1- Write a script to greet your website visitor using JS alert box. 

// alert("Hello! Visitor We are welcoming you in our website :)"
// +"How May I help you");

// //Q2- Write a script to display following message on your web page: 

// var username=prompt("Enter Your name:");
// var pass=prompt("Enter Password:");
// if( pass==='12345')
// {
//     alert("Welcome"+username);
// }
// else{
//     alert("Error!Please enter a valid password");
// }
// //Q3- Write a script to display following message on your web page: (Hint : Use line break)? 

// alert("Welcome to JS land "+"\n"+"Happy Coding");

// //Q4- Write a script to display following messages in sequence: 

// alert("Welcome To JS Land");
// alert("Happy Coding!"+"\n"+"Prevent this message from additional dialogs.")

// //Q5-Generate the following message through browser’s developer console: 
// alert("Hello... I can run JS through Browser developer Console");

// console.log("Hello!");

// //Q6- Make use of alerts in your new/existing HTML & CSS project. 

//function show_alert()
// {

//     alert("ThankYou! Your Feedback has been recorded!");
// }

// //Q7-Practice placement of <script></script> element in following sections of your project in exercise 6:
// //  a. Head
// //   b. Body (before your page’s HTML) 
// // c. Body (inside your page’s HTML) d. Body (after your page’s HTML) 

                                         //Variables For Strings chap 2

//    //Q1- Declare a variable called username.
    
//    var username="Rafia";
//    alert(username);
//    document.writeln("Q1-"+username +"<br>");

//    //Q2-Declare a variable called myName & assign to it a string that represents your Full Name. 

//    var myname="Rafia";
//    var mylastname="Qadir";
//    alert(myname+" "+mylastname);
//    document.writeln("Q2-My Full name is: "+""+myname +" "+ mylastname +"<br>");

//    //Q3- Write script to
// //     a) Declare a JS variable, titled message. 
// //    b) Assign “Hello World” to variable message 
// //    c) Display the message in alert box. 

//   var message="Hello World";
//   alert(message);
//   document.write("Q3-"+message +"<br>");

//   //Q4- Write a script to save student’s bio data in JS variables and show the data in alert boxes. 
 
//  var stu_name="Rafia";
//  var stu_age="21 years old";
//  var course="Web And Mobile App Development";
//  alert(stu_name);
//  alert(stu_age);
//  alert(course);
// //  document.write("Q4-"+stu_name+"<br>"+"Age is:"+stu_age+"<br>"+"Course is: "+course);

 //Q5- Write a script to display the following alert using one JS variable

//  var pattern="PIZZA";
//  for(var i=pattern.length; i>1;i--){
//     document.write("PIZZA"+"<br>" );
//  }

//  //Q6- Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation) 

//  var email="rafiamemon@gmail.com";
//  alert("My email address is:"+email);
//  document.write("Q6-My email address is "+email+"<br>");

//  //Q7- Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box: 

//  var book="A smarter way to learn Javascript";
//  alert("I am trying to learn from the book "+book);
//  document.write("Q7-I am trying to learn from the book "+book+"<br>");

//  //Q8- Write a script to display this in browser through JS

//  document.write("Q8-"+"Yah! i can write html content through Javascript"+"<br>");

//  //Q9-Store following string in a variable and show in alert and browser through JS 
 
//  var design="“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
//  alert(design);
//  document.write("Q9-"+design);

                           //Variable For Numbers

//     //1. Declare a variable called age & assign to it your age. Show your age in an alert box. 
    
//     var age="21 Years old";
//     alert(age);
//     document.write("My age is :"+ age+"<br>");
                        
//    // 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”. 
 
//    var visited=14;
//    alert("You have visited"+" "+visited+" "+"times");

//    //3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser: 
 
//    var birthyear="1998";
//    document.write("My Birth Year is :"+birthyear+"<br>"+"Data Type of Declared type of variable is number"+"<br>");
 
//    //A visitor visits an online clothing store www.xyzClothing.com . 
// //    Write a script to store in variables the following information: 
// //    a. Visitor’s name 
// //    b. Product title
// //     c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: 
// //    “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”

//    var visitor_name="John";
//    var product="T-shirt";
//    var quantity="2 large size";
//    document.write("<b>"+visitor_name+"</b>"+" "+"ordered the"+" "+"<b>"+quantity+" "+product+"</b>"+" "+"on xyz clothing store");

                           //Chapter 4 Variables Legal And Illegal

// 1. Declare 3 variables in one statement.                            
// var name="rafia",id="10",gender="female";
// var name, age,id;

// // Declare 5 legal & 5 illegal variable names. 

// //  var 0rafia, @name, stu age, var,;//illegal
//  var name,age,MyName,MyPass,stu_name //legal

//  //3. Display this in your browser
// //   a)  A heading stating “Rules for naming JS variables” 
// //  b)  Variable names can only contain ______, ______, ______ and ______.
// //   For example $my_1stVariable c) Variables must begin with a ______, ______ or _____.
// //    For example $name, _name or name d) Variable names are case _________
// //   e) Variable names should not be JS _________   

// document.write("<h1>"+"Ruling of naming JS variable"+"</h1>"+ "<br>"+
// "Variable names can only contain ,  numbers,$ and _. For example $my_1stVariable "+"<br>"+
// "c) Variables must begin with a $, number or _. For example $name, _name or name "+"<br>"+
// "d) Variable names are case sensitive"+"<br>"+
// "  e) Variable names should not be JS Keyword");
  
                              //chapter 5 Math Expressions

    //1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.  
    
//     var a=8;
//     var b=10;
//     var sum=a+b;
//     document.write("Sum of 8 & 10 is:"+" "+sum+"<br>");

//    // 2. Repeat task1 for subtraction, multiplication, division & modulus. 

//    var a=8;
//    var b=10;
//    var sum=a+b;
//    var sub=a-b;
//    var mul=a*b;
//    var divide=a/b;
//    var mod=a%b
//    document.write("Sum of 8 & 10 is:"+" "+sum+"<br>"+
//    "Subtraction of 8 & 10 is:"+" "+sub+"<br>"+
//    "Multiply of 8 & 10 is:"+" "+mul+"<br>"+
//    "Division of 8 & 10 is:"+" "+divide+"<br>"+
//    "Modulous of 8 & 10 is:"+" "+mod+"<br>");
   
//    //task3
//    var value=10;
//    document.write("Value after variable declaration is: "+"undefined"+"<br>");
//    document.write("Initial Value is :"+" "+value+"<br>");
//    value++;
//    document.write("value after increment is :"+" "+value+"<br>");
//    var add=value+7;
//    document.write("Value after addition of 7 is:"+" "+add+"<br>");
//    add--;
//    document.write("value after Decrement is :"+" "+add+"<br>");
//    var divide=10/3;
//    document.write("value after Division is :"+" "+divide+"<br>");
//    var mod=10%3;
//    document.write("The remainder is :"+" "+mod+"<br>");

//    //4-Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of 
//    //buying 5 tickets to a movie. Example output: 

//    var cost=600;
//    var calculate=cost*5;
//    document.write("The cost of buying 5 tickets for movie :"+" "+calculate+"<br>");

//    //5-Write a script to display multiplication table of any number in your browser. E.g 

//    var table=3;
//    document.write("<h2>"+"Table of "+table+"</h2>"+"<br>");
//    for(var i=1;i<=10;i++){
//        document.write("3"+"X"+i+"="+3*i+"<br>");
//    }

//    //6-The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here

//    var celsius=20;
//    var farenhite=10;
//    celsius=(farenhite-32)*5/9;
//    document.write(farenhite+"F"+"to"+celsius+"C"+"<br>");
//    farenhite=(celsius*9/5)+32;
//    document.write(celsius+"C"+"to"+farenhite+"F"+"<br>");

//    //task 7 ecommerce shopping cart
//    var item1_price=650;
//    var item2_price=100;
//    var quantity1=3;
//    var quantity2=7;
//    var shipping=100;
//    var total=item1_price*quantity1+item2_price*quantity2+shipping;
//    document.write("<h2>"+"Shopping Cart"+"</h2>"+"<br>");
//   document.write("Price of item1 is:"+" "+item1_price+"<br>");
//   document.write("Quantitity of item1 is:"+" "+quantity1+"<br>");
//   document.write("Price of item2 is:"+" "+item2_price+"<br>");
//   document.write("Quantitity of item2 is:"+" "+quantity2+"<br>");
//   document.write("Shipping charges is:"+" "+shipping+"<br>");
//   document.write("Total charges :"+" "+total+"<br>");
  
//   //8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser 
 
//  var tot_marks=500;
//  var marks_obt=400;
//  var percentage=marks_obt/tot_marks*100;
//  document.write("Total Marks:"+" "+tot_marks+"<br>"+"Marks Obtained:"+" "+marks_obt+"<br>"+"Your percentage is:"+""+percentage+"<br>"); 

//  //task9

//  var us_dollar=10;
//  var saudi=25;
//  var pkr=10*104.80+25*28;
//  document.write("<h1>"+"Currency in PKR"+"</h1>"+"<br>");
//  document.write("Total Currency in PKR"+" "+pkr+"<br>");

//  //10. Write a program to initialize a variable with some number and do arithmetic in following sequence: 

//  var num=5;
//  var add=num+5,mul=num*10,div=num/2;
//  document.write("Initial valu is"+" "+num+"<br>"+add+"<br>"+mul+"<br>"+div);

//  //11The Age Calculator: Forgot how old someone is? Calculate it! 

//  var current_year=2020;
//  var mybirth_year=1998;
//  var age_cal=current_year-mybirth_year;
//  document.write("<h1>"+"Age  Calculator"+"</h1>"+"current year is "+
//  current_year+"<br>"+"My birth year is "+mybirth_year+"<br>"+"My age is"+" "+age_cal);

//  //12- The Geometrizer

//  var radius=20;
//  const pi=3.142;
//  var circumference=2*pi*radius;
//  var area=pi*radius*radius;
//  document.write("<h1>"+"The Geometrizer"+"</h1>"+"Radius:"+radius+"<br>"+
//"Circumference of circle:"+circumference+"<br>"+"Area of circle:"+area);

// //13-The Lifetime Supply Calculator

// var snack="chocolato";
// var age=15;
// var max_age=65;
// var amount=3;
// var total=age*max_age;
// document.write(total);
//                                 //Chapter 6-9/////////////////////////////////////////////////////////////

// // 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:  

//    var a=10;
//    ++a;
//    a++;
//    --a;
//    a--;
//    document.write("Result"+"<br>"+"Value of a is"+a+"<br>"+
//    "Value of ++a is"+ ++a +"<br>"+"Value of a++ is"+ a++ +"<br>"+
//    "Now the value of a is"+" "+"12"+"<br>"+
//    "Value of --a is"+ --a +"<br>"+"Now the value of a is"+" "+"11"+"<br>" +"Value of a-- is"+ a-- +"<br>"+
//    "Now the value of a is"+" "+"10"+"<br>" )


// //2. What will be the output in variables a, b & result after execution of the following script: 

// var a=2;
// var b=1;
// var result=--a - --b + ++b + b--;
// document.write("a is"+" "+a+"<br>"+"b is"+" "+b+"<br>"+"result is"+" "+result+"<br>");

// //3. Write a program that takes input a name from user & greet the user

// var input=prompt("Hi user How are u?");
// alert(input);

// //5. Write a program to take input a number from user & display it’s multiplication table on your browser. 
// // If user does not enter a new number,
// //  multiplication table of 5 should be displayed by default. 

// var table=+prompt("Enter the number for multiplication table");
// document.write("<h2>"+"Table of "+table+"</h2>"+"<br>");

// for(var i=1;i<=10;i++){
//     document.write(table+"X"+i+"="+table*i+"<br>");

    
// }

// //default table
//     var table=5;
//     document.write("<h2>"+"Table of "+table+"</h2>"+"<br>");
//     for(var i=1;i<=10;i++){
//         document.write(table+"X"+i+"="+table*i+"<br>");
//     }

    // //task6
    // var urdu=+prompt("Enter your urdu marks");
    // var eng=+prompt("Enter your english marks");
    // var math=+prompt("Enter your maths marks");
    // var total_urdu=100,total_eng=100,total_math=100;
    // var tot_marks=total_urdu+total_eng+total_math;
    // var tot_marks_obt= urdu+eng+math;
    // var percentage_urdu=urdu/total_urdu*100,percentage_eng=eng/total_eng*100,percentage_math=math/total_math*100;
    // var total_per=tot_marks_obt/tot_marks*100;

    //  document.write("<table>"+"<tr>"+"<th>"+"Subjects"+"</th>"+" "
    //  +"<th>"+"Total marks"+"</th>"+" "
    //  +"<th>"+"Marks Obtained"+"</th>"+" "
    //  +"<th>"+"Percentage"+"</th>"+"</tr>"+" "+
    //  "<tr>"+
    //  "<td>"+"Urdu"+"</td>"+" "+
    //  "<td>"+total_urdu+"</td>"+" "+
    //  "<td>"+urdu+"</td>"+" "+
    //  "<td>"+percentage_urdu+"</td>"+" "+"</tr>"+
    //  "<td>"+"English"+"</td>"+" "+
    //  "<td>"+total_eng+"</td>"+" "+
    //  "<td>"+eng+"</td>"+" "+
    //  "<td>"+percentage_eng+"</td>"+" "+"</tr>"+
    //  "<td>"+"Math"+"</td>"+" "+
    //  "<td>"+total_math+"</td>"+" "+
    //  "<td>"+math+"</td>"+" "+
    //  "<td>"+percentage_math+"</td>"+" "+"</tr>"+
    //  "<tr>"+"<td>"+"</td>"+"<td>"+tot_marks+"</td>"+"<td>"+tot_marks_obt+"</td>"+"<td>"+total_per+"</td>"+"</tr>"+
    //  "</table>");
    

                                        //chapter 9-10


    //  1. Write a program to take “city” name as input from user. If user enters “Karachi”,
    //   welcome the user like this: “Welcome to city of lights”                                   
   
    // var city=prompt("Enter city name");
    // if(city=="karachi"){
    //     alert("Welcome to the city of light");
    // }
    // else
    // {

    //     alert("Your city is beautiful");
    // }

    // //2. Write a program to take “gender” as input from user. If the user is male,
    // //  give the message: Good Morning Sir. 
    // // If the user is female, give the message: Good Morning Ma’am

    // var gender=prompt("Enter Your Gender");
    // if (gender=="Male"){
    //     alert("Good Morning Sir");
    // }
    // else
    // {
    //     alert("Good Morning Ma'am");
    // }

  //3. Write a program to take input color of road traffic signal
  // from the user & show the message according to this table: 
   
//   var signal=prompt("Enter Signal color");
//   if(signal=="red"){
//       alert("Must Stop");
//   }
//   else if(signal=="yellow"){
//       alert("Ready to move");
//   }
//   else if(signal=="green"){
//       alert("Move Now");
//   }

//   // 4. Write a program to take input remaining fuel in car (in litres) from user. 
// //   If the current fuel is less than 0.25litres,
// //    show the message “Please refill the fuel in your car” 

//    var rem_fuel=+prompt("Enter Remaining fuel value in your car");
//    if(rem_fuel<0.25){
//        alert("Please refill the fuel in your car");
//    }
//    else
//    {
//        alert("No need to hurry you have enough fuel");
//    }

   //Q5 Run The Script

//     var a = 4; 
//     if (++a === 5)
//     { alert("given condition for variable a is true"); }
 
//  var b = 82;
//   if (b++ === 83)
//   { alert("given condition for variable b is true"); } 
 
//  var c = 12; 
//  if (c++ === 13)
//  { alert("condition 1 is true"); }
//   if (c === 13){ alert("condition 2 is true"); } 
//   if (++c < 14){ alert("condition 3 is true"); } 
//   if(c === 14){ alert("condition 4 is true"); } 
 
// var materialCost = 20000;
//  var laborCost = 2000;
//   var totalCost = materialCost + laborCost; 
//   if (totalCost === laborCost + materialCost)
//   { alert("The cost equals"); } 
 
//  if (true)
//  { alert("True"); }
//   if (false){ alert("False"); } 
 
// if("car" < "cat"){ alert("car is smaller than cat"); } 

// output shows that the given condition of variable is true.

// 6. Write a program to take input the marks obtained in three subjects & 
// total marks. Compute & show the resulting percentage 
// on your page. Take percentage & compute grade as per following table: 

// var urdu=+prompt("Enter your urdu marks");
// var eng=+prompt("Enter your english marks");
// var math=+prompt("Enter your maths marks");
// var total_urdu=100,total_eng=100,total_math=100;
// var tot_marks=total_urdu+total_eng+total_math;
// var tot_marks_obt= urdu+eng+math;
// var percentage_urdu=urdu/total_urdu*100,percentage_eng=eng/total_eng*100,percentage_math=math/total_math*100;
// var total_per=tot_marks_obt/tot_marks*100;
 
// if(tot_marks_obt>=80){
//     document.write("Grade A+" )
// }
// else if(tot_marks_obt>=70){
//     document.write("Grade A" )

// }
// else if(tot_marks_obt>=60){
//     document.write("Grade B" )

// }
// else if(tot_marks_obt>=55){
//     document.write("Grade C" )

// }
// else if(tot_marks_obt>=50){
//     document.write("Grade D" )

// }
// else{
//     document.write("You need to improve" )
// }
// document.write("Total marks"+" "+tot_marks+"<br>");
// document.write("Marks Obtained"+" "+tot_marks_obt+"<br>");
// document.write("Total Percentage"+" "+total_per+"<br>");

//7. Guess game: 
// var secret=+prompt("Enter a Secret number");
// if(secret===9){
//     alert("Bingo you have found the secret number");
// }
// else if(secret==10){
//     alert("You are closed enough");
// }
// else{
//     alert("oops! you didn't get the secret number ");
// }

// 8. Write a program to check whether the given number is divisible by 3.
//  Show the message to the user if the number is divisible by 3. 

// var a=+prompt("Enter Number")
// if(a%3==0){
//     alert("The number is divisilbe by 3")
// }
// else{
//     alert("Try another number");
// }

//9. Write a program that checks whether the given input is an even number or an odd number

// var number=+prompt("Enter Number");
// if(number%2===0){
//     alert("Number is Even");

// }
// else{
//     alert("Number is odd");
// }

//10. Write a program that takes temperature as input and shows a message based on following criteria 

// var temp=+prompt("Enter temperature");
// if(temp>=40){
//     alert("oh its too hot outside");
// }
// else if(temp>=30){
//     alert("The weather is normal today");
// }
// else if(temp>=20){
//     alert("The weather is Cool");
// }
// else if(temp>=10){
//     alert("OMG the weather is so cool");
// }

//11- Calculator
// var a=+prompt("Enter 1st num");
// var b=+prompt("Enter 2nd num");
// var sum=a+b, sub=a-b, mul=a*b,div=a/b, mod=a%b;
// alert("Sum is "+sum+"\n"+"Subtraction:"+sub+"\n"+"Multiplication"+mul+"\n"+"Division"
// +div+"\n"+"Modulo"+mod);

                                //  Chapter 12-13 if/else
//  1. Write a program that takes a character (number or string) in a variable & checks
//  whether the given input is a number, uppercase letter or lower
//  case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122). 

// var input=prompt("Enter any character");
// if (input>='A'&& input<='Z'){
//     alert("Uppercase Letter")
// }
// else if (input>='a'&& input<='z'){
//     alert("Lowercase Letter")
// }
  
// else if (input>=0 && input<=9){
//     alert("Digits")
// }
// else{

//     alert("Special Character");
// }

// 2. Write a JavaScript program that accept two 
// integers and display the larger. Also show if the two integers are equal. 

// var integer1=+prompt("Enter Integer1");
// var integer2=+prompt("Enter Integer2");
// if(integer1>integer2){
//     alert("integer1 is larger")
// }
// else if(integer1==integer2){
//     alert("Both are equal")
// }
// else{
//     alert("integer2 is larger")
// }

// 3. Write a program that takes input a number from user & 
// state whether the number is positive, negative or zero. 
 
// var num=+prompt("Enter value");
// if(num>0){
//     alert(num +"is positive")
// }
// else if(num<0){
//     alert(num +"is negative")
// }
// else 
// {
//     alert(num+"is 0")
// }

//4. Write a program that takes a character (i.e. string of length 1) 
//and returns true if it is a vowel, false otherwise 
// var char=prompt("Enter character");
// if(char=='a'||char=='e'||char=='i'||char=='o'||char=='u'){
//     alert(char+" "+"Character is Vowel")
// }
// else{
//     alert("false")
// }

//5-Validate Password


// var username=prompt("Enter Your name:");
// var pass=prompt("Enter Password:");
// if( pass==='12345')
// {
//     alert("Correct! The password you entered matches the original password"+" "+username);
// }
// else{
//     alert("Incorrect Password");
// }

//6-Fix the code

// var greeting;
//  var hour = 13; 
//  if (hour < 18)
//   { 
//     alert( "Good day");
//   }
//    else 
//    {
//     alert("Good evening") ; 
//    }
 
//Q7 Time

// var timing=prompt("Enter Time");
//   if(timing<=11){
//      document.write("The Time is " +timing +" am");
//   }
//   else if(timing==12){
//     document.write("The Time is " +timing +" pm");
//   }
//   else if(timing==13){
//     document.write("The Time is 1 pm");
//   }
//   else if(timing==14){
//     document.write("The Time is 2 pm");
//   }
//   else if(timing==15){
//     document.write("The Time is 3 pm");
//   }
//   else if(timing==16){
//     document.write("The Time is 4 pm");
//   }
//   else if(timing==17){
//     document.write("The Time is 5 pm");
//   }
//   else if(timing==18){
//     document.write("The Time is 6 pm");
//   }
//   else if(timing==19){
//     document.write("The Time is 7 pm");
//   }
//   else if(timing==20){
//     document.write("The Time is 8 pm");
//   }
//   else if(timing==21){
//     document.write("The Time is 9 pm");
//   }
//   else if(timing==22){
//     document.write("The Time is 10 pm");
//   }
//   else if(timing==23){
//     document.write("The Time is 11 pm");
//   }
//   else if(timing==24){
//     document.write("The Time is 12 am");
//   }
  

//////////////////////////Chapter 13-15  Arrays

// //1.Declare an empty array using JS literal notation to store student names in future

// var student=[" "," "," "];
// console.log(student)

// //2. Declare and initialize a strings array. 

// var names=["rafia","noman","fatima","areeba"];
// console.log(names)

// //3.  Declare and initialize a numbers array

//  var numbers=[1,2,3,4,5];
//  console.log(numbers)

//  //5.  Declare and initialize a boolean array

//  var boolean=[true,false];
//  console.log(boolean)
//  //6. Declare and initialize a mixed array. 
//  var mixed=["rafia",1," ",false];
//  console.log(mixed)

//  //7. Declare and Initialize an array and store available education qualifications in Pakistan 

//  var qualification=["SSC","HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
//  console.log(qualification[0]+"\n"+qualification[1]+"\n"+qualification[2]+"\n"+qualification[3]+"\n"
//  +qualification[4]+"\n"+qualification[5]+"\n"+qualification[6]+"\n"+qualification[7]+"\n")

//  //8.Two arrays

//  var stu=["rafia","paras","aisha","fatima"];
//  var score=[400,350,300,400];
//  var total=500;
//  console.log("Score of"+" "+stu[0]+"is"+ score[0]+" "+"Percentage is"+score[0]/total*100+"\n"+
//  "Score of"+" "+stu[1]+"is"+ score[1]+" "+"Percentage is"+score[1]/total*100+"\n"+
//  "Score of"+" "+stu[2]+"is"+ score[2]+" "+"Percentage is"+score[2]/total*100+"\n"+
//  "Score of"+" "+stu[3]+"is"+ score[3]+" "+"Percentage is"+score[3]/total*100+"\n")

//  //9.Color array
//  var color=["red","yellow","green","pink"];
 
//  color.unshift("white");
//  console.log(color)
//  //10
//  var color=["red","yellow","green","pink"];
 
//  color.push("white");
//  console.log(color)
//  //11
//  var color=["red","yellow","green","pink"];
 
//  color.unshift("Black","blue");
//  document.write(color)
//  //12 Delete first color
//  var color=["red","yellow","green","pink"];
 
//  color.shift("Black");
//  document.write(color)
 
//  //13 Delete last color
//  var color=["red","yellow","green","pink"];
 
//  color.pop("pink");
//  document.write(color)

//  //ask user to add desired color on desired position
// //   var col=prompt("Enter color")
//  var color=[];
//   console.log(color)

//   //. Write a program to store student scores in an array & 
//   //sort the array in ascending order using Array’s sort method.
//   var score=[320,230,480,120];
//   document.write("Ordered list"+score[4]+"<br>"+score[1]+"<br>"+score[0]+"<br>"+score[3]);

//   //11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
//    var cities=["karachi","lahore","islamabad"];
  
//    console.log( cities.slice(0,2));
//   //12- Write a program to create a single string from the below mentioned array: 
//   var arr = ["This", "is " , "my " , "cat"]; 
//   arr.join(arr[0]+arr[1]+arr[2]+arr[3]);
//   console.log(arr);

 ///////////////////////////////Chapter 17-20

   // Declare and initialize an empty multidimensional array. (Array of arrays
//    var Arr=[[1,2],[3,4],[5,6]]

//Declare and initialize a multidimensional array representing the following matrix
// var arr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]]
// document.write(arr[0]+"<br>"+arr[1]+"<br>"+arr[2]);

 //. Write a program to print numeric counting from 1 to 10. 
 

//  for( var counting=1;counting<=10;counting++){
//      document.write(counting+"<br>");
//  }

//  //4.  Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.  
 

//  var table=+prompt("Enter the number for multiplication table");
//  document.write("<h2>"+"Table of "+table+"</h2>"+"<br>");

// for(var i=1;i<=10;i++){
    
//     document.write(table+"X"+i+"="+table*i+"<br>");

    
// }
// Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”] 

// var  fruits = ["“apple”", "“banana”", "“mango”", "“orange”", "“strawberry”"]
// document.write("This is apple at index 0"+fruits[0]+"<br>"+
// "This is banana at index 1"+fruits[1]+"<br>"+
// "This is mango at index 2"+fruits[2]+"<br>"+
// "This is orange at index 3"+fruits[3]+"<br>"+
// "This is strawberry at index 4"+fruits[4]+"<br>")

// // Generate the following series in your browser. See example output.
// //counting 1 to 15
// for(var i=1;i<=15;i++){
//  document.write(i+"<br>");
// }
// //reverse counting
// for(var i=15;i>=1;i--){
//     document.write(i+"<br>");
//    }
//    //even series

//    for(var i=0;i<=20;i=i+2){
//     document.write(i+"<br>");
//    }
//    //odd series
//    for(var i=1;i<=20;i+=2){
//     document.write(i+"<br>");
//    }
//    //series
//    for(var i=2;i<=20;i=i+2){
//     document.write(i+"k"+"<br>");
//    }

   //q7
//   var  A = ["“cake”", "“apple pie”", "“cookie”", "“chips”", "“patties”"] 
//    var size=5;
//    var search;
//     for(var i=0; i<size; i++)
// 	{
//         search[A] = prompt("Welcome to abcd what do you want to search" );
//     }
	//Taking Input from user
    
//     if(search[A]==A[0]||search[A]==A[1]||search[A]==A[2]||search[A]==A[3]||search[A]==A[4])
// {
//     alert(A)
// }
// else{
//     alert("search not found")
// }

//Print the array in the console.
// console.log(search);
 //8-largest element in array
//  function largest(number) {
// 	var large = number[0];
// 	for(var i=1; i<number.length; i++) {
// 		if(large < number[i]) {
// 			large = number[i];
// 		}
// 	}
// 	return large;
// }

// var input = [24, 53, 78, 91, 12];
// var output = largest(input);

// console.log(output);



// console.log(largest)

//9-smallest element
// function findSmallest(numbers) {
//     var small = numbers[0];
//      for (var i = 0; i < numbers.length; i++) {
//           if (numbers[i] < small) {
//             small = numbers[i];
//             console.log(small)
//           }
//      }
//        return small;
//    }

//    findSmallest([24, 53, 78, 91, 12]);
   // 3

   //Write a program to print multiples of 5 ranging 1 to 100. 
//    for(var num=5;num<=100;num+=5){
//        document.write(num+"<br>");
//    }

