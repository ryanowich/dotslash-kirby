<?php

// Stop if no video
if(empty($videos)) return;

// Defaults
if(!isset($width))		$width		= 400;
if(!isset($height))		$height		= 300;
if(!isset($preload))	$preload	= true;
if(!isset($autoplay))	$autoplay	= true;
if(!isset($muted))	$muted	= true;
if(!isset($loop))			$loop	= true;
if(!isset($controls))	$controls	= false;

if(!isset($id))	$id	= false;

// Build html tags for the video element
//$preload	=	($preload)	?	' preload="preload"'		: '';
$preload	=	($preload)	?	' preload="auto"'		: '';
$autoplay	=	($autoplay)	?	' autoplay'							: '';
//$loop			=	($loop)			?	' loop="loop" onstart="this.play();" onended="this.play();"'		: '';
$loop			=	($loop)			?	' loop onstart="this.play();" onended="this.play();"'		: '';
$muted	=	($muted)	?	' muted'	: '';
//$controls	=	($controls)	?	' controls="controls"'	: '';
$controls	=	($controls)	?	' controls'	: '';

$id	=	($id)	?	' id="'.$id.'" '	: '';

?>
<video 
	width="<?php echo $width ?>" 
	height="<?php echo $height ?>"
	<?php echo $preload . $autoplay . $loop . $muted . $controls ?>
	<?php if(isset($thumb)): ?>
	 poster="<?php echo $fallback->url() ?>"
	<?php endif ?>
	>
	<?php $videosCount = 0; ?>
	<?php foreach($videos as $video): ?>
	<?php
		$videosCount ++;
		if ($videosCount == 2) {
			// Small
			$minMax = 'max';
			$deviceWidth = 550;
			$deviceBreakSize = $deviceBreakPoints[0];
		} else {
			// Big
			$minMax = 'min';
			$deviceWidth = 551;
			$deviceBreakSize = $deviceBreakPoints[1];
		}
	?>
	<source src="<?php echo $video->url() ?>" type="<?php echo $video->mime() ?>" media="screen and (<?php echo $minMax ?>-device-width:<?php echo $deviceBreakSize ?>px)" />
	<?php endforeach ?>
	<?php if(isset($fallback)): ?>
	<?php endif ?>
</video>