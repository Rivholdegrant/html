<?php
	try
	{
		$connect = new PDO("mysql:dbname=listarss;host=127.0.0.1", "admin", "admin"); 
		
		echo "Send";
		
	} catch(Exception $e) {
		//echo "Exception occured: " . $e->getMessage(); 
	}
?>




