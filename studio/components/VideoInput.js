import React from 'react'
import PropTypes from 'prop-types'
import FormField from 'part:@sanity/components/formfields/default'
import PatchEvent, {set, unset} from 'part:@sanity/form-builder/patch-event'
import FormBuilder, {withDocument} from 'part:@sanity/form-builder'
import Preview from 'part:@sanity/components/previews/detail'
import styles from './styles.css'

export default withDocument(class VideoInput extends React.Component {
    static propTypes = {
      type: PropTypes.shape({
        title: PropTypes.string,
      }).isRequired,
      value: PropTypes.object,
      onChange: PropTypes.func.isRequired
    };

    constructor() {
        super()
    
        this.state = {
          videos: []
        }
      }
    
      componentDidMount() {
        this.fetchVideos()
      }
  
    focus() {
    }

    fetchVideos = () => {
        const url = `https://ljsp.lwcdn.com/web/public/site/a19e9d1d-69cb-44af-a9e8-370da50895c7/videos.json`
    
        fetch(url)
        .then(results => {
            const data = results.json()
            return data
        }).then((data) => {
          this.setState({videos: data.videos})
        })
    }

    calculateDuration = (value) => {
        const minutes = Math.floor(value / 60);
        return minutes ? minutes : value
    }
    

    handleChange = (value) => {
        const inputValue = value && value.id
        const patch = inputValue === '' ? unset() : set(inputValue)
        this.props.onChange(PatchEvent.from(patch))
      }
  
    render() {
        // const {document, type, onChange} = this.props
        const {type, value, level} = this.props
        const title = `${type.title}: ${value}`
      return (
        <div>
        <ul className={styles.videoInput}>
        {this.state.videos.map(key => (
            <li key={key.id} onClick={() => this.handleChange(key)}>
                <Preview
                title={key.name}
                subtitle={key.created_at}
                description={key.description}
                media={<img src={key.images.thumbnail_url}/>}
            />
            </li>
          ))}
        </ul>
        </div>
      )
    }
  })
  