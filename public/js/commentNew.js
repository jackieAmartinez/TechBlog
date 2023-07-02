const makeComment = async function(event) {
  event.preventDefault();

  const blogPost_ID = document.querySelector("#blogpost-id").value;
  const commentText = document.querySelector("#comment-body").value;

  await fetch(`/api/comments`, {
    method: 'POST',
    body: JSON.stringify({
      //change all post to blogpost
      blogPost_ID,
      content: commentText,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.reload();
};

document
  .querySelector('#new-comment-form')
  .addEventListener('submit', makeComment);