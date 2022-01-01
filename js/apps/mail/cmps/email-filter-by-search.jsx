

export class EmailSearchFilter extends React.Component {
    state = {
        filterBy: {
            search: '',
        }
    }


    handleChange = ({target}) => {
        this.setState({filterBy: {search : target.value}})
    }

    onSubmitSearch = (ev) => {
        ev.preventDefault()
        
    }

    render() {
        const { search } = this.state.filterBy
        console.log(search);
        return (
            <section className="filter-search">
                <form onSubmit={this.onSubmitSearch}>
                    <input type="text" value={search} name="search" placeholder="Enter Search Term" onChange={this.handleChange}/>
                    <button>Search</button>
                </form>

            </section>
        )
    }
}

