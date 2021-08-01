import React, { Component } from 'react';
import axios from 'axios';
import Loader from './common/Loader';
import { baseUrl } from "./shared/platform.api";
import {isEmpty} from "../utils/isEmpty";

class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {},
            loading: false
        }
    }
    componentDidMount() {
        this.fetchUserDetail();
    };
    fetchUserDetail = async () => {
        const { match: { params } } = this.props;
        try {
            this.setState({
                loading: true,
            });
            let res = await axios.get(`${baseUrl}/users/${params.id}`);
            const { data } = res;
            console.log(data);
            this.setState({
                user: data,
                loading: false,
            })

        } catch (error) {
            console.error(error);
            this.setState({
                loading: false,
            })
        }
    }

    render() {
        const { user, loading } = this.state
        let userDetail;
        if (!isEmpty(user)) {
            userDetail =
                <div className="card" style={{ width: "18rem" }}>
                    <img src={user.avatar_url} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{user.login}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href={user.html_url} target="_blank" rel="noreferrer" className="btn btn-primary">Visit Github</a>
                    </div>
                </div>
        } else {
            userDetail = <div className="alert alert-info" role="alert">
                No User Data Found
          </div>
        }

        return (
            <>
                {loading ? <Loader /> : userDetail}
            </>
        )
    }
}

export default Details;
