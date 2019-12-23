self.addEventListener('install', function (event) {
    console.log('sw installed');
    event.waitUntil(

        caches.open('static')
            .then(function (cache) {
                cache.addAll([
                    '/',
                    '/index.html',
                    '/js/app.js',
                    '/css/app.css',
                    '/img/favicon.png',
                    '/img/icons/app-icon-144x144.png',
                    'https://fonts.googleapis.com/css?family=Roboto+Mono',
                    'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
                ])
            })
    )


});




self.addEventListener('activate', function () {
    console.log('sw activated');
});



self.addEventListener('fetch', function(event){
console.log('sw fetching');

event.respondWith(
 caches.match(event.request)
 .then(function(res){
     if(res){
        return res;
     }else{
         return fetch(event.request);
     }
    
 })

)
});