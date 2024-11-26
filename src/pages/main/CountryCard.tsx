import { useCallback } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { useNavigate, useSearchParams } from 'react-router'
import routes from '@/routes'
import type { CountryNode } from '@/gql/graphql'
import { DataItem } from '../common/DataItem'

export const CountryCard: React.FC<{ country: CountryNode }> = ({ country }) => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const handleClick = useCallback(() => {
    navigate(`${routes.country(country.id)}?${searchParams.toString()}`)
  }, [navigate, country.id, searchParams])

  return (
    <Card className="cursor-pointer hover:bg-slate-50 max-sm:text-center" onClick={handleClick}>
      <CardHeader>
        <h1 className="font-bold text-xl">{country.name} / {country.nativeName}</h1>
      </CardHeader>
      <CardContent className="flex justify-start gap-6 max-sm:flex-col max-sm:items-center">
        <Card className="p-3">
          <img src={country.flag || ''} alt="Flag" className="max-w-32" />
        </Card>
        <div className="flex flex-1 flex-col items-start gap-1 max-sm:items-center">
          <DataItem prop="capital" value={country?.capital} />
          <DataItem prop="region" value={country?.region} />
          <DataItem prop="subregion" value={country?.subregion} />
        </div>
      </CardContent>
    </Card>
  )
}