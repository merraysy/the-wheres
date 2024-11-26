import type { QueryResult } from '@apollo/client'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertCircle } from 'lucide-react'

export const DataResult: React.FC<React.PropsWithChildren & { loading: boolean, error?: Error, data: QueryResult['data'] }> = ({ loading, error, data, children }) => {
  if (loading) {
    return 'Loading...'
  }
    
  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>
          Oops, something wrong...
        </AlertTitle>
        <AlertDescription>
          {error.message}
        </AlertDescription>
      </Alert>
    )
  }
    
  if (!data) {
    return 'No data'
  }

  return children
}