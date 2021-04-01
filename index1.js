//1
let ages =[2,3,9,23,64,2,8,28,93,95];  //1

let first = ages[0]; //1a

let last = ages[ages.length - 1];  //1a

console.log(last - first);  //1a

//1b I added 2 at the start and 95 at the end of the array.

var SumOfAges = 0; // 1C


for(var i=0; i < ages.length; i++){  //1c

    SumOfAges += parseInt(ages[i]); //1c

}  //1c


var AverageOfAges = SumOfAges / last;// 1C

console.log(AverageOfAges); //1C

//2

let names = ['Sam', 'Tommy', 'Tim', 'Sally','Buck','Bob'] //2

var totalnames = names.length; //2a


    var lettersinarray = 0; //2a
    var Mystring = ' '; //2a

 for (var i = 0; i < names.length; i++) //2a
     {  //2a
        lettersinarray = names[i].length +  lettersinarray; //2a
     } //2a


var averageCharacterLengthineachword = lettersinarray / totalnames; //2a

console.log(averageCharacterLengthineachword); //2a


let outputstring = '';  //2b
for (var i = 0; i < names.length; i++) //2b
     {
        outputstring += names[i] + " "; //2b
     }
console.log(outputstring);  //2b

// array[array.length-1]   //3

// array[0] //4


let nameLengths = [5];//5

for (var i = 0; i < names.length; i++) //5
     {
        outputstring += names[i] + " "; //5
        nameLengths[i] = names[i].length  //5
     }

let nameLengthSum = 0; //6
for (var i = 0; i < names.length; i++) //6
     {
        outputstring += names[i] + " "; //6
        nameLengths[i] = names[i].length  //6
     }

for (var i = 0; i < nameLengths.length; i++) //6
     {
        nameLengthSum += nameLengths[i]; //6
     }
console.log(nameLengthSum);  //6

function concatenatewords(word,n){  //7
   let wordstring = '';  //7
   while(n>0)  //7
   {
     wordstring += word;  //7
     n--; //7
   } //7
   return wordstring; //7
 }  //7
 
 concatenatewords('Tom',5);  //7


function makefullname(firstname, lastname){  //8
  let fullname = firstname + " " + lastname;  //8
  return fullname;  //8
}  //8

makefullname("Tom", "Jover");  //8

function isover100(numarray){ //9
   let sum = 0; //9
   let result; //9
   for(i=0; i < numarray.length; i++) //9
   {  //9
     sum += numarray[i]; //9
   }  //9
   
   if (sum>100){  //9
     result = true;  //9
   }  //9
   else{  //9
     result = false;  //9
   }  //9
   
   return result;  //9
   
   }  //9
   
   var nums = [1,2,30,40,50];  //9
   isover100(nums); //9


function findaverage(numarray){  //10
let sum = 0; //10
let result;  //10
for(i=0; i < numarray.length; i++)  //10
{  //10
  sum += numarray[i];  //10
}  //10
return sum/numarray.length; //10
}  //10

var nums = [1,2,3,4,500];  //10
findaverage(nums); //10

function isfirstlarger(array1, array2){  //11
   var sum1 = 0;  //11
   var sum2 = 0; //11
   var average1, average2;  //11
   var result;  //11
  
   for(i=0; i<array1.length; i++){ //11
      sum1 += array1[i];  //11
   }  //11
  
   for(i=0; i<array2.length; i++){  //11
      sum2 += array2[i];  //11
   }  //11
  
  
   if((sum1/array1.length) > (sum2/array2.length)){  //11
    result = true;  //11
   }
   else{  //11
    result = false;  //11
   }  //11
  
   return result; //11
  }  //11
  
  var a1 = [1,3,5,70,80]; //11
  var a2 = [5,8,9,7,9]; //11
  
  isfirstlarger(a1,a2); //11

  function willBuyDrink(isHotOutside, moneyInPocket){  //12
   var willBuy = false; //12
   
   if(isHotOutside){  //12
     if(moneyInPocket > 10.50){ //12
       willBuy = true; //12
     } //12
   } //12
   
   return willBuyDrink; //12
   
   }  //12
   
   willBuyDrink(true, 21.00); //12

   function buyingahouse(downPaymentRequirements, numberOfLinesOfCredit){  //13
   var priceOfHouse = 400000;  //13
   var okToBuy = false; //13

   if(downPaymentRequirements >= priceOfHouse *.2  && numberOfLinesOfCredit >= 2){  //13
            okToBuy = true;  //13
        }  //13
     else {  //13
            okToBuy = false; //13   
     }  //13  
   
   
   return okToBuy;  //13
   }
   //Question 13 determines whether a person can afford to buy a house based on whether they have both 20 percent of a down payment
   //and two or more lines of credit.