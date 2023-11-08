# movieql-server
## 간단 개념
### 노마드 코더 <GraphQL로 영화 API 만들기> 강의를 들으며 실습.
**GraphQL** : 페이스북에서 만든 웹 클라이언트가 데이터를 서버로부터 효율적으로 가져오는 것을 목적으로한 쿼리 언어

**GraphQL**을 사용하며 해결할 수 있는 **REST API의 아쉬운 점**

**1. Overfetching** : 내가 필요로 하는 데이터보다 더 **많은** 데이터를 fetch하는 것.
- 일반적인 REST API의 경우 내가 필요로 하는 데이터를 콕콕 찝어 요청하는게 아닌 data 전부를 받아야한다.
- 하지만 GraphQL을 사용하면 내가 필요로 하는 데이터를 콕콕 찝어 요청할 수 있고 응답 또한 내가 원하는 data만을 받을 수 있다.
이러한 특성으로 Overfetching 문제를 해결할 수 있다.

**2. Underfetching** : 내가 필요로 하는 데이터보다 **적게** 데이터를 fetch하는 것.
- 한번의 reqeust로는 내가 필요로 하는 데이터를 얻지 못하고 여러번의 reqeust로 원하는 data를 얻는 것.
- 이것 또한 graphQL을 사용하면 단일 reqeust만으로도 내가 원하는 데이터를 콕콕 찝어 응답 받을 수 있다.

### query / mutation
GrahpQL 은 크게 query와 mutation으로 나눌 수 있다.
query-조회(GET), mutation- 생성(POST) 수정(PUT) 삭제(DELETE) 로 사용한다.
***
## 프로젝트 설명
이 프로젝트는 많이 사용되는 오픈API 중 하나인 Movie API를 활용하여 GraphQL API로 변환하는 예제이다.
별도의 데이터베이스 없이도 API 서버를 구축하고, GraphQL을 사용하여 클라이언트가 필요한 데이터만 효과적으로 가져올 수 있게 했다.

## 프로젝트 목표
이를 통해 GraphQL API를 구축하는데 입문하는 목표를 두고 학습하였다.

![movieql-server_01](https://github.com/kor-seonwoo/movieql-server/assets/74663731/a338ae34-bdce-43b6-9853-08a346153022)
![movieql-server_02](https://github.com/kor-seonwoo/movieql-server/assets/74663731/7997bf63-5a78-4453-b364-9e53374b0054)
![movieql-server_03](https://github.com/kor-seonwoo/movieql-server/assets/74663731/b635a6de-1bea-49f3-9d03-7e0572b81f91)
