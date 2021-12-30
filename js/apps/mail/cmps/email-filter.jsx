

export class EmailFilter extends React.Component {
    state = {
        filterBy: {
            status: 'inbox'
        }
    }

    componentDidMount() {
        // console.log(this.props);
    }

    onFiltering = ({ target }) => {
        var status = target.dataset.status
        this.props.onSetFilter(this.state.filterBy)
        this.setState({ filterBy: status })
    }

    render() {
        const setNull = null;
        return (
            <section className="filter-section">
                <ul className="clean-list">
                    <li onClick={this.onFiltering} data-status={setNull}><i className="fas fa-inbox"></i> Inbox</li>
                    <li onClick={this.onFiltering} data-status="sent"><i className="fas fa-share-square"></i> Sent</li>
                    <li onClick={this.onFiltering} data-status="trash"><i className="fas fa-trash"></i> Trash</li>
                    <li onClick={this.onFiltering} data-status="draft"><i className="fab fa-firstdraft"></i> Draft</li>
                </ul>
            </section>
        )
    }
}

