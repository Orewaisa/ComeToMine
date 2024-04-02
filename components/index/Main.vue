<template>
  <section class="main">
    <div class="main-body">
      <div class="information alegreya-sc-regular">
        <h1 class="title langar-regular">
          ComeToMine
        </h1>
        <h4 class="sub-title">
          Самый родной сервер с модами
        </h4>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped>
  .main {
    background-image: url("@/assets/images/bg-1.jpg");
    background-position: center;
    background-size: cover;
    height: 100vh;

    & .main-body {
      display: flex;
      justify-content: center;
      align-items: center;

      & .information {
        padding: 40px 80px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: #48484892;
        border-radius: 15px;
        text-align: center;
        color: #0dff00;

        & .title {
          margin: 0;
          font-size: 8vw;
        }
        & .sub-title {
          font-size:2vw;
          
        }
      }
    }
  }
</style>