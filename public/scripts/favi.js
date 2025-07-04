const favi = document.getElementById('favi');
const faviArr = [
	'/favicon/32x32/img-dao-face.png',
	'/favicon/32x32/img-diz-face.png',
	'/favicon/32x32/img-bazzi-face.png'
];

if (!window.matchMedia('(max-width: 768px)').matches) {
	let i = 0;

	setInterval(() => {
		i = (i + 1) % faviArr.length;
		favi.href = faviArr[i];
	}, 2000);
}
