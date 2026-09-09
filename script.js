function showReport() {

    document.getElementById("home").style.display = "none";

    document.getElementById("reportPage").style.display = "block";

}

let selectedImageFiles = [];

function handleImages(input) {

    if (!input || !input.files) return;

    for (let i = 0; i < input.files.length; i++) {

        selectedImageFiles.push(input.files[i]);

    }

    displaySelectedImages();

    input.value = "";

}

function displaySelectedImages() {

    const container = document.getElementById("selectedImages");

    if (!container) return;

    container.innerHTML = "";

    selectedImageFiles.forEach(function(file, index) {

        const imageBox = document.createElement("div");

        imageBox.style.display = "inline-block";

        imageBox.style.width = "120px";

        imageBox.style.margin = "5px";

        imageBox.style.textAlign = "center";

        const img = document.createElement("img");

        img.src = URL.createObjectURL(file);

        img.style.width = "110px";

        img.style.height = "80px";

        img.style.objectFit = "contain";

        img.style.border = "1px solid #2e7d32";

        img.style.padding = "3px";

        img.style.background = "white";

        img.style.borderRadius = "5px";

        const text = document.createElement("div");

        text.textContent = "شاهد " + (index + 1);

        imageBox.appendChild(img);

        imageBox.appendChild(text);

        container.appendChild(imageBox);

    });

}
