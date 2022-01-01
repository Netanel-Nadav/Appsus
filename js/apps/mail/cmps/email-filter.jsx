

export class EmailFilter extends React.Component {
    state = {
        filterBy: {
            status: 'inbox',
        }
    }

    componentDidMount() {
        // console.log(this.props);
    }
    
    render() {
    
        const setUndifind = undefined
        const setNull = null;
        const inbox = 'inbox';
        return (
            <section className="filter-section">
                <ul className="clean-list">
                    <li onClick={this.props.onFiltering} data-status={inbox}><i className="fas fa-inbox"></i> Inbox</li>
                    <li onClick={this.props.onFiltering} data-status="sent"><i className="fas fa-share-square"></i> Sent</li>
                    <li onClick={this.props.onFiltering} data-status="trash"><i className="fas fa-trash"></i> Trash</li>
                    <li onClick={this.props.onFiltering} data-status="draft"><i className="fab fa-firstdraft"></i> Draft</li>
                </ul>
            </section>
        )
    }
}

