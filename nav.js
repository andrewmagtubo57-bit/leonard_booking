// Simple view switching (no Firebase needed)
(function () {
    var ids = { signup: "signupForm", login: "loginForm", forgot: "forgotForm" };

    function show(name) {
        Object.keys(ids).forEach(function (key) {
            document.getElementById(ids[key]).classList.toggle("hidden", key !== name);
        });
        ["loginMessage", "signupMessage", "forgotMessage"].forEach(function (id) {
            var el = document.getElementById(id);
            el.textContent = "";
            el.className = "message";
        });
    }

    function on(id, fn) {
        document.getElementById(id).addEventListener("click", function (e) {
            e.preventDefault();
            fn();
        });
    }

    on("showSignup", function () { show("signup"); });
    on("showLogin", function () { show("login"); });
    on("backToLogin", function () { show("login"); });
    on("showForgot", function () {
        document.getElementById("forgotEmail").value =
            document.getElementById("loginEmail").value.trim();
        show("forgot");
    });

    if (window.location.hash === "#signup") show("signup");
})();
