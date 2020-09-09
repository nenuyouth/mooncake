Page({
  data: {
    /** 用户是否已经下单 */
    isOrderd: false,
  },

  navigate() {
    wx.navigateTo({
      url: `/pages/${this.data.isOrderd ? "order/order" : "login/login"}`,
    });
  },
});
