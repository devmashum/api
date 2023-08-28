function getComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(comment => commentsData(comment))
}

function commentsData(comment) {
    const postContainer = document.getElementById('comment-list');

    for (const data of comment) {
        const div = document.createElement('div');
        div.classList.add('faisal')
        div.innerHTML = `
        <h5>name:${data.name}</h5>
        <h5>${data.body}</h5 >
           

        `
        postContainer.appendChild(div);
    }



}

getComments();