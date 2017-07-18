<?php snippet('html') ?>
	
	<?php snippet('header') ?>

	<main class="main container" role="main">

		<div class="text">
			<h1 class="hidden"><?php echo $page->title()->html() ?></h1>
			<?php echo $page->text()->kirbytext() ?>
		</div>

	</main>

<?php snippet('footer') ?>