interface Settings extends RequestInit {
  url: string;
}

export type APIRequestResponse<T = unknown> = Promise<{ success: boolean; data?: T; error?: Error | undefined }>

export type APIRequest<T> = (settings: Settings) => APIRequestResponse<T>

// @ts-expect-error catch error is unknown
export const request: APIRequest = async ({ url, method = 'GET', ...rest }) => {
  try {
    const response = await fetch(url, {
      method,
      ...rest
    })
    const data = await response.json()
    
    return {
      success: true,
      data,
    }
  } catch (error) {
    return {
      success: false,
      error,
    }
  }
}