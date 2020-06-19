export type TExpansionPanelItemHostContainer = HTMLElement & {
  removeExpansionPanelItem: (expansionPanelItem: HTMLChoExpansionPanelItemElement) => Promise<any>;
};
