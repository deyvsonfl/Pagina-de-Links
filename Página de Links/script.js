function settingBox() {
  document.addEventListener("DOMContentLoaded", function () {
    document
      .getElementById("settings-icon")
      .addEventListener("click", function () {
        alert("ícone clicado!");
      });
  });
}

settingBox();
