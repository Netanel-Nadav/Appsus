

export class EmailFilterByStar extends React.Component {
    state = {
        filterBy: {
            isStarred: false
        }
    }

    handleChange = ({ target }) => {
        const booleanVal = target.value === 'true' ? true : target.value === 'false' ? false : undefined
        this.props.onReadFiltering(booleanVal)
    }


    render() {
        const { isRead } = this.state.filterBy
        const setUndifind = undefined
        return (
            <section className="filter-by-read-section">
                <select className="select-read" value={setUndifind} onChange={this.handleChange} name="isRead">
                    <option value={setUndifind}>Sttared / UnStarred</option>
                    <option value={true}>Starred</option>
                    <option value={false}>UnStarred</option>
                </select>
            </section>
        )
    }
}

