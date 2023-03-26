import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: `https://cms.wheelgo.iamprompt.me/api/graphql`,
  documents: ['graphql/**/*.{ts,tsx}'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './graphql/gql/': {
      preset: 'client',
    },
  },
}

export default config
