import React from 'react'
import { View, Text } from 'react-native';
import { useMovies } from '../../hooks/UseMovies';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { PosterCarousel } from '../../components/movies/PosterCarousel';
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel';

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets()

    const { isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage } = useMovies()

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Cargando</Text>
            </View>
        )

    }
    return (
        <ScrollView>
            <View style={{ marginTop: top + 20, paddingBottom: 30 }}>

                {/* Principal */}
                <PosterCarousel movies={nowPlaying} />

                {/* Populares */}
                <HorizontalCarousel
                    title='Popular movies'
                    movies={popular}
                    loadNextPage={() => popularNextPage()}
                />

                {/* Top Rated */}
                <HorizontalCarousel title='Top Rated' movies={topRated} />

                {/* Upcoming */}
                <HorizontalCarousel title='Upcoming' movies={upcoming} />

            </View>
        </ScrollView>
    )
}
