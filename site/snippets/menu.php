<nav class="mainnav container autosticky" role="navigation">
	<ul class="menu nav">
	<?php foreach($pages->visible() as $p): ?>
		<li class="<?php echo strtolower($p->uid()) ?>">
			<a<?php e($p->isOpen(), ' class="active"') ?> href="<?php e(($p->title()->html() == 'Portfolio'), '/#portfolio', $p->url()) ?>"><?php echo $p->title()->html() ?></a>

			<?php if($p->hasVisibleChildren()): ?>
			<ul class="submenu">
				<?php foreach($p->children()->visible() as $p): ?>
				<li class="<?php echo strtolower($p->uid()) ?>">
					<a href="<?php echo $p->url() ?>"><?php echo $p->title()->html() ?></a>
				</li>
				<?php endforeach ?>
			</ul>
			<?php endif ?>

		</li>
	<?php endforeach ?>
	</ul>
</nav>
