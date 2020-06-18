export type TLinkRelation =
  /** Provides a link to an alternate representation of the document (i.e. print page, translated or mirror) */
  | 'alternate'
  /** Provides a link to the author of the document */
  | 'author'
  /** Permanent URL used for bookmarking */
  | 'bookmark'
  /** Indicates that the referenced document is not part of the same site as the current document */
  | 'external'
  /** Provides a link to a help document */
  | 'help'
  /** Provides a link to licensing information for the document */
  | 'license'
  /** Provides a link to the next document in the series */
  | 'next'
  /** Links to an unendorsed document, like a paid link. */
  | 'nofollow'
  //  is used by Google, to specify that the Google search spider should not follow that link
  | 'nofollow'
  /** Requires that the browser should not send an HTTP referer header if the user follows the hyperlink */
  | 'noreferrer'
  /** Requires that any browsing context created by following the hyperlink must not have an opener browsing context */
  | 'noopener'
  /** The previous document in a selection */
  | 'prev'
  /** Links to a search tool for the document */
  | 'search'
  /** A tag (keyword) for the current document */
  | 'tag';
