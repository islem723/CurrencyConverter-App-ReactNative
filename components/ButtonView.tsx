import React from 'react';
import {
	StyleProp,
	StyleSheet,
	TextStyle,
	TouchableOpacity,
	View,
	ViewStyle,
} from 'react-native';
import Theme from '../utils/Theme';
import ButtonText from './ButtonText';

export interface ButtonViewProps {
	onPress: () => void;
	icon?: JSX.Element;
	hasText?: boolean;
	text?: string;
	hasIcon?: boolean;
	viewStyle?: StyleProp<ViewStyle>;
	btnStyle?: StyleProp<ViewStyle>;
	btnTxtStyle?: StyleProp<TextStyle>;
}

export default function ButtonView(props: ButtonViewProps) {
	return (
		<View style={props.viewStyle}>
			<TouchableOpacity
				onPress={props.onPress}
				accessibilityLabel={props.text}
				style={[styles.button, { ...(props.btnStyle as object) }]}
			>
				<View
					style={{
						flex: 1,
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					{props.hasIcon && props.icon}
					{props.hasText && (
						<ButtonText text={props.text!!} textStyle={props.btnTxtStyle} />
					)}
				</View>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	button: {
		margin: 10,
		backgroundColor: Theme.primary,
		padding: 5,
		height: 50,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
