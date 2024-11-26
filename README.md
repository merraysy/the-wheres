# The Wheres

This is a toy project I built specifically for Crionet :rocket:

## How to run

- Clone the the project `git clone ${repo}`
- I use `pnpm` for more info [pnpm/pnpm](https://github.com/pnpm/pnpm), so run `pnpm i`
- Then either run the project localy like this `pnpm dev` or
- Run `pnpm build` and serve the `dist` folder folder, you can use [http/party/http-server](https://github.com/http-party/http-server) like so `http-server ./dist`

## Explaining the architecture

First, it's worth mentioning that this was a very good (and first) opportunity for me to play with [graphql/graphql-js](https://github.com/graphql/graphql-js) cause I've never used it in the past, so thank you for that.

As for the architecture, let's do it in bullet points:

- For the build system, obvious choice [vitejs](https://github.com/vitejs)
  - Very fast, almost 0 config, very good developer experience.
- Folder structure
  - Very simple page focused structure, `pages, components,` easily scalable too in case of growth

  ```ts
    | `assets`
    | `components` // shared components and ui
      | `ui` // more on this in the next point
      | `...`
    | `pages` // pages and specific components
      | `common` // common components but not enough to go to `componnets/shared`
    | `hooks`
    | `utils`
    | _rootFiles_ `index.tsx`, `App.tsx`...
  ```

- I used [shadcn-ui/ui](https://github.com/shadcn-ui/ui) as a ui library, cause I want to own the code base and avoid encapsulated props and styles (very long topic)
- Used [tailwindlabs/tailwindcss](https://github.com/tailwindlabs/tailwindcss) for styling, pretty good developer experience, might now work for every project though (another long topic)
- and of course `eslint` with `autofix` on save (or `pre-commit`)

I will as well touch on a quick coding decision I made regarding loading and error handling:

This component `components/DataResult.tsx` "Intercepts" all the graphql requests and handles loading, success and errors like so:

```ts
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
```

I created a hook for the REST api part to do something similar:

```ts
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
```

I also created a wrapper on top of `fetch` for more robust error handling

```ts
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
```

## Challenges faced

Most challenges I faced were related to Graphql, as somebody who never used Graphql, it was a bit challenging to be get up and running with writing queries and stuff, things got smoother when I discovered [apollographql/apollo-client](https://github.com/apollographql/apollo-client) though.

More challenges also related to Graphql, is when I tried to filter/sort the data, I finally discovered that the API I used haven't all filtering/sorting params set for my use cases...

## If I had more time

- I like organized code, I would install more tools to clean up imports (sort them), clean up long lines without using `prettier` (long story) and use .env files
- I would structure the API related code a bit differently
- Routes also need improvements
- styling also needs more care

Well for a project made in a day or so, of course everyting seems to lack something...
