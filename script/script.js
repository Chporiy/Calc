let total = 5000,
				time = 1,
				timeRate,
				tabLeft = document.querySelector(".tab-left"),
				tabRight = document.querySelector(".tab-right"),
				blocksBlock = document.getElementById("blocks-block"),
				pagesBlock = document.getElementById("pages-block"),
				counterBlocks = document.getElementById("counter-blocks"),
				counterPages = document.getElementById("counter-pages"),
				counterHours = document.getElementById("counter-hours"),
				counterRate = document.getElementById("counter-rate"),
				changesCheck = document.getElementById("changes-check"),
				changesCms = document.getElementById("changes-cms"),
				totalValue = document.getElementsByClassName("total-count")[0],
				input = document.getElementsByTagName('input');

const blocks = 500,
						pages = 2500,
						land = 5000,
						corp = 12000,
						cms = 4000,
						changes = 1000;

window.addEventListener('DOMContentLoaded',function () {

	tabLeft.addEventListener('click', () => {

		for(let i = 0; i < input.length; i++) {
			input[i].value = "";
		}

		blocksBlock.style.display = 'flex';
		pagesBlock.style.display = 'none';

		tabLeft.classList.add('active');
		tabRight.classList.remove('active');

		if (changesCheck.checked) {
			changesCheck.checked = false;
		};
		if (changesCms.checked) {
			changesCms.checked = false;
		};

		total = land;
		totalValue.value = total;

	});

	tabRight.addEventListener('click', () => {

		for(let i = 0; i < input.length; i++) {
			input[i].value = "";
		}

		blocksBlock.style.display = 'none';
		pagesBlock.style.display = 'flex';

		tabRight.classList.add('active');
		tabLeft.classList.remove('active');

		if (changesCheck.checked) {
			changesCheck.checked = false;
		};
		if (changesCms.checked) {
			changesCms.checked = false;
		};

		total = corp;
		totalValue.value = total;

	});

	counterBlocks.addEventListener('change', () => {

		counterHours.value = "";
		counterRate.value = "";
		total = counterBlocks.value * blocks;
		totalValue.value = total;

	});

	counterPages.addEventListener('change', () => {

		counterHours.value = "";
		counterRate.value = "";
		total = counterPages.value * pages;
		totalValue.value = total;

	});

	counterHours.addEventListener('change', () => {

		counterBlocks.value = "";
		counterPages.value = "";
		total = 0;
		time = counterHours.value;
		timeRate = time * counterRate.value;
		totalValue.value = timeRate;
		total = timeRate;


	});

	counterRate.addEventListener('change', () => {

		counterBlocks.value = "";
		counterPages.value = "";
		total = 0;
		timeRate = time * counterRate.value;
		totalValue.value = timeRate;
		total = timeRate;

	});

	changesCheck.addEventListener('change', () => {

		if (changesCheck.checked) {
			total += changes;
			totalValue.value = total;
		} else {
			total -= changes;
			totalValue.value = total;
		}

	});

	changesCms.addEventListener('change', () => {

		if (changesCms.checked) {
			total += cms;
			totalValue.value = total;
		} else {
			total -= cms;
			totalValue.value = total;
		}

	});

});