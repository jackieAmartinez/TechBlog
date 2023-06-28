const postId = document.querySelector('input[name="post-id"]').value;

//change moreDifferentPost to another name
const todaysPost = async function(event) {
  event.preventDefault();

  //change moreDifferentTitle and moreDifferentBody to another name
  const todaysTitle = document.querySelector(`#post-title`).value;
  const todaysBody = document.querySelector(`#post-body`).value;

  await fetch(`/api/post/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
      todaysTitle,
      todaysBody
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  document.location.replace('/dashboard/user-home');
};

const throwItIntoTheSun = async function() {
  await fetch(`/api/post/${postId}`, {
    method: 'DELETE'
  });

  document.location.replace('/dashboard');
};

//reflect name changes
document
  .querySelector('#edit-post-form')
  .addEventListener('submit', todaysPost);
document
  .querySelector('#delete-btn')
  .addEventListener('click', sashayAway);