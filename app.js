import React from 'react';
import { Provider } from 'react-redux'
import Todos from './Todos';
import createStore from './createStore';
import { render } from 'react-dom';
import { bindActionCreators } from 'redux';
import * as actionCreators  from './actionCreators';

//create the store
const store = createStore();
// console.log('store2' , store.getState());


 class App extends React.Component{

		render(){
			//binds all actions to one variable: ex. toActions.addItem()
			const todoActions = bindActionCreators(actionCreators, store.dispatch);
			
			//pass the store into the provider and actions into component
			return(
				<Provider store={store} >
					<Todos actions={todoActions}/>
				</Provider>
		)
			
		}
	}

//render app in DOM
render (<App />,document.querySelector('#app'));




