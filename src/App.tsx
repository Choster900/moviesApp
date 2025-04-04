import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'

// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import { Navigation } from './presentation/navigations/Navigation';

export const App = () => {
    return (


        <NavigationContainer>

            {/* <View>
                <Text>MoviesApp</Text>
            </View> */}

            <Navigation />

        </NavigationContainer>

    )
}
