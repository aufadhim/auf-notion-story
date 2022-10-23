import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '66d7fa3c05d84dcca8b25e8be9218f43',

  // It's will be used as the root page when running `yarn dev`. (optional)
  // If you are suffering from the slow loading or compiling speed, set this to a smaller page.
  // Just leave `null` if you don't want to use it.
  rootNotionTestPageId: null,

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Auf Portfolio',
  domain: 'auf.id',
  author: 'Auf',

  // open graph metadata (optional)
  description: 'It is dialy story of Auf',

  // social usernames (optional)
  twitter: 'aufadhim',
  github: 'aufadhim',
  linkedin: 'aufadhim',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // Giscus comments via Github Discusstion (optional)
  //
  // To generate the following configs, visit https://giscus.app/.
  // giscusGithubConfig: {
  //   repo: 'fky2015/nexon',
  //   repoId: 'MDEwOlJlcG9zaXRvcnkzNzkxNDQ0NTQ=',
  //   category: 'Comments',
  //   categoryId: 'DIC_kwDOFplJBs4COB_h',
  //   mapping: 'title',
  //   reactionsEnabled: '1',
  //   theme: 'light',
  //   term: null,
  // },
  giscusGithubConfig: {
    repo:"aufadhim/auf-notion-story",
    repoId:"R_kgDOISgT0Q",
    category:"Announcements",
    categoryId:"DIC_kwDOISgT0c4CSJfN",
    mapping:"pathname",
    // strict:"0",
    reactionsEnabled:"1",
    emitMetadata:"0",
    inputPosition:"bottom",
    theme:"light",
    lang:"en",
    loading:"lazy",
    crossorigin:"anonymous",
  },
  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // Optional: Normally, the page contain it's metadata 
  // like `CreatedTime`, `LastEditedTime`.
  // These metadata cannot be changed by the user.
  // If you want to override this with a page property (so that 
  // you can custom it's value), specify it's name here.
  //
  // This should align with the property name in Notion.
  // And the data type should be `Date` or `String`.
  // Any invalid data type will be ignored and fallback to default metadata.
  //
  // These metadata will be used when generating RSS, Sitemap, etc.
  OverrideCreatedTime: null,
  OverrideLastEditedTime: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: '6539543ff902422b89de83502155f765'
    },
    {
      title: 'Gabut',
      pageId: '8660d2ff63744758b8442858681a50a2'
    },
  ]
})
