import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Book from '../views/book/Book.vue';
import Community from '../views/community/Community.vue';
import Login from '../views/auth/Login.vue';
import Join from '../views/auth/Join.vue';
import MyPage from '../views/auth/MyPage.vue';
import CreateCommunity from '../views/community/CreateCommunity.vue';
import CommunityDetail from '../views/community/CommunityDetail.vue';
import NoticeDetail from '../views/notice/NoticeDetail.vue';
import EditCommunity from '../views/community/EditCommunity.vue';
import CreateNotice from '../views/notice/CreateNotice.vue';
import EditNotice from '../views/notice/EditNotice.vue';
import EditUser from '../views/auth/EditUser.vue';
import Admin from '../views/auth/Admin.vue';
import MyPost from '../views/auth/MyPost.vue';
import UserInfo from '../views/auth/UserInfo.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/Join',
    name: 'Join',
    component: Join,
  },
  {
    path: '/MyPage',
    name: 'MyPage',
    component: MyPage,
  },
  {
    path: '/MyPost/:id',
    name: 'MyPost',
    component: MyPost,
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: Admin,
  },
  {
    path: '/EditUser',
    name: 'EditUser',
    component: EditUser,
  },
  {
    path: '/UserInfo/:id',
    name: 'UserInfo',
    component: UserInfo,
  },
  {
    path: '/Book',
    name: 'Book',
    component: Book,
  },
  {
    path: '/Community',
    name: 'Community',
    component: Community,
  },
  {
    path: '/CreateCommunity',
    name: 'CreateCommunity',
    component: CreateCommunity,
  },
  {
    path: '/CommunityDetail/:id',
    name: 'CommunityDetail',
    component: CommunityDetail,
  },
  {
    path: '/EditCommunity/:id',
    name: 'EditCommunity',
    component: EditCommunity,
  },
  {
    path: '/NoticeDetail/:id',
    name: 'NoticeDetail',
    component: NoticeDetail,
  },
  {
    path: '/CreateNotice',
    name: 'CreateNotice',
    component: CreateNotice,
  },
  {
    path: '/EditNotice/:id',
    name: 'EditNotice',
    component: EditNotice,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
