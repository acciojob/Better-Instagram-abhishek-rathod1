function dragstartHandler(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
}

function dragoverHandler(e) {
  e.preventDefault(); // Allow drop
}

function dropHandler(e) {
  e.preventDefault();
  const draggedId = e.dataTransfer.getData("text/plain");
  const draggedImg = document.getElementById(draggedId);

  const dropTarget = e.target.tagName === "IMG" ? e.target.parentElement : e.target;
  const droppedImg = dropTarget.querySelector("img");

  if (!draggedImg || !droppedImg || draggedImg === droppedImg) return;

  // Swap the images
  const draggedSrc = draggedImg.src;
  draggedImg.src = droppedImg.src;
  droppedImg.src = draggedSrc;
}
