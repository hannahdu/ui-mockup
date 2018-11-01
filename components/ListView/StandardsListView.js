import React, { PropTypes } from 'react';
<<<<<<< HEAD
import ProgressBar from '../progressBar/ProgressBar.js'
=======
import StandardTableView from '../TableView/StandardTableView'
import ListViewBase from './ListViewBase'
import ComplianceProgress from './ComplianceProgress'
>>>>>>> b992b6b81b55eccb3ebc749149c81e7beca7d34f

class StandardsListView extends ListViewBase {

  constructor(props){
    super(props);
  }
  componentDidMount() {
    this.bindExpand();
  }

  componentDidUpdate() {
    this.unbind();
    this.bindExpand();
  }

  componentWillUnmount(){
    this.unbind();
  }

  render() {
    // eslint-disable-line no-use-before-define
    
    return (
      <div className="list-group list-view-pf list-view-pf-view">

        {this.props.apps.map((app,i) =>
        <div className="list-group-item" key={i}>

          <div className="list-group-item-header">
            <div className="list-view-pf-expand">
              <span className="fa fa-angle-right"></span>
          </div>
          <div className="list-view-pf-actions">
            <button className="btn btn-default">Details</button>
          </div>
          <div className="list-view-pf-main-info">
            <div className="list-view-pf-left">
              <span className="fa fa-plane list-view-pf-icon-sm"></span>
            </div>
            <div className="list-view-pf-body">
              <div className="list-view-pf-description">
                <div className="list-group-item-heading">
                  { app.name }
                </div>
              </div>
<<<<<<< HEAD
              <div className="list-view-pf-additional-info">
                <div className="list-view-pf-additional-info-item">
                  <span className="pficon pficon-orders"></span>
                  <strong>350</strong> Security Controls
                </div>
                <div className="list-view-pf-additional-info-item">
                  <span className="pficon pficon-ok"></span>
                  <strong>300</strong> Satisfied
                </div>
                <div className="list-view-pf-additional-info-item">
                  <span className="pficon pficon-warning-triangle-o"></span>
                  <strong>15</strong> Partially Satisfied
                </div>
                <div className="list-view-pf-additional-info-item">
                  <span className="pficon pficon-error-circle-o"></span>
                  <strong>35</strong> Non-compliant Items
                </div>
                <div style="width:350px; height:20px;">
                <ProgressBar percentage="60"/>
                </div>
              </div>
=======

                <ComplianceProgress app={app} />
>>>>>>> b992b6b81b55eccb3ebc749149c81e7beca7d34f
            </div>
          </div>
        </div>

        <div className="list-group-item-container container-fluid hidden">
          <div className="close">
            <span className="pficon pficon-close"></span>
          </div>
          <p>
            <i>{ app.description }</i>
            <br /><br />
          </p>
          
          <div className="row">
            <div className="col-md-3">
            </div>
            <div className="col-md-9">
              <dl className="dl-horizontal">
                <dt>Control Familes:</dt>
                <dd>{app.controlFamilies}</dd>
                <dt>Total Controls: </dt>
                <dd>{app.totalControls}</dd>
                <dt>Inherited Compliance: </dt>
                <dd>{app.inheritedCompliance}</dd>
                <dt>Procedural Controls: </dt>
                <dd>{app.proceduralControls}</dd>
                <dt>Technical Controls: </dt>
                <dd>{app.technicalControls}</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
    )
  }

}

export default StandardsListView;
