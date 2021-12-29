import { Home } from './js/pages/app-home.jsx'
import { AppEmail } from './js/apps/mail/pages/app-email.jsx'
import { AppHeader } from './js/cmps/AppHeader.jsx'
import { MaillDetails } from './js/apps/mail/pages/mail-details.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM


export function App() {
    return (
        <Router >
            <section className="app" >
                <AppHeader />
                <main>
                    <Switch>
                        <Route component={MaillDetails} path="/mister-email/:emailId" />
                        <Route component={AppEmail} path="/mister-email" />
                        <Route component={Home} path="/" />
                    </Switch>
                </main>
            </section>
            {/* <AppFooter /> */}
        </Router>
    )
}