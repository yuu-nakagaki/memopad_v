import { createStore } from 'vuex'
import { VuexPersistence } from 'vuex-persist' /*永続化のためのプラグインvuex-persistをインポート*/

const vuexPersist = new VuexPersistence({
  storage: localStorage
})

export default createStore({
  state: {
    count: 0,
    memos: [] /*配列の入れ物。ここにmutation（＝変異の意）の変更内容を反映させる*/
  },
  getters: {
    getCount: (state) => {
      return state.memos.length /*配列の長さを測り、メモが1件も無ければ0つまりfalseが返る*/
    },
    getAll: (state) => {
      return state.memos
    },
    getMemoById: (state) => (id) => {
      return state.memos.find(memo => memo.id === id) /* 編集画面（EditView）用。配列の検索機能でidを指定して、そのidと一致するメモだけを取り出す*/
    }
  },
  mutations: { /*mutations：storeのデータを変更する*/
    RESTORE_MUTATION: vuexPersist.RESTORE_MUTATION,
    /*メモを保存する*/
    save (state, newMemo){
      if (newMemo.id) {
        let x = state.memos.find(memo => memo.id === newMemo.id)
        /*memoのidがnewMemoのidと一致するものだけを取り出す（上書き保存の動き用）*/
        x.title = newMemo.title
        x.content = newMemo.content
        /*既存のメモの書き換え処理 */
      } else {
        newMemo.id = ++state.count /*データ特定用のidを付与「unshift」で新しく追加したものが前にくるようになってるため、順番を混同しないよう*/
        state.memos.unshift(newMemo)
      }
    },
    /*メモを削除する*/
    delete (state, id) {
      state.memos = state.memos.filter(memo => memo.id !== id)
      /*「配列の中の一件だけ削除する」という動きを実現するため、「配列から削除したいデータ以外を抜き出し新しい配列に加える」という形にする*/
      /*memo.idが今指定されているid以外のものを取り出す（filter）。つまり、削除したいものだけ排除された配列が渡されてくる。それをstate.memosに保存（上書き）*/
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexPersist.plugin]
})
