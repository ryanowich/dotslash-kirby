<?php snippet('html', array('color' => $page->color())) ?>
	
	<?php snippet('header') ?>
	
	<main class="main container" role="main">

		<?php snippet('portfolio') ?>

	</main>
	
	<?php echo js(array(
		// $site->themepath().'/js/plugins/scrollmagic/uncompressed/lib/highlight.pack.js',
		// $site->themepath().'/js/plugins/scrollmagic/uncompressed/plugins/ScrollToPlugin.min.js',
		// $site->themepath().'/js/plugins/scrollmagic/uncompressed/lib/greensock/TweenMax.min.js',
		// $site->themepath().'/js/plugins/scrollmagic/uncompressed/ScrollMagic.js',
		// $site->themepath().'/js/plugins/scrollmagic/uncompressed/plugins/jquery.ScrollMagic.js',
		// $site->themepath().'/js/plugins/scrollmagic/uncompressed/plugins/animation.gsap.js',
		// $site->themepath().'/js/plugins/scrollmagic/uncompressed/plugins/debug.addIndicators.js',
		$site->themepath().'/js/front.min.js',
	)) ?>
	
	<?php snippet('footer') ?>