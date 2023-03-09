import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import { HeaderOnlyLayout, DefaultLayout } from '~/components/Layout';
const publicRouters = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnlyLayout },
    { path: '/search', component: Search, layout: null },
];
const privateRouters = [];

export { privateRouters, publicRouters };
