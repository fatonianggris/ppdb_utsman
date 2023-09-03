/******/ (() => { // webpackBootstrap
    /******/ 	"use strict";
	var __webpack_exports__ = {};

	// Class Definition
	var KTLogin = function () {
		var _login;

		var _handleSignInForm = function () {
			var validation;
			var form = KTUtil.getById('kt_login_formulir');
			// Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
			validation = FormValidation.formValidation(
				form,
				{
					fields: {
						nomor_formulir: {
							validators: {
								notEmpty: {
									message: 'Nomor Formulir diperlukan'
								}
							}
						},
						password: {
							validators: {
								notEmpty: {
									message: 'Password diperlukan'
								}
							}
						}
					},
					plugins: {
						trigger: new FormValidation.plugins.Trigger(),
						submitButton: new FormValidation.plugins.SubmitButton(),
						bootstrap: new FormValidation.plugins.Bootstrap()
					}
				}
			);
			_login.on('submit', function (wizard) {
				if (validation) {
					validation.validate().then(function (status) {
						if (status == 'Valid') {
							grecaptcha.ready(function () {
								if (grecaptcha.getResponse() === "") {
									Swal.fire({
										text: "Google reCAPTCHA wajib dicentang.",
										icon: "error",
										buttonsStyling: false,
										confirmButtonText: "Oke!",
										customClass: {
											confirmButton: "btn font-weight-bold btn-primary"
										}
									}).then(function () {
										KTUtil.scrollTop();
									});
								} else {
									KTApp.blockPage({
										overlayColor: '#FFA800',
										state: 'warning',
										size: 'lg',
										opacity: 0.1,
										message: 'Silahkan Tunggu...'
									});
									form.submit(); // Submit form
								}
							});
						} else {
							Swal.fire({
								text: "Mohon Maaf, kemungkinan terjadi kesalahan pada pengisian Anda, Mohon menginputkan dengan benar.",
								icon: "error",
								buttonsStyling: false,
								confirmButtonText: "Oke!",
								customClass: {
									confirmButton: "btn font-weight-bold btn-primary"
								}
							}).then(function () {
								KTUtil.scrollTop();
							});
						}
					});
				}
			});
		};

		// Public Functions
		return {
			// public functions
			init: function () {
				_login = $('#kt_login');

				_handleSignInForm();
			}
		};
	}();

	// Class Initialization
	jQuery(document).ready(function () {
		KTLogin.init();
	});

	/******/
})()
	;
//# sourceMappingURL=login-general.js.map
