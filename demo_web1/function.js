const navToggle = document.getElementById("navToggle");
const headerNav = document.getElementById("headerNav");

navToggle.addEventListener("click", () => {
	headerNav.classList.toggle("is-open");
	// body スクロール制御
	document.body.classList.toggle("is-menu-open", isOpen);

	// aria 状態更新
	navToggle.setAttribute("aria-expanded", isOpen);
	navToggle.setAttribute(
		"aria-label",
		isOpen ? "メニューを閉じる" : "メニューを開く"
	);
});
//メニュー以外の場所をタップするとメニューを閉じる
const overlay = document.querySelector(".nav__overlay");
overlay.addEventListener("click", () => {
	headerNav.classList.remove("is-open");
	document.body.classList.remove("is-menu-open");
	navToggle.setAttribute("aria-expanded", "false");
});

//スクロール禁止を解除
const navLinks = document.querySelectorAll(".nav__list a");

navLinks.forEach((link) => {
	link.addEventListener("click", () => {
		headerNav.classList.remove("is-open");
		document.body.classList.remove("is-menu-open");
		navToggle.setAttribute("aria-expanded", "false");
		navToggle.setAttribute("aria-label", "メニューを開く");
	});
});
