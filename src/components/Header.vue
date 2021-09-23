<template>
    <header class="navbar-fixed mynav">
        <Nav />
        <FloatingButton />
    </header>
    <Sidebar :greeting="greeting" />
</template>

<script>
import Sidebar from './Sidebar';

import Nav from './Nav';
import FloatingButton from './FloatingButton';

export default {
    name:'Header',
    props: {
        greeting: String,
    },
    components: {
        Sidebar,
        Nav,
        FloatingButton
    }
}
</script>

<style scoped>
    .mynav{
        position:relative;
        top:-60px;
    }
</style>