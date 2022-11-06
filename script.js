// SELECTION
var image = document.getElementById('burger')
console.log(image)

var nav = document.getElementsByTagName('nav')
console.log(nav)

var croix = document.getElementById('croix')
console.log(croix)

// EVENEMENT
image.addEventListener("click", menu)
image.addEventListener("click", croix)


// FONCTION
var abc = 0
var img = 'burger'
function menu() {
	if (abc == 0 && img == 'burger') { 
	nav[0].style.padding = '70px'
	nav[0].style.display = 'block'
	img = 'croix';
	abc++
	}

	else if (abc == 1 && img == 'croix') { 
	nav[0].style.display = 'none'
	img = 'burger';
	abc = 0
	}
	image.src = 'img/' + img + '.png';
}

