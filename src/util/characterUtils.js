// 한글 캐릭터명을 영어 이미지명으로 변환하는 함수
export function getCharacterImageName(characterTitle) {
	const characterNameMap = {
		다오: 'dao',
		배찌: 'bazzi',
		디지니: 'diz',
		우니: 'uni',
		마리드: 'marid',
		티이라: 'tiera',
		케피: 'keffy',
		에띠: 'ethen',
		모스: 'mos',
		크리스: 'kris',
		에리니: 'erini'
	};

	return characterNameMap[characterTitle] || characterTitle;
}
