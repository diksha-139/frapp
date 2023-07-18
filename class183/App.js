import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home1 from './screens/Home';
import Main1 from './screens/Main';


var Stack = createStackNavigator();

function App() {
  
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName='Home'
				screenOptions={{
					headerShown: false,
				}}>
				<Stack.Screen name='Home' component={Home1} />
				<Stack.Screen name='Main' component={Main1} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;