const deleteButtons = document.getElementsByClassName("delete-button");
for (let i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener("click", () => {
    const songRow = document.querySelectorAll(".song-row");
    songRow[i].remove();
  });
}
