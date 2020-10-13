import VideoInput from '../components/VideoInput'

export default function resolveInput(type) {
  if (type.title === 'Video') {
    return VideoInput
  }

  return false
}