export default function isAdmin() {
  const urlCheck1 = window.location?.pathname?.startsWith('/admin')
  const urlCheck2 = window.location?.pathname?.startsWith('/edit')
  return document.body.classList.contains('editing') || urlCheck1 || urlCheck2
}
