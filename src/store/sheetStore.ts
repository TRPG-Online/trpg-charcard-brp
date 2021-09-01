import { PartialDeep } from 'type-fest'
import { BaseInfo } from './baseInfo'

class SheetStore {
  initState?: PartialDeep<SheetStore>
  baseInfo: BaseInfo

  constructor(initState?: PartialDeep<SheetStore>) {
    this.initState = initState
    this.baseInfo = new BaseInfo(this)
  }
}

export default SheetStore
