# movieql-server
## 노마드 코더 <GraphQL로 영화 API 만들기> 강의를 들으며 실습.
GraphQL : 페이스북에서 만든 웹 클라이언트가 데이터를 서버로부터 효율적으로 가져오는 것을 목적으로한 쿼리 언어

GraphQL이 해결하는 REST API의 단점
1. Overfetching : 내가 필요로 하는 데이터보다 더 많은 데이터를 fetch하는 것.
- 일반적인 REST API의 경우 내가 필요로 하는 데이터를 콕콕 찝어 요청하는게 아닌 data 전부를 받아야한다.
- 하지만 GraphQL을 사용하면 내가 필요로 하는 데이터를 콕콕 찝어 요청할 수 있고 응답 또한 내가 원하는 data만을 받을 수 있다.
이러한 특성으로 Overfetching 문제를 해결할 수 있다.

2. Underfetching : 내가 필요로 하는 데이터보다 적게 데이터를 fetch하는 것.
- 한번의 reqeust로는 내가 필요로 하는 데이터를 얻지 못하고 여러번의 reqeust로 원하는 data를 얻는 것.
- 이것 또한 graphQL을 사용하면 단일 reqeust만으로도 내가 원하는 데이터를 콕콕 찝어 응답 받을 수 있다.


### query / mutation
GrahpQL 은 크게 query와 mutation으로 나눌 수 있다.
query-조회(GET), mutation- 생성(POST) 수정(PUT) 삭제(DELETE) 로 사용한다.
