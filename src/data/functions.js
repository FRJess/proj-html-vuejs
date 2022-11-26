const getPathImage = (imageName) => {
  return new URL(`../assets/img/${imageName}`, import.meta.url).href;
}

export { getPathImage }

// const getFontAwesome = (iconName) => {
//   return new URL(``)
// }