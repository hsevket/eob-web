import * as Types from '../../server/generated/graphql';

import { TranslationsFragment } from '../../hooks/useTranslations/Translations.cms.generated';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { TranslationsFragmentDoc } from '../../hooks/useTranslations/Translations.cms.generated';
export type BlogsQueryVariables = Types.Exact<{
  locale: Array<Types.Locale> | Types.Locale;
}>;


export type BlogsQuery = (
  { __typename?: 'Query' }
  & { blogs: Array<(
    { __typename?: 'Blog' }
    & Pick<Types.Blog, 'title' | 'date' | 'abstract'>
  )>, translations: Array<(
    { __typename?: 'Translation' }
    & TranslationsFragment
  )> }
);

export type BlogQueryVariables = Types.Exact<{
  date: Types.Scalars['Date'];
  locale: Array<Types.Locale> | Types.Locale;
}>;


export type BlogQuery = (
  { __typename?: 'Query' }
  & { blogs: Array<(
    { __typename?: 'Blog' }
    & Pick<Types.Blog, 'title' | 'date'>
    & { content?: Types.Maybe<(
      { __typename?: 'RichText' }
      & Pick<Types.RichText, 'html'>
    )> }
  )>, translations: Array<(
    { __typename?: 'Translation' }
    & TranslationsFragment
  )> }
);


export const BlogsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Blogs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locale"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blogs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"date_DESC"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"abstract"}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Translations"}}]}}]}},...TranslationsFragmentDoc.definitions]} as unknown as DocumentNode<BlogsQuery, BlogsQueryVariables>;
export const BlogDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Blog"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locale"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blogs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"date"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Translations"}}]}}]}},...TranslationsFragmentDoc.definitions]} as unknown as DocumentNode<BlogQuery, BlogQueryVariables>;