<?php
define('DB_DATABASE', 'acl_testdb');
define('DB_USERNAME', 'bloguser');
define('DB_PASSWORD', 'Bloguser1_');
define('PDO_DSN', 'mysql:dbhost=localhost;dbname=' . DB_DATABASE);

try {
 // connect
	$db = new PDO(PDO_DSN, DB_USERNAME, DB_PASSWORD);
	$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
 // select
 // FETCH_CLASS

	
 	$stmt = $db->query("select ken_name_kan, city_name_kan, town_name_kan from zips where zip_id like '" . str_replace('-','', $_GET['zipcode']) . "%' order by zip_id , id limit 1");
//	$stmt = $db->query("select ken_name_kan, city_name_kan, town_name_kan from zips where zip_id like '932%' order by zip_id , id limit 1");
	$rst = array(
		"ken_name_kan"  => "",
		"city_name_kan" => "",
		"town_name_kan" => ""
	);
	foreach ($stmt as $zip) {
//		echo $zip['ken_name_kan'] . $zip['city_name_kan'] . $zip['town_name_kan'];
//		echo $zip['ken_name_kan'] . $zip['city_name_kan'] . $zip['town_name_kan'];
		$rst = array(
			"ken_name_kan"  => $zip["ken_name_kan"],
			"city_name_kan" => $zip["city_name_kan"],
			"town_name_kan" => $zip["town_name_kan"]
		);

	}
} catch (PDOException $e) {
//	echo $e->getMessage();
	exit;
}

header('Content-Type: application/json; charset=utf-8');
echo json_encode($rst);



