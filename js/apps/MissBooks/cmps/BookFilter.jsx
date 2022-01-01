

export class BookFilter extends React.Component {
    state = {
        filterBy: {
            name: '',
            price: ''
        }
    }


    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, [field]: value } }), () => {
            this.props.onSetFilter(this.state.filterBy)
        })
    }


    onSubmitFilter = (ev) => {
        ev.preventDefault();
        this.props.onSetFilter(this.state.filterBy)
    }

    render() {
        const { filterBy: { name, price } } = this.state
        return (
            <section className="filter-container main-layout">
                <form className='book-filter' onSubmit={this.onSubmitFilter}>
                    <label htmlFor="by-name">By Name:</label>
                    <input placeholder="Enter Name" type="text" id="by-name" name="name" value={name} onChange={this.handleChange} />
                    <label htmlFor="by-price">By Price:</label>
                    <input placeholder="Enter Price" type="number" id="by-price" min="0" name="price" value={price} onChange={this.handleChange} />
                    <button className="btn">Filter</button>
                </form>
            </section>
        )
    }
}