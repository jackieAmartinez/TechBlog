// function to sync session with logged in user
const loginUser = async (event) => {
    event.preventDefault();
    // local variables
    const username = document.querySelector("#username-login-input").value.trim();
    const password = document.querySelector("#password-login-input").value.trim();
    // verify
    if (username && password) {
      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });
      // display or error
      if (response.ok) {
        document.location.replace("/dashboard/user-home");
      } else {
        alert(response.statusText);
      }
    }
  };
  
  
  
  // review view port to find appropriate locations to listen in order to execute functions
  document.querySelector("#login-form").addEventListener("submit", loginUser);
  