export default {
  main: '/',
  country: (countryId?: string) => `/country/${countryId || ':countryId'}/details`
}