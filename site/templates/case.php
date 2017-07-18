<?php snippet('html', array('color' => $page->color())) ?>

	<?php snippet('header', array('pagetype' => 'portfolio')) ?>

	<main class="main" role="main">
		
		<section class="case_meta container copy">
			<h1 class="hidden container"><?php echo $page->title()->html() ?></h1>
			
			<p class="year">År: <time datetime="<?php echo $page->date('c') ?>"><?php echo $page->date('Y', 'year') ?></time></p>
		
			<div class="case_text">
				<h4 class="tasks header-small">Case</h4>
				<?php echo $page->text()->kirbytext() ?>
				<?php $caseLink = $page->caselink()->kirbytext() ?>
				<?php if ($caseLink != '') : ?>
					<span class="caselink nav"><?php echo $page->caselink()->kirbytext() ?></span>
				<?php endif ?>
			</div>
			
			<h4 class="services header-small">Services</h4>
			<ul class="case_services subline">
				<?php foreach($page->services()->split(',') as $service): ?>
					<li><?php echo $service ?></li>
				<?php endforeach ?>
			</ul>
			
			<h4 class="share">Share</h4>
			<ul class="case_share">
				<li class="socialshare">
					<p class="share_title">Del på:</p>
					<a class="facebook" href="https://www.facebook.com/sharer/sharer.php?u=<?php echo $page->url(); ?>" target="blank" title="Del på Facebook">
						<i class="fa fa-facebook"></i>
					</a>
					<a class="google-plus" href="https://plus.google.com/share?url=<?php echo rawurlencode($page->url()); ?>&title=<?php echo rawurlencode($page->title()); ?>" target="blank" title="Del på Google+">
						<i class="fa fa-google-plus"></i>
					</a>
					<a class="twitter" href="https://twitter.com/intent/tweet?source=webclient&text=<?php echo rawurlencode('Check "'.$page->title().'" case from @ryanowich portfolio at '.$page->url() ) ?>" target="blank" title="Tweet">
						<i class="fa fa-twitter"></i>
					</a>
				</li>
			</ul>
			
		</section>
		
		<section class="extra_content">
			<?php echo $page->extra()->kirbytext() ?>
		</section>
		
		<?php
			foreach($page->files()
				->filterBy('filename', '!=', '#teaser.png')
				->filterBy('filename', '!=', '#teaser.jpg')
				->filterBy('filename', '!=', '#header.png')
				->filterBy('filename', '!=', '#header.jpg')
				//->filterBy('extension', '!=', 'webm')
				->filterBy('extension', '!=', 'gif')
				//->filterBy('filename', '!=', '04_videotest.png') // DEV
				->sortBy('sort', 'asc') as $file):
		?>
			
			<?php
				/*
				echo $file->filename() . ': ';
				echo $file->type();
				echo ' (' . $file->niceSize() . ')' . '<br />';
				*/
			?>
			
			<?php
				// Used multiple times later
				$contentID = 'ID'.$file->name();
				$fileParts = pathinfo($file->url());
				
				// Skip extra video files				
				$skipFile = false;
				if (strpos($file->filename(),'.mobile.mp4') !== false) {
					$skipFile = true;
				} elseif (strpos($file->filename(),'.webm') !== false) {
					$skipFile = true;
				} elseif (strpos($file->filename(),'.videostill.') !== false) {
					$skipFile = true;
				}
				
				// Skip file
				if ($skipFile) {
					//echo ('Skipped: '.$file->filename().'<br />');
					continue;
				}
			?>
			
			<?php if ($file->type() == 'video'): // Video markup ?>
				
				<?php
					//$contentID = 'ID'.$file->name();
					
					//var_dump($page->files());
					//echo $file->url() . '<br />';
								
					//$fileParts = pathinfo($file->url());
					/*
					echo 'MOV search: ' . $file->filename() . '<br />';
					echo 'MOV: ' . $page->videos()->find($file->filename()) . '<br />';
					echo 'WebM search: ' . $fileParts['filename'].'.webm' . '<br />';
					echo 'WebM: ' . $page->files()->find($fileParts['filename'].'.webm') . '<br />';
					*/
					//$videoStill =	'/'.$fileParts['filename'].'/'.$fileParts['filename'].'.jpg';
					$videoStill =	$page->files()->find($fileParts['filename'].'.videostill.jpg');
					$videoGif =	$page->files()->find($fileParts['filename'].'.gif');
					//echo $videoStill . '<br />';
				?>
				
				<?php
					# From https://github.com/bastianallgeier/kirbycms-extensions/blob/master/snippets/video/readme.mdown
					//$videos = $file->filename();
					//$video = $file->url();
					//$video = $file;
					$videos = array(
						$page->videos()->find($file->filename()),
						$page->files()->find($fileParts['filename'].'.mobile.mp4'),
						$page->files()->find($fileParts['filename'].'.webm'),
						//$fileParts['filename'].'.mobile.mp4'
						//$fileParts['filename'].'.webm'
						//$page->videos()->find('assets/01_webscroll.mobile.mp4'),
						//$page->videos()->find('01_webscroll.webm'),
						//$page->videos()->find($file->($fileParts['filename'].'.mobile.mp4')),
						//$page->videos()->find($file->($fileParts['filename'].'.webm')),
					);
					
					//var_dump($videos);
				?>
				
				<?php
				/*
					// DEV
					echo '1: '
						.$file->filename().': '
						.$page->videos()->find($file->filename()).'<br />';
					echo '2: '
						.'assets/'.$fileParts['filename'].'.mobile.mp4'.': '
						.$page->videos()->find($file->($fileParts['filename'].'.mobile.mp4')).'<br />';
					echo '3: '
						.$fileParts['filename'].'.webm'.': '
						.$page->videos()->find($file->($fileParts['filename'].'.webm')).'<br />';
					
					//print_r($videos);
				*/
				
				?>
				
				<section id="<?php echo $contentID ?>" class="container">
				<?php
					$controls = Null;
					$muted = Null;
					/*
					// Override contols setting
					if ($contentID == 'ID02_tv_intro') {
						$controls = true;
						$muted = true;
					}*/
					
					$deviceBreakPoints = array(550, 551);
					
					snippet('video', array(
						'videos' => $videos,
						'deviceBreakPoints' => $deviceBreakPoints,
						'thumb'	=> $videoStill,
						'fallback'	=> $videoGif,
						'id' => $contentID,
						'controls' => $controls,
						'muted' => $muted,
						'width' => 1280,
						'height' => 720
					));
				?>
				</section>
			
			<?php elseif ($file->type() == 'document'): // Document markup ?>
				
				<?php
				echo 'DOCUMENT!';
				// TODO
				// Remember class="container"
				?>
				
			<?php else: // Figure and image markup ?> 
				<?php
				# Reset figure variables
				//$contentID = 'ID'.$file->name();
				$figureAlignClass = Null;
		
				# Setup figure class and sub classes
				if (!$file->align()->empty()) {
					//$contentID .= ' caption';
					$figureAlignClass = ' caption-' . html($file->align()) . ' ';
				}
				?>
		
				<figure id="<?php echo $contentID ?>" class="<?php echo $figureAlignClass ?>container">
			
					<figcaption>
						<h2 class="sectiontitle header-small"><?php echo html($file->title()) ?></h2>
						<?php echo html($file->caption()) ?>
					</figcaption>
					
					<?php
					/*
						$caseName = str::lower($page->uid());
						if ($caseName == 'i_have_a_dream') {
							$dataScrollReveal = Null;
						} else {
							$dataScrollReveal = ' data-sr';
						}
					*/
						$dataScrollReveal = Null;
					?>
					
					<?php //echo $caseName . ': ' . $dataScrollReveal ?>
					
					<picture<?php echo $dataScrollReveal ?>>
						<!--[if IE 9]><video style="display: none;"><![endif]-->
						<source 
							srcset="
								<?php echo thumb($file, array('width' => 1440, 'quality' => 70))->url(); ?>, 
								<?php echo thumb($file, array('width' => 2880, 'quality' => 70))->url(); ?> 2x" 
							media="(min-width: 1440px)"
						>
						<source 
							srcset="
								<?php echo thumb($file, array('width' => 1000, 'quality' => 70))->url(); ?>, 
								<?php echo thumb($file, array('width' => 2000, 'quality' => 70))->url(); ?> 2x" 
							media="(min-width: 1000px)"
						>
						<source 
							srcset="
								<?php echo thumb($file, array('width' => 750, 'quality' => 70))->url(); ?>, 
								<?php echo thumb($file, array('width' => 1500, 'quality' => 70))->url(); ?> 2x" 
							media="(min-width: 750px)"
						>
						<source 
							srcset="
								<?php echo thumb($file, array('width' => 550, 'quality' => 70))->url(); ?>, 
								<?php echo thumb($file, array('width' => 1100, 'quality' => 70))->url(); ?> 2x" 
							media="(min-width: 550px)"
						>
						<!--[if IE 9]></video><![endif]-->
						<img 
							srcset="
								<?php echo thumb($file, array('width' => 400, 'quality' => 70))->url(); ?>, 
								<?php echo thumb($file, array('width' => 800, 'quality' => 70))->url(); ?> 2x" 
							alt="<?php
								if (html($file->title()) != '') {
									echo html($file->title());
								} else {
									echo $page->title()->html();
								}
							?>">
					</picture>
				</figure>
					
			<?php endif ?>			
			
		<?php endforeach ?>
		

		<nav class="prevnext container" role="navigation">
			<?php //echo 'Custom color: ' . $page->color() ?>
			
			<?php
				$prev = $page->prevVisible();
				$next = $page->nextVisible();
			?>
			
			<?php if($prev): ?>
			<a class="prev <?php if(!$next) { echo 'single '; } ?>subline" href="<?php echo $prev->url() ?>" alt="<?php echo $prev->title() ?>" data-color="<?php echo $prev->color() ?>">
				<p><i class="fa fa-long-arrow-left"></i>Forrige case</p>
				<h4 class="header-small"><?php echo $prev->title() ?></h4>
			</a>
			<?php endif ?>
			<?php if($next): ?>
			<a class="next <?php if(!$prev) { echo 'single '; } ?> subline" href="<?php echo $next->url() ?>" alt="<?php echo $next->title() ?>" data-color="<?php echo $next->color() ?>">
				<p>Næste case<i class="fa fa-long-arrow-right"></i></p>
				<h4 class="header-small"><?php echo $next->title() ?></h4>
			</a>
			<? else: ?>
			<a class="next info subline" href="/me" alt="Om mig">
				<p><span class="desktop">Info om</span><span class="mobile"> mig</span> <i class="fa fa-long-arrow-right"></i></p>
				<h4 class="header-small">Ryan Grønborg</h4>
			</a>
			<?php endif ?>
		</nav>

	</main>
	
<?php snippet('footer') ?>