<header class="header" role="banner">
	
	<div class="dotslashlogo nav pinned container autosticky">
		<a href="/#portfolio" alt="DotSlash Portfolio">
			<?php //echo file_get_contents(url($site->themepath().'/img/dotslash_logo.svg')); ?>
            
            <svg version="1.1" id="dotslash_logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
            	 y="0px" width="121.8px" height="68.4px" viewBox="0 0 121.8 68.4" enable-background="new 0 0 121.8 68.4" xml:space="preserve">
            <g id="logodot_text">
            	<path id="d" fill="#1D1D1F" stroke="#1D1D1F" stroke-width="0.75" stroke-miterlimit="10" d="M5.4,48.9v-29h11.4
            		c9.1,0,15.4,5.8,15.4,14.5s-6.3,14.5-15.4,14.5H5.4z M25.9,34.4c0-5.1-3.1-9.1-9.1-9.1h-5.3v18.1h5.3
            		C22.6,43.5,25.9,39.4,25.9,34.4z"/>
            	<path id="o_full" display="none" fill="#1D1D1F" stroke="#1D1D1F" stroke-width="0.75" stroke-miterlimit="10" d="M48.7,34.4
            		c0-8.7,6.4-15,15.1-15c8.8,0,15.2,6.3,15.2,15s-6.4,15-15.2,15C55.1,49.5,48.7,43.2,48.7,34.4z M72.7,34.4c0-5.4-3.5-9.5-8.8-9.5
            		c-5.3,0-8.8,4.1-8.8,9.5c0,5.4,3.4,9.5,8.8,9.5C69.3,43.9,72.7,39.8,72.7,34.4z"/>
            	<path id="o_left" fill="#1D1D1F" stroke="#1D1D1F" stroke-width="0.75" stroke-miterlimit="10" d="M49.3,39
            		c-0.6-1.3-0.9-2.9-0.9-4.6c0-5.4,3.4-9.5,8.8-9.5c1.7,0,3.1,0.4,4.4,1.1l4-4.3c-2.4-1.5-5.2-2.3-8.4-2.3c-8.7,0-15.1,6.3-15.1,15
            		c0,3.6,1.1,6.7,2.9,9.2L49.3,39z"/>
            	<path id="o_right" fill="#1D1D1F" stroke="#1D1D1F" stroke-width="0.75" stroke-miterlimit="10" d="M75.1,29.2
            		c0.8,1.5,1.3,3.3,1.3,5.2c0,5.4-3.5,9.5-8.8,9.5c-1.9,0-3.6-0.5-4.9-1.5l-4,4.3c2.5,1.7,5.5,2.7,9,2.7c8.8,0,15.2-6.3,15.2-15
            		c0-3.8-1.2-7.2-3.4-9.8L75.1,29.2z"/>
            	<path id="t" fill="#1D1D1F" stroke="#1D1D1F" stroke-width="0.75" stroke-miterlimit="10" d="M101.8,48.9V25.4h-8.5V20h23.1v5.4
            		H108V49L101.8,48.9L101.8,48.9z"/>
            </g>
            <g id="logoslash_line">
	
            		<line id="slash" fill="none" stroke="#1D1D1F" stroke-width="0.75" stroke-miterlimit="10" x1="94.1" y1="0.3" x2="30.4" y2="68.1"/>
	
            		<rect id="slash_rect" x="61.9" y="-12.3" transform="matrix(0.7289 0.6846 -0.6846 0.7289 40.2912 -33.3464)" fill="#1D1D1F" width="0.8" height="93"/>
            </g>
            </svg>
            
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
