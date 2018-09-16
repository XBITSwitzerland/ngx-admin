export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'general.menu.dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'miners',
        data: {
          menu: {
            title: 'general.menu.miners',
            icon: 'ion-speedometer',
            selected: false,
            expanded: false,
            order: 1
          }
        }
      },
      {
        path: 'hosting',
        data: {
          menu: {
            title: 'general.menu.hosting',
            icon: 'ion-calendar',
            selected: false,
            expanded: false,
            order: 2
          }
        }
      },
      {
        path: 'balances',
        data: {
          menu: {
            title: 'general.menu.balances',
            icon: 'ion-stats-bars',
            selected: false,
            expanded: false,
            order: 3
          }
        }
      },
      {
        path: 'profile',
        data: {
          menu: {
            title: 'general.menu.account',
            icon: 'ion-android-person',
            selected: false,
            expanded: false,
            order: 4
          }
        }
      },
      {
        path: 'logout',
        data: {
          menu: {
            title: 'Logout',
            icon: 'ion-android-exit',
            selected: false,
            expanded: false,
            order: 4
          }
        }
      }
    ]
  }
];
