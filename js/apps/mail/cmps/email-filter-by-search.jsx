

export class EmailSearchFilter extends React.Component {
    state = {
        filterBy: {
            search: '',
        }
    }


    handleChange = ({ target }) => {
        this.setState({ filterBy: { search: target.value } })
        this.props.onSearchFiltering(target.value)

    }

    onSubmitSearch = (ev) => {
        ev.preventDefault()
    }

    render() {
        const { search } = this.state.filterBy
        return (
            <section className="filter-search">
                <input type="text" value={search} name="search" placeholder="Enter Search Term" onChange={this.handleChange} />

            </section>
        )
    }
}

