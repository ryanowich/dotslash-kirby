	<footer class="footer container subline" role="contentinfo">

		<section class="colophon">
			<?php echo $site->copyright()->kirbytext() ?>
			<?php echo $site->mail()->kirbytext() ?>
			<?php echo $site->phone()->kirbytext() ?>
			<p><a href="http://getkirby.com/made-with-kirby-and-love">Made with Kirby</a></p>
		</section>
		
		<!--<script type="text/javascript" src="http://fast.fonts.net/jsapi/2bddaa3f-49f1-461e-a9c7-70508a02b8ac.js"></script>-->

	</footer>
	
	<?php echo css(array(
		'//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css'
	)) ?>

</body>
</html>