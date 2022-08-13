import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
  query {
    asalist {
      results {
        name
        assetId
        available
        logo
        unitname1
      }
    }
  }
`;