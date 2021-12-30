import { Home } from './js/pages/app-home.jsx'
import { AppEmail } from './js/apps/mail/pages/app-email.jsx'
import { AppHeader } from './js/cmps/AppHeader.jsx'
<<<<<<< HEAD
import { MaillDetails } from './js/apps/mail/pages/mail-details.jsx'
=======
import { NoteIndex } from './js/apps/keep/pages/note-index.jsx'
>>>>>>> db8fcd2 (wed evening)

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM


export function App() {
    return (
        <Router >
            <section className="app" >
                <AppHeader />
                <main>
                    <Switch>
<<<<<<< HEAD
                        <Route component={MaillDetails} path="/mister-email/:emailId" />
=======
                        <Route component={NoteIndex} path="/miss-keep" />
>>>>>>> db8fcd2 (wed evening)
                        <Route component={AppEmail} path="/mister-email" />
                        <Route component={Home} path="/" />
                    </Switch>
                </main>
            </section>
            {/* <AppFooter /> */}
        </Router>
    )
}