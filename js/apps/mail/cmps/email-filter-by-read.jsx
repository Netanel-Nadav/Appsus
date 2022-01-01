

export class EmailFilterByRead extends React.Component {
    state = {
        filterBy: {
            isRead: undefined
        }
    }

    handleChange = ({ target }) => {
        this.setState({filterBy: target.value})
        const isUnreadStatus = target.value === 'unread' ? false : undefined;
        const isReadStatus = target.value === 'read' ? true : isUnreadStatus;
        this.props.onReadFiltering(isReadStatus)
    }


    render() {
        // console.log(this.state.filterBy);
        const {isRead} = this.state.filterBy
        return (
            <section className="filter-by-read-section">
                <select className="select-read" value={isRead} onChange={this.handleChange} name="isRead">
                    <option value={isRead}>Filter By Read</option>
                    <option value="read">Read</option>
                    <option value="unread">UnRead</option>
                </select>
            </section>
        )
    }
}

