import { useEffect, useState } from 'react'
import { Box, Typography } from './MUI'
import { useParams } from 'react-router-dom'

import { fetchFromAPI } from '../utils/fetchFromAPI'

import Videos from './Videos'

function SearchFeed() {
    const [videos, setVideos] = useState([])

    const { searchTerm } = useParams()

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
            .then((data) => setVideos(data.items))
            .catch((err) => console.log(err))
    }, [searchTerm]);

    return (
        <Box p={2} sx={{ overflowY: 'auto', height: "90vh", flex: 2 }} >
            <Typography variant="h4" fontWeight="bold" mb={2}
                sx={{ color: 'white' }} >
                Search results for: <span style={{ color: '#FC1503' }} >
                    {searchTerm}
                </span> videos
            </Typography>
            <Videos videos={videos} />
        </Box>
    )
}

export default SearchFeed