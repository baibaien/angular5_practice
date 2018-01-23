import {Component, OnInit} from '@angular/core';
import {GraphQLString, GraphQLObjectType, GraphQLSchema} from 'graphql'

// type HelloWorld {
//   hello: String
// };
const HelloWorldType = new GraphQLObjectType({
  name: 'HelloWorldType',
  fields: () => ({
    hello: {
      type: GraphQLString,
      resolve() {
        return 'world'
      }
    }
  })
});
const schema = new GraphQLSchema({
  query: HelloWorldType
})

@Component({
  selector: 'app-graphqltest',
  templateUrl: './graphqltest.component.html',
  styleUrls: ['./graphqltest.component.css']
})
export class GraphqltestComponent implements OnInit {

  constructor() {
    console.log(GraphQLString);

  }

  ngOnInit() {
  }

}
