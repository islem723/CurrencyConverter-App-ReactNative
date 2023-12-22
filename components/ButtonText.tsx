import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';

interface ButtonTextProps {
	text: string;
	textStyle?: StyleProp<TextStyle>;
}

export default function ButtonText(props: ButtonTextProps) {
	return (
		<Text style={[styles.buttonText, { ...(props.textStyle as object) }]}>
			{props.text}
		</Text>
	);
}

const styles = StyleSheet.create({
	buttonText: {
		color: 'white',
		fontSize: 18,
		fontWeight: '500',
		textAlign: 'center',
		textShadowColor: 'rgba(0, 0, 0, 0.25)',
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
	},
});
