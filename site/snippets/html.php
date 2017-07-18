<!DOCTYPE html>
<html lang="da">
<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge"> 
	<meta name="viewport" content="width=device-width,initial-scale=1">

	<title><?php echo $site->title()->html() ?> | <?php echo strip_tags($page->title()->html()) ?></title>
	<meta name="description" content="<?php echo $site->description() ?>">
	<meta name="keywords" content="<?php echo $site->keywords() ?>">
	<meta name="author" content="<?php echo $site->author() ?>" />
	
	<?php snippet('html_social') ?>
	
	<!-- Fonts -->
	<script src="//use.typekit.net/ycy3oje.js"></script>
	<script>try{Typekit.load();}catch(e){}</script>
	<?php echo css(array(
		//'http://fonts.googleapis.com/css?family=Libre+Baskerville:400,400italic,700',
		//'http://fonts.googleapis.com/css?family=Raleway:400,300,200,100,500,600,700,800,900',
		//'http://fonts.googleapis.com/css?family=Merriweather:400,300,200,100,500,600,700,800,900',
	)) ?>
	
	<?php echo css(array(
		$site->themepath().'/css/normalize.min.css',
		$site->themepath().'/css/styles.min.css',
		//$site->themepath().'/css/bw.min.css',
	)) ?>
	<style>
		/* ScrollReveal Init */
		[data-sr] { visibility: hidden; }
	</style>
	
	<?php echo js($site->themepath().'/js/vendor/jquery-2.1.1.min.js') ?>
	<?php echo js(array(
		'//cdnjs.cloudflare.com/ajax/libs/picturefill/2.3.1/picturefill.min.js',
		
		// $site->themepath().'/js/plugins/scrollmagic/uncompressed/lib/highlight.pack.js',
		// $site->themepath().'/js/plugins/scrollmagic/uncompressed/plugins/ScrollToPlugin.min.js',
		// $site->themepath().'/js/plugins/scrollmagic/uncompressed/lib/greensock/TweenMax.min.js',
		// $site->themepath().'/js/plugins/scrollmagic/uncompressed/ScrollMagic.js',
		// $site->themepath().'/js/plugins/scrollmagic/uncompressed/plugins/jquery.ScrollMagic.js',
		// $site->themepath().'/js/plugins/scrollmagic/uncompressed/plugins/animation.gsap.js',
		// $site->themepath().'/js/plugins/scrollmagic/uncompressed/plugins/debug.addIndicators.js',
		//$site->themepath().'/js/logo.min.js',	// Included in scripts
		//$site->themepath().'/js/stickynav.js', // Included in scripts
		$site->themepath().'/js/scripts.min.js',
	)) ?>
	
	<?php snippet('bgimg_resp_ret') ?>
	
</head>

<body class="<?php echo ($page->isHomePage()) ? 'home' : str::lower($page->template()) . 
	' ' . str::lower($page->uid()) ?> <?php echo str::lower($page->pagetone()) ?>"<?php //echo (isset($color) ? ' style="background-color:'.$color.';"' : ''); ?>
>
	<?php snippet('analyticstracking') ?>
	
	<div id="fb-root"></div>
	<script>(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/da_DK/sdk.js#xfbml=1&version=v2.3&appId=743722715738964";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));</script>
	
	