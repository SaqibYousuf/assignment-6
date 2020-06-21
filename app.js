// Chapter 21-25
// task 1
var first_name = prompt("Enter Your First Name: ")
var Last_name = prompt("Enter Your Last Name: ")
var full_name = first_name + " " + Last_name;
alert("Welcome " + full_name );

// task 2
var mobile = prompt("Enter Your Favourite Mobile Phone Name: ")
document.write("My Favorite phone is: "+mobile +"<br>") 
document.write("Length of string: " +mobile.length+"<br> <br>")

// task 3
var country = "Pakistani";
var n = country.indexOf("n")
document.write("String: "+country +"<br>")
document.write("inext of 'n': "+n+"<br><br>")

// task 4
var a = "Hello World";
var n = a.lastIndexOf("l");
document.write("String: "+a +"<br>")
document.write("inext of 'l': "+n+"<br><br>")

// task 5
var country = "Pakistani";
var n = country.charAt(3)
document.write("String: "+country +"<br>")
document.write("inext of 'n': "+n+"<br><br>")

// task 6
var first_name = prompt("Enter Your First Name: ")
var Last_name = prompt("Enter Your Last Name: ")
var full_name = first_name.concat(" " + Last_name)
alert("Welcome " + full_name );
 
// task 7
var city = "hyderabad"
var rep = city.replace("hyder" , "islam");
document.write("City: " + city + "<br>")
document.write("After replacement: " + rep + "<br>")

// task 8
var message = "Ali and Sami are best friends They play cricket and football together" ;
var replace = message.replace(/and/g, "&")
document.write(replace)

// task 9
var str = "472"
document.write("Value: "+ str + "<br>")
document.write("type: "+typeof(str) + "<br>")
var num = parseInt(str)
document.write("Value: "+ num + "<br>")
document.write("type: "+typeof(num) + "<br> <br>")

// task 10
var user = prompt("type a word to convert in capital: ")
var cap = user.toUpperCase();
document.write("User Inpur: " + user + "<br>")
document.write("Capital case: "+cap+ "<br> <br>")

// task 11
var user = prompt("Type a string: ")
var title_case = user.toLowerCase();
document.write("User Inpur: " + user + "<br>")
document.write("title case: "+title_case+ "<br> <br>")


// task 12
var number = 35.36;
var intostr =number.toString();
document.write("Number: "+intostr + "<br>")
document.write("Result: "+intostr.replace(".", "")+ "<br> <br>")

// task 13
var usr_name = prompt("enter your username: ")
var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/ ;
if (usr_name.match(format)){
    alert("Enter a valid User Name")
}

// task 14
var items = ["cake", "apple pie", "cookie", "chips", "patties"]
var usr_input = prompt("Welcome to ABC Bakery,What do you want to order Sir/Ma'am?")
var items_odered = usr_input.toLowerCase();
for ( i = 0; i < items.length ; i++){
    if ( items[i] === items_odered) {
        document.write(items[i] + " is availabe at Index " + i + " in our bakery")
   
}else {
    document.write("Sorry not available")
}
}

// task 16
var university = "University of Karachi";
var arr = university.split("");
for (var i = 0 ; i < arr.length; i++){
    document.write(arr[i] +"<br>")
}

// task 17
var country = prompt("Enter your country name");
var countryLenght = country.length;
document.write("the last character is "+  country.charAt(countryLenght-1))

// task 18
var str = "The quick brown fox jumps over the lazy dog"
var intoLower = str.toLowerCase();
var count = intoLower.match(/the/g ).length;
document.write("There are " + count + " occurance(s) of 'the' ")

// Chapter 26-30
// task 1
var number = 3.45216;
var Floor = Math.floor(number);
var Round = Math.round(number);
var Ceil = Math.ceil(number)
document.write("Number: "+number +"<br>");
document.write("Floor: "+Floor+"<br>");
document.write("Round: " +Round+"<br>");
document.write("Ceil: "+Ceil+"<br>");

// task 2
var number = -3.45216;
var Floor = Math.floor(number);
var Round = Math.round(number);
var Ceil = Math.ceil(number)
document.write("Number: "+number +"<br>");
document.write("Floor: "+Floor+"<br>");
document.write("Round: " +Round+"<br>");
document.write("Ceil: "+Ceil+"<br><br>");
 
// task 3
var number = -3;
var absoulute = Math.abs(number);
document.write("The absolute value of "+ number + " is " +absoulute +"<br><br>")

// task 4
var number = Math.random();
var dice = (number*6) + (+1) ;
document.write("Random Dice Value: "+Math.floor(dice))

// task 5
var rand_number = Math.random();
var random = Math.floor((rand_number*2) + (+1));
document.write(random +"<br>")
if (random === 2){
    document.write("Random Coin Value Head <br>" )
}else if (random === 1){
    document.write("Random Coin Value Tail <br>" )
}

// task 6
var number = Math.random();
var randomNumber = (number*100)+ (+0.1);
document.write("random number between 1 and 100: "+Math.floor(randomNumber)) 

// task 8
var number = Math.random();
var scretnumbers = Math.floor( (number*10)+(+1));
document.write(scretnumbers)
var guess = prompt("Guess the number between 1 - 10: ");
if (guess === scretnumbers){
    alert("Congratulations User: ")
}else {
    alert("Try Again")
}

// Chapter 31-34
// task 1
var date = new Date();
document.write(date + "<br><br>")

// task 2
var months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var date = new Date()
var thismonth =  months[date.getMonth()];

document.write("Current Month: " + thismonth +"<br><br>")

// task 3
var date = new Date();
var dateStr = date.toString();
var day = dateStr.slice(0,3);
document.write("Today Is "+day + "<br><br>")

// task 4
var date = new Date();
var dateStr = date.toString();
var day = dateStr.slice(0,3);
if (day === "Sun" || day === "Sat"){
        document.write("Its Fun Day "+ "<br><br>")
}

// task 5
var a = new Date();
var b = a.toString();
var date = b.slice(8,2);
var c = parseInt(date);
if (c <=15 ){
        document.write("The First Fifteen days of month "+ "<br><br>")
} else if (c >= 16){
    document.write("last Days Of Month" + "<br><br>")
}

// task 6
var date = new Date();
document.write("Curent Date: "+ date + "<br>")
var todaymili = date.getTime();
document.write("Milliseconds: "+todaymili+"<br>");
var todaymin = todaymili / (1000*60*60)
document.write("Minutes: "+todaymin+"<br><br>")

//  task 7
var date = new Date();
var time = date.getHours();
// document.write(time)
if (time < 12){
    alert("Its AM")
} else if (time >= 12 &&  time != 0) {
    alert("its PM")
}

// task 9
var date = new Date("June 18 2015");
var juneMili = date.getTime();
var todayDate = new Date();
var todayMili = todayDate.getTime()
var mili = todayMili - juneMili;
var days = mili/(1000*60*60*24)
document.write( Math.floor( days) + " days have passed since June 18 2015 <br><br>" )

// task 10
var date = new Date (" 2015" )
var refDate = new Date ("Sat Dec 2015 22:50:16")
var mili = date.getTime();
var refMili = refDate.getTime();
var diffmili = refMili - mili;
var sec = diffmili/(1000*60)
document.write(sec)

// chapter 35-38
// task 1 
function date () {
    var a = new Date()
    document.write(a);
}

date();

// task 2 
function FullName(){
   var firstName = prompt("enter your first name: ")
   var LastName = prompt("enter your last name: ")
   document.write(firstName+" " +LastName)


}
FullName();

// task 3
function sum (a,b){
    document.write((+a) + (+b))
}
var number = sum (prompt("enter first number") , prompt("enter second number"))

// task 4 
function calc (firstnumber,operator,secondnumber){
    if (operator === "+"){
        return (+firstnumber) +(+secondnumber)
    } else if (operator === "-"){
        return firstnumber - secondnumber
    } else if (operator === "/"){
        return firstnumber / secondnumber
    } else if (operator === "*"){
        return firstnumber * secondnumber
    } else{
        return "Operator Not Found"
    }
}

var answer = calc (prompt("enter your first number"),prompt("enter your operator"),prompt("enter your second number"))
document.write(answer)

// task 5
function sqaure (a){
    document.write(a * a)
}
var number = sqaure(prompt("enter your number: "))

// task 6
var f = [];
function factorial (n) {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
} 
var n = factorial(prompt("enter your number"))
document.write(n)

// task 7
function counting (start,end){
    for( var i = start ; i <=end ; i++){
        document.write(i + " ")
    }
}
var count = counting(prompt("counting starts at: "), prompt("counting ends at: "))

// task 8
function sqrhyp (base, perpendicular){
    var sqrHypotenuse = (base ) + (perpendicular )
    var Hypotenuse = Math.sqrt(sqrHypotenuse)
    document.write("Hypotenuse: "+Hypotenuse)
}
var hypotenuse = sqrhyp(Math.pow(prompt("value of base"),2),Math.pow(prompt("Value of Perpendicular"),2))

// task 9
function area (width= prompt("enter width"),height = prompt("enter Height")){
    var A = width * height
    document.write("Area of rectangle is "+A)

}
area();

// task 10
function palindrome(){
    var word = prompt("enter your word: ")
    var match = "";
    for(var i = word.length - 1; i >=0 ; i--){
        match += word[i]
    }

    if (match === word){
        document.write("this is palindrome word");
    }else {
        document.write("this is not palindrome")
    }
}
palindrome();

// task 11
function capital(a){
    var b = a;
    var uppercase = b.toUpperCase();
    document.write(uppercase)
    
} 
var str = capital(prompt("Write a sentence"))










