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
    'CONNECTION_STRING_GOES_HERE'
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