<?php

/*

---------------------------------------
License Setup
---------------------------------------

Please add your license key, which you've received
via email after purchasing Kirby on http://getkirby.com/buy

It is not permitted to run a public website without a
valid license key. Please read the End User License Agreement
for more information: http://getkirby.com/license

*/

c::set('license', 'K2-PERSONAL-c62b16cbb4b1b52196c2455ab256e96f');
c::set('content.file.ignore', array('_notes'));

/*
---------------------------------------
Setup Kirby Routes
---------------------------------------
*/
c::set('routes', array(
	// From https://github.com/getkirby/kirby/issues/93
	array(
		'pattern' => 'sitemap.xml',
		'action'  => function() {
			return site()->visit('sitemap');
		}
	),
	array(
		'pattern' => 'sitemap',
		'action'  => function() {
			return go('sitemap.xml');
		}
	),
	array(
		'pattern' => 'me',
		'action'  => function() {
			return go('profil');
		}
	),
));

/*
// Get current domain name without www or subdomain
$host = $_SERVER['HTTP_HOST'];
preg_match("/[^\.\/]+\.[^\.\/]+$/", $host, $matches);
//echo "domain name is: {$matches[0]}\n";

if ($matches[0] == 'dotslash.dev') {
	c::set('thumbs.driver', 'gd');
} else {
	c::set('thumbs.driver', 'im');
}
*/

/*

---------------------------------------
Kirby Configuration
---------------------------------------

By default you don't have to configure anything to
make Kirby work. For more fine-grained configuration
of the system, please check out http://getkirby.com/docs/advanced/options

*/

// DEV
//error_reporting(E_ALL);
//ini_set("display_errors", 1);