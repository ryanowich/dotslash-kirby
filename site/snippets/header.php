<header class="header" role="banner">
	
	<div class="dotslashlogo nav pinned container autosticky">
		<a href="/#portfolio" alt="DotSlash Portfolio">
			<?php echo file_get_contents(url($site->themepath().'/img/dotslash_logo.svg')); ?>
		</a>
	</div>
	
	<?php snippet('menu') ?>
	
	<section class="headertext container">
		<h1 class="front_title header-big"><?php echo $page->title()->kirbytext() ?></h1>
		<h3 class="subline"><?php echo $page->tags() ?></h3>
		<?php //echo $page->text()->kirbytext() ?>
	</section>
	
	<?php if(isset($pagetype) && $pagetype == 'portfolio'): ?>
		
		<?php
			$showCaseCount = false;
			if ($showCaseCount) :
		?>
			<!-- Case count -->
			<section class="pagecounter container">
				<span class="pagecount current"><?php printf("%02d", $page->num()) ?></span>
				<span class="pagecount total"><?php printf("%02d", page('portfolio')->children()->visible()->count()) ?></span>
			</section>
		<?php endif ?>
		
	<?php endif ?>
	
</header>
