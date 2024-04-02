<template>
  <section class="form-join alegreya-sc-regular">
    <div class="form-join-body">
      <div class="completion">
        <div class="entrance">

          <input type="text" placeholder="Логин">
          
          <br>

          <input type="password" placeholder="Пароль">

          <br>
          
          <a href="#">Забыли пароль?</a>
        </div>

        <div class="join">
          <button>Войти</button>
        </div>

        <div class="registration">
          <p>Нет аккаунта?</p>
          <NuxtLink to="/registration">Создать аккаунт</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped>
  .form-join {
    background-image: url("@/assets/images/form-bg.png");
    height: 100vh;
    background-position: center;
    background-size: cover;

    & .form-join-body {
      display: flex;
      justify-content: center;
      
      & .completion {
        padding: 100px;
        width: 50%;
        height: 40vh;
        background: #00000084;
        border-radius: 15px;
        position: absolute;
        left: 50%; top: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        color: #fff;

        & .entrance {

          & > input {
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 5px;
            max-width: 800px;
            min-width: 200px;
            font-size: 1.8vw;
            outline: 0;

            &:focus {
              box-shadow: 0 0 1rem rgba(108, 108, 108, 0.401);
            }
          }
        }

        & .join {
          margin-top: 6vw;
          margin-bottom: 20px;

          & > button {
            padding: 10px 20px;
            font-size: 2.5vw;
            cursor: pointer;
            border-radius: 10px;
            border: 1px solid #888888b3;
          }
        }

        & .registration {

          & > a {

          }
        }
      }
    }
  }
  a {
    color: rgb(0, 42, 255);
  }
</style>