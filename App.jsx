import { Home } from './js/pages/app-home.jsx'
import { AppHeader } from './js/cmps/AppHeader.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM


export function App() {
    return (
        <Router >
            <section className="app" >
                <AppHeader />
                <main>
                    <Switch>
                        <Route component={Home} path="/" />
                    </Switch>
                </main>
            </section>
            {/* <AppFooter /> */}
        </Router>
    )
}