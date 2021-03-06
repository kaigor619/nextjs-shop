export default function PhoneService() {
  const _apiBase = 'https://nextjs-shop.herokuapp.com/api/phones'

  const getResource = async (url) => {
    const res = await fetch(`${_apiBase}${url}`)

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`)
    }
    return await res.json()
  }

  const getPhones = () => {
    return getResource('')
  }

  const getPhone = (id) => {
    return getResource(`?id=${id}`)
  }

  return {
    getPhones,
    getPhone,
  }
}
