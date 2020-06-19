export const kAppBar = {
  componentName: 'cho-app-bar',
  classes: {
    container: 'app-bar__container',
    leading: 'app-bar__leading',
    title: 'app-bar__title',
    trailing: 'app-bar__trailing',
  },
  slots: {
    leading: 'leading',
    titile: 'title',
    trailing: 'trailing',
  },
} as const;
