<?php if(!defined('KIRBY')) exit ?>

title: Case
pages: false
files:
	sortable: true
fields:
	title:
		label: Title
		type:	text
	tags:
		label: Tags
		type:	tags
	pagetone:
		label: Page tone
		type:	text
	color:
		label: Custom color
		type:	text
	year:
		label: Year
		type:	text
	shortdescription:
		label: Short description
		type:	text
	text:
		label: Text
		type:	textarea
	caselink:
		label: Link
		type: url
	extra:
		label: Video
		type: url