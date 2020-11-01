const small = ({ date }) => <p>{date}</p>;

small.getInitialProps = async ({ query }) => {
	const moment = (await import('moment')).default();
	return {
		date: moment().format('dddd D MMMM YYYY'),
	};
};

export default small;
