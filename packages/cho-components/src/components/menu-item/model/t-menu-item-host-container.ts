export type TMenuItemHostContainer = HTMLElement & {
  removeMenuItem: (menuItem: HTMLChoMenuItemElement) => Promise<any>;
};
