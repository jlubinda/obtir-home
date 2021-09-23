<template>
    <div class="fixed-action-btn">
        <a class="btn-floating btn-large red">
            <i class="large material-icons">add</i>
        </a>
        <ul class="floating-btn-list">
            <li class="floating-item green-text"><router-link to="/shopping-carts">Shopping List </router-link><router-link class="btn-floating green" to="/shopping-lists"><i class="material-icons">add_shopping_cart</i></router-link></li>
            <li class="floating-item blue-text"><router-link to="/incomes">Income </router-link><router-link class="btn-floating blue" to="/incomes"><i class="material-icons">monetization_on</i></router-link></li>
            <li class="floating-item red-text text-darken-1"><router-link to="/damages-and-losses">Damages & Losses </router-link><router-link class="btn-floating red darken-1" to="/damages-and-losses"><i class="material-icons">broken_image</i></router-link></li>
            <!--<li><a class="btn-floatingx blue">Furniture, Kitchenware & Utensiles <i class="material-icons">attach_file</i></a></li>
            <li><a class="btn-floatingx blue">Appliances, Gadgets, Equipment & Tools <i class="material-icons">attach_file</i></a></li>
            <li><a class="btn-floatingx blue">Bills, Transport & Communication <i class="material-icons">attach_file</i></a></li>
            <li><a class="btn-floatingx blue">Education, Assets & Investments <i class="material-icons">attach_file</i></a></li>
            <li><a class="btn-floatingx blue">Recreation, Trips & Holidays <i class="material-icons">attach_file</i></a></li>
            -->
        </ul>
    </div>
</template>


<script>

export default {
    name: 'FloatingButton',
}
</script>

<style scoped>
.floating-btn-list{
    width:190px;
    position:absolute;
    text-align:left;
}
.floating-item{
    width:190px;
    font-weight:bold;
    text-align:right;
    position:relative;
    right:145px;
}
</style>