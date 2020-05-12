import React, {Component} from 'react';
import Single_Show from './Single_show';
import Single_edit from './Single_edit';


class Single extends Component{
  constructor(props){
    super(props)
    this.state = {isEdit: false}
  }

  isEdit(){
    this.setState({
      isEdit: !this.state.isEdit
    })
    console.log(this.state.isEdit)
  }

  modifyData(DocID, data){
    console.log("Single.js - Tentative d'update avec : " + data);
    this.props.modifyData(DocID, data);
  }

  render(){
    return (
      <>
      <li className="col s12 l6">
        <div className="card">

          {this.state.isEdit && <Single_edit {...this.props} modifyData={this.modifyData.bind(this)}/>}
          {!this.state.isEdit && <Single_Show {...this.props}/>}
          <div className="card-action">
              <button className="waves-effect waves-light btn darken-4" onClick={this.props.deleteData.bind(this,this.props.item.id)}>Supprimer</button>
              <button className="waves-effect waves-light btn darken-2" onClick={() => this.isEdit()}>Mettre à jour</button>
              
          </div>
        </div>
      </li>
    </>
  );
  }
}
/*
const Single = (props) => {
    return (
        <>
        <li className="col s12 l6">
          <div className="card">
            <div className="card-image">
              <img src="./portrait.jpg" alt={props.item.title}/>
              <span className="card-title">{props.item.prenom} {props.item.nom} - {props.item.compagnie}</span>
            </div>
            <div className="card-content">
                <span className="card-title">{props.item.email}</span>
                <div className="row">
                    <div className="col l6 center">   
                        <blockquote><h5>{props.item.notes}</h5></blockquote>
                    </div>
                </div>
            </div>
            <div className="card-action">
                <button className="waves-effect waves-light btn darken-4" onClick={props.deleteData.bind(this, props.item.id)}>Supprimer</button>
                <button className="waves-effect waves-light btn darken-2" onClick={props.deleteData.bind(this, props.item.id)}>Mettre à jour</button>
            </div>
          </div>
        </li>
      </>
    );
}

*/
export default Single;