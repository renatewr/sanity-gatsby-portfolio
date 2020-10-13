import React from 'react'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'

const VideoEmbedPreview = ({value}) => {
    const {video} = value
    if(!video){
        return null
    }
    return ( <div>
        <iframe
          data-video-id={`${video.id}`}
          src={`https://ljsp.lwcdn.com/api/video/embed.jsp?id=${video.id}`}
          frameBorder="0"
          allowFullScreen
        />    
      </div>)
}

export default {
        name: 'flowplayervideo',
        title: 'Flowplayer',
        type: 'object',
        fields: [
          {
            title: 'Video',
            name: 'video',
            type: 'object',
            description: 'Half unicorns are okay',
            fields: [
              {
                title: 'Duration',
                name: 'duration',
                type: 'number'
              }
            ]
          }
        ],
    preview: {
        select: {
            video: 'video'
        },
        component: VideoEmbedPreview
    }
}