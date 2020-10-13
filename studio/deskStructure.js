import S from '@sanity/desk-tool/structure-builder'
import MdSettings from 'react-icons/lib/md/settings'

const hiddenDocTypes = listItem =>
  !['category', 'person', 'sampleProject', 'siteSettings'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdSettings),
      S.listItem()
        .title('Episoder')
        .schemaType('sampleProject')
        .child(S.documentTypeList('sampleProject').title('Episoder')),
      S.listItem()
        .title('People')
        .schemaType('person')
        .child(S.documentTypeList('person').title('People')),
      S.listItem()
        .title('Serier')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Serier')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
