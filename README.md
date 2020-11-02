# Next.js 의 라우팅 알아보기

TL;DR!
1. 정적 라우팅 vs 동적 라우팅(with Link tag)
2. 서버모드 vs 클라이언트모드
3. `getInitialProps`, `getStaticPaths`, `getStaticProps`, `getServerSideProps` 각각의 개념 및 차이 알아보기

<br/>

## 1. 정적 라우팅 vs 동적 라우팅(with Link tag)

<img src=".readme/assets/path.png" width="20%" />

기본적으로 Next.js 는 `pages` 디렉토리 하위를 기준으로 **주소 매핑**을 해준다.

따라서 `localhost:3000/path`, `localhost:3000/path/:id` 모두 주소 매핑이 된다.

이를 기반으로 정적 라우팅과 동적 라우팅을 구분해 처리할 수 있다.

```javascript
<Link href={`/path`}>정적 path 이동</Link>
<Link href="/path/[id]" as={`/path/${id}`>동적 path 이동</Link>
```

**[Next.js 10버전](https://nextjs.org/blog/next-10#automatic-resolving-of-href)부터 as 를 통한 다이나믹 링크가 href 에도 사용될 수 있도록 변경되었다.**

```javascript
<Link href={`/path/${id}`}>동적 path 이동</Link>
```

이때 동적 라우팅의 파라미터나 URL을 숨기고 싶다면 `as` 를 사용하면 된다.

```javascript
<Link href={`/mask?id=${id}`} as={`/mask/${id}`}>Dynamic Mask link</Link>
```

이 경우 새로고침을 하게 될시 제대로 된 값을 받을 수 없으므로 `Custom server` 를 만들어 주어야 한다.

> ["커스텀 서버는 서버리스 기능 및 자동 정적 최적화 와 같은 중요한 성능 최적화를 제거한다"](https://nextjs.org/docs/advanced-features/custom-server)

<br/>

## 2. 서버모드 vs 클라이언트모드

```javascript
// getInitialProps 는 클라이언트, 서버사이드 모두 실행 된다.
Post.getInitialProps = ({ query }) => {
	if (typeof window === 'undefined') {
		console.log('server mode');
	} else {
		console.log('client mode');
  }
  ...
};
```

이후 알아볼 `getInitialProps` 의 예를 보자면, URL 을 통해 서버에 요청을 날리게 될 경우 `Server mode`로 동작해 브라우저에 `server mode` 로그가 찍히며 `Link` 태그를 통해 `Client mode`로 접근할 경우 `client mode` 로그가 찍힌다.

즉 해당 `js` 파일을 '서버'에서 처리하는지 '클라이언트'에서 처리하는지에 따라 모드가 달라진다.

<br/>

## 3. getInitialProps, getStaticPaths, getStaticProps, getServerSideProps 각각의 개념 및 차이 알아보기

왜 이 친구들이 필요한가?

- `build` 단계에서는 페이지를 그릴 수 없다. 따라서 빌드 단계에서 데이터가 존재할 수 있도록 사전 처리 해주는 함수들.
- [예시](pages/post/index.js)를 보면 `post.title` 이 존재하지 않으므로 에러가 발생한다.
- 따라서 [이 예시](pages/post/solved.js)와 같이 서버에서 값을 처리해 만들어진 돔을 내린다.

요약 

- `getInitialProps`: `getStaticPaths`, `getStaticProps`, `getServerSideProps` 를 합친 것과 같다.(v9.3에서 세분화 되면서 더 이상 사용을 [추천하지 않음](https://nextjs.org/docs/api-reference/data-fetching/getInitialProps))
- `getStaticPaths`: pre-render할 동적 라우팅을 선언(getStaticProps와 함께 쓰임)
- `getStaticProps`: 빌드 타임 때 딱 한 번만 실행되며 외부 데이터(fetch)를 JSON 으로 만들어 준다.(빌드 이후 변경 불가)
- `getServerSideProps`: 각각의 요청마다 데이터를 fetch한다(같은 페이지에서 fetch 하고 다른 내용은 렌더함. Static이 아니기 때문에 매 요청마다 데이터를 서버로 부터 가져옴)

`getStaticProps`와 `getServerSideProps`의 차이는 빌드이후에도 data 변경 가능 여부이다.

-> SSG(Static Generation) vs SSR(Server-side rendering)

### getStaticPaths
- [예시](pages/post/[id].js)
- 해당 함수에 지정된 path 를 pre-rendering 해준다.
- `fallback` 을 `true` 로 설정하면 서버에서 그때그때 내려준다(SSG)
- `fallback` 을 `false` 로 설정하면 404 로 처리된다.

### getStaticProps
- [예시](pages/post/static.js)
- 개발모드에선 모든 요청에 실행되지만 프로덕션 모드에선 `build` 타임에 **한 번만 실행**된다.
- 브라우저용 JS 번들에도 포함되지 않으므로 디비 쿼리 같은 코드를 작성해도 된다.
- 요청에 따라 페이지 내부의 값이 변경된다면 이 static 보단 아래의 SSR 이 올바르다.
- `pages/api` 를 사용하려면 [preview 모드](https://nextjs.org/docs/advanced-features/preview-mode)로 가져와야 한다.
- 빌드된 `fetch` 값들은 `static.json` 으로 만들어 진다.

### getServerSideProps
- [예시](pages/post/ssr.js)
- 요청에 따라 그때그때 값을 처리해 페이지를 '그려서' 내려준다.
- static 보단 느리지만 가장 최신의 값을 유지할 수 있다.

### 추가

배포되는 파일이 static, SSR, SSG 중 어디에 속하는지 알고 싶다면 build 결과를 보면 된다.

<img src="./.readme/assets/build.png" />