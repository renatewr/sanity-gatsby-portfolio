import {Link} from 'gatsby'
import React from 'react'
import {cn, buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import BlockText from './block-text'

import styles from './project-preview.module.css'
import {responsiveTitle3} from './typography.module.css'

function RelatedPrevjew ({project}) {
  return (
    <li key={project.id}>
      <Link className={styles.root} to={`/project/${project.slug.current}`}>
        <div className={styles.leadMediaThumb}>
          {project.mainImage && project.mainImage.asset && (
            <img
              src={imageUrlFor(buildImageObj(project.mainImage))
                .width(600)
                .height(Math.floor((9 / 16) * 600))
                .url()}
              alt={project.mainImage.alt}
            />
          )}
        </div>
        <h3 className={cn(responsiveTitle3, styles.title)}>{project.title}</h3>
      </Link>
    </li>
  )
}

export default RelatedPrevjew
