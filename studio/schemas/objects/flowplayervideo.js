import React from 'react'
const VideoEmbedPreview = ({value}) => {
    const {video} = value
    if(!video){
        return null
    }
    return ( <div>
        <iframe
          data-video-id={`${video}`}
          src={`https://ljsp.lwcdn.com/api/video/embed.jsp?id=${video}`}
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
            type: 'string'
          }
        ],
    preview: {
        select: {
            video: 'video'
        },
        component: VideoEmbedPreview
    }
}