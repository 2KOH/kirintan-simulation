const cacheName = 'kirintan-simulation-v2'

self.addEventListener('install', event => {
	event.waitUntil((async () => {
		const cache = await caches.open(cacheName)
		cache.addAll([
			'index.html',
			'play/',
			'play/index.html',
			'play/audio/giraffe.aac',
			'play/audio/giraffe.ogg',
			'play/audio/kirinkirin.aac',
			'play/audio/kirinkirin.ogg',
			'play/image/background.png',
			'play/image/font.png',
			'play/image/kirintan-00.png',
			'play/image/kirintan-01.png',
			'play/image/kirintan-02.png',
			'play/image/kirintan-03.png',
			'play/image/kirintan-04.png',
			'play/image/kirintan-05.png',
			'play/image/kirintan-06.png',
			'play/image/kirintan-07.png',
		])
	})())
})

self.addEventListener('fetch', event => {
	event.respondWith((async () => {
		const request = event.request
		return await caches.match(request) || await fetch(request)
	})())
})

self.addEventListener('activate', event => {
	event.waitUntil((async () => {
		const keyList = await caches.keys()
		return Promise.all(keyList.map(key => {
			if (key !== cacheName) {
				return caches.delete(key)
			}
		}))
	})())
})
