function getLocation() {
    const locationDiv = document.getElementById("location");
    const errorDiv = document.getElementById("error");
  
    // Clear previous results
    locationDiv.innerHTML = "";
    errorDiv.innerHTML = "";
  
    // Check if Geolocation is supported
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
  
          // Display the latitude and longitude
          locationDiv.innerHTML = `
            <strong>Your Location:</strong><br>
            Latitude: ${latitude.toFixed(6)}<br>
            Longitude: ${longitude.toFixed(6)}<br>
            <a href="https://www.google.com/maps?q=${latitude},${longitude}" target="_blank">
              View on Google Maps
            </a>
          `;
        },
        (error) => {
          // Handle errors
          switch (error.code) {
            case error.PERMISSION_DENIED:
              errorDiv.textContent = "You denied the request for Geolocation.";
              break;
            case error.POSITION_UNAVAILABLE:
              errorDiv.textContent = "Location information is unavailable.";
              break;
            case error.TIMEOUT:
              errorDiv.textContent = "The request to get your location timed out.";
              break;
            default:
              errorDiv.textContent = "An unknown error occurred.";
          }
        }
      );
    } else {
      errorDiv.textContent = "Geolocation is not supported by this browser.";
    }
  }