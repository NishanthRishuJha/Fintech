document.addEventListener("DOMContentLoaded", function() {
    let isLogin = true;

    function hideAllSections() {
        document.getElementById("form-container").classList.add("hidden");
        document.querySelector(".dashboard-container").classList.add("hidden");
        document.querySelector(".cards-container").classList.add("hidden");
        document.querySelector(".product-container").classList.add("hidden");
    }

    function toggleForm() {
        isLogin = !isLogin;
        document.getElementById("form-title").innerText = isLogin ? "Login" : "Sign Up";
        document.getElementById("username").classList.toggle("hidden", isLogin);
        document.querySelector(".toggle").innerText = isLogin ? "Don't have an account? Sign up" : "Already have an account? Login";
    }

    function submitForm() {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const username = document.getElementById("username").value;

        if (!email || !password || (!isLogin && !username)) {
            alert("Please fill in all fields.");
            return;
        }

        if (!isLogin) {
            localStorage.setItem("userEmail", email);
            localStorage.setItem("userPassword", password);
            alert("Signup Successful! Now, login.");
            toggleForm();
        } else {
            const storedEmail = localStorage.getItem("userEmail");
            const storedPassword = localStorage.getItem("userPassword");

            if (email === storedEmail && password === storedPassword) {
                hideAllSections();
                document.querySelector(".dashboard-container").classList.remove("hidden");
            } else {
                alert("Invalid Email or Password.");
            }
        }
    }

    function showCards() {
        hideAllSections();
        document.querySelector(".cards-container").classList.remove("hidden");
    }

    function showProductForm(cardName) {
        hideAllSections();
        document.getElementById("selected-card-title").innerText = `${cardName} - Enter Product Details`;
        document.querySelector(".product-container").classList.remove("hidden");
    }

    function calculateDiscount() {
        const price = document.getElementById("product-price").value;
        if (!price) {
            alert("Please enter product price.");
            return;
        }
        const discount = Math.floor(Math.random() * 16) + 5; // 5% to 20%
        const finalPrice = price - (price * discount / 100);
        document.getElementById("discount-details").innerText = `Discount: ${discount}% | Final Price: ₹${finalPrice.toFixed(2)}`;
    }

    function goBack() {
        hideAllSections();
        document.querySelector(".dashboard-container").classList.remove("hidden");
    }

    function goBackToCards() {
        hideAllSections();
        document.querySelector(".cards-container").classList.remove("hidden");
    }

    document.querySelector(".toggle").addEventListener("click", toggleForm);
});
