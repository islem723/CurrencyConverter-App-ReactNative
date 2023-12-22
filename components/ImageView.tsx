import React from 'react';
import {
	View,
	Image,
	ImageSourcePropType,
	ViewStyle,
	StyleProp,
	ImageStyle,
	StyleSheet,
} from 'react-native';

export interface ImageViewProps {
	src: ImageSourcePropType;
	resizeMode?:
		| 'contain'
		| 'cover'
		| 'stretch'
		| 'center'
		| 'repeat'
		| undefined;
	imageStyle?: StyleProp<ImageStyle>;
	viewStyle?: StyleProp<ViewStyle>;
}

export function ImageView(props: ImageViewProps) {
	return (
		<View style={[styles.view, { ...(props.viewStyle as object) }]}>
			<Image
				style={[styles.bigLogo, { ...(props.imageStyle as object) }]}
				resizeMode={props.resizeMode}
				source={props.src}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	bigLogo: {
		width: 250,
		height: 250,
	},

	view: {
		alignItems: 'center',
	},
});
