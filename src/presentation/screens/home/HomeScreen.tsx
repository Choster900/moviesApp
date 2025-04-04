import React from 'react'
import { View } from 'react-native'
import { useMovies } from '../../hooks/UseMovies';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { PosterCarousel } from '../../components/movies/PosterCarousel';

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets()

    const { isLoading, nowPlaying } = useMovies()
    return (
        <ScrollView>
            <View style={{ marginTop: top + 20, paddingBottom: 30 }}>
                <PosterCarousel movies={nowPlaying} />
            </View>
        </ScrollView>
    )
}
