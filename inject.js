var __$ = function(id)
{
	if(id)
	{
		return document.querySelectorAll(id);
	}
	return document;
};

var run = function()
{
	var els = __$('*[inject]');
	var re = /#{([a-zA-Z.]+)}/g; 
	var m;
	for(x in els)
	{
		if(els[x] instanceof Element)
		{
			m = re.exec(els[x].innerHTML);
			while (els[x].innerHTML.match(re)) {
		    		els[x].innerHTML = els[x].innerHTML.replace(eval('/#{' + m[1] + '}/g'), eval(m[1]));
		    		m = re.exec(els[x].innerHTML);
			}
			els[x].removeAttribute('inject');
		}
	}
};

document.addEventListener('DOMContentLoaded', run, false);
