/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: { input: any; output: any; }
  /** The `Decimal` scalar type represents a python Decimal. */
  Decimal: { input: any; output: any; }
  /**
   * Allows use of a JSON String for input / output from the GraphQL schema.
   *
   * Use of this type is *not recommended* as you lose the benefits of having a defined, static
   * schema (one of the key benefits of GraphQL).
   */
  JSONString: { input: any; output: any; }
};

export type CountryNode = Node & {
  __typename?: 'CountryNode';
  active: Scalars['Boolean']['output'];
  alpha2Code?: Maybe<Scalars['String']['output']>;
  alpha3Code?: Maybe<Scalars['String']['output']>;
  altSpellings?: Maybe<Array<Scalars['String']['output']>>;
  area?: Maybe<Scalars['Int']['output']>;
  borders?: Maybe<Array<Scalars['String']['output']>>;
  callingCodes?: Maybe<Array<Scalars['String']['output']>>;
  capital?: Maybe<Scalars['String']['output']>;
  cioc?: Maybe<Scalars['String']['output']>;
  currencies: CurrencyNodeConnection;
  dateAdded?: Maybe<Scalars['DateTime']['output']>;
  dateModified: Scalars['DateTime']['output'];
  demonym?: Maybe<Scalars['String']['output']>;
  flag?: Maybe<Scalars['String']['output']>;
  gini?: Maybe<Scalars['Decimal']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  languages: LanguageNodeConnection;
  latLng?: Maybe<Array<Scalars['Decimal']['output']>>;
  name: Scalars['String']['output'];
  nativeName?: Maybe<Scalars['String']['output']>;
  numericCode?: Maybe<Scalars['String']['output']>;
  population?: Maybe<Scalars['Int']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  regionalBlocs: RegionalBlocNodeConnection;
  subregion?: Maybe<Scalars['String']['output']>;
  timezones?: Maybe<Array<Scalars['String']['output']>>;
  topLevelDomain?: Maybe<Array<Scalars['String']['output']>>;
  translations?: Maybe<Scalars['JSONString']['output']>;
};


export type CountryNodeCurrenciesArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  code_Icontains?: InputMaybe<Scalars['String']['input']>;
  code_Istartswith?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_Icontains?: InputMaybe<Scalars['String']['input']>;
  symbol_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type CountryNodeLanguagesArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  iso6391?: InputMaybe<Scalars['String']['input']>;
  iso6391_Icontains?: InputMaybe<Scalars['String']['input']>;
  iso6391_Istartswith?: InputMaybe<Scalars['String']['input']>;
  iso6392?: InputMaybe<Scalars['String']['input']>;
  iso6392_Icontains?: InputMaybe<Scalars['String']['input']>;
  iso6392_Istartswith?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  nativeName?: InputMaybe<Scalars['String']['input']>;
  nativeName_Icontains?: InputMaybe<Scalars['String']['input']>;
  nativeName_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type CountryNodeRegionalBlocsArgs = {
  acronym?: InputMaybe<Scalars['String']['input']>;
  acronym_Icontains?: InputMaybe<Scalars['String']['input']>;
  acronym_Istartswith?: InputMaybe<Scalars['String']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type CountryNodeConnection = {
  __typename?: 'CountryNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CountryNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `CountryNode` and its cursor. */
export type CountryNodeEdge = {
  __typename?: 'CountryNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<CountryNode>;
};

export type CurrencyNode = Node & {
  __typename?: 'CurrencyNode';
  active: Scalars['Boolean']['output'];
  code?: Maybe<Scalars['String']['output']>;
  countrySet: CountryNodeConnection;
  dateAdded?: Maybe<Scalars['DateTime']['output']>;
  dateModified: Scalars['DateTime']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
};


export type CurrencyNodeCountrySetArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  alpha2Code?: InputMaybe<Scalars['String']['input']>;
  alpha2Code_Icontains?: InputMaybe<Scalars['String']['input']>;
  alpha2Code_Istartswith?: InputMaybe<Scalars['String']['input']>;
  alpha3Code?: InputMaybe<Scalars['String']['input']>;
  alpha3Code_Icontains?: InputMaybe<Scalars['String']['input']>;
  alpha3Code_Istartswith?: InputMaybe<Scalars['String']['input']>;
  area?: InputMaybe<Scalars['Int']['input']>;
  area_Gte?: InputMaybe<Scalars['Int']['input']>;
  area_Lte?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  capital?: InputMaybe<Scalars['String']['input']>;
  capital_Icontains?: InputMaybe<Scalars['String']['input']>;
  capital_Istartswith?: InputMaybe<Scalars['String']['input']>;
  cioc?: InputMaybe<Scalars['String']['input']>;
  cioc_Icontains?: InputMaybe<Scalars['String']['input']>;
  cioc_Istartswith?: InputMaybe<Scalars['String']['input']>;
  demonym?: InputMaybe<Scalars['String']['input']>;
  demonym_Icontains?: InputMaybe<Scalars['String']['input']>;
  demonym_Istartswith?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  gini?: InputMaybe<Scalars['Float']['input']>;
  gini_Gte?: InputMaybe<Scalars['Float']['input']>;
  gini_Lte?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  nativeName?: InputMaybe<Scalars['String']['input']>;
  nativeName_Icontains?: InputMaybe<Scalars['String']['input']>;
  nativeName_Istartswith?: InputMaybe<Scalars['String']['input']>;
  numericCode?: InputMaybe<Scalars['String']['input']>;
  numericCode_Icontains?: InputMaybe<Scalars['String']['input']>;
  numericCode_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  population?: InputMaybe<Scalars['Int']['input']>;
  population_Gte?: InputMaybe<Scalars['Int']['input']>;
  population_Lte?: InputMaybe<Scalars['Int']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  region_Icontains?: InputMaybe<Scalars['String']['input']>;
  region_Istartswith?: InputMaybe<Scalars['String']['input']>;
  subregion?: InputMaybe<Scalars['String']['input']>;
  subregion_Icontains?: InputMaybe<Scalars['String']['input']>;
  subregion_Istartswith?: InputMaybe<Scalars['String']['input']>;
};

export type CurrencyNodeConnection = {
  __typename?: 'CurrencyNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CurrencyNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `CurrencyNode` and its cursor. */
export type CurrencyNodeEdge = {
  __typename?: 'CurrencyNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<CurrencyNode>;
};

export type LanguageNode = Node & {
  __typename?: 'LanguageNode';
  active: Scalars['Boolean']['output'];
  countrySet: CountryNodeConnection;
  dateAdded?: Maybe<Scalars['DateTime']['output']>;
  dateModified: Scalars['DateTime']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  iso6391?: Maybe<Scalars['String']['output']>;
  iso6392?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  nativeName?: Maybe<Scalars['String']['output']>;
};


export type LanguageNodeCountrySetArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  alpha2Code?: InputMaybe<Scalars['String']['input']>;
  alpha2Code_Icontains?: InputMaybe<Scalars['String']['input']>;
  alpha2Code_Istartswith?: InputMaybe<Scalars['String']['input']>;
  alpha3Code?: InputMaybe<Scalars['String']['input']>;
  alpha3Code_Icontains?: InputMaybe<Scalars['String']['input']>;
  alpha3Code_Istartswith?: InputMaybe<Scalars['String']['input']>;
  area?: InputMaybe<Scalars['Int']['input']>;
  area_Gte?: InputMaybe<Scalars['Int']['input']>;
  area_Lte?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  capital?: InputMaybe<Scalars['String']['input']>;
  capital_Icontains?: InputMaybe<Scalars['String']['input']>;
  capital_Istartswith?: InputMaybe<Scalars['String']['input']>;
  cioc?: InputMaybe<Scalars['String']['input']>;
  cioc_Icontains?: InputMaybe<Scalars['String']['input']>;
  cioc_Istartswith?: InputMaybe<Scalars['String']['input']>;
  demonym?: InputMaybe<Scalars['String']['input']>;
  demonym_Icontains?: InputMaybe<Scalars['String']['input']>;
  demonym_Istartswith?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  gini?: InputMaybe<Scalars['Float']['input']>;
  gini_Gte?: InputMaybe<Scalars['Float']['input']>;
  gini_Lte?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  nativeName?: InputMaybe<Scalars['String']['input']>;
  nativeName_Icontains?: InputMaybe<Scalars['String']['input']>;
  nativeName_Istartswith?: InputMaybe<Scalars['String']['input']>;
  numericCode?: InputMaybe<Scalars['String']['input']>;
  numericCode_Icontains?: InputMaybe<Scalars['String']['input']>;
  numericCode_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  population?: InputMaybe<Scalars['Int']['input']>;
  population_Gte?: InputMaybe<Scalars['Int']['input']>;
  population_Lte?: InputMaybe<Scalars['Int']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  region_Icontains?: InputMaybe<Scalars['String']['input']>;
  region_Istartswith?: InputMaybe<Scalars['String']['input']>;
  subregion?: InputMaybe<Scalars['String']['input']>;
  subregion_Icontains?: InputMaybe<Scalars['String']['input']>;
  subregion_Istartswith?: InputMaybe<Scalars['String']['input']>;
};

export type LanguageNodeConnection = {
  __typename?: 'LanguageNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<LanguageNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `LanguageNode` and its cursor. */
export type LanguageNodeEdge = {
  __typename?: 'LanguageNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<LanguageNode>;
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID']['output'];
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  countries?: Maybe<CountryNodeConnection>;
  /** The ID of the object */
  country?: Maybe<CountryNode>;
  currencies?: Maybe<CurrencyNodeConnection>;
  /** The ID of the object */
  currency?: Maybe<CurrencyNode>;
  /** The ID of the object */
  language?: Maybe<LanguageNode>;
  languages?: Maybe<LanguageNodeConnection>;
  /** The ID of the object */
  regionalBloc?: Maybe<RegionalBlocNode>;
  regionalBlocs?: Maybe<RegionalBlocNodeConnection>;
};


export type QueryCountriesArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  alpha2Code?: InputMaybe<Scalars['String']['input']>;
  alpha2Code_Icontains?: InputMaybe<Scalars['String']['input']>;
  alpha2Code_Istartswith?: InputMaybe<Scalars['String']['input']>;
  alpha3Code?: InputMaybe<Scalars['String']['input']>;
  alpha3Code_Icontains?: InputMaybe<Scalars['String']['input']>;
  alpha3Code_Istartswith?: InputMaybe<Scalars['String']['input']>;
  area?: InputMaybe<Scalars['Int']['input']>;
  area_Gte?: InputMaybe<Scalars['Int']['input']>;
  area_Lte?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  capital?: InputMaybe<Scalars['String']['input']>;
  capital_Icontains?: InputMaybe<Scalars['String']['input']>;
  capital_Istartswith?: InputMaybe<Scalars['String']['input']>;
  cioc?: InputMaybe<Scalars['String']['input']>;
  cioc_Icontains?: InputMaybe<Scalars['String']['input']>;
  cioc_Istartswith?: InputMaybe<Scalars['String']['input']>;
  demonym?: InputMaybe<Scalars['String']['input']>;
  demonym_Icontains?: InputMaybe<Scalars['String']['input']>;
  demonym_Istartswith?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  gini?: InputMaybe<Scalars['Float']['input']>;
  gini_Gte?: InputMaybe<Scalars['Float']['input']>;
  gini_Lte?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  nativeName?: InputMaybe<Scalars['String']['input']>;
  nativeName_Icontains?: InputMaybe<Scalars['String']['input']>;
  nativeName_Istartswith?: InputMaybe<Scalars['String']['input']>;
  numericCode?: InputMaybe<Scalars['String']['input']>;
  numericCode_Icontains?: InputMaybe<Scalars['String']['input']>;
  numericCode_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  population?: InputMaybe<Scalars['Int']['input']>;
  population_Gte?: InputMaybe<Scalars['Int']['input']>;
  population_Lte?: InputMaybe<Scalars['Int']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  region_Icontains?: InputMaybe<Scalars['String']['input']>;
  region_Istartswith?: InputMaybe<Scalars['String']['input']>;
  subregion?: InputMaybe<Scalars['String']['input']>;
  subregion_Icontains?: InputMaybe<Scalars['String']['input']>;
  subregion_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCountryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCurrenciesArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  code_Icontains?: InputMaybe<Scalars['String']['input']>;
  code_Istartswith?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_Icontains?: InputMaybe<Scalars['String']['input']>;
  symbol_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCurrencyArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLanguageArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLanguagesArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  iso6391?: InputMaybe<Scalars['String']['input']>;
  iso6391_Icontains?: InputMaybe<Scalars['String']['input']>;
  iso6391_Istartswith?: InputMaybe<Scalars['String']['input']>;
  iso6392?: InputMaybe<Scalars['String']['input']>;
  iso6392_Icontains?: InputMaybe<Scalars['String']['input']>;
  iso6392_Istartswith?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  nativeName?: InputMaybe<Scalars['String']['input']>;
  nativeName_Icontains?: InputMaybe<Scalars['String']['input']>;
  nativeName_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRegionalBlocArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRegionalBlocsArgs = {
  acronym?: InputMaybe<Scalars['String']['input']>;
  acronym_Icontains?: InputMaybe<Scalars['String']['input']>;
  acronym_Istartswith?: InputMaybe<Scalars['String']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type RegionalBlocNode = Node & {
  __typename?: 'RegionalBlocNode';
  acronym?: Maybe<Scalars['String']['output']>;
  active: Scalars['Boolean']['output'];
  countrySet: CountryNodeConnection;
  dateAdded?: Maybe<Scalars['DateTime']['output']>;
  dateModified: Scalars['DateTime']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  otherAcronyms: Array<Scalars['String']['output']>;
  otherNames: Array<Scalars['String']['output']>;
};


export type RegionalBlocNodeCountrySetArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  alpha2Code?: InputMaybe<Scalars['String']['input']>;
  alpha2Code_Icontains?: InputMaybe<Scalars['String']['input']>;
  alpha2Code_Istartswith?: InputMaybe<Scalars['String']['input']>;
  alpha3Code?: InputMaybe<Scalars['String']['input']>;
  alpha3Code_Icontains?: InputMaybe<Scalars['String']['input']>;
  alpha3Code_Istartswith?: InputMaybe<Scalars['String']['input']>;
  area?: InputMaybe<Scalars['Int']['input']>;
  area_Gte?: InputMaybe<Scalars['Int']['input']>;
  area_Lte?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  capital?: InputMaybe<Scalars['String']['input']>;
  capital_Icontains?: InputMaybe<Scalars['String']['input']>;
  capital_Istartswith?: InputMaybe<Scalars['String']['input']>;
  cioc?: InputMaybe<Scalars['String']['input']>;
  cioc_Icontains?: InputMaybe<Scalars['String']['input']>;
  cioc_Istartswith?: InputMaybe<Scalars['String']['input']>;
  demonym?: InputMaybe<Scalars['String']['input']>;
  demonym_Icontains?: InputMaybe<Scalars['String']['input']>;
  demonym_Istartswith?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  gini?: InputMaybe<Scalars['Float']['input']>;
  gini_Gte?: InputMaybe<Scalars['Float']['input']>;
  gini_Lte?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  nativeName?: InputMaybe<Scalars['String']['input']>;
  nativeName_Icontains?: InputMaybe<Scalars['String']['input']>;
  nativeName_Istartswith?: InputMaybe<Scalars['String']['input']>;
  numericCode?: InputMaybe<Scalars['String']['input']>;
  numericCode_Icontains?: InputMaybe<Scalars['String']['input']>;
  numericCode_Istartswith?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  population?: InputMaybe<Scalars['Int']['input']>;
  population_Gte?: InputMaybe<Scalars['Int']['input']>;
  population_Lte?: InputMaybe<Scalars['Int']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  region_Icontains?: InputMaybe<Scalars['String']['input']>;
  region_Istartswith?: InputMaybe<Scalars['String']['input']>;
  subregion?: InputMaybe<Scalars['String']['input']>;
  subregion_Icontains?: InputMaybe<Scalars['String']['input']>;
  subregion_Istartswith?: InputMaybe<Scalars['String']['input']>;
};

export type RegionalBlocNodeConnection = {
  __typename?: 'RegionalBlocNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<RegionalBlocNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `RegionalBlocNode` and its cursor. */
export type RegionalBlocNodeEdge = {
  __typename?: 'RegionalBlocNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<RegionalBlocNode>;
};

export type GetNeighboursQueryVariables = Exact<{
  subregionIcontains?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetNeighboursQuery = { __typename?: 'Query', countries?: { __typename?: 'CountryNodeConnection', edges: Array<{ __typename?: 'CountryNodeEdge', node?: { __typename?: 'CountryNode', name: string } | null } | null> } | null };

export type GetCountryQueryVariables = Exact<{
  countryId: Scalars['ID']['input'];
}>;


export type GetCountryQuery = { __typename?: 'Query', country?: { __typename?: 'CountryNode', id: string, dateAdded?: any | null, dateModified: any, active: boolean, name: string, topLevelDomain?: Array<string> | null, alpha2Code?: string | null, alpha3Code?: string | null, callingCodes?: Array<string> | null, capital?: string | null, altSpellings?: Array<string> | null, region?: string | null, subregion?: string | null, population?: number | null, latLng?: Array<any> | null, demonym?: string | null, area?: number | null, gini?: any | null, timezones?: Array<string> | null, borders?: Array<string> | null, nativeName?: string | null, numericCode?: string | null, translations?: any | null, flag?: string | null, cioc?: string | null, currencies: { __typename?: 'CurrencyNodeConnection', edges: Array<{ __typename?: 'CurrencyNodeEdge', node?: { __typename?: 'CurrencyNode', symbol?: string | null, name?: string | null, id: string, dateModified: any, dateAdded?: any | null, code?: string | null, active: boolean } | null } | null> }, languages: { __typename?: 'LanguageNodeConnection', edges: Array<{ __typename?: 'LanguageNodeEdge', node?: { __typename?: 'LanguageNode', dateAdded?: any | null, dateModified: any, active: boolean, id: string, iso6391?: string | null, iso6392?: string | null, name: string, nativeName?: string | null } | null } | null> }, regionalBlocs: { __typename?: 'RegionalBlocNodeConnection', edges: Array<{ __typename?: 'RegionalBlocNodeEdge', cursor: string, node?: { __typename?: 'RegionalBlocNode', dateAdded?: any | null, dateModified: any, active: boolean, id: string, acronym?: string | null, name: string, otherAcronyms: Array<string>, otherNames: Array<string> } | null } | null> } } | null };

export type CountriesSearchQueryVariables = Exact<{
  nameIcontains?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
}>;


export type CountriesSearchQuery = { __typename?: 'Query', countries?: { __typename?: 'CountryNodeConnection', edges: Array<{ __typename?: 'CountryNodeEdge', node?: { __typename?: 'CountryNode', name: string, capital?: string | null, flag?: string | null, id: string, region?: string | null, nativeName?: string | null, subregion?: string | null, population?: number | null, area?: number | null, languages: { __typename?: 'LanguageNodeConnection', edges: Array<{ __typename?: 'LanguageNodeEdge', node?: { __typename?: 'LanguageNode', name: string, iso6392?: string | null, id: string } | null } | null> } } | null } | null> } | null };


export const GetNeighboursDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNeighbours"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"subregionIcontains"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"subregion_Icontains"},"value":{"kind":"Variable","name":{"kind":"Name","value":"subregionIcontains"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetNeighboursQuery, GetNeighboursQueryVariables>;
export const GetCountryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCountry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"countryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"country"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"countryId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dateAdded"}},{"kind":"Field","name":{"kind":"Name","value":"dateModified"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"topLevelDomain"}},{"kind":"Field","name":{"kind":"Name","value":"alpha2Code"}},{"kind":"Field","name":{"kind":"Name","value":"alpha3Code"}},{"kind":"Field","name":{"kind":"Name","value":"callingCodes"}},{"kind":"Field","name":{"kind":"Name","value":"capital"}},{"kind":"Field","name":{"kind":"Name","value":"altSpellings"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"subregion"}},{"kind":"Field","name":{"kind":"Name","value":"population"}},{"kind":"Field","name":{"kind":"Name","value":"latLng"}},{"kind":"Field","name":{"kind":"Name","value":"demonym"}},{"kind":"Field","name":{"kind":"Name","value":"area"}},{"kind":"Field","name":{"kind":"Name","value":"gini"}},{"kind":"Field","name":{"kind":"Name","value":"timezones"}},{"kind":"Field","name":{"kind":"Name","value":"borders"}},{"kind":"Field","name":{"kind":"Name","value":"nativeName"}},{"kind":"Field","name":{"kind":"Name","value":"numericCode"}},{"kind":"Field","name":{"kind":"Name","value":"currencies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dateModified"}},{"kind":"Field","name":{"kind":"Name","value":"dateAdded"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"active"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dateAdded"}},{"kind":"Field","name":{"kind":"Name","value":"dateModified"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"iso6391"}},{"kind":"Field","name":{"kind":"Name","value":"iso6392"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nativeName"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"}},{"kind":"Field","name":{"kind":"Name","value":"flag"}},{"kind":"Field","name":{"kind":"Name","value":"regionalBlocs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dateAdded"}},{"kind":"Field","name":{"kind":"Name","value":"dateModified"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"acronym"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"otherAcronyms"}},{"kind":"Field","name":{"kind":"Name","value":"otherNames"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cioc"}}]}}]}}]} as unknown as DocumentNode<GetCountryQuery, GetCountryQueryVariables>;
export const CountriesSearchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CountriesSearch"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nameIcontains"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"region"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name_Icontains"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nameIcontains"}}},{"kind":"Argument","name":{"kind":"Name","value":"region"},"value":{"kind":"Variable","name":{"kind":"Name","value":"region"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"capital"}},{"kind":"Field","name":{"kind":"Name","value":"flag"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"nativeName"}},{"kind":"Field","name":{"kind":"Name","value":"subregion"}},{"kind":"Field","name":{"kind":"Name","value":"population"}},{"kind":"Field","name":{"kind":"Name","value":"area"}},{"kind":"Field","name":{"kind":"Name","value":"languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"iso6392"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CountriesSearchQuery, CountriesSearchQueryVariables>;