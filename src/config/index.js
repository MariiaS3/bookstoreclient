const enviromentUrl = new Map();

enviromentUrl.set('localhost', 'http://localhost:8080');
enviromentUrl.set('book-store1-web.herokuapp.com/', 'https://book-demo1-store.herokuapp.com');

export default enviromentUrl.get(window.location.hostname);
