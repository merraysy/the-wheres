import { DataResult } from '@/components/DataResult'
import type { CountryNode } from '@/gql/graphql'
import { useAPI } from '@/hooks/useAPI'
import { request } from '@/utils/api'
import { useCallback } from 'react'
import { DataItem } from '../common/DataItem'
import { addCelsius } from '@/utils/general'

interface WeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number
  },
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number
  };
  clouds: {
    all: number
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

/**
 * NOTE: these should normally be stored in .env
 * files, they are here for the sake of simplicity
 */
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'ceb82ade8a38716700e5e3a0cd6b6efa'

const contructEndpoint = (lat: number, long: number) => {
  const url = new URL(API_BASE_URL)
  const searchParams = new URLSearchParams()

  searchParams.set('lat', lat.toString())
  searchParams.set('lon', long.toString())
  searchParams.set('units', 'metric')
  searchParams.set('appid', API_KEY)

  return `${url.href}?${searchParams.toString()}`
}

export const CountryWeather: React.FC<{ country: CountryNode }> = ({ country }) => {
  const fetchData = useCallback(async () => {
    const [lat, long] = country?.latLng || [0, 0]

    if (!lat && !long) return

    const url = contructEndpoint(lat, long)

    const response = await request({ url })

    return response
  }, [country?.latLng])

  const { loading, error, data } = useAPI<WeatherData>(fetchData)

  return (
    <DataResult loading={loading} error={error} data={data}>
      <div className="flex flex-col gap-3">
        {data?.weather.map((obj) => (
          <div key={obj.id} className="flex gap-3">
            <img src={`https://openweathermap.org/img/wn/${obj.icon}.png`} alt="Weather icon" />
            <div>
              <p>{obj.main}</p>
              <p>{obj.description}</p>
            </div>
          </div>
        ))}
        <div className="flex flex-col">
          <DataItem prop="temp" value={addCelsius(data?.main?.temp)} />
          <DataItem prop="feels_like" value={addCelsius(data?.main?.feels_like)} />
          <DataItem prop="humidity" value={data?.main?.humidity} />
          <DataItem prop="pressure" value={data?.main?.pressure} />
        </div>
      </div>
    </DataResult>
  )
}