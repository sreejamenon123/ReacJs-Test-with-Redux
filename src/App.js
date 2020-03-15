import React, { Component } from 'react';

import {
  find as _find,
  map as _map,
  filter as _filter,
  get as _get
} from "lodash";
import { connect } from 'react-redux';
// core components
import NavBar from './components/navBar';
import ServiceList from './components/serviceList';
import Providers from './components/providers';
// services
import { getServices, getProviderServices } from "./services/appService";
// actions
import { setServices } from "./actions/serviceActions";
import { setProviders } from "./actions/providersActions";
import { setCurrentService } from "./actions/currentServiceAction";

class App extends Component {
  componentDidMount() {
    this.getAppServices();
    this.getAppProviders()
  }
  getAppServices = async () => {
    try {
      const { data } = await getServices();
      const services = [{ id: 'All Services' }, ..._get(data, ['data'])]

      this.props.onLoadServices(services)
    } catch (error) {
      console.log("appService error logs", error);
    }
  }
  getAppProviders = async () => {
    try {
      const { data } = await getProviderServices();
      const { data: allProviders, included } = data;

      const providers = _map(allProviders, p => {
        const locations = _find(included, _get(p, ['relationships', 'locations', 'data'])[0]);
        const schedules = _find(included, _get(p, ['relationships', 'schedules', 'data'])[0]);
        return {
          ...p,
          relationships: {
            locations,
            schedules
          }
        }
      });
      this.props.onLoadProviders(providers)
    } catch (error) {
      console.log("appProvider error logs", error);
    }
  }
  handleService = (currentService) => {
    this.props.onCurrentServiceChange(currentService)
  }
  getFilteredProvider = (providers, currentService) => {
    if (currentService === 'All Services') return providers;

    return _filter(providers, (p) => _get(p, ['relationships', 'schedules', 'attributes', 'service']) === currentService);
  }
  render() {
    const providers = _get(this.props, ['providerState', 'providers']);
    const currentService = _get(this.props, ['currentServiceState']);
    const services = _get(this.props, ['serviceState', 'services']);

    const filtered = this.getFilteredProvider(providers, currentService)

    return (
      <React.Fragment>
        <NavBar />
        <div className="container-fluid row  pt-4 ">
          <div className="col-md-2">
            <ServiceList
              data={services}
              currentService={currentService}
              onServiceSelect={this.handleService} />
          </div>
          <div className="col">
            <Providers data={filtered} />
          </div>
        </div>
      </React.Fragment>

    );
  }
}
const mapStateToProps = state => ({
  serviceState: state.services,
  currentServiceState: state.currentService,
  providerState: state.providers
})
const mapDispatchToProps = dispatch => ({
  onLoadServices: (services) => {
    dispatch(setServices(services))
  },
  onLoadProviders: (providers) => {
    dispatch(setProviders(providers))
  },
  onCurrentServiceChange: (currentService) => {
    dispatch(setCurrentService(currentService))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
