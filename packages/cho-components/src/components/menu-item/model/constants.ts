export const kMenuItem = {
  componentName: 'cho-menu-item',
  classes: {
    li: 'menu-item__li',
    liSelected: 'menu-item__li--selected',
  },
  events: {
    menuItemConnected: 'menuItemConnected',
    menuItemDisconnected: 'menuItemDisconnected',
  },
} as const;
