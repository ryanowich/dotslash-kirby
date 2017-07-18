<?php
	# Responsive retina background images
	if($headerimg = $page->images()->find('#header.png')): ?>
	
	<?php
		// Breakpoints
		$bp_larger_than_mobile = "min-width: 400px";
		$bp_larger_than_phablet = "min-width: 550px";
		$bp_larger_than_tablet = "min-width: 750px";
		$bp_larger_than_desktop = "min-width: 1000px";
		$bp_larger_than_desktophd = "min-width: 1420px";
	?>
	
	<style>
		
		body .header {
			background-image: url(<?php echo thumb($headerimg, array('width' => 480, 'quality' => 70))->url(); ?>);
		}
		@media 
			only screen and (-moz-min-device-pixel-ratio: 1.5)		, 
			only screen and (-o-min-device-pixel-ratio: 3/2)			, 
			only screen and (-webkit-min-device-pixel-ratio: 1.5)	, 
			only screen and (min-devicepixel-ratio: 1.5)					, 
			only screen and (min-resolution: 1.5dppx)							 {
		  body .header {
		    background-image: url(<?php echo thumb($headerimg, array('width' => 960, 'quality' => 70))->url(); ?>);
		  }
		}
		
		@media (<?php echo $bp_larger_than_mobile ?>) {
			body .header {
				background-image: url(<?php echo thumb($headerimg, array('width' => 550, 'quality' => 70))->url(); ?>);
			}
		}
		@media 
			only screen and (-moz-min-device-pixel-ratio: 1.5)		and (<?php echo $bp_larger_than_mobile ?>), 
			only screen and (-o-min-device-pixel-ratio: 3/2)			and (<?php echo $bp_larger_than_mobile ?>), 
			only screen and (-webkit-min-device-pixel-ratio: 1.5)	and (<?php echo $bp_larger_than_mobile ?>), 
			only screen and (min-devicepixel-ratio: 1.5)					and (<?php echo $bp_larger_than_mobile ?>), 
			only screen and (min-resolution: 1.5dppx) 						and (<?php echo $bp_larger_than_mobile ?>) {
		  body .header {
		    background-image: url(<?php echo thumb($headerimg, array('width' => 1100, 'quality' => 70))->url(); ?>);
		  }
		}
		
		@media (<?php echo $bp_larger_than_phablet ?>) {
			body .header {
				background-image: url(<?php echo thumb($headerimg, array('width' => 750, 'quality' => 70))->url(); ?>);
			}
		}
		@media 
			only screen and (-moz-min-device-pixel-ratio: 1.5)		and (<?php echo $bp_larger_than_phablet ?>), 
			only screen and (-o-min-device-pixel-ratio: 3/2)			and (<?php echo $bp_larger_than_phablet ?>), 
			only screen and (-webkit-min-device-pixel-ratio: 1.5)	and (<?php echo $bp_larger_than_phablet ?>), 
			only screen and (min-devicepixel-ratio: 1.5)					and (<?php echo $bp_larger_than_phablet ?>), 
			only screen and (min-resolution: 1.5dppx)							and (<?php echo $bp_larger_than_phablet ?>) {
		  body .header {
		    background-image: url(<?php echo thumb($headerimg, array('width' => 1500, 'quality' => 70))->url(); ?>);
		  }
		}
		
		@media (<?php echo $bp_larger_than_tablet ?>) {
			body .header {
				background-image: url(<?php echo thumb($headerimg, array('width' => 1000, 'quality' => 70))->url(); ?>);
			}
		}
		@media 
			only screen and (-moz-min-device-pixel-ratio: 1.5)		and (<?php echo $bp_larger_than_tablet ?>), 
			only screen and (-o-min-device-pixel-ratio: 3/2)			and (<?php echo $bp_larger_than_tablet ?>), 
			only screen and (-webkit-min-device-pixel-ratio: 1.5)	and (<?php echo $bp_larger_than_tablet ?>), 
			only screen and (min-devicepixel-ratio: 1.5)					and (<?php echo $bp_larger_than_tablet ?>), 
			only screen and (min-resolution: 1.5dppx)							and (<?php echo $bp_larger_than_tablet ?>) {
		  body .header {
		    background-image: url(<?php echo thumb($headerimg, array('width' => 2000, 'quality' => 70))->url(); ?>);
		  }
		}
		
		@media (<?php echo $bp_larger_than_desktop ?>) {
			body .header {
				background-image: url(<?php echo thumb($headerimg, array('width' => 1440, 'quality' => 70))->url(); ?>);
			}
		}
		@media 
			only screen and (-moz-min-device-pixel-ratio: 1.5)		and (<?php echo $bp_larger_than_desktop ?>), 
			only screen and (-o-min-device-pixel-ratio: 3/2)			and (<?php echo $bp_larger_than_desktop ?>), 
			only screen and (-webkit-min-device-pixel-ratio: 1.5)	and (<?php echo $bp_larger_than_desktop ?>), 
			only screen and (min-devicepixel-ratio: 1.5)					and (<?php echo $bp_larger_than_desktop ?>), 
			only screen and (min-resolution: 1.5dppx)							and (<?php echo $bp_larger_than_desktop ?>) {
		  body .header {
		    background-image: url(<?php echo thumb($headerimg, array('width' => 2880, 'quality' => 70))->url(); ?>);
		  }
		}
	</style>
	
<?php endif ?>