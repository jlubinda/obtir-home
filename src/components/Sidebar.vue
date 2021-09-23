<template>
    <ul class="sidenav z-depth-4 indigo" id="slide-out">
        <li>
            <div class="user-view" style="padding-bottom:5px;">
                <span class="white-text name" style="margin-bottom:2px;">
                    {{ greeting }}
                </span> 
            </div>
        </li>    
		<li>
            
  <!--"/shopping-carts": DashboardShoppingLists,
  "/shopping-lists/list-shopping-carts": ListShoppingCarts,
  "/shopping-lists/list-cart-items": ListShoppingCartItems,
  "/incomes": DashboardIncomes,
  "/incomes/list": ListIncomes,
  "/damages-and-losses": DashboardDamagesAndLosses,
  "/damages-and-losses/list": ListDamagesAndLosses,
-->
            <ul class="white">
                <li><router-link to="/">Dashboard</router-link></li>
                <li><router-link to="/shopping-carts">Shopping Carts</router-link></li>
                <li><router-link to="/incomes">Incomes</router-link></li>
                <li><router-link to="/damages-and-losses">Damages & Losses</router-link></li>
            </ul>
        </li>
        <li><!--<a class="subheader">Subheader</a>--><br></li>
    </ul>
</template>

<script>
export default {
    name: 'Sidebar',
    props: {
        greeting: String,
    },
}
</script>