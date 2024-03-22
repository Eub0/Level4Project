export const greetings = (): string => {
	const now = new Date();
	const hours = now.getHours();
	if (hours < 12) {
		return 'Good morning';
	} else if (hours >= 12 && hours <= 17) {
		return 'Good afternoon';
	} else if (hours > 17) {
		return 'Good evening';
	} else {
		return 'Welcome';
	}
};