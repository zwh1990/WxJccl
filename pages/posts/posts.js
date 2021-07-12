// pages/posts/posts.js

import {postList} from '../../data/data.js'
console.log(postList)

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.setStorageSync('flag', true)
    wx.setStorageSync('flag', false)
    // wx.clearStorageSync()
    // wx.removeStorageSync('flag')
    const flag = wx.getStorageSync('flag')
    console.log(flag)

    this.setData({
      postList
    })
  },

  onGoToDetail(event){
    console.log(event)
    const pid = event.currentTarget.dataset.postId
    console.log(pid)
    wx.navigateTo({
      url: '/pages/post-detail/post-detail?pid='+ pid,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("onPullDownRefresh")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("onReachBottom")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("onShareAppMessage")
  }
})