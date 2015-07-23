<?php 

    // function add2($x, $y) {
    //     $z = $x + $y;
    //     return $z;
    // }

    // $sum2 = add2(3,2);

    // echo 'Adds 2 numbers: ' . $sum2;

    // function add3($x, $y, $z) {
    //     $a = $x + $y + $z;
    //     return $a;
    // }

    // $sum3 = add3(3,2,5);

    // echo '<br>Adds 3 numbers: ' . $sum3;

    // function add4($w, $x, $y, $z) {
    //     $a = $w + $x + $y + $z;
    //     return $a;
    // }

    // $sum4 = add4(10,3,2,5);

    // echo '<br>Adds 4 numbers: ' . $sum4;

    // function absoluteVal($x) {

    // }

    // $abso = abs(-9);

    // echo '<br>absolute value: ' . $abso;

    // function() {

    // 

    // $sum = add(3,4);

    // echo 'this is before ' . $sum;

    // function add($x, $y) {
        
    //     $z = $x + $y;

    //     return $z;
    // }

    // echo '<br>this is after ' . add(3,4);

// $txt1 = "hello";
// $txt2 = " world";

// echo $txt1 . $txt2;

// $txt1 .= $txt2;

// for (var i = 0; i <100 ; i++) {

// }


// $stack = array('hobby' => 'games', 'watch' => 'movies', 'read' => 'comics');
// array_push($stack, "'become' => 'superheroes'");

// function array_pushit($array, $key, $value) {
//      $array[$key] = $value;
//      return $array;
// }

// print_r($stack);

// $ohyeah = array_pushit($stack, 'become', 'superhero');

// print_r($ohyeah);

// array_pop($stack);

// print_r($stack);

// $response = $_GET['id'];

// $browse = array('1' => 'Mac', '2' => 'Linux');

// $inventory = array(7, 3, 5);

// $product = $_GET['product'];
// $quantity = $_GET['quantity'];

// if ($product == 'mac') {
//     if ($quantity <= inventory[0]) {
//         echo 'you chose' . $quantity . ' ' . $product;
//     } else {
//         echo 'We don\'t have that many ' . $product .'. You lose';
//     }
// }

// -- BONUS EXERCISE --
// $str1 = '41.67% of people add decimal places to make their statistics look more credible';
// $str2 = 'Forty-one point sixty-seven per cent of people add decimal places to make their statistics look more credible';
// $str3 = '42 owls sing songs';
// $str4 = 'two owls sing songs';

// function checkString($string) {
//     $subString = substr($string, 0, 2);

//     if (strlen($string) >= 20  && is_numeric($subString)) {
//         echo 'This string is correct!<br>';
//     } else {
//         echo 'This string is bogus!<br>';
//     }
// };

// checkString($str1);
// checkString($str2);
// checkString($str3);
// checkString($str4);

// -- STRING FUNCTION EXERCISES --

$message = "the system is down";
$text = "i can program";
$password = "5rep-thucat_at&56AfecRafum";
$age = 25;

function isItNum($value) {
    if (is_numeric($value) == 1) {
         $resonse = 'true';
    } else {
        $response = 'false';
    }
    return $response;
};

$isItNum = isItNum($age);

// -- 1 -- 
echo strlen($message) . '<br>';
// -- 2 --
echo 'The length of the text variable, which is set to "i can program", is ' . strlen($text) . '<br>';
// -- 3 --
echo 'password has ' . strlen($password) . ' characters<br>';
// -- 4 --
echo 'Is the age variable numeric? ' . $isItNum . ' <br>';









 ?>