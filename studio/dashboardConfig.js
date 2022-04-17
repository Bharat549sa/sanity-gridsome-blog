export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '625c5d8b729830148a75795f',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-7ypbi2jc',
                  apiId: '8a200e9a-e95a-4597-bd50-ce5223c1d968'
                },
                {
                  buildHookId: '625c5d8c6b9d2b1001c45c99',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-qg1ukuau',
                  apiId: 'ca0eb1f4-d115-4f1b-b880-0858e6d07ed3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Bharat549sa/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-qg1ukuau.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
