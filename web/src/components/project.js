import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
import Related from './related'
import BlockContent from './block-content'
import Container from './container'

import styles from './project.module.css'

function Project (props) {
  const {_rawBody, title, publishedAt, categories, relatedProjects} = props
  return (
    <article className={styles.root}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
            {_rawBody && <BlockContent blocks={_rawBody || []} />}
            {publishedAt && (
              <div className={styles.publishedAt}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do YYYY')}
              </div>
            )}
          </div>
        </div>
        {relatedProjects && relatedProjects.length > 0 && (
          <div className={styles.relatedProjects}>
            <h3 className={styles.relatedProjectsHeadline}>Related projects</h3>
            <Related projects={relatedProjects} />
          </div>
        )}
      </Container>
    </article>
  )
}

export default Project
