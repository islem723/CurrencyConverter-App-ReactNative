import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import { RootSiblingParent } from 'react-native-root-siblings';

export default function App() {
	return (
		<RootSiblingParent>
			<SafeAreaProvider>
				<HomeScreen />
			</SafeAreaProvider>
		</RootSiblingParent>
	);
}
