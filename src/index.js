import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
// import createBrowserHistory from 'history/createBrowserHistory';
import App from './Components/App';
import Jokes from './Components/Jokes';
import './index.css';
import Header from './Components/Header';
import Music from './projects/music-master';
import { createHashHistory } from 'history';

const history = createHashHistory()

ReactDOM.render(
    <Router history={history} basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route exact={true} path='/' render={() => {return(<Header Component={App} />)}} />
            <Route path='/jokes' render={() => {return(<Header Component={Jokes} />)}} />
            <Route path='/music-master' render={() => {return(<Header Component={Music}/>)}} />
        </Switch>
    </Router>, 
    document.getElementById('root')
    );

 

// new Promise((resolve, reject) => {
//     setTimeout(() => { 
//         // console.log('One');
//         resolve('One');
//     }, 3000)
//     //return reject('Did not get One');
// })
// .then((successResponse) => { 
//     console.log(successResponse);
//     console.log('Two');
//     console.log('Three');    
// })
// .catch((failureResponse) => { console.log('Failure = ', failureResponse)})

// setTimeout(() => { console.log('One') }, 3000)
// console.log('Two');
// console.log('Three'); 
// class Animal {
//     constructor( name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     speak() {
//         console.log ( "I am ", this.name);
//         console.log ( "My age is ", this.age);
//     }
// };

// class Lion extends Animal {
//     constructor( name, age, furColor, huntingStyle ) {
//         super( name, age );
//         this.furColor = furColor;
//         this.huntingStyle = huntingStyle;
//     }
//     roar() {
//         console.log ('ROAARRRR', 'I have a ', this.furColor, 'fur color and my hunting syle is ', this.huntingStyle);
//     }
// }

// // const animal1 = new Animal ( "Mike", 20);
// // animal1.speak ();

// const lion1 = new Lion ( 'Mike', 20, 'Brown', 'aggressive');
// lion1.speak();
// lion1.roar();
// console.log (lion1);
// // console.log (animal1);   