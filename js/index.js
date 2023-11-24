import { getWeatherData } from './api.js'
import { createHeader } from './appHeader.js'

const app = async () => {
  const weather = getWeatherData('Москва')
  const header = createHeader(weather.name)
  console.log(weather)
  document.body.append(header)
}

app()
