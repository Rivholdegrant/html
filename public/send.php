<?php
try
{
	$connect = new PDO("mysql:dbname=listarss;host=127.0.0.1", "admin", "admin"); 
	/*
	if (!$connect){ 
		die('Connection Failed: ' . mysql_error()); 
	}
	*/
	//mysql_select_db("listarss", $connect);
	/*
	if($connect->exec("SELECT email from user_rss"))
	{
		$status = $connect->exec("INSERT INTO user_rss (email, rss) VALUES ('$_POST[email]', '$_POST[rss]')");
	}
	*/
	
	$status = $connect->exec("UPDATE user_rss SET rss=CONCAT(rss, ':$_POST[rss]') WHERE email='$_POST[email]'");
	if (!$status)
	{
		$connect->exec("INSERT INTO user_rss (email, rss) VALUES ('$_POST[email]', '$_POST[rss]')");
	}
	
		
	//echo $status;	
	//$user_rss = "INSERT INTO user_rss (email, rss) VALUES ('$_POST[email]', '$_POST[rss]')"; 
	/*
	if (!mysql_query($user_rss, $connect)){
		die('Error: ' . mysql_error()); 
	}
	*/
	
	echo "Your information was added to the database.";
	//mysqli_close($connect);
} catch(Exception $e) {
	//echo "Exception occured: " . $e->getMessage(); 
}
?>