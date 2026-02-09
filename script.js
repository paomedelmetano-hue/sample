// 1. Initialize Supabase
const _supabaseUrl = 'YOUR_SUPABASE_URL';
const _supabaseKey = 'YOUR_SUPABASE_ANON_KEY';
const supabase = supabase.createClient(_supabaseUrl, _supabaseKey);

// 2. Toggle Form Function (from before)
function toggleForm() {
    document.getElementById('login-form').classList.toggle('hidden');
    document.getElementById('register-form').classList.toggle('hidden');
}

// 3. Handle Registration
const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get values from inputs
    const fullName = registerForm.querySelector('input[placeholder="Full Name"]').value;
    const email = registerForm.querySelector('input[placeholder="Email"]').value;
    const password = registerForm.querySelector('input[placeholder="Create Password"]').value;

    // Insert data into Supabase "profiles" table
    const { data, error } = await supabase
        .from('profiles')
        .insert([{ full_name: fullName, email: email }]);

    if (error) {
        alert("Error: " + error.message);
    } else {
        alert("Success! Data saved to Supabase.");
        registerForm.reset();
    }
});
