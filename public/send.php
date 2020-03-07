<?php

$connect = mysql_connect("localhost", "admin", "admin"); if (!connect) { die('Connection Failed: ' . mysql_error()); { mysql_select_db("listarss", $connect);

$user_rss = "INSERT INTO user_rss (email, rss) VALUES ('$_POST[email]', '$_POST[rss]')"; if (!mysql_query($user_rss, $connect)) { die('Error: ' . mysql_error()); }

echo "Your information was added to the database.";

mysql_close($connect);



