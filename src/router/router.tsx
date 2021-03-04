const router: any = [
  // { path: '/', component: '@/pages/index.tsx' },
  // { path: '/user', component: '@/pages/test/user.tsx' },
  // { path: '/home', component: '@/pages/Home/index.tsx' }
  {
    path: '/',
    component: '@/layouts/index',
    // redirect: '/home',
    routes: [
      { path: '/home', component: '@/pages/Home/index.tsx' },
      { path: '/house', component: '@/pages/House/index.tsx' },
    ],
  },
]

export default router;