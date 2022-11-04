const deleteButtons = document.querySelectorAll(" .delete-button");

for (let deleteButton of deleteButtons) {
  deleteButton.addEventListener("click", () => {
    deleteButton.parentElement.parentElement.remove();
  });
}

const addButton = document.querySelector("#add-button");
addButton.addEventListener("click", () => {
  const tracknumber = document.getElementById("tracknumber");
  const tracknumberInput = tracknumber.value;
  const tracktitle = document.getElementById("tracktitle");
  const tracktitleInput = tracktitle.value;
  const artistname = document.getElementById("artistname");
  const artistnameInput = artistname.value;
  const trackduration = document.getElementById("trackduration");
  const trackdurationInput = trackduration.value;
  const table = document.querySelector(".table-body");
  const newRow = document.createElement("tr");
  newRow.className = "song-row";
  newRow.innerHTML = `<th scope="row">${tracknumberInput}</th>
                <td>${tracktitleInput}</td>
                <td>${artistnameInput}</td>
                <td>${trackdurationInput}</td>
                <td>
                  <button class="btn btn-danger delete-button">Delete</button>
                </td>`;
  const arrOfOrderedSongNumbers = document.querySelectorAll(
    ".ordered-song-number"
  );
  if (
    tracknumberInput !== "" &&
    tracktitleInput !== "" &&
    artistnameInput !== "" &&
    trackdurationInput !== ""
  ) {
    table.appendChild(newRow);
    const deleteButtons = document.querySelectorAll(" .delete-button");

    for (let deleteButton of deleteButtons) {
      deleteButton.addEventListener("click", () => {
        deleteButton.parentElement.parentElement.remove();
      });
    }
    alert(`The song ${tracktitleInput} was successfully added`);
    const input = document.getElementsByTagName("input");
    for (let inputs of input) {
      inputs.value = "";
    }
  } else {
    alert("Please fill in all the fields");
  }
});

const closeModal = document.querySelector("#close-modal");
closeModal.addEventListener("click", () => {
  $("#close-modal").modal("hide");
});
