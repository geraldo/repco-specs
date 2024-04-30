// //typescript types for the transposer datasource

export interface TransposerPost {
  contentItem: TransposerContentItem
  mediaAssets: TransposerMediaAsset[]
}

export interface TransposerContentItem {
  ID: number
  title: any
  subtitle: any
  summary: any
  content: any
  pubDate: string
  modifiedDate: string
  commentStatus: string
  contentUrl: string
  originalLanguages: any
  teaserImageUid: number
  contentGrouping: TransposerContentGrouping[]
  concepts: TransposerConcept[]
  contributors: TransposerContributor[]
}

export interface TransposerContributor {
  id: number
  name: string
  description: string
  role: string
  personOrOrganization: string
  contactInformation: string
  url: string
}

export interface TransposerMediaAsset {
  ID: number
  title: any
  summary: any
  content: any
  mediaType: string
  concepts: TransposerConcept[]
  files: TransposerFile[]
}

export interface TransposerConcept {
  id: number
  name: any
  description: string
  slug: string
  kind: string
  parent: number
}

export interface TransposerFile {
  contentUrl: string
  contentSize: number
  mimeType: string
  resolution: string
  additionalMetadata: any
}

export interface TransposerContentGrouping {
  id: number
  groupingType: string
  startingDate: string
  ContentGroupingVariant: string
  title: any
  description: string
  url: string
}

// export interface TransposerPost {
//   id: number
//   date: string
//   date_gmt: string
//   guid: GUID
//   modified: string
//   modified_gmt: string
//   slug: string
//   status: string
//   type: string
//   link: string
//   title: GUID
//   content: Content
//   excerpt: Content
//   author: number
//   featured_media: number
//   comment_status: string
//   ping_status: string
//   sticky: boolean
//   template: string
//   format: string
//   meta: Meta
//   categories: number[]
//   tags: number[]
//   language: number[]
//   language_codes: string[]
//   editor: number[]
//   acf: any[]
//   post_parent: number
//   featured_image: number
//   production_date: string
//   _links: Links
//   _fetchedAttachements: any[]
//   translations: any[] | {}
//   license: {
//     license_image: string
//     license: string
//     version: string
//     conditions: string
//     license_link: string
//   }
// }

// export interface About {
//   href: string
// }

// export interface Cury {
//   name: string
//   href: string
//   templated: boolean
// }

// export interface PredecessorVersion {
//   id: number
//   href: string
// }

// export interface VersionHistory {
//   count: number
//   href: string
// }

// export interface WpTerm {
//   taxonomy: string
//   embeddable: boolean
//   href: string
// }

// export interface Content {
//   rendered: string
//   protected: boolean
// }

// export interface GUID {
//   rendered: string
// }

// export interface Meta {
//   station_id: number
// }

// export interface CbaSeries {
//   id: number
//   date: string
//   date_gmt: string
//   guid: GUID
//   modified: string
//   modified_gmt: string
//   slug: string
//   status: string
//   type: string
//   link: string
//   title: GUID
//   content: Content
//   featured_media: number
//   comment_status: string
//   ping_status: string
//   template: string
//   language_codes: string[]
//   translations: any[]
//   acf: any[]
//   post_parent: number
//   url: string
//   _links: Links
// }

// export interface CbaCategory {
//   id: number
//   count: number
//   description: string
//   link: string
//   name: string
//   slug: string
//   taxonomy: string
//   parent: number
//   meta: any[]
//   acf: any[]
//   _links: CategoryLinks
// }

// export interface CbaTag {
//   id: number
//   count: number
//   description: string
//   link: string
//   name: string
//   slug: string
//   taxonomy: string
//   meta: any[]
//   acf: any[]
//   _links: CategoryLinks
// }
// export interface CbaCategory {
//   id: number
//   count: number
//   description: string
//   link: string
//   name: string
//   slug: string
//   taxonomy: string
//   parent: number
//   meta: any[]
//   acf: any[]
//   _links: CategoryLinks
// }

// export interface CbaTag {
//   id: number
//   count: number
//   description: string
//   link: string
//   name: string
//   slug: string
//   taxonomy: string
//   meta: any[]
//   acf: any[]
//   _links: CategoryLinks
// }
// export interface Links {
//   self: About[]
//   collection: About[]
//   about: About[]
//   author: EmbeddedLink[]
//   replies: EmbeddedLink[]
//   'version-history': VersionHistory[]
//   'predecessor-version': PredecessorVersion[]
//   series: EmbeddedLink[]
//   station: EmbeddedLink[]
//   featured_image: EmbeddedLink[]
//   'wp:attachment': About[]
//   'wp:featuredmedia': EmbeddedLink[]
//   'wp:term': WpTerm[]
//   curies: Cury[]
// }

// export interface StationLinks {
//   self: About[]
//   collection: About[]
//   about: About[]
//   author: EmbeddedLink[]
//   replies: EmbeddedLink[]
//   'wp:attachment': About[]
//   'wp:featuredmedia': EmbeddedLink[]
//   'wp:term': WpTerm[]
//   curies: Cury[]
// }

// export interface MediaLinks {
//   self: About[]
//   collection: About[]
//   about: About[]
//   author: EmbeddedLink[]
//   replies: EmbeddedLink[]
//   'wp:term': WpTerm[]
//   curies: Cury[]
// }

// export interface CategoryLinks {
//   self: About[]
//   collection: About[]
//   about: About[]
//   'wp:post_type': About[]
//   curies: Cury[]
// }
// export interface EmbeddedLink {
//   embeddable: boolean
//   href: string
// }

// export interface CbaStation {
//   id: number
//   date: string
//   date_gmt: string
//   guid: number
//   modified: string
//   modified_gmt: string
//   slug: string
//   status: string
//   type: string
//   link: string
//   title: GUID
//   content: Content
//   featured_media: string
//   comment_status: string
//   ping_status: string
//   template: string
//   language_codes: string[]
//   translations: any[]
//   acf: any[]
//   livestream_urls: any[]
//   _links: StationLinks
// }

// export interface CbaAudio {
//   id: number
//   date: string
//   date_gmt: string
//   guid: string
//   modified: string
//   modified_gmt: string
//   slug: string
//   status: string
//   type: string
//   link: string
//   title: GUID
//   author: number
//   comment_status: string
//   ping_status: string
//   template: string
//   meta: {
//     station_id: number
//   }
//   media_tag: any[]
//   language_codes: string[]
//   translations: any[]
//   acf: any[]
//   originators: any[]
//   transcripts: any[]
//   source_url: string
//   license: {
//     license_image: string
//     license: string
//     version: string
//     conditions: string
//     license_link: string
//   }
//   description: {
//     rendered: string
//   }
//   caption: {
//     rendered: string
//   }
//   alt_text: string
//   media_type: string
//   mime_type: string
//   media_details: {
//     dataformat: string
//     channels: number
//     sample_rate: number
//     bitrate: number
//     channelmode: string
//     bitrate_mode: string
//     codec: string
//     encoder: string
//     lossless: boolean
//     encoder_options: string
//     compression_ratio: number
//     fileformat: string
//     filesize: number
//     mime_type: string
//     length: number
//     length_formatted: string
//     sizes: string
//   }
//   post: number
//   _links: MediaLinks
// }

// export interface CbaImage {
//   id: number
//   date: string
//   date_gmt: string
//   guid: string
//   modified: string
//   modified_gmt: string
//   slug: string
//   status: string
//   type: string
//   link: string
//   title: GUID
//   author: number
//   comment_status: string
//   ping_status: string
//   template: string
//   meta: {
//     station_id: number
//   }
//   media_tag: any[]
//   language_codes: string[]
//   translations: any[]
//   acf: any[]
//   originators: any[]
//   transcripts: any[]
//   source_url: string
//   license: {
//     license_image: string
//     license: string
//     version: string
//     conditions: string
//     license_link: string
//   }
//   description: {
//     rendered: string
//   }
//   caption: {
//     rendered: string
//   }
//   alt_text: string
//   media_type: string
//   mime_type: string
//   media_details: {
//     width: number
//     height: number
//     file: string
//     filesize: number
//     //there is much more info
//   }
//   post: number
//   _links: MediaLinks
// }
