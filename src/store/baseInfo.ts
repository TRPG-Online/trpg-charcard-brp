import { makeAutoObservable } from 'mobx'
import SheetStore from './sheetStore'

/**
 * 车卡时使用的类型
 * 可以被初始化/恢复
 */
export interface BaseInfo {
  name: string
  avatar: string

  luck: number

  job: string
  age: number
  sex: string
  location: string
  homeTown: string

  str: number
  con: number
  siz: number
  dex: number
  app: number
  int: number
  pow: number
  edu: number
  mov: number
}

export class BaseInfo {
  private sheetStore: SheetStore

  private _hp: number = NaN
  private _mp: number = NaN

  get hp() {
    return this._hp === NaN ? this.maxHp : this._hp
  }
  set hp(val: number) {
    this._hp = val
  }
  get mp() {
    return this._mp === NaN ? this.maxMp : this._mp
  }
  set mp(val: number) {
    this._mp = val
  }

  get maxHp() {
    return Math.floor((this.con + this.siz) / 10)
  }
  get maxMp() {
    return Math.floor(this.pow / 5)
  }

  constructor(sheetStore: SheetStore) {
    this.sheetStore = sheetStore
    Object.assign(this, sheetStore.initState?.baseInfo)

    makeAutoObservable(this)
  }
}
