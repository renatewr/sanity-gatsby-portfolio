import VideoInput from '../components/VideoInput'
import {get} from 'lodash'

export default function resolveInput(type) {
  if (type.title === 'Video') {
    return VideoInput
  }

  return false
}