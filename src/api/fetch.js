export function APIRequest(who) {
  if (who === 'articlesApi') {
    return fetch('http://localhost:3001/api/').then(res => res.json())
  } else {
    return 'no argument provided'
  }
}
