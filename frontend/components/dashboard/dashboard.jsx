import React from 'react'
import TopicIndexContainer from '../topics/topic_index_container';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <section className={"dashboard-body"}>
                <div className={"dashboard-box"}>
                    <TopicIndexContainer />
                </div>

                <div className={"dashboard-box"}>
                    Users

                </div>
                    
                <div className={"dashboard-box"}>
                    Bookmarks
                </div>

                <div className={"dashboard-box"}>
                    Footer Info
                </div>
            </section>
        )
    }
}

export default Dashboard