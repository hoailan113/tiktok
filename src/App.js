import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRouters } from './routers';
import { DefaultLayout } from '~/components/Layout';
import { HeaderOnlyLayout } from '~/components/Layout';
import { Fragment } from 'react';
function App() {
    return (
        <Router>
            <div className='App'>
                <Routes>
                    {publicRouters.map((route, index) => {
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
