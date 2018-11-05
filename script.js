/*HIGHEST NUMBER */
function getHighestNumber() {
    let input1 = parseInt(document.getElementById('input-one').value);
    let input2 = parseInt(document.getElementById('input-two').value);
    let higher;

    if (input1 > input2) {
        higher = input1;
    } else {
        higher = input2;
    }

    document.getElementById('result').innerHTML = higher;
}

function compare(input1, input2) {
    if (input1 > input2) {
        return input1;
    } else {
        return input2;
    }
}

/*function getHighestNumber(){
    let input1 = parseInt(document.getElementById('input-one').value);
    let input2 = parseInt(document.getElementById('input-two').value);

    if ( input1 > input2){
        document.getElementById('result').innerHTML = input1;
    }else{
        document.getElementById('result').innerHTML = input2;
    }

}*/
//////////////////////////////////////////////////////////////////////////////////////////
/*HIGHEST NUMBER WITH ONE TEXT-BOX*/
let pTag = document.getElementById('comment');
pTag.innerHTML = "How many numbers do you want to compare?";
let numberOfNumbers = -1;
let allNums = [];
let counter = 1;
let highest = 0;

function getHighestNum() {
    if (numberOfNumbers < 0) {
        numberOfNumbers = parseInt(document.getElementById('input').value);
        pTag.innerHTML = "Enter number " + (counter);
        counter++;
        document.getElementById('input').value = "";
    } else {
        allNums.push(document.getElementById('input').value);

        document.getElementById('input').value = "";
        if (allNums.length < numberOfNumbers) {
            pTag.innerHTML = "Enter number " + (counter);
            counter++;
        } else {
            pTag.innerHTML = ""
            for (let num of allNums) {
                if (num > highest) {
                    highest = num;
                }
            }
            document.getElementById('answer').innerHTML = highest;
        }
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////
/*PRIME NUMBER*/

function PrimeNumber() {

    var num = document.getElementById('num').value;
    var counter = 0;


    for (i = 1; i <= num; i++) {
        if (num % i == 0) {
            counter = counter + 1;
        }
    }

    if (counter == 2) {
        document.getElementById('prime').innerHTML = num + ' is a Prime number';
    } else {
        document.getElementById('prime').innerHTML = num + ' is NOT a Prime number';
    }
};
//////////////////////////////////////////////////////////////////////////////////////////////
/*SORT ARRAY(FROM LOW TO HIGH)*/
let p = document.getElementById('comment1');
p.innerHTML = "How many number do you want to sort?";
let counter1 = 1;
let arr = [];
let array = -1;

function sortArray() {
    if (array < 0) {

        array = parseInt(document.getElementById('inputt').value);
        p.innerHTML = "Enter element " + (counter1);
        counter1++;
        document.getElementById('inputt').value = "";
    } else {
        arr.push(parseInt(document.getElementById('inputt').value));

        document.getElementById('inputt').value = "";
        if (arr.length < array) {
            p.innerHTML = "Enter element " + (counter1);
            counter1++;
        } else {
            p.innerHTML = ""
            let newArray = arr.sort();
            document.getElementById('sort').innerHTML = newArray;
        }
    }
}



/////////////////////////////////////////////////////////////////////////////////////
/*SIMPLE INTEREST*/
function simpleInterest(){
    var   p = document.getElementById("p").value;
    var   r = document.getElementById("r").value;
    var   t = document.getElementById("t").value;
   var si =(p*r*t/100);
       result = document.getElementById("simple");
   result.innerHTML = "The interest is " +si;
   
   };
   /////////////////////////////////////////////////////////////////
   /*ALMIGHTY FORMULA*/
   function almighty() {
    var a = parseInt(document.getElementById("a").value);
   var b = parseInt(document.getElementById("b").value);
   var c =parseInt( document.getElementById("c").value) ;

 //  let result1 = ((-1 * b) + (Math.sqrt(b^2) - (4 * a * c))) / (2 * a);
    let result1 = ((-b) + (Math.sqrt(Math.pow(b,2)) - (4 * a * c))) / (2 * a);
    
   // let result2 = ((-1 * b) - (Math.sqrt(b^2) - (4 * a * c))) / (2 * a);
    let result2 = ((-b) - (Math.sqrt(Math.pow(b,2)) - (4 * a * c))) / (2 * a);

    document.getElementById('almighty').innerHTML = result1 + "&" + result2;
};
////////////////////////////////////////////////////////////
/*COMPOUND INTEREST*/
function compoundInterest(){
    var   pp = document.getElementById("p1").value;
    var   rr = document.getElementById("r1").value;
    var   tt = document.getElementById("t1").value;
   var nn = document.getElementById("n1").value;
    var ci =  (pp*((1 + (rr/(nn*100))), (nn*tt)));
    result = document.getElementById("compound");
   result.innerHTML = "The compound interest is " +ci;
   
   };
   ///////////////////////////////////////////
   /*DECIMAL TO BINART*/
   
function decToBin(){
    var num = document.getElementById('numb').value;
    var bin ="";
    while(num>0){
        bin = num% 2+bin;
        num = Math.floor(num/2)
    }
    document.getElementById('decimal').innerHTML = bin;
}
////////////////////////////////////////////////////////////////
/*FACTORIAL*/
function factorial() {

    var num = document.getElementById("fact").value;
    var fact = 1;


    for (i = 1; i <= num; i++) {

        fact = fact * i;
    }
    document.getElementById('factorial').innerHTML = fact;
}
////////////////////////////////////////////////////////////////////////////
/*COMBINATION*/
Math.factorial = function (fact) {

    var i = fact;



    for (i = 1; i <= num; i++) {

        fact = fact * i;
    }
    return fact;
}


function combination() {
    let n = document.getElementById("N").value;
    let r = document.getElementById("R").value;
    let answer = Math.factorial(n) / (Math.factorial(r) * Math.factorial(n - r));

    document.getElementById('comb').innerHTML = answer;

}
///////////////////////////////////////////////////////////////

