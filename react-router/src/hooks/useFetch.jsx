import { useState, useEffect } from "react"

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [config, setConfig] = useState(null)
  const [method, setMethod] = useState(null)
  const [callFetch, setCallFetch] = useState(false)
  const [error, setError] = useState(false)
  const [itemId, setItemId] = useState(null)

  const httpConfig = (data, method) => {
    if (method === 'POST') {
      setConfig({
        method: 'POST',
        Headers: {
          'Content-Type': 'aplication/json'
        },
        body: JSON.stringify(data)
      })
      setMethod('POST')
    } else if (method === 'DELETE') {
      setConfig({
        method: 'DELETE',
        Headers: {
          'Content-Type': 'aplication/json'
        }
      })
      setMethod('DELETE')
      setItemId(data)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url)
        const json = await res.json()

        setData(json)
        setMethod(null)
        setError(null)
      } catch (error) {
        console.log(error.message)
        setError('Houve um erro ao carregar os dados!')
      }
    }
    fetchData()
  }, [url, callFetch])

  useEffect(() => {
    const httpRequest = async () => {
      if (method === 'POST') {
        let fetchOptions = [url, config]
        const res = await fetch(...fetchOptions)
        const json = await res.json()
        setCallFetch(json)
      } else if (method === 'DELETE') {
        const deleteUrl = `${url}/${itemId}`
        const res = await fetch(deleteUrl, config)
        const json = await res.json()
        setCallFetch(json)
      }
    }
    httpRequest()
  }, [config, itemId, method, url])

  console.log(config)

  return { data, httpConfig, error }

}