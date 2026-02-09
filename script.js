// Ensure these match your Supabase Dashboard exactly
const SB_URL = 'https://qlhqzopuvabupftjskhk.supabase.co';
const SB_KEY = 'sb_publishable_ZsDq_ajT6EPK5XfmpURbMQ_ck_kkLAM';
const supabase = supabase.createClient(SB_URL, SB_KEY);

const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // This stops the page from refreshing
    console.log("Register button clicked!"); // Check your console for this!

    // Using querySelector to find the inputs inside this specific form
    const fullName = registerForm.querySelector('input[placeholder="Full Name"]').value;
    const email = registerForm.querySelector('input[placeholder="Email"]').value;

    const { data, error } = await supabase
        .from('profiles')
        .insert([{ full_name: fullName, email: email }]);

    if (error) {
        console.error("Supabase Error:", error);
        alert("Error: " + error.message);
    } else {
        alert("Success! Account created.");
        toggleForm(); // Switch to login view
        registerForm.reset();
    }
});

// Show Dashboard UI
function showDashboard(email) {
    // Hide the login container
    document.getElementById('auth-container').classList.add('hidden');
    
    // Show the dashboard container
    const dashboard = document.getElementById('dashboard');
    dashboard.classList.remove('hidden');
    
    // Set the user's email
    document.getElementById('user-display-email').innerText = `Logged in as: ${email}`;
}

// Log out (Refresh page)
function logout() {
    window.location.reload();
}

// --- Event Listeners ---

// Handle Registration
registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const fullName = registerForm.querySelector('input[placeholder="Full Name"]').value;
    const email = registerForm.querySelector('input[placeholder="Email"]').value;
    // Note: We are saving email/name to 'profiles'. 
    // In this basic setup, password isn't being used for verification.

    const { data, error } = await supabase
        .from('profiles')
        .insert([{ full_name: fullName, email: email }]);

    if (error) {
        alert("Error: " + error.message);
    } else {
        alert("Success! Account created. Now try logging in.");
        toggleForm(); // Switch back to login form
        registerForm.reset();
    }
});

// Handle Login
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = loginForm.querySelector('input[type="email"]').value;

    // Check if the user exists in the 'profiles' table
    const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('email', email)
        .single();

    if (error || !data) {
        alert("Login failed: User not found in 'profiles' table.");
    } else {
        showDashboard(data.email);
    }
});


