// import { gql, GraphQLClient } from 'graphql-request';
// import { headers } from 'next/headers';

// const RESTORE_ACCESS_TOKEN = gql`
//   mutation restoreAccessToken {
//     restoreAccessToken {
//       accessToken
//     }
//   }
// `;

// export const getAccessToken = async ({ refreshToken }) => {
//   try {
//     const graphqlClient = new GraphQLClient(
//       '주소',
//       //  쿠키가 제거되었으므로, credentials : 'include' 변경
//       {
//         headers: {
//           Authorization: `Bearer ${refreshToken}`,
//         },
//       }
//     );
//     // accessToken 던져서 refreshToken 받음
//     const result = await graphqlClient.request(RESTORE_ACCESS_TOKEN);
//     const newAccessToken = result.restoreAccessToken.accessToken;
//     return newAccessToken;
//   } catch (error) {
//     console.log(error);
//   }
// };
