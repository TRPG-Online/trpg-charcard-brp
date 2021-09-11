import SheetStore from '../store/sheetStore'
import { PartialDeep } from 'type-fest'

const store: PartialDeep<SheetStore> = {
  baseInfo: {
    name: '温蒂妮',
    avatar: 'https://i.loli.net/2021/08/27/pogEzeW96bys2t8.png',

    hp: 5,
    mp: 3,
    luck: 0,

    job: '记者',
    age: 23,
    sex: '女',
    location: '',
    homeTown: '',

    str: 60,
    con: 45,
    siz: 80,
    dex: 75,
    app: 45,
    int: 80,
    pow: 0,
    edu: 80,
    mov: 7,
  },
}

export default store
