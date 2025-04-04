import { createStackNavigator } from '@react-navigation/stack';
import { DetailsScreen } from '../screens/details/DetailsScreen';
import { HomeScreen } from '../screens/home/HomeScreen';

const Stack = createStackNavigator();

export type RootStackParams = {
    Home: undefined,
    Details: { movieId: number }
}

export const Navigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
}
