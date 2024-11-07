import { serve } from 'bun'

const createStaticResponse = async (filePath, contentType) => {
	const fileContent = await Bun.file(filePath).bytes()
	return new Response(fileContent, {
		headers: {
			'Content-Type': contentType,
		},
	})
}

const server = serve({
	static: {
		'/': await createStaticResponse('./public/index.html', 'text/html'),
		'/index.html': await createStaticResponse('./public/index.html', 'text/html'),
		'/css/footer.css': await createStaticResponse('./public/css/footer.css', 'text/css'),
		'/css/header.css': await createStaticResponse('./public/css/header.css', 'text/css'),
		'/css/html5-boilerplate.css': await createStaticResponse('./public/css/html5-boilerplate.css', 'text/css'),
		'/css/index.css': await createStaticResponse('./public/css/index.css', 'text/css'),
		'/css/main.css': await createStaticResponse('./public/css/main.css', 'text/css'),
		'/css/normalize.css': await createStaticResponse('./public/css/normalize.css', 'text/css'),
		'/images/burger-icon.svg': await createStaticResponse('./public/images/burger-icon.svg', 'image/svg+xml'),
		'/images/logo-alert4sud.svg': await createStaticResponse('./public/images/logo-alert4sud.svg', 'image/svg+xml'),
		'/js/header.js': await createStaticResponse('./public/js/header.js', 'application/javascript'),
		'/js/plugins.js': await createStaticResponse('./public/js/plugins.js', 'application/javascript'),
		'/template.html': await createStaticResponse('./public/template.html', 'text/html'),
	},
	fetch(request) {
		return new Response(null, {
			status: 404,
		})
	},
})

console.log('Server running at http://localhost:3000')
