<template>
  <header class="top-header util__flex util__container">
    <nav class="top-header__col">
      <ul class="nav">
        <li>
          <nuxt-link class="nav__item" to="/">
            Home
          </nuxt-link>
        </li>
        <li>
          <nuxt-link class="nav__item" to="/en/blog">
            Blog
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <nav class="top-header__col top-header__second-navi">
      <ul class="nav">
        <li>
          <nuxt-link class="nav__item" to="/en/blog">
            English
          </nuxt-link>
        </li>
        <li>
          <nuxt-link class="nav__item" to="/de/blog">
            German
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
  .top-header{
    background-color: #FF0000;
  }

</style>
