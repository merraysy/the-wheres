/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  query GetNeighbours($subregionIcontains: String) {\n    countries(subregion_Icontains: $subregionIcontains) {\n      edges {\n        node {\n          name\n        }\n      }\n    }\n  }\n": types.GetNeighboursDocument,
    "\n  query GetCountry($countryId: ID!) {\n    country(id: $countryId) {\n      id\n      dateAdded\n      dateModified\n      active\n      name\n      topLevelDomain\n      alpha2Code\n      alpha3Code\n      callingCodes\n      capital\n      altSpellings\n      region\n      subregion\n      population\n      latLng\n      demonym\n      area\n      gini\n      timezones\n      borders\n      nativeName\n      numericCode\n      currencies {\n        edges {\n          node {\n            symbol\n            name\n            id\n            dateModified\n            dateAdded\n            code\n            active\n          }\n        }\n      }\n      languages {\n        edges {\n          node {\n            dateAdded\n            dateModified\n            active\n            id\n            iso6391\n            iso6392\n            name\n            nativeName\n          }\n        }\n      }\n      translations\n      flag\n      regionalBlocs {\n        edges {\n          node {\n            dateAdded\n            dateModified\n            active\n            id\n            acronym\n            name\n            otherAcronyms\n            otherNames\n          }\n          cursor\n        }\n      }\n      cioc\n    }\n  }\n": types.GetCountryDocument,
    "\n  query CountriesSearch($nameIcontains: String, $region: String) {\n    countries(name_Icontains: $nameIcontains, region: $region) {\n      edges {\n        node {\n          name\n          capital\n          flag\n          id\n          region\n          nativeName\n          subregion\n          population\n          area\n          languages {\n            edges {\n              node {\n                name\n                iso6392\n                id\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.CountriesSearchDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetNeighbours($subregionIcontains: String) {\n    countries(subregion_Icontains: $subregionIcontains) {\n      edges {\n        node {\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetNeighbours($subregionIcontains: String) {\n    countries(subregion_Icontains: $subregionIcontains) {\n      edges {\n        node {\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetCountry($countryId: ID!) {\n    country(id: $countryId) {\n      id\n      dateAdded\n      dateModified\n      active\n      name\n      topLevelDomain\n      alpha2Code\n      alpha3Code\n      callingCodes\n      capital\n      altSpellings\n      region\n      subregion\n      population\n      latLng\n      demonym\n      area\n      gini\n      timezones\n      borders\n      nativeName\n      numericCode\n      currencies {\n        edges {\n          node {\n            symbol\n            name\n            id\n            dateModified\n            dateAdded\n            code\n            active\n          }\n        }\n      }\n      languages {\n        edges {\n          node {\n            dateAdded\n            dateModified\n            active\n            id\n            iso6391\n            iso6392\n            name\n            nativeName\n          }\n        }\n      }\n      translations\n      flag\n      regionalBlocs {\n        edges {\n          node {\n            dateAdded\n            dateModified\n            active\n            id\n            acronym\n            name\n            otherAcronyms\n            otherNames\n          }\n          cursor\n        }\n      }\n      cioc\n    }\n  }\n"): (typeof documents)["\n  query GetCountry($countryId: ID!) {\n    country(id: $countryId) {\n      id\n      dateAdded\n      dateModified\n      active\n      name\n      topLevelDomain\n      alpha2Code\n      alpha3Code\n      callingCodes\n      capital\n      altSpellings\n      region\n      subregion\n      population\n      latLng\n      demonym\n      area\n      gini\n      timezones\n      borders\n      nativeName\n      numericCode\n      currencies {\n        edges {\n          node {\n            symbol\n            name\n            id\n            dateModified\n            dateAdded\n            code\n            active\n          }\n        }\n      }\n      languages {\n        edges {\n          node {\n            dateAdded\n            dateModified\n            active\n            id\n            iso6391\n            iso6392\n            name\n            nativeName\n          }\n        }\n      }\n      translations\n      flag\n      regionalBlocs {\n        edges {\n          node {\n            dateAdded\n            dateModified\n            active\n            id\n            acronym\n            name\n            otherAcronyms\n            otherNames\n          }\n          cursor\n        }\n      }\n      cioc\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query CountriesSearch($nameIcontains: String, $region: String) {\n    countries(name_Icontains: $nameIcontains, region: $region) {\n      edges {\n        node {\n          name\n          capital\n          flag\n          id\n          region\n          nativeName\n          subregion\n          population\n          area\n          languages {\n            edges {\n              node {\n                name\n                iso6392\n                id\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query CountriesSearch($nameIcontains: String, $region: String) {\n    countries(name_Icontains: $nameIcontains, region: $region) {\n      edges {\n        node {\n          name\n          capital\n          flag\n          id\n          region\n          nativeName\n          subregion\n          population\n          area\n          languages {\n            edges {\n              node {\n                name\n                iso6392\n                id\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;