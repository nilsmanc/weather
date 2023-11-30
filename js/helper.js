export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const directionOfwWind = (degree) => {
  if (degree > 337.5) {
    return 'North'
  }
  if (degree > 292.5) {
    return 'Northwest'
  }
  if (degree > 247.5) {
    return 'West'
  }
  if (degree > 202.5) {
    return 'Southwest'
  }
  if (degree > 157.5) {
    return 'South'
  }
  if (degree > 122.5) {
    return 'Southeast'
  }
  if (degree > 67.5) {
    return 'East'
  }
  if (degree > 22.5) {
    return 'Northeast'
  }
  return 'North'
}

export const cToF = (celsius) => {
  return (celsius * 9) / 5 + 32
}

export const fToC = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9
}
