import {createRouter, createWebHistory} from 'vue-router'

import Dashboard from "../views/Dashboard";
import DashboardShoppingCarts from "../views/DashboardShoppingCarts";
import ListShoppingCarts from "../views/ListShoppingCarts";
import ListShoppingCartItems from "../views/ListShoppingCartItems";
import DashboardIncomes from "../views/DashboardIncomes";
import ListIncomes from "../views/ListIncomes";
import DashboardDamagesAndLosses from "../views/DashboardDamagesAndLosses";
import ListDamagesAndLosses from "../views/ListDamagesAndLosses";



const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/shopping-carts',
        name: 'DashboardShoppingCarts',
        component: DashboardShoppingCarts
    },
    {
        path: '/shopping-carts-list',
        name: 'ListShoppingCarts',
        component: ListShoppingCarts
    },
    {
        path: '/shopping-cart-items',
        name: 'ListShoppingCartItems',
        component: ListShoppingCartItems
    },
    {
        path: '/incomes',
        name: 'DashboardIncomes',
        component: DashboardIncomes
    },
    {
        path: '/incomes-list',
        name: 'ListIncomes',
        component: ListIncomes
    },
    {
        path: '/damages-and-losses',
        name: 'DashboardDamagesAndLosses',
        component: DashboardDamagesAndLosses
    },
    {
        path: '/damages-and-losses-list',
        name: 'ListDamagesAndLosses',
        component: ListDamagesAndLosses
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router