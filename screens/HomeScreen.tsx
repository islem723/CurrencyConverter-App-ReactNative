import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ExchangeForm from '../components/ExchangeForm';
import { ImageView } from '../components/ImageView';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

interface HomeScreenProps {}

export default function HomeScreen(props: HomeScreenProps) {
	const insets = useSafeAreaInsets();

	return (
		<KeyboardAwareScrollView style={{ flex: 1 }}>
			<View
				style={{
					paddingTop: insets.top,
					paddingLeft: insets.left,
					paddingBottom: insets.bottom,
					paddingRight: insets.right,
					...styles.container,
				}}
			>
				<Text style={styles.title}>Exchange Currency</Text>
				<ImageView
					imageStyle={{ width: 150, height: 150, marginVertical: 10 }}
					src={require('../assets/currency-exchange.png')}
				/>
				<ExchangeForm />
				<StatusBar style='auto' />
			</View>
		</KeyboardAwareScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	title: {
		marginVertical: 20,
		color: 'darkblue',
		fontWeight: 'bold',
		fontSize: 40,
	},
});
