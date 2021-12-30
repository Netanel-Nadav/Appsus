

export class EmailFilter extends React.Component {
    state = {
        filterBy: {
            status: 'inbox'
        }
    }

    componentDidMount() {
        // console.log(this.props);
    }
    

    

    render() {
    
        const setNull = null;
        return (
            <section className="filter-section">
                <ul className="clean-list">
                    <li onClick={(ev) => this.props.onFiltering(ev)} data-status={setNull}><i className="fas fa-inbox"></i> Inbox</li>
                    <li onClick={(ev) =>this.props.onFiltering(ev)} data-status="sent"><i className="fas fa-share-square"></i> Sent</li>
                    <li onClick={(ev) =>this.props.onFiltering(ev)} data-status="trash"><i className="fas fa-trash"></i> Trash</li>
                    <li onClick={(ev) =>this.props.onFiltering(ev)} data-status="draft"><i className="fab fa-firstdraft"></i> Draft</li>
                </ul>
            </section>
        )
    }
}

