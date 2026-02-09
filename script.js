// 1. Initialize Supabase 
// Replace these with your actual keys from Supabase Settings > API
const SB_URL = 'https://qlhqzopuvabupftjskhk.supabase.co';
const SB_KEY = 'sb_publishable_ZsDq_ajT6EPK5XfmpURbMQ_ck_kkLAM';
const supabase = supabase.createClient(SB_URL, SB_KEY);

// Select DOM Elements
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const dashboard = document.getElementById('dashboard');
const mainFormContainer = document.querySelector('.form-container');

// --- Functions ---

// Toggle between Login and Register views
function toggleForm() {
    loginForm.classList.toggle('hidden');
    registerForm.classList.toggle('hidden');
}

// Show Dashboard UI
function showDashboard(email) {
    // Hide the entire form container
    if (mainFormContainer) mainFormContainer.classList.add('hidden');
    
    // Show the dashboard and set email text
    dashboard.classList.remove('hidden');
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
