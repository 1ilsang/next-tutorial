import '../styles/globals.css'; // 글로벌 CSS 는 _app 에서만 가능하다.

// 최상위 글로벌
function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

// _app.js
MyApp.getInitialProps = ({ ctx }) => {
	const userAgent = ctx.req ? ctx.req.headers['user-agent'] : 'SERVER';
	return {
		userAgent,
	};
};

export default MyApp;
