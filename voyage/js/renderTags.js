function renderh1(element, Text){
	const h1 = h1Tag();
	h1.innerHTML = Text;
	element.append(h1);
}
function renderh2(element, Text){
	const h2 = h2Tag();
	h2.innerHTML = Text;
	element.append(h2);
}

function renderP(element, Text){
	const p = pTag();
	p.innerHTML = Text;
	element.append(p);
}

function footerHeader(element, Text){
	const h2 = h2Tag();
	h2.className = "footer_header";
	h2.innerHTML = Text;
	element.append(h2);
}

function footerSpan(element, Text){
	const span = spanTag();
	span.innerHTML = Text;
	element.append(span);
}

function renderA(element, Text, tagClass){
	const a = aTag();
	a.className = tagClass;
	a.innerHTML = Text;
	element.append(a);
}

function renderSectionHeader(element, h2text, PText){
	element.className = "section__header";
	renderh2(element, h2text);
	renderP(element, PText);
}

function renderDivContainer(){
	const container = divTag();
	container.className = "container";
	return container;
}

function renderIcons(arrIcon, element){
	const a = aTag();
	const tagIcon = iTag();
	tagIcon.className = arrIcon;
	a.append(tagIcon);
	element.append(a);
}