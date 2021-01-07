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
										<h1>${this.title} id:${this.id}</h1>
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



function addItem(){
	
	let newBlock = new item(currentId, "prueba", "esta es una prueba")
	items.push(newBlock);
	currentId += 1;
	refresh();
}