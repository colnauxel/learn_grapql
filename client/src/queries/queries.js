import {gql} from 'apollo-boost';


const getBooksQuery =gql`
    {
        books{
            name
            id
        }
    }
`
const getAuthorsQuery=gql`
    {
        authors{
            name
            id
        }
    }
`
const addBookMutation=gql`
    mutation($name:String!,$genre:String!,$authorId:ID!){
        addBook(name:$name,genre:$genre,authorId:$authorId){
            name
            id
        }
    }
`
const getBookQuery=gql`
 query($id:ID){
     book(id:$id){
         id
         name
         genre
         author{
             id
             name
             age
             books{
                 name
                 id
             }
         }
     }
 }
`
const deleteBook=gql`
    mutation($id:ID!){
        deleteBook(id:$id){
            name
        }
    }
`
const editBook=gql`
    mutation($id:ID!,$name:String!,$genre:String!,$authorId:ID!){
        updateBook(id:$id,name:$name,genre:$genre,authorId:$authorId){
            name
        }
    }
`
export {getAuthorsQuery,getBooksQuery,addBookMutation,getBookQuery,deleteBook,editBook};