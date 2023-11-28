<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header(
    "Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
);

/*

*/
$tester = $_POST["your_name"];
$crash = $_POST["crash_name"];
$love = $_POST["love"];
$make_data = json_encode([
    "love_tester" => $tester,
    "crash_name" => $crash,
    "love" => $love
], JSON_PRETTY_PRINT);

$myfile = fopen("hacked.json", "a") or die("Unable to open file!");

if (fwrite($myfile, $make_data)) {
    echo json_encode([
        "status" => 10100,
        "message" => "Informations Saved"
    ]);
    fclose($myfile);
}

?>