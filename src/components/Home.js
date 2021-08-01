import axios from 'axios';
import React, { Component } from 'react'
import Loader from './common/Loader';
import Modal from './common/Modal';
import Table from './common/Table'
import { baseUrl } from "./shared/platform.api";
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            userDetails: null,
            loading: false,
        }
    }
    componentDidMount() {
        this.fetchUsers();
    }
    fetchUsers = async () => {
        try {
            this.setState({
                loading: true,
            })
            // setTimeout(async() => {

            // },500);
            let res = await axios.get(`${baseUrl}/users`);
            const { data } = res;
            console.log(data);
            this.setState({
                users: data,
                loading: false,
            })

        } catch (error) {
            console.error(error);
            this.setState({
                loading: false,
            })
        }
    }
    selectUser = (data) => {
        // console.log(data);
        this.setState({
            userDetails: data
        })
    }
    onChangeUserDetails = (e, id) => {
        this.setState({
            userDetails: { id: id, login: e.target.value }
        });
    }
    onSave = () => {
        const { users, userDetails } = this.state;
        const updatedData = users.map((singleUser) => {
            if (singleUser.id === userDetails.id) {
                return { ...singleUser, login: userDetails.login }
            }
            return singleUser;
        });
        this.setState({
            users: updatedData
        })
        // const index = users.findIndex(item => item.id === userDetails.id);
        // let userData = users[index];
        // userData.login = userDetails.login;
        // let tempUser = [...users];
        // tempUser[index] = userData;
        // this.setState({
        //     users: tempUser
        // })
    }
    onDeleteUser = (id) => {
        const { users } = this.state;
        const updatedData = users.filter((user) => {
            return user.id !== id;
        })
        this.setState({
            users: updatedData
        })

    }

    render() {
        const { users, loading, userDetails } = this.state;
        const columns = ["ID", "Avatar", "Username", "Edit", "Delete", "View"]
        // let homeCont;
        // if (user && !loading) {
        //     homeCont = <Table />
        // }
        // else {
        //     homeCont = <Loader />
        // }
        return (
            <div>
                {loading ? <Loader /> : <Table columns={columns} data={users} selectUser={this.selectUser} onDeleteUser={this.onDeleteUser} />}
                {userDetails && <Modal userDetails={userDetails} onChangeUserDetails={this.onChangeUserDetails} onSave={this.onSave} />}
            </div>
        )
    }
}

export default Home
