

export class EmailFilterByRead extends React.Component {
    state = {
        filterBy: {
            isRead: null
        }
    }

    componentDidMount() {
        // console.log(this.props);
    }

    render() {
        const setNull = null
        return (
            <section className="filter-by-read-section">
                <select className="select-read">
                    <option value={null}>None</option>
                    <option value="isRead">Read</option>
                    <option value="unRead">UnRead</option>
                </select>
            </section>
        )
    }
}

