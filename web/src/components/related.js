import {Link} from 'gatsby'
import React from 'react'
import {cn, buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'

import styles from './project-preview-grid.module.css'
import RelatedPrevjew from './related-preview'
import {responsiveTitle3} from './typography.module.css'

function Related ({projects}) {
  return (
    <div className={styles.root}>
      <ul className={styles.grid}>
        {projects &&
          projects.map(project => (
            <RelatedPrevjew project={project} />
          ))}
      </ul>
    </div>
  )
}

export default Related
