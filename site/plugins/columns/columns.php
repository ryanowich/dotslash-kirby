<?php

/**
 * Columns Plugin
 *
 * @author Bastian Allgeier <bastian@getkirby.com>
 * @version 1.0.0
 */
kirbytext::$pre[] = function($kirbytext, $text) {

	$text = preg_replace_callback('!\(columns(…|\.{3})\)(.*?)\((…|\.{3})columns\)!is', function($matches) use($kirbytext) {

		$columns = preg_split('!(\n|\r\n)\+{4}\s+(\n|\r\n)!', $matches[2]);
		$html		= array();

		$srWait = 1.3;
		$srWaitStep = 0.25;
		foreach($columns as $column) {
			$field = new Field($kirbytext->field->page, null, trim($column));
			$html[] = '<div class="' . c::get('columns.item', 'column') . '">' . kirbytext($field) . '</div>';
			$srWait = $srWait + $srWaitStep;
		}

		return '<div class="' . c::get('columns.container', 'columns') . ' ' . c::get('columns.container', 'columns') . '-' . count($columns) . '">' . implode($html) . '</div>';

	}, $text);

	return $text;

};
