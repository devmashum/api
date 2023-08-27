function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}

function displayPosts(posts) {
    const postContainer = document.getElementById('post-container');
    for (const post of posts) {
        const postDiv = document.createElement('div');
        // add the style
        postDiv.classList.add('post');
        // add the style
        postDiv.innerHTML = `
        <h3>User-${post.userId}</h4>
        <h5>Post: title: ${post.title}</h5>
        <p>Post Description:${post.body} </p>
        `;
        postContainer.appendChild(postDiv);

    }
}


loadPosts();