<template>
    <div class="row">
        <div class="row">
            <h4>Choose An Option</h4>
            <div class="col s12 m6 l6">
                <router-link to="/shopping-carts" class="card grey lighten-3 hoverable">
                    <div class="card-content red darken-4 white-text">
                        <span class="card-title">&nbsp; Shopping &nbsp;&nbsp; Lists</span>
                    </div>
                    <div class="card-action">
                        <div class="row">
                            <div class="col s3"><span class="btn-floating btn-large red darken-4"><i class="material-icons">local_grocery_store</i></span></div>
                            <div class="col s9">
                                <ul>
                                    <li class="red-text text-darken-4">Create Shopping Lists</li>
                                    <li class="red-text text-darken-4">View Your Shopping History</li>
                                    <li class="red-text text-darken-4">Your Shopping Insights</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>

            <div class="col s12 m6 l6">
                <router-link to="/incomes" class="card grey lighten-3 hoverable">
                    <div class="card-content green darken-4 white-text">
                        <span class="card-title">Income & Earnings</span>
                    </div>
                    <div class="card-action">
                        <div class="row">
                            <div class="col s3"><span class="btn-floating btn-large green darken-4"><i class="material-icons">monetization_on</i></span></div>
                            <div class="col s9">
                                <ul>
                                    <li class="green-text text-darken-4">Add Your Income / Earnings</li>
                                    <li class="green-text text-darken-4">View Your Earning History</li>
                                    <li class="green-text text-darken-4">Your Earning Insights</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
            
            <div class="col s12 m6 l6">
                <router-link to="/damages-and-losses" class="card grey lighten-3 hoverable">
                    <div class="card-content grey darken-4 white-text">
                        <span class="card-title">Damages & Losses</span>
                    </div>
                    <div class="card-action">
                        <div class="row">
                            <div class="col s3"><span class="btn-floating btn-large grey darken-4"><i class="material-icons">broken_image</i></span></div>
                            <div class="col s9">
                                <ul>
                                    <li class="grey-text text-darken-4">Add Your Losses & Damages</li>
                                    <li class="grey-text text-darken-4">View Your Loss History</li>
                                    <li class="grey-text text-darken-4">Your Losses & Damages Insights</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
            
            <div class="col s12 m6 l6">
                <router-link to="/insights-and-statistics" class="card grey lighten-3 hoverable">
                    <div class="card-content indigo darken-4 white-text">
                        <span class="card-title">Insights & Statistics</span>
                    </div>
                    <div class="card-action">
                        <div class="row">
                            <div class="col s3"><span class="btn-floating btn-large indigo darken-4"><i class="material-icons">poll</i></span></div>
                            <div class="col s9">
                                <ul>
                                    <li class="indigo-text text-darken-4">Your Balance Sheet</li>
                                    <li class="indigo-text text-darken-4">Your Projections</li>
                                    <li class="indigo-text text-darken-4">Recommendations for You</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>