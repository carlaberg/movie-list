import React, { useState, useEffect } from 'react'

export const useApiData = (url) => {
  const [data, setData] = useState({
    error: null,
    isLoading: false,
    data: []
  })

  useEffect(() => {

    try {
      setData({...data, isLoading: true})
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setData({
            error: null,
            isLoading: false,
            data
          })
        })
      
    } catch (error) {
      console.log(error)
      setData({
        ...data,
        error: {
          message: 'Something went wrrong while loading data'
        },
        isLoading: false
      })
    }    

  }, [])

  return data
}