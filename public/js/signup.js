// Sign up form handler
async function signupFormHandler(event) {
  event.preventDefault();

  // get the information from the sign up form
//   const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  // if all three fields have content
  if (email && password) {
      // POST the new user to the user table in the database
      const response = await fetch('/api/user', {
          method: 'POST',
          body: JSON.stringify({
            //   username,
              email,
              password
          }),
          headers: {'Content-Type': 'application/json'}
      });
      // when the fetch promise is fufilled, check the response status and convey the results
      if (response.ok) {
          alert('Account created! Logging you in now.');
          document.location.replace('/dashboard');
      } else {
          alert(response.statusText)
      }
  }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);