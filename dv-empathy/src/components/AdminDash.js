import React from 'react';
import axios from 'axios'
import { saveAs } from 'file-saver';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            dataReceived: false,
            data: []
        }
        
    }

    logout = (event) => {
        event.preventDefault()
        localStorage.removeItem('token')
        this.props.history.push('/login')
    }

    getData = () => {
        const headers = {
            authorization: localStorage.getItem('token')    
        }
         return axios.get('https://empathy-builder-2.herokuapp.com/api/data', { headers })
            .then((res) => {
                console.log("SUCCESS RESPONSE", res.data)
                this.createDownloadLink()
                this.setState({
                    dataReceived: true,
                    data: res.data
                })
            })
            .catch((err) => {
                console.log("ERROR GETTING DATA", err)
            })
    }

    createDownloadLink = () => {
        const data = this.state.data
        const fileName = 'dv-data.json'

        const fileToSave = new Blob([JSON.stringify(data)], {
            type: 'application/json',
            name: fileName
        })

        saveAs(fileToSave, fileName)
        
    }

    render() {
        

        return (
        <>
            <Button onClick={this.logout}>Logout</Button>
            <h1>ADMIN DASHBOARD</h1>
            <Button onClick={this.getData}>Get Data</Button>
            {/* {this.state.dataReceived ? <Link to="text/json;charset=utf-8," + {this.state.data}>} */}
    
        </>
        );
    }
  }

export default withRouter(App) 