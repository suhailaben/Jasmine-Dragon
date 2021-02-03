let frame = (() => {
    let body = document.querySelector('body');
    let content = document.createElement('div');
    content.setAttribute('id', 'content');
    body.appendChild(content);
})()

export default {frame}