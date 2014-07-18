// ==UserScript==
// @name        fengcheAlert
// @namespace   Hello
// @description 修改风车用户界面
// @include     https://fengcheco.com/projects/*
// @version     1
// @grant       none
// ==/UserScript==
var alter_right = document.getElementsByTagName('section') .item(8);
var alter_left = document.getElementsByTagName('section') .item(6);
alter_right.style.width = document.body.clientWidth - 535 + 'px';
alter_left.style.width = 300 + 'px';

function addGlobalStyle(css) {
	var head, style;
	head = document.getElementsByTagName('head')[0];
	if (!head) { return; }
	style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = css;
	head.appendChild(style);
}
addGlobalStyle('h1 { font-size: 36px ! important; }');
addGlobalStyle('h2 { font-size: 28px ! important; }');
addGlobalStyle('h3 { font-size: 16px ! important; }');
addGlobalStyle('h4 { font-size: 12px ! important; }');
