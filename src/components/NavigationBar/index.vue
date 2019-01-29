<template>
  <nav id="navigation-bar" class="container">
    <a class="logo" href="#">
      <g-image alt="Young Tailors" src="~/favicon.png" width="60" />
    </a>
    <ul class="right-menu menu">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Projects</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="https://github.com/youngtailors">Github</a></li>
    </ul>
  </nav>
</template>

<style lang="stylus">
#navigation-bar
  display flex
  flex-direction row
  align-items center
  .logo
    display block
  .menu
    display flex
    list-style none
    padding 0
    margin 0
    li > a
      padding .5rem 1rem
      color #707070
  .right-menu
    margin-left auto
</style>
