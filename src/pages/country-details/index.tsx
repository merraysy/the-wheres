import { useCallback } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router'
import routes from '@/routes'
import { gql, useQuery } from '@apollo/client'
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from '@/components/ui/drawer'
import { DataResult } from '@/components/DataResult'
import { CurrencyNode } from '@/gql/graphql'
import { DataItem } from '../common/DataItem'
import { CountryWeather } from './CountryWeather'
import { CountryNeighbours } from './CountryNeighbours'
import { Card } from '@/components/ui/card'

const GET_COUNTRY = gql(`
  query GetCountry($countryId: ID!) {
    country(id: $countryId) {
      id
      dateAdded
      dateModified
      active
      name
      topLevelDomain
      alpha2Code
      alpha3Code
      callingCodes
      capital
      altSpellings
      region
      subregion
      population
      latLng
      demonym
      area
      gini
      timezones
      borders
      nativeName
      numericCode
      currencies {
        edges {
          node {
            symbol
            name
            id
            dateModified
            dateAdded
            code
            active
          }
        }
      }
      languages {
        edges {
          node {
            dateAdded
            dateModified
            active
            id
            iso6391
            iso6392
            name
            nativeName
          }
        }
      }
      translations
      flag
      regionalBlocs {
        edges {
          node {
            dateAdded
            dateModified
            active
            id
            acronym
            name
            otherAcronyms
            otherNames
          }
          cursor
        }
      }
      cioc
    }
  }
`)

export const CountryDetails: React.FC = () => {
  const navigate = useNavigate()
  const params = useParams<{ countryId?: string }>()
  const [searchParams] = useSearchParams()
  const { loading, error, data } = useQuery(GET_COUNTRY, { variables: { countryId: params.countryId } })
  const handleClose = useCallback(() => {
    navigate(`${routes.main}?${searchParams.toString()}`)
  }, [navigate, searchParams])

  return (
    <Drawer onClose={handleClose} defaultOpen>
      <DataResult loading={loading} error={error} data={data?.country}>
        <DrawerContent className="flex flex-col items-center p-3">
          <div className="flex flex-col gap-3 max-w-lg py-3">
            <DrawerHeader className="flex flex-col items-center sm:text-center">
              <DrawerTitle className="text-4xl font-bold">{data?.country?.name} / {data?.country?.nativeName}</DrawerTitle>
              <DrawerDescription className="mb-3">Here are more details about this country.</DrawerDescription>
              <Card className="max-w-36 p-3">
                <img src={data?.country.flag || ''} alt="Flag" />
              </Card>
            </DrawerHeader>
            <div>
              <DrawerTitle className="text-xl font-bold">Metrics</DrawerTitle>
              <div className="flex flex-wrap gap-1 gap-x-3">
                <DataItem prop="capital" value={data?.country?.capital} />
                <DataItem prop="region" value={data?.country?.region} />
                <DataItem prop="subregion" value={data?.country?.subregion} />
                <DataItem prop="population" value={data?.country?.population} />
                <DataItem prop="timezones" value={data?.country?.timezones} />
                <DataItem prop="callingCodes" value={data?.country?.callingCodes} />
                <DataItem prop="currencies" value={data?.country?.currencies?.edges?.map(({ node }: { node: CurrencyNode }) => `${node.name} (${node.symbol})`)?.join(', ')} />
              </div>
            </div>
            <div>
              <DrawerTitle className="text-xl font-bold">Neighbour Countries</DrawerTitle>
              <CountryNeighbours subregion={data?.country?.subregion} />
            </div>
            <div >
              <DrawerTitle className="text-xl font-bold">Weather</DrawerTitle>
              <CountryWeather country={data?.country} />
            </div>
          </div>
        </DrawerContent>
      </DataResult>
    </Drawer>
  )
}