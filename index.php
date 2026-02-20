<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Thesis Repository</title>
    <script src="https://cdn.tailwindcss.com"></script>

    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body class="bg-slate-200">

<div class="min-h-screen flex flex-col">

    <!-- Header -->
    <div class="text-center pt-16 pb-10">
        <h1 class="text-4xl font-bold text-slate-800">
            Welcome to the Thesis Repository
        </h1>
        <p class="text-slate-600 mt-3">
            Select your role to continue
        </p>
    </div>

    <!-- Cards Section -->
    <div class="flex justify-center px-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            <!-- Guest -->
            <div class="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center w-72">
                <div class="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-green-100 mb-6">
                    <i data-lucide="search" class="text-green-600 w-10 h-10"></i>
                </div>
                <h2 class="text-xl font-semibold text-slate-800">Guest</h2>
                <p class="text-slate-600 mt-3 mb-6">
                    Search and view approved theses
                </p>
                <a href="guest/home.php" class="text-green-600 font-medium hover:underline">
                    Browse Now →
                </a>
            </div>

            <!-- Student -->
            <div class="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center w-72">
                <div class="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-blue-100 mb-6">
                    <i data-lucide="user" class="text-blue-600 w-10 h-10"></i>
                </div>
                <h2 class="text-xl font-semibold text-slate-800">Student</h2>
                <p class="text-slate-600 mt-3 mb-6">
                    Upload and manage your thesis
                </p>
                <a href="student/login.php" class="text-blue-600 font-medium hover:underline">
                    Login / Register →
                </a>
            </div>

            <!-- Faculty -->
            <div class="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center w-72">
                <div class="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-purple-100 mb-6">
                    <i data-lucide="graduation-cap" class="text-purple-600 w-10 h-10"></i>
                </div>
                <h2 class="text-xl font-semibold text-slate-800">Faculty</h2>
                <p class="text-slate-600 mt-3 mb-6">
                    Review and approve submissions
                </p>
                <a href="faculty/login.php" class="text-purple-600 font-medium hover:underline">
                    Login →
                </a>
            </div>

            <!-- Admin -->
            <div class="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center w-72">
                <div class="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-orange-100 mb-6">
                    <i data-lucide="shield-check" class="text-orange-600 w-10 h-10"></i>
                </div>
                <h2 class="text-xl font-semibold text-slate-800">Admin</h2>
                <p class="text-slate-600 mt-3 mb-6">
                    Manage system and users
                </p>
                <a href="admin/login.php" class="text-orange-600 font-medium hover:underline">
                    Dashboard →
                </a>
            </div>

        </div>
    </div>

    <!-- Footer -->
    <div class="mt-auto text-center py-6 text-slate-600 text-sm">
        © 2026 Thesis Repository System. All rights reserved.
    </div>

</div>

<script>
    lucide.createIcons();
</script>

</body>
</html>
