// TODO:
// make this function work with other locations, not only homepage

export default function isHomepage(loc) {
  const targetPage = window.location?.pathname
  return targetPage.length < 2
}
