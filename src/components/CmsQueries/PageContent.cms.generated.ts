import * as Types from '../../server/generated/graphql';

import { TranslationsFragment } from '../../hooks/useTranslations/Translations.cms.generated';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { TranslationsFragmentDoc } from '../../hooks/useTranslations/Translations.cms.generated';
export type PageContentQueryVariables = Types.Exact<{
  page?: Types.Scalars['String'];
  locale: Array<Types.Locale> | Types.Locale;
}>;


export type PageContentQuery = (
  { __typename?: 'Query' }
  & { pages: Array<(
    { __typename?: 'Page' }
    & Pick<Types.Page, 'title' | 'metaDescription' | 'metaKeywords' | 'slug'>
    & { content?: Types.Maybe<(
      { __typename?: 'RichText' }
      & Pick<Types.RichText, 'html'>
    )> }
  )>, translations: Array<(
    { __typename?: 'Translation' }
    & TranslationsFragment
  )> }
);


export const PageContentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PageContent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":{"kind":"StringValue","value":"Home","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locale"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"metaKeywords"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Translations"}}]}}]}},...TranslationsFragmentDoc.definitions]} as unknown as DocumentNode<PageContentQuery, PageContentQueryVariables>;