document.addEventListener("DOMContentLoaded", function () {
    const templeData = {
        meenakshi: {
            name: "Meenakshi Amman Temple",
            image: "meenakshi-amman-temple-main.png",
            timings: "05:00 - 22:00",
            location: "https://www.google.com/maps?q=Meenakshi+Amman+Temple",
            dressCode: "Traditional dress preferred. Men should wear dhotis with upper cloth or formal pants and shirts. Women should wear sarees or traditional Indian attire.",
            history: "The Meenakshi Amman Temple is a historic Hindu temple...",
            pujas: ["Morning Puja - 05:30", "Noon Puja - 12:30", "Evening Puja - 18:00"],
            gallery: ["meenakshi-amman-temple-1.jpg", "meenakshi-amman-temple-2.jpg"]
        }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const templeId = urlParams.get("temple");

    if (templeId && templeData[templeId]) {
        const temple = templeData[templeId];

        document.getElementById("temple-name").textContent = temple.name;
        document.getElementById("temple-image").src = `images/${temple.image}`;

        document.getElementById("temple-timings").textContent = temple.timings;
        document.getElementById("temple-location").href = temple.location;
        document.getElementById("temple-dresscode").textContent = temple.dressCode;
        document.getElementById("temple-history").textContent = temple.history;

        const pujaList = document.getElementById("temple-pujas");
        temple.pujas.forEach(puja => {
            const li = document.createElement("li");
            li.textContent = puja;
            pujaList.appendChild(li);
        });

        const galleryDiv = document.getElementById("gallery");
        temple.gallery.forEach(image => {
            const img = document.createElement("img");
            img.src = `images/${image}`;
            img.classList.add("gallery-image");
            galleryDiv.appendChild(img);
        });

        document.querySelector(".gallery img").classList.add("active");
    }
});

function goBack() {
    window.history.back();
}
