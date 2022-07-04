import {
	SafeAreaView,
	Platform,
	StyleSheet,
	StatusBar,
	View
} from 'react-native';
import React from 'react';
import HeaderTab from '../components/home/HeaderTab';
import SearchBar from '../components/home/SearchBar';
import Categories from '../components/home/Categories';

const Home = () => {
	// const [city, setCity] = useState("San Francisco");/
	return (
		<SafeAreaView style={styles.AndroidSafeArea}>
			<View style={{ backgroundColor: 'white', padding: 15 }}>
				<HeaderTab />
				<SearchBar />
			</View>
			<Categories />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	AndroidSafeArea: {
		flex: 1,
		backgroundColor: "#eee",
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
	}
})

export default Home;