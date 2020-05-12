import React, {Component} from 'react';
import Single from './Single';


class Grid extends Component{
    deleteData(DocID)
    {
        this.props.deleteData(DocID);
    }

    modifyData(DocID, data)
    {
        console.log("Grid.js - Tentative d'update avec : " + data);
        this.props.modifyData(DocID, data);
    }

    renderList(){
        return this.props.items.map((item, i) =>(
            <Single key={i + 1} item={item} deleteData={this.deleteData.bind(this)} modifyData={this.modifyData.bind(this)} />
        ));
    } 

    render(){
        return (
            <div>
                <div className="row">
                    <ul>
                        {this.renderList()}
                    </ul>
                </div>
            </div>

        );
    }

}


export default Grid;