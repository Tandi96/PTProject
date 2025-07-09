let selectedAvatar = "";

document.querySelectorAll(".avatar").forEach(avatar => {
  avatar.addEventListener("click", () => {
    // Deselect all avatars
    document.querySelectorAll(".avatar").forEach(a => a.classList.remove("selected"));
    // Select the clicked avatar
    avatar.classList.add("selected");
    // Store the selected avatar source
    selectedAvatar = avatar.getAttribute("src");
  });
});

function postComment() {
  const nameInput = document.getElementById("name");
  const commentInput = document.getElementById("comment");
  const commentSection = document.getElementById("commentSection");

  const name = nameInput?.value.trim();
  const comment = commentInput?.value.trim();

  if (!name || !comment || !selectedAvatar) {
    alert("Please fill in all fields and select an avatar!");
    return;
  }

  // Create comment box
  const commentBox = document.createElement("div");
  commentBox.classList.add("comment-box");
  commentBox.innerHTML = `
    <img src="${selectedAvatar}" alt="avatar" />
    <div class="comment-content">
      <strong>${name}</strong>
      <p>${comment}</p>
    </div>
  `;

  // Add new comment at the top
  commentSection?.prepend(commentBox);

  // Reset fields
  if (nameInput) nameInput.value = "";
  if (commentInput) commentInput.value = "";
  selectedAvatar = "";
  document.querySelectorAll(".avatar").forEach(a => a.classList.remove("selected"));
}
