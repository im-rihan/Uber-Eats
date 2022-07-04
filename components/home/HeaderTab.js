import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const HeaderTab = () => {
	const [activeTab, setActiveTab] = useState('Delivery');

	return (
		<View style={{ flexDirection: 'row', alignSelf: 'center' }}>
			<HeaderButton
				text='Delivery'
				color='white'
				btnColor='black'
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>
			<HeaderButton
				text='Pickup'
				color='black'
				btnColor='white'
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>
		</View>
	);
};

export default HeaderTab;

const HeaderButton = (props) => {
	return (
		<TouchableOpacity style={{
			backgroundColor: props.activeTab === props.text ? "black" : "white",
			paddingHorizontal: 16,
			paddingVertical: 6,
			borderRadius: 30
		}}
			onPress={() => { props.setActiveTab(props.text) }}
		>
			<Text style={{
				color:  props.activeTab === props.text ? "white" : "black",
				fontSize: 15,
				fontWeight: '900'
			}}>{props.text}</Text>
		</TouchableOpacity >
	)
}