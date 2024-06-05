<template>
    <nav class="flex flex-row items-center  max-h-16">
        <nuxt-link to="/">
            <img src="/img/site/logo.png" class="max-h-8" alt="Home" />
        </nuxt-link>
        <div class="flex-row grow hidden md:flex md:block">
            <nav-link to="/">
                Home
            </nav-link>
            <nav-link to="/showdown">
                Showdown
            </nav-link>
        </div>
    </nav>

    <slot />
</template>
