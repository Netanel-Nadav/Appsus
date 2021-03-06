const { Link } = ReactRouterDOM

export function Home() {
    return (
        <section className="home flex justify-center align-center">

                <div className="hero flex justify-center align-center">
            <div className="hero-warrper main-layout">
                    <h1>Welcome To our Projects</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta blandit turpis ut varius. Nullam viverra urna tincidunt justo fermentum fermentum. Aenean tempor suscipit eleifend. Morbi interdum metus vitae mauris consequat laoreet. In consequat rhoncus sollicitudin. Fusce euismod mattis sollicitudin. Nulla aliquet nulla in quam pretium molestie. Etiam tincidunt facilisis feugiat.</p>
                    <Link to="/mister-email"><button className="btn btn-mail">Check our Mail</button></Link>
                    <Link to="/miss-keep"><button className="btn btn-keep">Check our Keep</button></Link>
                </div>
            </div>


        </section>
    )
}