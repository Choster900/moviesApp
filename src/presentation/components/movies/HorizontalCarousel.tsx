

import React, { useEffect, useRef } from 'react'
import { NativeScrollEvent, NativeSyntheticEvent, View } from 'react-native'
import { FlatList, Text } from 'react-native-gesture-handler'
import { Movie } from '../../../core/entities/movie.entity'
import { MoviePoster } from './MoviePoster'

interface Props {
    movies: Movie[]
    title: string
    loadNextPage?: () => void
}

export const HorizontalCarousel = ({ title, movies, loadNextPage }: Props) => {

    useEffect(() => {
        setTimeout(() => {
            isLoading.current = false
        }, 200);
    }, [movies])


    const isLoading = useRef(false)

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {

        if ( isLoading.current ) return

        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent

        const isEndReached = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width

        if (!isEndReached) return;

        isLoading.current = true

        loadNextPage && loadNextPage()



    }
    return (
        <View
            style={{ height: title ? 250 : 220 }}
        >
            {
                title && (
                    <Text
                        style={{
                            fontSize: 30,
                            fontWeight: 300,
                            marginLeft: 10,
                            marginBottom: 10
                        }}
                    >
                        {title}
                    </Text>
                )
            }


            <FlatList
                data={movies}
                renderItem={({ item }) => (
                    <MoviePoster movie={item} width={140} height={200} />
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                onScroll={(event) => onScroll(event)}
            />
        </View>
    )
}
