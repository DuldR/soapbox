import React from 'react'
import TopicIndexContainer from '../topics/topic_index_container';
import UserIndexContainer from '../users/user_index_container'
import FollowIndexContainer from '../follows/follow_index_container'
import { Footer } from '../footer/footer'


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
                    <UserIndexContainer />
                </div>
                    
                <div className={"dashboard-box"}>
                    <FollowIndexContainer />
                </div>

                <div className={"dashboard-box"}>
                    <Footer />
                </div>
            </section>
        )
    }
}

export default Dashboard