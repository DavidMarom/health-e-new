import React, { Component } from 'react'
import { BarChart } from '../../cmps/user/BarChart.jsx'
import { PieChart } from '../../cmps/user/PieChart.jsx'

export class UserDashbord extends Component {

    state = {
        user: null,
        activities: null
    }

    componentDidMount() {
        const { user, activities } = this.props;
        this.setState({ user, activities })
    }

    render() {
        const { user } = this.state;
        if(!user) return <div className="loader"><img src={'https://res.cloudinary.com/dojmo7vcc/image/upload/v1602514420/health_events/loader_lsslis.gif'} alt=""/></div>
        return (
            <div className="flex mt50 sb column mb50 dash">
                <div className="flex dashbord-info fs24 column">
                    <h3 className="tac">Total Sales: <span className="money">${user.income}</span></h3>
                </div>
                <div className="flex dash-charts align-center sb mb50">
                    <div className="bar m10">
                        <BarChart user={user} />
                    </div>
                    <div className="pie">
                        <PieChart user={user} />
                    </div>
                </div>
            </div>
        )
    }
}
