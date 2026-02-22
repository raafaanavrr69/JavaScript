const qrText = document.getElementById("qr-text");
const imgBox = document.getElementById("img-box");
const qrImage = document.getElementById("qr-image");
const buildQrUrl = (text) =>
    `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(text)}&t=${Date.now()}`;

const generateQR = () => {
    const text = qrText.value.trim();

    if (text === "") {
        qrText.classList.add("error");
        imgBox.classList.remove("show-img");
        qrImage.removeAttribute("src");
        return;
    }

    const qrUrl = buildQrUrl(text);
    qrImage.src = qrUrl;
    imgBox.classList.add("show-img");
    qrText.classList.remove("error");
};

qrText.addEventListener("input", () => {
    qrText.classList.remove("error");
});

window.generateQR = generateQR;
