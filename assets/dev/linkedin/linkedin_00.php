<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);
date_default_timezone_set('Europe/Paris');
setlocale(LC_TIME, "fr_FR.utf8");

// Fill the keys and secrets you retrieved after registering your app
$oauth = new OAuth("__API_KEY__", "__API_SECRET__");
$oauth->setToken("__USER_TOKEN__", "__USER_SECRET__");
 
$params = array();
$headers = array("Accept-Language" => "fr-FR");
$method = OAUTH_HTTP_METHOD_GET;

// Specify LinkedIn API endpoint to retrieve your own profile
$url = "http://api.linkedin.com/v1/people/~:(first-name,last-name,headline,picture-url,positions,educations,location:(name),skills,languages,interests)?format=json";
 
// Make call to LinkedIn to retrieve your own profile
$oauth->fetch($url, $params, $method, $headers);
  
$response = $oauth->getLastResponse();

//echo $response;

$json = json_decode($response, true);

?>

<div id="cv">
<p class="cv-portrait"><img src="<?php echo $json['pictureUrl']; ?>" /></p>
<h1><?php echo $json['headline']; ?></h1>
<p><?php echo $json['location']['name']; ?></p>

<h2>Expérience professionnelle</h2>
<?php 
foreach ($json['positions']['values'] as $job) {  
?>
	<div class="right-content">
		<h3><?php echo $job['title'] . ", " . $job['company']['name']; ?></h3>
		<p>
		<?php 
			$summary = $job['summary']; 
			$summary = preg_replace("/(https:\/\/|http:\/\/|ftp:\/\/)([^\s]*)/i", '<a href="$0">$0</a>', $summary);
			echo str_replace("\n","<br />", $summary); 
		?>
		</p>
		<br /><br />
	</div>
	<p><?php showDate($job['startDate']['month'], $job['startDate']['year'], (isset($job['endDate']) ? $job['endDate']['month'] : null), (isset($job['endDate']) ? $job['endDate']['year'] : null)); ?></p>
	<p class="spacer">&nbsp;</p>
<?php
}
 ?>


<h2>Etudes</h2>
<?php
foreach ($json['educations']['values'] as $school) {
?>
	<div class="right-content">
		<h3><?php echo $school['schoolName']; ?></h3>
		<p><?php echo $school['degree']; ?></p>
	</div>
	<p><?php showSchoolDate($school['startDate']['year'], (isset($school['endDate']) ? $school['endDate']['year'] : null)); ?></p>
	<p class="spacer">&nbsp;</p>
<?php
}
 ?>

<h2>Compétences</h2>
<?php
$skillsList = "";
foreach ($json['skills']['values'] as $skill) {
	$skillsList .= $skill['skill']['name'] . ", ";
}
?>
<p><?php echo rtrim($skillsList, ", "); ?></p>


<h2>Langues</h2>
<?php
$languagesList = "";
foreach ($json['languages']['values'] as $language) {
	$languagesList .= $language['language']['name'] . ", ";
}
 ?>
<p><?php echo rtrim($languagesList, ", "); ?></p>


<h2>Centres d'intérêts</h2>
<p><?php echo $json['interests'] ; ?></p>
</div>
<div class="viadeo-link">
	<p>Cette page a été générée à l'aide de <a href="https://developer.linkedin.com/rest">linkedin api</a></p>
</div>

<?php

function showSchoolDate($beginYear, $endYear) {


	if(is_null($endYear)) {
		echo "Depuis " . $beginYear;
	} else {
		echo $beginYear . " - " . $endYear;
	}
}

function showDate($beginMonth, $beginYear, $endMonth, $endYear) {


	if(is_null($endYear)) {
		echo "Depuis " . strftime("%B", mktime(0, 0, 0, $beginMonth, 1, 2000)) . " " . $beginYear;
	} else {
		echo strftime("%B", mktime(0, 0, 0, $beginMonth, 1, 2000)) . " " . $beginYear . " - " . strftime("%B", mktime(0, 0, 0, $endMonth, 1, 2000)) . " " . $endYear;
	}
}

?>