import React, {Component}  from 'react';




class Single_show extends Component{
    render(){
        console.log("single_show" + this.props.item);
        return(
            <>
            <div className="card-image">
            <img src="./portrait.jpg" alt={this.props.item.title}/>
            <span className="card-title">{this.props.item.prenom} {this.props.item.nom} - {this.props.item.compagnie}</span>
          </div>
          <div className="card-content">
              <span className="card-title">{this.props.item.email}</span>
              <div className="row">
                  <div className="col l6 center">   
                      <blockquote><h5>{this.props.item.notes}</h5></blockquote>
                  </div>
              </div>
          </div>
          </>
        );
    }
}


export default Single_show;