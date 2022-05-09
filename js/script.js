function getCurrentYear() {
	return new Date().getFullYear();
}

/* const getCurrentYear = () => {
	return new Date().getFullYear();
}; */

document.querySelector(".footer .year").textContent = getCurrentYear();
