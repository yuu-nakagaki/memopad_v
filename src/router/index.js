import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewView from '../views/NewView.vue'
import EditView from '../views/EditView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {title: 'PETAMO', desc: 'ペタッと貼り付けかんたんメモアプリ'}
  },
  {
    path: '/new',
    name: 'new',
    component: NewView
  },
  {
    path:'/edit/:id', /*各メモを個別ページで見れるように/edit/（idつまりナンバリング）というパスにする*/
    name: 'edit', /*HomeViewの<router-link>（本件では、個別の編集ページへ飛ぶためのリンク）でnameを使ってリンク貼るために必要*/
    component: EditView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
