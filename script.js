const liList = document.querySelectorAll(".drink-list li");
const input = document.querySelector(".search");

const drinkSearch = (e) => {
	const search = e.target.value.toUpperCase();

	liList.forEach((li) => {
		if (!li.innerText.toUpperCase().includes(search)) {
			li.style.display = "none";
		} else {
			li.style.display = "block";
		}
	});
};

input.addEventListener("input", drinkSearch);
