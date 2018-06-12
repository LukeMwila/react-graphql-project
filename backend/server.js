import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'

import schema from './schema'

const app = express()

app.use(cors())

/**
 * Connection String to MongoDB
 */
mongoose.connect(
  'mongodb://graph_admin_91:QuinAuto212!@graphql-api-cluster-shard-00-00-ggaf3.mongodb.net:27017,graphql-api-cluster-shard-00-01-ggaf3.mongodb.net:27017,graphql-api-cluster-shard-00-02-ggaf3.mongodb.net:27017/test?ssl=true&replicaSet=graphql-api-cluster-shard-0&authSource=admin&retryWrites=true'
)

const connection = mongoose.connection

connection.once('open', () => {
    console.log('MongoDB database connection established successfully')
})

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}))

app.use('/graphql', bodyParser.json(), graphqlExpress({schema}))

app.listen(4000, () => console.log('Express server running on port 4000'))