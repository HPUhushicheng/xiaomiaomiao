import type { App } from "vue";
import { createPinia } from "pinia";
const store = createPinia();

export function setupStore(app: App<Element>) {
  app.use(store);
}

export { store };

import { defineStore } from 'pinia'

export const useTableListStore = defineStore('tableList', {
  state: () => {
    return {
      tableList: [
  {
    id:'1',
    name: '窗户',
    left: [
      {
        id: '11',
        name: '用户A',
        isLocation: true
      },
      {
        id: '12',
        name: '办公桌',
        isLocation: true
      },
      {
        id: '13',
        name: '用户A',
        isLocation: true
      },
      {
        id: '14',
        name: '办公桌',
        isLocation: true
      },
      {
        id: '15',
        name: '用户A',
        isLocation: true
      },
      {
        id: '16',
        name: '办公桌',
        isLocation: true
      },
      {
        id: '17',
        name: '用户A',
        isLocation: true
      },
      {
        id: '18',
        name: '办公桌',
        isLocation: true
      }
    ],
    right: [{
      id:'21',
      name: ''
    },{
      id:'22',
      name: '',
      list: [{
          id:'21',
          name: '柜子',
          widht: 1,
          height: 2,
          isLocation: true
        }]
    }]
  },{
    id:'2',
    name: '窗户',
    left: [
      {
        id: '11',
        name: '用户B',
        isLocation: true
      },
      {
        id: '12',
        name: '办公桌',
        isLocation: true
      },
      {
        id: '13',
        name: '用户A',
        isLocation: true
      },
      {
        id: '14',
        name: '办公桌',
        isLocation: true
      },
      {
        id: '15',
        name: '办公桌',
        isLocation: true
      },
      {
        id: '16',
        name: '用户A',
        isLocation: true
      },
      {
        id: '17',
        name: '用户A',
        isLocation: true
      },
      {
        id: '18',
        name: '办公桌',
        isLocation: true
      }
    ],
    right: [{
      id:'21',
      name: ''
    },{
      id:'22',
      name: '',
      list: [{
          id:'21',
          name: '柜子',
          widht: 1,
          height: 1,
          isLocation: true
        },{
          id:'22',
          name: '',
          widht: 1,
          height: 1,
          isLocation: true
      }]
    }]
  },{
    id:'3',
    name: '窗户',
    left: [
      {
        id: '11',
        name: '用户C',
          isLocation: true
      },
      {
        id: '12',
        name: '办公桌',
          isLocation: true
      },
      {
        id: '13',
        name: '用户A',
          isLocation: true
      },
      {
        id: '14',
        name: '办公桌',
          isLocation: true
      },
      {
        id: '15',
        name: '办公桌',
          isLocation: true
      },
      {
        id: '16',
        name: '用户A',
          isLocation: true
      },
      {
        id: '17',
        name: '用户A',
          isLocation: true
      },
      {
        id: '18',
        name: '办公桌',
          isLocation: true
      }
    ],
    right: [{
      id:'21',
      name: ''
    },{
      id:'22',
      name: '',
      list: [{
          id:'21',
          name: '柜子',
          widht: 1,
          height: 1,
          isLocation: true
        },{
          id:'22',
          name: '',
          widht: 1,
          height: 1,
          isLocation: true
      }]
    }]
  },{
    id:'4',
    name: '窗户',
    left: [
      {
        id: '11',
        name: '',
        isLocation: true
      },
      {
        id: '12',
        name: '办公桌',
        isLocation: true
      },
      {
        id: '13',
        name: '',
        isLocation: true
      },
      {
        id: '14',
        name: '办公桌',
        isLocation: true
      },
      {
        id: '15',
        name: '',
        isLocation: true
      },
      {
        id: '16',
        name: '办公桌',
        isLocation: true
      },
      {
        id: '17',
        name: '',
        isLocation: true
      },
      {
        id: '18',
        name: '',
        isLocation: true
      }
    ],
    right: [{
      id:'21',
      name: '',
      isLocation: true
    },{
      id:'22',
      name: '',
      list: [{
          id:'21',
          name: '柜子',
          widht: 1,
          height: 2,
          isLocation: true
        }]
    }]
  }
],
    }
  },
  getters:{},
  actions:{}
})
