import { makeAutoObservable } from 'mobx'
import { BaseInfo, BaseInfoStore } from './baseInfo'

export interface SheetInit {
  baseInfo: BaseInfo
}

class SheetStore {
  baseInfo: BaseInfoStore

  constructor(initState: SheetInit) {
    this.baseInfo = new BaseInfoStore(this, initState.baseInfo)

    makeAutoObservable(this)
  }
}

export default SheetStore
