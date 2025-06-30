/* 
	로컬에서 테스트한 수치가 프로덕션에 그대로 반영되면 안되기 때문에 환경에 따라 다른 slug 사용

	localhost 또는 127.0.0.1은 개발 환경이므로 _home_dev 사용
	그 외는 _home (실제 배포 URL) 사용
*/

let slug = window.location.pathname;
if (slug === '/') {
	const isDev =
		window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
	slug = isDev ? '_home_dev' : '_home';
}
slug = encodeURIComponent(slug);

fetch(`/api/views/${slug}`)
	.then((res) => res.json())
	.then((data) => {
		const el = document.querySelector('#view-count');
		if (el) el.textContent = `총 ${data.count.toLocaleString()}명이 참여했어요`;
	})
	.catch((err) => {
		console.error('조회수 불러오기 실패:', err);
	});
