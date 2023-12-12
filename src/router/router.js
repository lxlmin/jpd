import home from '@/views/HomePage'


const routes = [
    {
        path:'/',
        redirect:'/ind'
    },
   
    {
        path:'/ind',
        component:()=>import('@/views/Insong')
    },
    {
        path:'/vio',
        component:()=>import('@/views/ViodeWo')
    },
    {
        path:'/pre',
        component:()=>import('@/views/person')
    },
    {
        path:'/longin',
        component:()=>import('@/views/login/index')
    },
    // {
    //     path:'/sheets',
    //     name:'sheets',
    //     component:()=>import('@/views/song/SongSheet')
    // },
    {
        path:'/home',
        name:'home',
        component:home
    },
    {
        path:'/rank',
        name:'rank',
        component:()=>import('@/views/RankingList')
    },
    {
        path:'/my',
        name:'my',
        component:()=>import('@/views/MyMe')
    },
    {
        path:'/action',
        name:'action',
        component:()=>import('@/views/AttenTion')
    },
    {
        path:'/community',
        name:'community',
        component:()=>import('@/views/ComMunity')
    },
    {
        path:'/main',
        component:()=>import('@/components/AudioPlay/main')
    },
]

export default routes