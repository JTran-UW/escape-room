<?php

$password = $_POST["password"];

if ($password == "password123") {
    include("congratulations.html");
} else {
    include("incorrect.html");
}

?>
