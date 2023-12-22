import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getExchangeRate } from '../api/cryptor';
import Theme from '../utils/Theme';
import ButtonView from './ButtonView';
import { InputView } from './InputView';
import { showToastWithGravity } from '../utils/helpers';

export default function ExchangeForm() {
	const [amount, setAmount] = useState('');
	const [toSymbol, setToSymbol] = useState('');
	const [fromSymbol, setFromSymbol] = useState('');
	const [result, setResult] = useState(0);
	const [loading, setLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	async function convertCurrency() {
		if (!amount || !toSymbol || !fromSymbol) {
			setIsError(true);

			setTimeout(() => setIsError(false), 1000);
			showToastWithGravity('All fields are required!');
			return;
		}

		setLoading(true);
		const res = await getExchangeRate(
			Number.parseFloat(amount),
			fromSymbol,
			toSymbol
		);
		setLoading(false);

		setResult(res.result);
	}

	function resetForm() {
		setAmount('');
		setToSymbol('');
		setFromSymbol('');
		setResult(0);
	}

	return (
		<View style={styles.formStyle}>
			<InputView
				isError={isError}
				secureTextEntry={false}
				label={
					<Text style={{ color: 'black', fontSize: 20 }}>
						Write your current amount
					</Text>
				}
				keyboardType='number-pad'
				value={amount}
				onChange={setAmount}
				placeholder={'Amount'}
			/>
			<InputView
				isError={isError}
				secureTextEntry={false}
				maxLength={3}
				label={
					<Text style={{ color: 'black', fontSize: 20 }}>
						From currency symbol:
					</Text>
				}
				value={fromSymbol}
				onChange={setFromSymbol}
				placeholder={'From'}
			/>
			<InputView
				isError={isError}
				secureTextEntry={false}
				maxLength={3}
				label={
					<Text style={{ color: 'black', fontSize: 20 }}>
						Target currency symbol:
					</Text>
				}
				value={toSymbol}
				onChange={setToSymbol}
				placeholder={'To'}
			/>
			<ButtonView
				hasText={true}
				text={
					loading
						? 'Loading...'
						: result != 0
						? `${result} ${toSymbol}`
						: 'Exchange'
				}
				btnTxtStyle={{ color: 'white' }}
				onPress={async () => await convertCurrency()}
			/>
			<ButtonView
				hasText={true}
				btnStyle={{ backgroundColor: Theme.errorColor }}
				text='Reset'
				btnTxtStyle={{ color: 'white' }}
				onPress={async () => resetForm()}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	formStyle: {
		flex: 1,
		height: '100%',
		width: '100%',
		paddingHorizontal: 20,
		justifyContent: 'center',
		backgroundColor: Theme.light.backgroundColor,
	},
	amountStyle: {
		flex: 1,
		flexDirection: 'row',
		borderWidth: 1,
	},
});
