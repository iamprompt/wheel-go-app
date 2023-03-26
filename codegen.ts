import type { CodegenConfig } from '@graphql-codegen/cli'
import dotenv from 'dotenv'

dotenv.config()

const WHEELGO_CMS_API = process.env.WHEELGO_CMS_API

const config: CodegenConfig = {
  schema: `${WHEELGO_CMS_API}/graphql`,
  documents: ['graphql/**/*.{ts,tsx}'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './graphql/gql/': {
      preset: 'client',
    },
  },
}

export default config
