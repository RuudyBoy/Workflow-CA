// API url: https://graphqlzero.almansi.me/api

import { orderBy } from "lodash";

const results = document.querySelector(".results-list");

import ApolloClient, { gql } from "apollo-boost";


async function makeGQLCall() {
  const gqlUrl = "https://graphqlzero.almansi.me/api";

  const client = new ApolloClient({
    uri: gqlUrl,
  });

  const json = await client.query({
    query: gql`
      {
        posts {
          data {
            id
            title
          }
        }
      }
    `,
  });

const posts  = json.data.posts.data;
  
const orderedPosts = orderBy(posts, ["id"], ["desc"]);

for (let i = 0; i < orderedPosts.length; i++) {

    if (i === 4) {
        break;
    }

    results.innerHTML += `<li> <h2>${orderedPosts[i].id}</h2> <p> ${orderedPosts[i].title} </p> </li>`
}
}

makeGQLCall();


