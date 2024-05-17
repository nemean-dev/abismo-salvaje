const stillsDirectory = window.location.origin + "/assets/images/stills/";

document.addEventListener("DOMContentLoaded", function () {
  const lightboxModal = document.getElementById("lightbox-modal");

  //final image path is stillsDirectory/still/image.jpeg for example
  const imagePaths = {
    icarus: ["A.jpeg", "B.jpg", "I.jpeg", "F.jpg", "H.jpg"],
    mantidae: [
      "mantidae43.jpg",
      "mantidae47.jpg",
      "mantidae3.jpg",
      "mantidae31.jpg",
      "mantidae45.jpg",
      "mantidae11.jpg",
    ],
    "sacred-home": ["A.jpg", "B.jpg", "D.jpg", "E.jpg", "C.jpg", "F.jpg"],
    samai: ["A.jpg", "B.jpg", "C.jpg", "D.jpg", "E.jpg", "F.jpg"],
  };

  lightboxModal.addEventListener("show.bs.modal", (event) => {
    // Obtain the selected short
    const button = event.relatedTarget;
    const short = button.getAttribute("data-short-id");
    const stills = imagePaths[short] || [];

    const modalTitle = lightboxModal.querySelector(".modal-title");
    const modalBody = lightboxModal.querySelector(".modal-body");

    // Capitalise the short name for the title.
    modalTitle.textContent = short.charAt(0).toUpperCase() + short.slice(1);
    modalBody.innerHTML = "";

    // Create bootstrap container and row for the images
    const container = document.createElement("div");
    container.className = "container-fluid";
    const row = document.createElement("div");
    row.className = "row";

    stills.forEach((still) => {
      // create an img and enclosing bs col for each still
      const col = document.createElement("div");
      col.className = "col-md-6 p-2";
      const img = document.createElement("img");

      // set image source to corresponding URI
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
