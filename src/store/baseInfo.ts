import { makeAutoObservable } from 'mobx'
import SheetStore from './sheetStore'

/**
 * 车卡时使用的类型
 * 可以被初始化/恢复
 */
export interface BaseInfo {
  name: string
  avatar: string

  hp?: number
  mp?: number
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

const defaultState: BaseInfo = {
  name: '',
  avatar: '',

  luck: 0,

  job: '',
  age: 0,
  sex: '',
  location: '',
  homeTown: '',

  str: 0,
  con: 0,
  siz: 0,
  dex: 0,
  app: 0,
  int: 0,
  pow: 0,
  edu: 0,
  mov: 0,
}

export class BaseInfoStore implements BaseInfo {
  private sheetStore: SheetStore

  get maxHp() {
    return Math.floor((this.con + this.siz) / 10)
  }
  get maxMp() {
    return Math.floor(this.pow / 5)
  }

  constructor(sheetStore: SheetStore, initState: BaseInfo) {
    this.sheetStore = sheetStore
    Object.assign(this, Object.seal(defaultState), initState)

    //init hp mp
    if (this.hp === undefined) this.hp = this.maxHp
    if (this.mp === undefined) this.mp = this.maxMp

    makeAutoObservable(this)
  }
  name!: string
  avatar!: string
  hp!: number
  mp!: number
  luck!: number
  job!: string
  age!: number
  sex!: string
  location!: string
  homeTown!: string
  str!: number
  con!: number
  siz!: number
  dex!: number
  app!: number
  int!: number
  pow!: number
  edu!: number
  mov!: number
}
