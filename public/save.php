<?php 	
	try
	{
		$connect = new PDO("mysql:dbname=listarss;host=127.0.0.1", "admin", "admin"); 
				
		$status = $connect->exec("UPDATE user_rss SET rss=CONCAT(rss, ':$_POST[rss]') WHERE email='$_POST[email]'");
		if (!$status)
		{
			$connect->exec("INSERT INTO user_rss (email, rss) VALUES ('$_POST[email]', '$_POST[rss]')");
		}
				
		echo "Your information was added to the database.";
		
	} catch(Exception $e) {
		//echo "Exception occured: " . $e->getMessage(); 
	}
?>




