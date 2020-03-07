<?php
$connect = new PDO("mysql:dbname=listarss;host=127.0.0.1", "admin", "admin"); 

echo $connect->exec("SELECT rss FROM `user_rss` WHERE email='$_POST[email]'");

?>