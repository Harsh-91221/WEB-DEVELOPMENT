document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "1c78c6124313dd2f29a9658f2aab0c8e";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");
    async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if (response.status == 404) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }
        else {
            var data = await response.json();
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
            const weatherCondition = data.weather[0].main.toLowerCase();
            switch (weatherCondition) {
                case "clouds":
                    weatherIcon.src = "clouds.png";
                    break;
                case "clear":
                    weatherIcon.src = "clear.png";
                    break;
                case "rain":
                    weatherIcon.src = "rain.png";
                    break;
                case "drizzle":
                    weatherIcon.src = "drizzle.png";
                    break;
                case "mist":
                    weatherIcon.src = "mist.png";
                    break;
                case "snow":
                    weatherIcon.src = "snow.png";
                    break;
            }
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        }
    }
    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
    });
});
