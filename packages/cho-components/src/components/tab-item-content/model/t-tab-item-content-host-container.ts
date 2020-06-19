export type TTabItemContentHostContainer = HTMLElement & {
  removeTabItemContent: (tabItemContent: HTMLChoTabItemContentElement) => Promise<any>;
};
