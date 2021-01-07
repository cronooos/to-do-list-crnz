// remove item from the list ``

var currentId = 0;
var items = [];

function item(id, title, cont){
	this.id = "item" + id;
	this.title = title;
	this.cont = cont;
	this.template = function(){
		return `<div class="list-item" id="${this.id}'">
								<div class="item-box">
									<div class="item-header">
										<h1>${this.title}</h1>
										<div class="icon">
											<button onclick="removeItem('${this.id}')">
												<img src="https://img.icons8.com/metro/52/000000/check-all.png"/>
											</button>
											
										</div>
									</div>
									<hr>
									<div class="item-content">
										<p>${this.cont}</p>
									</div>
								</div>
							</div>
							`;
	}
};



function refresh(){
	let content = "";
	for (let i = 0; i < items.length; i++){
		content += items[i].template();
	}
	document.getElementById("list").innerHTML = content;
	if (items.length === 0){
		currentId = 0;
	}

}

function removeItem(id){
	for (let i = 0; i < items.length; i++){
		if (items[i].id === id){
			items.splice(i,1);
			refresh();
			return;
		}
		else console.log(items[i].id )
	}
	refresh();
}

function toggleForm(){
	let formContainer = document.getElementById('formcontainer');
	let form = document.getElementById('form');
	let body = document.getElementsByTagName("body")[0];
	window.scroll(0,0,'smooth');
	formContainer.classList.toggle("show");
	form.classList.toggle("display");
	body.classList.toggle("fullscreen");
}

function addItem(title, content){
	
	let newBlock = new item(currentId, title, content);
	items.push(newBlock);
	currentId += 1;
	refresh();
}

function verify(){
	let tit = document.getElementById("title");
	let cont = document.getElementById("content");

	if (tit.value.replace(/\s+/g, '').length > 0 && cont.value.replace(/\s+/g, '').length > 0){
		toggleForm();
		addItem(tit.value, cont.value);
	} else window.alert("please complete the fields");

	tit.value = "";
	cont.value = "";

	return;
}

