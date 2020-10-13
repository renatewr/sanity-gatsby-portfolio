import React from 'react'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'

const Preview = ({value}) => {
    const {url} = value;
    const id = getYouTubeId(url);
    return (<YouTube videoId={id} />)
}

export default {
    name: 'video',
    type: 'object',
    title: 'Video',
    fields: [
        {
            name: 'id',
            type: 'string',
            title: 'Id'
        }
    ]
}