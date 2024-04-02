<template>
  <section class="about alegreya-sc-regular">
    <h2 class="about-title">
      Исследуйте безграничный мир ComeToMine, самого приятного сервера Minecraft!
    </h2>

    <div class="about-body ">
      
      <div class="info-server-1">
        <p>Погрузитесь в захватывающий мир, где вас ждут кастомные сборки и изменённые крафты.</p>
        <img src="@/assets/images/info-about-1.jpg" alt="">
      </div>
      
      <div class="info-server-2">
        <img src="@/assets/images/info-about-2.png" alt="">
        <p>Присоединяйтесь к нашему яркому сообществу и отправляйтесь в приключение – ведь копать в месте интереснее!</p>
      </div>
      
      <div class="info-server-3">
        
        <p>Откройте для себя радость игры с ComeToMine, где каждый блок рассказывает историю</p>
        <img src="@/assets/images/info-about-3.png" alt="">
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped>
  .about {

    & .about-title {
      margin-bottom: 100px;
      padding: 20px 0px;
      text-align: center;
      font-size: 3vw;
    }

    & .about-body {
      padding: 0px 20px;
      position: relative;
      display: flex;
      flex-direction: column;
      
      & .info-server-1 {
        display: flex;
        position: relative;
        align-items: center;

        & > img {
          margin-left: 5px;
          width: 25vw;
          border-radius: 15px;
        }

        & > p {
          max-width: 450px;
          font-size: 1.9vw;
          text-align: right;
        }
      }

      & .info-server-2 {
        margin-left: auto;
        margin-top: 40px;
        margin-bottom: 40px;
        display: flex;
        text-align: right;
        align-items: center;

        & > img {
          margin-right: 5px;
          border-radius: 15px;
          width: 25vw;

        }

        & > p {
          text-align: left;
          font-size: 1.9vw;
          max-width: 450px;
        }
      }

      & .info-server-3 {

        display: flex;
        position: relative;
        align-items: center;

        & > img {
          margin-left: 5px;
          border-radius: 15px;
          width: 25vw;
        }

        & > p {
          font-size: 1.9vw;
          max-width: 350px;
          text-align: right;
        }
      }
    }
  }
</style>