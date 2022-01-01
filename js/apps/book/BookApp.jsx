import { AppHeader } from './cmps/AppHeader.jsx'
import { AppFooter } from './cmps/AppFooter.jsx'
import { UserMsg } from './cmps/UserMsg.jsx'
import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { BookApp } from './pages/BookApp.jsx'
import { BookDetails } from './pages/BookDetails.jsx'


const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM


export function BookStore() {
    return (
        <Router>
            <section className="app">
                <main>
                    <Switch>
                        <Route component={BookDetails} path="/miss-books/:bookId" />
                        <Route component={BookApp} path="/miss-books" />
                    </Switch>
                </main>
                <AppFooter />
                {/* <UserMsg /> */}
            </section>
        </Router>
    )
}