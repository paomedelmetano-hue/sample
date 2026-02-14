async function register() {
  const fullName = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await supabaseClient.auth.signUp({
    email: email,
    password: password,
  });

  if (error) {
    alert(error.message);
    return;
  }

  // Insert additional user info
  await supabaseClient.from("users").insert([
    {
      id: data.user.id,
      full_name: fullName,
    },
  ]);

  alert("Registered successfully!");
  window.location.href = "login.html";
}
