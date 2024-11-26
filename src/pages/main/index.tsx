import { Layout } from '@/components/Layout'
import { Logo } from '@/components/Logo'
import { gql, useQuery } from '@apollo/client'
import { Outlet, useNavigate, useSearchParams } from 'react-router'
import type { CountryNode, LanguageNode } from '@/gql/graphql'
import routes from '@/routes'
import { DataResult } from '@/components/DataResult'
import { Q_PARAM, Search } from './Search'
import { Filters, LANGUAGE_PARAM, REGION_PARAM } from './Filters'
import { CountryCard } from './CountryCard'
import { useMemo } from 'react'
import { Sort, SORT_PARAM } from './Sort'

const SEARCH_COUNTRIES = gql(`
  query CountriesSearch($nameIcontains: String, $region: String) {
    countries(name_Icontains: $nameIcontains, region: $region) {
      edges {
        node {
          name
          capital
          flag
          id
          region
          nativeName
          subregion
          population
          area
          languages {
            edges {
              node {
                name
                iso6392
                id
              }
            }
          }
        }
      }
    }
  }
`)

export const Main: React.FC = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { loading, error, data } = useQuery(SEARCH_COUNTRIES, { variables: { nameIcontains: searchParams.get(Q_PARAM), region: searchParams.get(REGION_PARAM) } })

  const filteredData = useMemo(() => {
    const languageISO = searchParams.get(LANGUAGE_PARAM)

    if (!data || !data?.countries) return data

    if (languageISO) {
      return data.countries.edges.filter(({ node: country }: { node: CountryNode }) => {
        let visible = true;

        // @ts-expect-error nesting
        if (languageISO && !country.languages.edges.some(({ node }: { node: LanguageNode }) => {
          return languageISO === node.iso6392
        })) {
          visible = false
        }

        return visible
      })
    }

    return data?.countries?.edges
  }, [data, searchParams])

  const sortedData = useMemo(() => {
    const sort = searchParams.get(SORT_PARAM) as keyof Pick<CountryNode, 'name' | 'area' | 'population'> 

    if (!sort || !filteredData || !filteredData?.length) return filteredData

    return [...filteredData].sort((a, b) => {
      return a?.node?.[sort] > b?.node?.[sort] ? -1 : 1
    })
  }, [filteredData, searchParams])

  return (
    <Layout>
      <section aria-roledescription="Search" className="flex items-center gap-6 mb-2 max-w-screen-md max-sm:flex-col">
        <Logo className="cursor-pointer" onClick={() => {
          navigate(routes.main, { state: {} })
        }} />
        <Search />
      </section>
      <section className="flex justify-end gap-1 mb-6 max-w-screen-md max-sm:flex-col">
        <Filters />
        <Sort />
      </section>
      <section className="flex flex-col flex-1 gap-6 max-w-screen-md">
        <DataResult loading={loading} error={error} data={data}>
          {sortedData?.map((edge: { node: CountryNode }) => <CountryCard key={edge.node.id} country={edge.node} />)}
        </DataResult>
      </section>
      <Outlet />
    </Layout>
  )
}