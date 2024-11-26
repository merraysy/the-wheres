import { useEffect, useState } from 'react'
import type { APIRequestResponse } from '@/utils/api'

export function useAPI<T>(request: () => APIRequestResponse<T>): ({ loading: boolean; error?: Error; data?: T }) {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | undefined>()
  const [data, setData] = useState<T>()
    
  useEffect(() => {
    const requestAsync = async () => {
      setLoading(true)

      const response = await request()

      setLoading(false)
        
      if (response.success) {
        setData(response.data)
      } else {
        setError(response.error)
      }
    }

    requestAsync()
  }, [request])

  return {
    loading,
    error,
    data,
  }
}