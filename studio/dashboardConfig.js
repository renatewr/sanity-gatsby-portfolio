export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e832c55f5b28b1f1e0302db',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-x88sbftb',
                  apiId: '1a83fbf1-311f-4f75-9350-94fcf1e40626'
                },
                {
                  buildHookId: '5e832c551e5e2bc97fd018e1',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-o1ngz7t2',
                  apiId: '3b58a38e-dcd4-4d09-af40-b39415224b92'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/renatewr/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-o1ngz7t2.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
