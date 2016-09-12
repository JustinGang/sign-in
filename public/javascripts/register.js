/**
 * Created by mac on 16/9/8.
 */

(function () {

    var confirmPasswordAlert = $("#confirm-password-alert");
    var alertDiv = $("#alert-div");

    $("#register-form").on("submit", function (event) {
        event.preventDefault();

        if (this.password.value != this.passwordconfirm.value) {
            confirmPasswordAlert.html("宝宝再想想");
            return;
        }
        confirmPasswordAlert.empty();

        $.post("/api/register",
            {login: this.login.value, password:md5(this.password.value)}
        ).done(function (data) {
            console.log(data);
        }).fail(function () {
            alertDiv.html("无法连接服务器");
        });
    });

})();