import React from 'react';
import {
	View,
	TextInput,
	StyleProp,
	KeyboardTypeOptions,
	ReturnKeyTypeOptions,
	ViewStyle,
	TextStyle,
	StyleSheet,
	ColorValue,
	Text,
	NativeSyntheticEvent,
	TextInputContentSizeChangeEventData,
} from 'react-native';
import Theme from '../utils/Theme';

type EventType = NativeSyntheticEvent<TextInputContentSizeChangeEventData>;

export interface InputViewProps {
	value: string;
	onChange: (value: string) => void;
	placeholder: string;
	label?: JSX.Element;
	viewStyle?: StyleProp<ViewStyle>;
	secureTextEntry?: boolean;
	inputStyle?: StyleProp<ViewStyle | TextStyle>;
	onSubmitEditing?: () => void;
	onContentSizeChange?: (e: EventType) => void;
	returnKeyType?: ReturnKeyTypeOptions;
	blurOnSubmit?: boolean;
	keyboardType?: KeyboardTypeOptions;
	inputRef?: any;
	multiLine?: boolean;
	editable?: boolean;
	isError?: boolean;
	errorMessage?: string;
	maxLength?: number;
	nbLines?: number;
}

export function InputView(props: InputViewProps) {
	const [focused, setFocused] = React.useState(false);

	const handleFocus = () => setFocused(true);
	const handleBlur = () => setFocused(false);

	return (
		<View style={[styles.view, { ...(props.viewStyle as object) }]}>
			<View>{props.label}</View>
			<TextInput
				maxLength={props.maxLength}
				onFocus={handleFocus}
				numberOfLines={props.nbLines}
				onBlur={handleBlur}
				editable={props.editable}
				enablesReturnKeyAutomatically
				ref={props.inputRef}
				multiline={props.multiLine}
				keyboardType={props.keyboardType}
				returnKeyType={props.returnKeyType}
				onChangeText={props.onChange}
				onContentSizeChange={props.onContentSizeChange}
				value={props.value}
				placeholder={props.placeholder}
				placeholderTextColor='gray'
				secureTextEntry={props.secureTextEntry}
				style={[
					styles.input,
					{
						borderColor: props.isError
							? Theme.errorColor
							: focused
							? Theme.primary
							: 'lightgray',
					},
					{ ...(props.inputStyle as object) },
				]}
				onSubmitEditing={props.onSubmitEditing}
				blurOnSubmit={props.blurOnSubmit}
			/>
			{props.errorMessage && (
				<Text style={styles.error}>{props.errorMessage}</Text>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	view: {
		marginVertical: 5,
	},
	input: {
		borderWidth: 1,
		borderRadius: 10,
		padding: 10,
		marginVertical: 5,
		width: '100%',
		color: 'black',
	},
	important: {
		color: Theme.errorColor,
		fontSize: 10,
		marginRight: 5,
	},
	error: {
		color: Theme.errorColor,
		fontSize: Theme.fontSize.small,
		marginTop: 5,
	},
});
