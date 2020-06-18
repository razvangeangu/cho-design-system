export type TLinkTarget =
  /** Opens the linked document in a new window or tab */
  | '_blank'
  /** Opens the linked document in the same frame as it was clicked (this is default) */
  | '_self'
  /** Opens the linked document in the parent frame */
  | '_parent'
  /** Opens the linked document in the full body of the window */
  | '_top';
