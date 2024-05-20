// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    userInfo : null,
    signStatus : ""
  }),

  getters: {
    getUserInfo() {
      return this.userInfo;
    }
  },

  actions: {
    setUserInfo(userInfo) {
      this.userInfo = userInfo;
    },

    setSignStatus(signStatus) {
      this.signStatus = signStatus;
    }
  },

  persist: {
    enabled: true,
    strategies: [
      {
        key:'app',
        storage: localStorage,
      },
    ],
  }
})
