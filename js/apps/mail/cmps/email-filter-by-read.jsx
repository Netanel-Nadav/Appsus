

export class EmailFilterByRead extends React.Component {
    state = {
        filterBy: {
            isRead: 'all'
        }
    }

    handleChange = ({ target }) => {
        this.setState({filterBy: target.value})
        const booleanVal = target.value === 'read' ? true : target.value === 'unread' ? false : 'all'
        this.props.onReadFiltering(booleanVal)
    }


    render() {
        // console.log(this.state.filterBy);
        const {isRead} = this.state.filterBy
        return (
            <section className="filter-by-read-section">
                <select className="select-read" value={isRead} onChange={this.handleChange} name="isRead">
                    <option value="all">Read / Unread</option>
                    <option value="read">Read</option>
                    <option value="unread">UnRead</option>
                </select>
            </section>
        )
    }
}

