const enviromentUrl = new Map();

enviromentUrl.set('localhost', 'http://localhost:8080');
enviromentUrl.set('book-store1-web', 'https://book-demo1-store.herokuapp.com');

export default enviromentUrl.get(window.location.hostname);
