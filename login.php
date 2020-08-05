<?php

$password = $_POST["password"];

if ($password == "PASSWORD123") {
    include("congratulations.html");
} else {
    include("incorrect.html");
}

?>
