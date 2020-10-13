import React from 'react'
import Figure from './figure'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'

const serializers = {
  types: {
    figure: Figure,
    youtube: ({node}) => {
      const {url} = node
      const id = getYouTubeId(url)
      return (<YouTube videoId={id} />)
    },
    flowplayervideo: ({node}) => {
      const {video} = node
      return (
        <iframe
          data-video-id={`${video}`}
          src={`https://ljsp.lwcdn.com/api/video/embed.jsp?id=${video}`}
          frameBorder='0'
          title='0' byline='0' portrait='0' width='640' height='360' allow='autoplay'
        />
      )
    }
  }
}

export default serializers
