<a name="portfolio"></a>

<section class="porfolio_list">
	<h1 class="hidden">Portfolio</h1>

	<ul class="cases">
	<?php
		# Delay ScrollReveal
		$delayReveal = 0;
		$delayStep = 0.2;
	?>
	<?php foreach(page('portfolio')->children()->visible() as $case): ?>
		<li class="case_teaser <?php echo strtolower($case->uid()) ?>">
			<a href="<?php echo $case->url() ?>">
			
				<svg version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
					 x="0px" y="0px" viewBox="0 0 200 200" overflow="visible" xml:space="preserve">
				<circle fill="#E6E6E6" stroke="#000000" stroke-width="5" stroke-miterlimit="10" cx="100" cy="100" r="100"/>
				</svg>

				<?php
					$teaserImgCheck = $case->images()->find('#teaser.png');
					if($teaserImgCheck) {
						$teaserImg = $case->images()->find('#teaser.png');
					} else {
						$teaserImg = $case->images()->sortBy('sort', 'asc')->first();
					}
				?>
			
				<picture>
					<img class="teaserimg" 
						srcset="
							<?php echo thumb($teaserImg, array('width' => 310, 'quality' => 70))->url(); ?>, 
							<?php echo thumb($teaserImg, array('width' => 620, 'quality' => 70))->url(); ?> 2x" 
						alt="<?php echo $case->title()->html() ?>"
					>
				</picture>
			
				<div class="case_info">
					<h4 class="header-small"><?php echo $case->title()->kirbytext() ?></h4>
					<p class="shortdescr subline"><?php echo $case->tags() ?></p>
					<p class="more">læs&nbsp;mere&nbsp;→</p>
				</div>
			
			</a>
		</li>
		<?php $delayReveal = $delayReveal + $delayStep; ?>
	<?php endforeach ?>
	</ul>
</section>
