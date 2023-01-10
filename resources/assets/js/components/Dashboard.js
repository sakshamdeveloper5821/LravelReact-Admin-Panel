import React,{Component} from 'react';
import './Style.css';
import Header from './Header';
import Sidebar from './Sidebar';

class Dashboard extends Component{
	render() {
		return(
			<div className="dashboard">
				<div className="row">
				<div className="col-sm-2 col-md-2 col-xs-12 sidebar">
						<Sidebar />
					</div>
					<div className="col-sm-10 col-md-10 col-xs-12 header">
						<Header />
					</div>
					<div className="col-sm-10 col-md-10 col-xs-12">
						{this.props.children}
					</div>
				</div>
			</div>

		);
	}
} 

export default Dashboard;