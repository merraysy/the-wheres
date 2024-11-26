import { useLocation, useNavigate, useSearchParams } from 'react-router'
import { useDebouncedCallback } from 'use-debounce'
import { Input } from '@/components/ui/input'

export const Q_PARAM = 'q'

export const Search: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
    
  const handleInputChange = useDebouncedCallback((event) => {
    const params = new URLSearchParams(searchParams)
    const value = event.target.value
    
    if (value) {
      params.set(Q_PARAM, value)
    } else {
      params.delete(Q_PARAM)
    }
    
    navigate(`${location.pathname}?${params.toString()}`)
  }, 300)
      
  return (
    <search className="flex-1 max-sm:w-full">
      <Input
        placeholder="Search for countries!"
        defaultValue={searchParams.get(Q_PARAM) || ''}
        onChange={handleInputChange}
      />
    </search>
  )
}