const weatherForm = document.getElementById("weatherForm");
const cityInput = document.getElementById("cityInput");
const errorMessage = document.getElementById("error-message");
const resultados = document.getElementById("resultados");
const estadoClima = document.getElementById("estadoClima");
const temperatura = document.querySelector("#temperatura h3");
const humedad = document.querySelector("#humedad h3");
const viento = document.querySelector("#viento h3");

function obtenerImagenClima(main, descripcion) {
    const mainLower = (main || "").toLowerCase();
    const descripcionLower = (descripcion || "").toLowerCase();

    if (mainLower.includes("thunderstorm") || descripcionLower.includes("tormenta")) {
        return "img/tormenta.png";
    }

    if (mainLower.includes("rain") || mainLower.includes("drizzle") || descripcionLower.includes("lluv")) {
        return "img/lluvia.png";
    }

    if (mainLower.includes("clear") || descripcionLower.includes("cielo claro")) {
        return "img/cielo claro.png";
    }

    return "img/cielo claro.png";
}

async function buscarClimaPorCiudad(ciudad) {
    const apiKey = "253998e4040feeb9751f35858a323f5a";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(ciudad)}&appid=${apiKey}&units=metric&lang=es`;

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "No se pudo obtener el clima para esa ciudad.");
    }

    return data;
}


weatherForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const ciudad = cityInput.value.trim();

    if (ciudad === "") {
        errorMessage.style.display = "block";
        return;
    }

    try {
        const clima = await buscarClimaPorCiudad(ciudad);
        errorMessage.style.display = "none";
        resultados.textContent = `${clima.name}, ${clima.sys.country} · ${clima.weather[0].description}`;
        temperatura.textContent = `${Math.round(clima.main.temp)}°C`;
        humedad.textContent = `${clima.main.humidity}%`;
        viento.textContent = `${Math.round(clima.wind.speed * 3.6)} km/h`;
        estadoClima.src = obtenerImagenClima(clima.weather[0].main, clima.weather[0].description);
        estadoClima.alt = clima.weather[0].description;
    } catch (error) {
        errorMessage.style.display = "block";
        console.error("Error al buscar ciudad:", error.message);
    }
});

cityInput.addEventListener("input", () => {
    if (cityInput.value.trim() !== "") {
        errorMessage.style.display = "none";
    }
});