const stillsDirectory = window.location.origin + "/images/stills/";

document.addEventListener("DOMContentLoaded", function () {
  const lightboxModal = document.getElementById("lightboxModal");

  //final image path is stillsDirectory/icarus/A.jpeg for example
  const imagePaths = {
    icarus: ["A.jpeg", "D.jpeg", "I.jpeg"],
    mantidae: [
      "MANTIDAE_-43.jpg",
      "MANTIDAE_-47.jpg",
      "MANTIDAE_-3.jpg",
      "MANTIDAE_-31.jpg",
      "MANTIDAE_-45.jpg",
      "MANTIDAE_-11.jpg",
    ],
    "sacred-home": [],
    samai: [],
  };

  lightboxModal.addEventListener("show.bs.modal", (event) => {
    const button = event.relatedTarget;
    const short = button.getAttribute("data-short-id");

    const modalTitle = lightboxModal.querySelector(".modal-title");
    const modalBody = lightboxModal.querySelector(".modal-body");

    modalTitle.textContent = short.charAt(0).toUpperCase() + short.slice(1);
    modalBody.innerHTML = "";

    const stills = imagePaths[short] || [];
    const container = document.createElement("div");
    container.className = "container-fluid";
    const row = document.createElement("div");
    row.className = "row";

    stills.forEach((still) => {
      const col = document.createElement("div");
      col.className = "col-md-6 p-2";
      const img = document.createElement("img");
      img.src = stillsDirectory + short + "/" + still;
      img.alt = "Still from " + short;
      img.className = "img-fluid";
      col.appendChild(img);
      row.appendChild(col);
    });

    container.appendChild(row);
    modalBody.appendChild(container);
  });

  // TODO: AJAX fetch the appropriate resources
});
