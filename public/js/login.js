// function to sync session with logged in user
const loginUser = async (event) => {
    event.preventDefault();
    // local variables
    const email = document.querySelector("#email-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();
    // verify
    if (email && password) {
      const response = await fetch("/api/user/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
      // display or error
      if (response.ok) {
        document.location.replace("/dashboard/user-home");
      } else {
        alert(response.statusText);
      }
    }
    console.log(email, password);
  };
  
  
  
  // review view port to find appropriate locations to listen in order to execute functions
  document.querySelector("#login-form").addEventListener("submit", loginUser);
  