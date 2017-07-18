<?php snippet('html', array('color' => $page->color())) ?>

	<?php snippet('header', array('pagetype' => 'portfolio')) ?>
	
	<?php echo js(array(
		'//cdn.jsdelivr.net/chartist.js/latest/chartist.min.js',
		$site->themepath().'/js/me.min.js',
	)) ?>
	
	<main class="main container" role="main">
				
		<article class="intro">
			<h1 class="intro header-big"><span data-sr="wait 0.5s, move 10px">Tænker</span><span class="hidden">,</span> <br /><span data-sr="wait 0.8s, move 10px">designer</span> <span class="dimmed nega-space" data-sr="wait 1.1s, move 0">&</span> <br /><span data-sr="wait 1.1s, move 10px">udvikler</span></h1>
			<section class="text copy">
				<?php echo $page->Intro()->kirbytext() ?>
			</section>
			<section class="workstatus">
				<h3 class="dimmed">Status:</h3>
				<h2><?php echo $page->Status()->kirbytext() ?></h2>
				<div class="contactme">
					<p><i class="fa fa-envelope-o"></i><a href="mailto:ryan@dotslash.dk">ryan@dotslash.dk</a></p>
					<p><i class="fa fa-phone"></i><a href="tel:+4529430246"><span class="dimmed">(+45)</span>2943 0246</a></p>
				</div>
			</section>
		</article>
		
		<article class="baseinfo" data-sr>
			<h1 class="header-small">Basis info</h1>
			<section class="photo">
				<!--[if lt IE 9]>
				<script>
					document.createElement('video');
				</script>
				<![endif]-->
					
				<video 
					id="front_me_video" 
					width="1280" height="720" 
					preload="auto" 
					poster="../content/home/assets/me_header_01.4.0_color_00114.png">
					<source src="../content/home/assets/me_header_01.4.0.mp4" type="video/mp4">
					<source src="../content/home/assets/me_header_01.4.0.webm" type="video/webm">
					<img src="../content/home/assets/me.png" title="Your browser does not support the <video> tag">
				</video>
	
				<div class="videofallback"></div>
			</section>
			
			<section class="basedata">
				<?php $baseinfos = yaml($page->BaseInfo()); ?>
				<table class="baseinfo_table">
				<?php foreach($baseinfos as $baseinfo): ?>
					<tr>
						<td class="baseinfo_title"><?php echo $baseinfo['Title'] ?>:</td>
						<td class="baseinfo_content">
						<?php
							if ($baseinfo['Title'] == 'Alder') {
								echo dateToAge($baseinfo['Content']) . ' år';
							} else {
								echo $baseinfo['Content'];
							}
						?>
						</td>
					</tr>
				<?php endforeach ?>
			</table>
			</section>
			
			<section class="languages">
				<h1 class="header-small">Sprog</h1>
				
				<?php $languages = yaml($page->Languages()); ?>
				
				<?php foreach($languages as $language): ?>
				<div class="chart_container">
					
					<div class="chart_description">
						<p class="lang_title"><?php echo $language['Language'] ?></p>
						<p class="speaklevel"><?php echo $language['Speaklevel'] ?>% talende</p>
						<p class="writelevel"><?php echo $language['Writelevel'] ?>% skrivende</p>
					</div>
					
					<div class="chart_inner speak <?php echo strtolower($language['Language']) ?>"></div>
					<div class="chart_inner write <?php echo strtolower($language['Language']) ?>"></div>
					
					<script>
					// Speak
					new Chartist.Pie('.<?php echo strtolower($language['Language']) ?>.speak', {
							series: [<?php echo $language['Speaklevel'] ?>, <?php echo (100 - intval($language['Writelevel'])) ?>]
						}, {
							donut: true,
							donutWidth: 10,
							startAngle: 0,
							total: 100,
							showLabel: false
						});
						// Write
					new Chartist.Pie('.<?php echo strtolower($language['Language']) ?>.write', {
							series: [<?php echo $language['Writelevel'] ?>, <?php echo (100 - intval($language['Writelevel'])) ?>]
						}, {
							donut: true,
							donutWidth: 10,
							startAngle: 0,
							total: 100,
							showLabel: false
						});
					</script>
				</div>	
				<?php endforeach ?>
				
			</section>
			
		</article>
		
		<article class="skills pro" data-sr>
			<h1 class="header-small">Professionelle kompetencer</h1>
			
			<section class="design_software">
				
				<section class="design">
					<h2 class="header-small">Design</h2>
					<?php $skillsProDesign = yaml($page->SkillsProDesign()); ?>	
					<table class="skills">
						<?php foreach($skillsProDesign as $skill): ?>
						<tr class="skill">
							<td class="skill_name <?php echo cleanString($skill['Skill']) ?>"><?php echo $skill['Skill'] ?></td>
							<td class="skill_value">
								<progress id="test" class="skillstyle blue" max="100" value="<?php echo $skill['Level'] ?>">
									<strong>Skill level: <?php echo $skill['Level'] ?>%</strong>
								</progress>
							</td>
						</tr>
						<?php endforeach ?>
					</table>
				</section>
				
				<section class="tools">
					<h2 class="header-small">Software</h2>
					<?php $skillsProTools = yaml($page->SkillsProTools()); ?>
					<table class="skills">
						<?php foreach($skillsProTools as $tool): ?>
						<tr class="skill">
						<tr class="skill">
							<td class="skill_name <?php echo cleanString($tool['Tool']) ?>"><?php echo $tool['Tool'] ?></td>
							<td class="skill_value">
								<progress class="skillstyle green" max="100" value="<?php echo $tool['Level'] ?>">
									<strong>Tool level: <?php echo $tool['Level'] ?>%</strong>
								</progress>
							</td>
						</tr>
						<?php endforeach ?>
					</table>
				</section>
			</section>
			
			<section class="webdev">
				<h2 class="header-small">Web development</h2>
				<?php $skillsProDev = yaml($page->SkillsProWebDev()); ?>
				<table class="skills">
					<?php foreach($skillsProDev as $skill): ?>
					<tr class="skill">
					<tr class="skill">
						<td class="skill_name <?php echo cleanString($skill['Skill']) ?>"><?php echo $skill['Skill'] ?></td>
						<td class="skill_value">
							<progress class="skillstyle lightblue" max="100" value="<?php echo $skill['Level'] ?>">
								<strong>Skill level: <?php echo $skill['Level'] ?>%</strong>
							</progress>
						</td>
					</tr>
					<?php endforeach ?>
				</table>
			</section>
			
		</article>
		
		<article class="skills extra" data-sr>
			<h1 class="header-small">Ekstra</h1>
				
			<section class="bonus">
				<h2 class="header-small">Bonus</h2>
				<?php $SkillsBonus = yaml($page->SkillsBonus()); ?>
				<table class="skills">
					<?php foreach($SkillsBonus as $skill): ?>
					<tr class="skill">
					<tr class="skill">
						<td class="skill_name <?php echo cleanString($skill['Skill']) ?>"><?php echo $skill['Skill'] ?></td>
						<td class="skill_value">
							<progress class="skillstyle darkyellow" max="100" value="<?php echo $skill['Level'] ?>">
								<strong>Skill level: <?php echo $skill['Level'] ?>%</strong>
							</progress>
						</td>
					</tr>
					<?php endforeach ?>
				</table>
			</section>
			
			<section class="personal">
				<h2 class="header-small">Personlige kompetencer</h2>
				<?php $SkillsPersonal = yaml($page->SkillsPersonal()); ?>
				<table class="skills">
					<?php foreach($SkillsPersonal as $skill): ?>
					<tr class="skill">
					<tr class="skill">
						<td class="skill_name <?php echo cleanString($skill['Skill']) ?>"><?php echo $skill['Skill'] ?></td>
						<td class="skill_value">
							<progress class="skillstyle yellow" max="100" value="<?php echo $skill['Level'] ?>">
								<strong>Skill level: <?php echo $skill['Level'] ?>%</strong>
							</progress>
						</td>
					</tr>
					<?php endforeach ?>
				</table>
			</section>
			
		</article>
		
		<a name="cv"></a>
		<article class="cv">
			<h1 class="header-small">CV</h1>
			<section id="cv_carousel" class="owl-carousel">
				<?php $CV = yaml($page->CV()); ?>
				<?php $cvCount = 0 ?>
				<?php foreach($CV as $cvItem): ?>
					<div class="cv_item<?php echo ' '.cleanString($cvItem['Type']) ?>">
						<div class="cv_item_inner">
							<h5 class="title header-small"><?php echo $cvItem['Title'] ?></h5>
							<p class="company"><?php echo $cvItem['Company'] ?></p>
							<p class="location"><?php echo $cvItem['Location'] ?></p>
							<p class="time"><?php echo $cvItem['TimeStart'] . ' - ' . $cvItem['TimeEnd'] ?></p>
							<div class="description">
								<?php echo kirbytext($cvItem['Description']) ?>
							</div>
							<div class="link">
								<?php if (isset($cvItem['Link'])) : ?>
									<?php echo kirbytext($cvItem['Link']) ?>
								<?php endif ?>
							</div>
						</div>
						<div class="timeline_year">
							<p><?php
									if ($cvCount == 0 && $cvItem['TimeEnd'] == 'Nu') {
										echo '2015';
									} else {
										echo $cvItem['TimeStart'];
									}
									$cvCount++;
								?></p>
						</div>
					</div>
				<?php endforeach ?>
			</section>
			<i class="fa fa-angle-right"></i>
		</article>
			
		<article class="interests" data-sr>
			<h1 class="header-small">Interesser (billeder)</h1>
			<section>
				<?php $Interests = yaml($page->Interests()); ?>		
				<?php foreach($Interests as $interest): ?>
				<ul class="list">
					<li><?php echo $interest['Area'] ?>: <?php echo $interest['Image'] ?></li>
				</ul>
				<?php endforeach ?>
			</section>
		</article>
		
		<article class="references">
			<h1 class="header-small">Referencer</h1>
			<section>
				[Get from LinkedIn]
			</section>
		</article>
		
		<article class="contact" data-sr>
			<h1 class="header-small">Kontakt</h1>
			<section class="contact_options">
				<?php echo $page->Contact()->kirbytext() ?>
			</section>
			<section class="me_photo circular">
				<img src="../../../content/2-profil/me_color.png" />
			</section>
		</article>
		
	</main>
		
<?php snippet('footer') ?>
