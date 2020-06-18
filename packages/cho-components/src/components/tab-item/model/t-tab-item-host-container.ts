export type TTabItemHostContainer = HTMLElement & {
  removeTabItem: (tabItem: HTMLChoTabItemElement) => Promise<any>;
};
