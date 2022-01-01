

export class EmailFilterByStar extends React.Component {
    state = {
        filterBy: {
            isStarred: undefined
        }
    }

    handleChange = ({ target }) => {
        const starredFilter = target.value === 'Fiter By Star' ? undefined : target.value === 'true';
        this.setState({ isStarred: starredFilter })
        this.props.onStarFiltering(starredFilter)
    }


    render() {
        const { isStarred } = this.state.filterBy
        return (
            <section className="filter-by-star-section">
                <select className="select-star" value={isStarred} onChange={this.handleChange} name="isStarred">
                    <option value={undefined}>Fiter By Star</option>
                    <option value={true}>Starred</option>
                    <option value={false}>UnStarred</option>
                </select>
            </section>
        )
    }
}

