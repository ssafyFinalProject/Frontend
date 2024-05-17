// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    //TODO: login 과정에서 설정
    userInfo : {
      nickname: 'Guest',
      email: '',
      role: 'GUEST'
    }
  }),

  getters: {
    // getUserInfo() {
    //   return this.userInfo ? this.userInfo : {
    //     nickname: 'Guest',
    //     email: 'test@test.com',
    //     role: 'GUEST'
    //   };
    // }
  },

  actions: {
    // setUserInfo(userInfo) {
    //   this.userInfo = userInfo;
    // }
  }
})
