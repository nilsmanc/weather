import {API_KEY} from variables.js

export const getWeatherData = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=ru&units=metric`
    )

    return await response.json()
  } catch (error) {
    console.error(error)
  }
}
