import { ApolloServer, gql } from "apollo-server";
import fetch from "node-fetch";

const typeDefs = gql`
    type Movie {
        """ 고유 id 값 """ id: Int!
        """ 영화 페이지 URL """ url: String!
        imdb_code: String!
        """ 영화 한글 제목 """ title: String!
        """ 영화 영어 제목 """ title_english: String!
        """ 영화 제목 + (개봉년도) """title_long: String!
        """ slug형 제목-개봉년도 """ slug: String!
        """ 개봉년도 """ year: Int!
        """ 별점 """ rating: Float!
        """ 러닝타임 """ runtime: Int!
        """ 줄거리 요약 """ summary: String
        """ 트레일러 번호 """ yt_trailer_code: String
        """ 언어 """ language: String!
        """ 백그라운드 이미지 """ background_image_original: String!
        """ 작은 커버 이미지 """ small_cover_image: String!
        """ 보통 커버 이미지 """ medium_cover_image: String!
        """ 큰 커버 이미지 """ large_cover_image: String!
    }
    type Query {
        """ 전체 영화 리스트 반환 """ allMovies: [Movie!]!
        """ 특정ID 영화 세부 정보 반환 """ movie(id: Int!): Movie
    }
`;
/*
    <"typeDefs"에서는 GraphQL 스키마를 정의한다.>
    "Movie"의 타입을 정의하고, 다양한 필드를 명시한다. 
    "Query"에서는 전체 영화 목록을 가져오는 "allMovies"와 id값을 활용한 특정 영화의 상세 정보를 가져오는 "movie"를 정의한다.
*/

const resolvers = {
    Query: {
        allMovies: async () => {
            const response = await fetch('https://yts.mx/api/v2/list_movies.json');
            const data = await response.json();
            return data.data.movies;
        },
        movie: async (_,{id}) => {
            const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
            const data = await response.json();
            return data.data.movie;
        }
    },
};
/*
    <"resolvers"에서는 각 쿼리가 어떻게 데이터를 반환할지를 정의한다.>
    각 쿼리는 `fetch`를 사용하여 외부 API에서 데이터를 가져온다.
*/

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({ url }) => {
    console.log(`Running on ${url}`);
});
/*
`ApolloServer`를 `typeDefs`와 `resolvers`로 초기화하고, 서버를 실행한다.
*/