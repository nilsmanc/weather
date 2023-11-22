import { getWeatherData } from './api.js'

const app = async () => {
  const weather = getWeatherData('Москва')
  console.log(weather)
}

app()
