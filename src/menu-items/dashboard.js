// assets
import { IconDashboard, IconLogout } from '@tabler/icons';

// constant
const icons = { IconDashboard, IconLogout };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'logout',
            title: 'Logout',
            type: 'item',
            url: '/login',
            icon: icons.IconLogout,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
