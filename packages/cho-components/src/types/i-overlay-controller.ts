export interface IOverlayController {
  /**
   * If `true`, the dropdown will be visible.
   *
   * @default false
   */
  visible?: boolean;

  /**
   * Open the dropdown.
   */
  open: () => Promise<void>;

  /**
   * Close the dropdown.
   */
  close: () => Promise<void>;
}
