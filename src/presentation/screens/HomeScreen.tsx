import React from 'react'
import { Text, View } from 'react-native'
import { useMovies } from '../hooks/UseMovies'

export const HomeScreen = () => {

    const { } = useMovies()
    return (
        <View>
            <Text>HomeScreen</Text>
        </View>
    )
}
