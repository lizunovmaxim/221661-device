var link = document.querySelector(".feedback-link");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var username = popup.querySelector("[name=user-name]");
var email = popup.querySelector("[name=user-email]");
var text = popup.querySelector("[name=feedback-text]");
var usernameStorage = localStorage.getItem("user-name");
var emailStorage = localStorage.getItem("user-email");

link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal-show");

	if (usernameStorage) {
		username.value = usernameStorage;
		if (emailStorage) {
			email.value = emailStorage;
			text.focus();
		} else {
			email.focus();
		}
	} else {
		username.focus();
	}
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(event) {
	if (!username.value || !email.value || !text.value) {
		event.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	} else {
		localStorage.setItem("user-name", username.value)
		localStorage.setItem("user-email", email.value);
	}
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
			popup.classList.remove("modal-error");
		}
	}
});

var mapOpen = document.querySelector(".full-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapOpen.addEventListener("click", function(event) {
	event.preventDefault();
	mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function(event) {
	event.preventDefault();
	mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (mapPopup.classList.contains("modal-show")) {
			mapPopup.classList.remove("modal-show");
		}
	}
});