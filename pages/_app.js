import '../styles/globals.css'; // 글로벌 CSS 는 _app 에서만 가능하다.

// 최상위 글로벌
function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;
