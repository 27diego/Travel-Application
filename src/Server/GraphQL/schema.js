import { buildSchema } from 'graphql';

export const schema = buildSchema(`
    type Visits{
        _id: ID!
        place: String!
        date: String!
    }
    type Login{
        _id: ID!
        password: String!
        email: String!
    }
    type Searches{
        _id: ID!
        user: ID!
        search: String!
    }
    type USERS{
        _id: ID!
        name: String!
        email: String!
        joined: String!
        searches: [Searches!]!
    }

`);
