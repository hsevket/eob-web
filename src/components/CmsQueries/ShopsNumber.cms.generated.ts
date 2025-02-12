import * as Types from '../../server/generated/graphql';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type ShopsNumberQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ShopsNumberQuery = (
  { __typename?: 'Query' }
  & { shopsConnection: (
    { __typename?: 'ShopConnection' }
    & { aggregate: (
      { __typename?: 'Aggregate' }
      & Pick<Types.Aggregate, 'count'>
    ) }
  ), kpis: Array<(
    { __typename?: 'Kpi' }
    & Pick<Types.Kpi, 'text' | 'value'>
  )> }
);


export const ShopsNumberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShopsNumber"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shopsConnection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"stage"},"value":{"kind":"EnumValue","value":"PUBLISHED"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"kpis"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<ShopsNumberQuery, ShopsNumberQueryVariables>;