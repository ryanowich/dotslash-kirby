<?php
/* Misc funtions and helpers */

# Convert birthdate to age
function dateToAge ($date) {
$timeZone  = new DateTimeZone('Europe/Copenhagen');
$age = DateTime::createFromFormat('d/m/Y', $date, $timeZone)
	->diff(new DateTime('now', $timeZone))
	->y;
return $age;
}


# Remove special characters and replace space with _
function cleanString ($string) {
	$string = strtolower($string);
	//$string = str_replace(' ', '-', $string); // Replaces all spaces with hypens.
	$string = str_replace(array('é', 'æ', 'ø', 'å'), array('e', 'ae', 'oe', 'aa'), $string);
	$string = str_replace('og', '', $string); // Replaces all spaces with hypens.
	//$string = preg_replace('/[^A-Za-z0-9\-]/', '', $string); // Removes special chars.
	$string = preg_replace('/[^A-Za-z0-9]/', '', $string); // Removes special chars.
	//$string = preg_replace('/-+/', '-', $string); // Replaces multiple hyphens with single one.
	return strtolower($string);
}

# Convert field link to html
function fieldLink ($string) {
	
	return gettype($string);
	//return $string;
}
?>