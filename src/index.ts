import { render , h } from 'preact'

let root 
function init() {
    let App = require('./app').default;
    root = render(App, document.getElementById('root')!, root)
}


if((module as any).hot) {
    module.hot.accept('./app',  () => requestAnimationFrame(init))
}

init()