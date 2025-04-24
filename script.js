//your code here



function dragstartHandler(e){
	e.dataTransfer.setData("text",e.target.id);
		
}

function dragoverHandler(e) {
	e.preventDefault();
}

function dropHandler(e) {
	e.preventDefault();
	const draggedId = e.dataTransfer.getData("text");
	const draggedEl = document.getElementById(draggedId);
	const targetEl = e.target;
	
	if(targetEl.classList.contains('image')&&draggedEl !==targetEl){
		const parent = targetEl.parentNode;
		const draggedNext = draggedEl.nextSibling === targetEl ? draggedEl : draggedEl.nextSibling;
		parent.insertBefore(draggedEl, targetEl);
		parent.insertBefore(targetEl, draggedNext);
	}
}

