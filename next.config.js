const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
	// i18n: {
	// 	locales: ['en-US', 'en', 'ko', 'nl-NL', 'nl-BE'],
	// 	defaultLocale: 'ko',
	// },
});
