const makeComment = async function(event) {
  event.preventDefault();

  const blogPost_id = document.querySelector("#blogpost-id").value;
  const commentText = document.querySelector("#comment-body").value;

  await fetch(`/api/comments`, {
    method: 'POST',
    body: JSON.stringify({
      //change all post to blogpost
      blogPost_id,
      content: commentText,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.reload();
};

document
  .querySelector('#new-comment-form')
  .addEventListener('submit', makeComment);