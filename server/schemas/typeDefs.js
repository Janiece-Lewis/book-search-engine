const { gql } = require('apollo-server-express');
const typeDefs = gql`
type Query {
    me:User
}
type Mutation {
    login (email: String!, password: String!): Auth
    addUser (username: String!, email:String!,password: String!): Auth
	saveBook (bookInfo:BookInput):User	
removeBook(bookId: ID!): User
}

type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

type Book {
	authors: [String]
	description: String
	title: String!
	bookId: ID!
	image: String
	link: String
  }
  input BookInput {
	authors: [String]
	description: String
	title: String!
	bookId: ID!
	image: String
	link: String
  }

type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
