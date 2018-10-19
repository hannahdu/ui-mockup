import React, { PropTypes } from 'react';
import ProgressBar from '../progressBar/ProgressBar.js'

class StandardsListView extends React.Component {

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

  bindExpand() {
    // click the list-view heading then expand a row
    $(".list-group-item-header").click(function(event){
      if(!$(event.target).is("button, a, input, .fa-ellipsis-v")){
        $(this).find(".fa-angle-right").toggleClass("fa-angle-down")
          .end().parent().toggleClass("list-view-pf-expand-active")
          .find(".list-group-item-container").toggleClass("hidden");
      }
    });

    // click the close button, hide the expand row and remove the active status
    $(".list-group-item-container .close").on("click", function (){
      $(this).parent().addClass("hidden")
        .parent().removeClass("list-view-pf-expand-active")
        .find(".fa-angle-right").removeClass("fa-angle-down");
    });
  }

  unbind() {
    $(".list-group-item-header").off('click');
    $(".list-group-item-container .close").off('click');
  }

  render() {
    const { apps } = this.props; // eslint-disable-line no-use-before-define

    return (
      <div className="list-group list-view-pf list-view-pf-view">

        {apps.map((app,i) =>
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
                <dd>##</dd>
                <dt>Total Controls: </dt>
                <dd>##</dd>
                <dt>Inherited Compliance: </dt>
                <dd>##</dd>
                <dt>Procedural Controls: </dt>
                <dd>##</dd>
                <dt>Technical Controls: </dt>
                <dd>##</dd>
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
