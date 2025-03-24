function openGoogleMaps() {
    const templeSelect = document.getElementById("temple");
    const destination = templeSelect.value; // Get selected temple's coordinates

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;

            // Construct the Google Maps URL
            const mapsUrl = `https://www.google.com/maps/dir/${userLat},${userLng}/${destination}`;
            
            // Open Google Maps in a new tab
            window.open(mapsUrl, "_blank");
        }, () => {
            alert("Location access denied. Please allow location permissions.");
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function redirectToDetails() {
    const templeSelect = document.getElementById("temple");
    const templeValue = templeSelect.value; // Get selected temple's ID

    // Redirect to details page with the selected temple ID
    window.location.href = `temples/meenakshi-temple-details.html?temple=${templeValue}`;
}

