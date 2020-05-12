import React, {Component}  from 'react';




class Single_edit extends Component{

    updateData = (e) =>{
        console.log("e.keycode : " + e.keyCode);
        
        
        let docid = e.target.getAttribute('docid');
        let data_name = e.target.getAttribute('id');
        let data = e.target.value;

        let donees_modif = {[data_name]: data};
        
        console.log(
            donees_modif
        );
        if(e.keyCode == 13){
            console.log("Single_Edit.js - Tentative d'update avec docID : " + docid + "et valeur :" + data_name + ":" + data);
            this.props.modifyData(docid, donees_modif);
           
        }
    }

    render(){
        console.log("Render de single_edit : " + this.props.item.nom);
        return(
            <>
            <div className="card-image">
            <img src="./portrait.jpg" alt={this.props.item.title}/>
            <input id="prenom" defaultValue={this.props.item.prenom} docid={this.props.item.id} onKeyDown={this.updateData} />
            <input defaultValue={this.props.item.nom}></input>
            <input defaultValue={this.props.item.compagnie}></input>
          </div>
          <div className="card-content">
              <input defaultValue={this.props.item.email}></input>
              <div className="row">
                  <div className="col l6 center">   
                      <input defaultValue={this.props.item.notes}></input>
                  </div>
              </div>
          </div>
          </>
        );
    }
}


export default Single_edit;