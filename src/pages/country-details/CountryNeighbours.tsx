import { DataResult } from '@/components/DataResult'
import { CountryNode } from '@/gql/graphql'
import { gql, useQuery } from '@apollo/client'

const GET_NEIGHBOURS = gql(`
  query GetNeighbours($subregionIcontains: String) {
    countries(subregion_Icontains: $subregionIcontains) {
      edges {
        node {
          name
        }
      }
    }
  }
`)

export const CountryNeighbours: React.FC<{ subregion: string }> = ({ subregion }) => {
  const { loading, error, data } = useQuery(GET_NEIGHBOURS, { variables: { subregionIcontains: subregion } })

  if (!subregion) {
    return <p>No neighbours.</p>
  }

  return (
    <DataResult loading={loading} error={error} data={data}>
      <p>{data?.countries?.edges?.reduce((result: string, { node }: { node: CountryNode }) => result + `${result ? ', ' : ''}${node?.name}`, '')}</p>
    </DataResult>
  )
}