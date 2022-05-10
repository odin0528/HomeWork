<template>
  <div id="momofriends-footer">
    <div>
      <div><b-link to="/callus">聯絡毛毛</b-link></div>
      <div><b-link to="/aboutus">關於毛毛</b-link></div>
      <div>
        <b-link href="https://forms.gle/ZnGBDKxzPbod3wry9" target="_blank">
          滿意度調查
        </b-link>
      </div>
    </div>
    <div>
      <div><b-link to="/store">超商取貨/宅配相關資訊</b-link></div>
      <div><b-link to="/return">退貨退款方式</b-link></div>
    </div>
    <div>
      <div><b-link to="/contract">定型化契約條款</b-link></div>
      <div><b-link to="/privacy">隱私權保護政策</b-link></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#momofriends-footer {
  background-image: url(/images/footer/momofriends.png);
  height: 20.5vw;
  background-size: contain;
  background-repeat: no-repeat;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: #b78968;
  line-height: 3rem;
  padding: 2rem 3rem 0rem 16rem;
  font-family: cursive;
  font-size: 1.3rem;
}

@media (max-width: 576px) {
  #momofriends-footer {
    display: flex;
    justify-content: space-between;
    font-size: 0.7rem;
    line-height: 1.2rem;
    padding: 0rem 1rem;
  }
}
</style>
