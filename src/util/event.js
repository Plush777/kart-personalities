export const scrollLock = {
	enable() {
		document.body.style.overflow = 'hidden';
		document.body.style.width = '100%';
	},

	disable() {
		document.body.style.removeProperty('overflow');
		document.body.style.removeProperty('width');
	}
};
