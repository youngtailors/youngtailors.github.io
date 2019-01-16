<template>
  <nav id="navigation-bar" class="container">
    <a class="logo" href="#">
      <g-image alt="Young Tailors" src="~/favicon.png" width="60" />
    </a>
    <ul class="menu">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Showcase</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <ul class="right-menu menu">
      <li><a href="#">Facebook</a></li>
      <li><a href="#">Github</a></li>
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
      color #FFF
  .right-menu
    margin-left auto
</style>
