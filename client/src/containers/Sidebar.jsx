import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getProjects, getSites } from '../model';

import { centerMapOnSite } from '../model/map';

import List from '../components/List';

class Sidebar extends Component {

  render() {
      const { centerMapOnSite, projects, sites } = this.props;
      // create map of sites objects like {idNum: siteObj}
      const sitesIdObj = {}; //{1: {id: 1, name: "East", bounding: {…}, trees: Array(84)}, etc}

      for ( let i = 0; i < sites.length; i++ ) {
          sitesIdObj[sites[i].id] = sites[i];
      }

      // create new array of projects where each project gets sitesIdObj as a new property
      const items = projects.map(project => {
         project.siteObjs = [];

         for ( let i = 0; i < project.sites.length; i++ ) {
             const siteId = project.sites[i];
             const siteObj = sitesIdObj[siteId];
             project.siteObjs.push(siteObj);

         }
         return project;
      });

    return <List items={ items } onClickSubitem={ this.props.centerMapOnSite } />
  }
}

function mapStateToProps(state) {
  return {
    projects: getProjects(state),
    sites: getSites(state)
  };
}

const mapDispatchToProps = {
  centerMapOnSite
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
