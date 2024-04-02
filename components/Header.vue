<template>
  <header class="header">
    <div class="header-body">
      
      <div class="logo-container">
        <NuxtLink to="/" class="link">
          <img src="@/assets/images/logo.png" alt="" class="logo-image">
          <h2 class="logo-text langar-regular">ComeToMine</h2>
        </NuxtLink>
      </div>
      
      <nav class="nav">
        <ul class="links alegreya-sans-extrabold">
          <li><NuxtLink to="/">Главная</NuxtLink></li>
        </ul>
      </nav>
      
      <div class="login alegreya-sc-regular">
        <NuxtLink to="/join"><p>Войти</p></NuxtLink>
        <img src="@/assets/images/join.png" alt="">
      </div>
    </div>
  </header>
</template>

<style lang="less" scoped>
  .header {
    padding: 0px 5vw;

    & .header-body {
      padding-top: 10px;
      padding-bottom: 10px;
      display: flex;
      align-items: center;

      & .logo-container {
        margin-right: auto;

        & .link {
          margin-right: 10px;
          display: flex;
          align-items: center;

          & .logo-image {
            width: 60px;
          }

          & .logo-text {
            margin-left: 10px;
            color: #000000;
          }
        }
        
      }

      & .nav {

        & .links {
          display: flex;

          & > li {

            & > a {
              color: #000000;
              font-size: 20px;
            }
          }
        }
      } 
      
      & .login {
        margin-left: 5vw;
        display: flex;
        align-items: center;

        & > img {
          @size: 50px;
          margin-left: 10px;
          width: @size;
          height: @size;
        }
        
        & > p {

          & > a {
            color: #000000;
          }
        }
      }
    }
  }
</style>