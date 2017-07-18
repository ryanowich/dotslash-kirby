<?php
// Get #teaser.png or use fallback
if ($page->images()->find('#teaser.png')) {
	$ogImage = $page->images()->find('#teaser.png')->url();
} else {
	// Fallback
	//$ogImage = url($site->themepath()) .'/img/me_og.png';
	$ogImage = url($site->themepath()) .'/img/dotslash_sociallogo.png';
}
?>

	<!-- Favicon / Apple Icons -->
	<link rel="shortcut icon" href="<?php echo url($site->themepath()) ?>/img/favicons/favicon.ico?v=3exM9xPQwK">
	<link rel="icon" type="image/png" href="<?php echo url($site->themepath()) ?>/img/favicons/favicon-16x16.png?v=3exM9xPQwK" sizes="16x16">
	<link rel="icon" type="image/png" href="<?php echo url($site->themepath()) ?>/img/favicons/favicon-32x32.png?v=3exM9xPQwK" sizes="32x32">
	<link rel="icon" type="image/png" href="<?php echo url($site->themepath()) ?>/img/favicons/favicon-96x96.png?v=3exM9xPQwK" sizes="96x96">
	<link rel="icon" type="image/png" href="<?php echo url($site->themepath()) ?>/img/favicons/android-chrome-192x192.png?v=3exM9xPQwK" sizes="192x192">

	<link rel="apple-touch-icon" sizes="60x60" href="<?php echo url($site->themepath()) ?>/img/favicons/apple-touch-icon-60x60.png?v=3exM9xPQwK">
	<link rel="apple-touch-icon" sizes="57x57" href="<?php echo url($site->themepath()) ?>/img/favicons/apple-touch-icon-57x57.png?v=3exM9xPQwK">
	<link rel="apple-touch-icon" sizes="72x72" href="<?php echo url($site->themepath()) ?>/img/favicons/apple-touch-icon-72x72.png?v=3exM9xPQwK">
	<link rel="apple-touch-icon" sizes="76x76" href="<?php echo url($site->themepath()) ?>/img/favicons/apple-touch-icon-76x76.png?v=3exM9xPQwK">
	<link rel="apple-touch-icon" sizes="114x114" href="<?php echo url($site->themepath()) ?>/img/favicons/apple-touch-icon-114x114.png?v=3exM9xPQwK">
	<link rel="apple-touch-icon" sizes="120x120" href="<?php echo url($site->themepath()) ?>/img/favicons/apple-touch-icon-120x120.png?v=3exM9xPQwK">
	<link rel="apple-touch-icon" sizes="144x144" href="<?php echo url($site->themepath()) ?>/img/favicons/apple-touch-icon-144x144.png?v=3exM9xPQwK">
	<link rel="apple-touch-icon" sizes="152x152" href="<?php echo url($site->themepath()) ?>/img/favicons/apple-touch-icon-152x152.png?v=3exM9xPQwK">
	<link rel="apple-touch-icon" sizes="180x180" href="<?php echo url($site->themepath()) ?>/img/favicons/apple-touch-icon-180x180.png?v=3exM9xPQwK">

	<link rel="manifest" href="<?php echo url($site->themepath()) ?>/img/favicons/manifest.json?v=3exM9xPQwK">
	<meta name="msapplication-TileColor" content="#ffc40d">
	<meta name="msapplication-TileImage" content="<?php echo url($site->themepath()) ?>/img/favicons/mstile-144x144.png?v=3exM9xPQwK">
	<meta name="msapplication-config" content="<?php echo url($site->themepath()) ?>/img/favicons/browserconfig.xml?v=3exM9xPQwK">
	<meta name="theme-color" content="#ffffff">

	<!-- Social: Twitter -->
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:site" content="@ryanowich">
	<meta name="twitter:creator" content="ryanowich">
	<meta name="twitter:title" content="<?php echo $site->title()->html() ?> | <?php echo strip_tags($page->title()->html()) ?>">
	<meta name="twitter:description" content="<?php echo $site->description() ?>">
	<meta name="twitter:image:src" content="<?php echo $ogImage ?>">

	<!-- Social: Facebook / Open Graph -->
	<meta property="fb:admins" content="">
	<!--<meta property="fb:app_id" content="195366723921447">-->
	<meta property="og:url" content="<?php echo $page->url() ?>">
	<meta property="og:type" content="website">
	<meta property="og:title" content="<?php echo strip_tags($page->title()->html()) ?> | <?php echo $site->author() ?>">
	<meta property="og:image" content="<?php echo $ogImage ?>">
	<meta property="og:description" content="<?php echo strip_tags($page->text()->kirbytext()->html()) ?>">
	<meta property="og:site_name" content="<?php echo $site->title()->html() ?>">
	<meta property="article:author" content="https://www.facebook.com/ryanowich">
	
	<!-- Social: Google+ / Schema.org	-->
	<meta itemprop="name" content="<?php echo $site->title()->html() ?> | <?php echo strip_tags($page->title()->html()) ?>">
	<meta itemprop="description" content="">
	<meta itemprop="image" content="<?php echo $ogImage ?>">
	