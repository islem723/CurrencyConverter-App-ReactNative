import Toast from 'react-native-root-toast';

export function showToastWithGravity(content: string) {
	Toast.show(content, {
		duration: Toast.durations.SHORT,
	});
}
