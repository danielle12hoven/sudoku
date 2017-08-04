// import React, { PureComponent } from 'react'
// import Store from '../store'
// import { connect } from 'react-redux'
// import {Link} from 'react-router';
// import API from '../../api'
// import cell from './Cell'


// const api = new API()
// const games = api.service('games')



// export class Controls extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = Store.getState();
//   }

//   componentDidMount() {
//     const self = this;
//     self.unsubscribe = Store.subscribe(function() {
//       self.setState(Store.getState());
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribe();
//   }

//   render() {
//     function f(num) {
//       if (num < 10) {
//         return '0'+num;
//       } else {
//         return ''+num;
//       }
//     }
//     return (
//       <div className="controls">
//         <p><Link to="/">Back</Link></p>
//         {Sudoku.isComplete(this.state.game.cells)
//           ? <p className="congratulations">Congratulations!</p>
//           : <p>Still Playing</p>}
//       </div>
//     )
//   }
// }

// const mapStateToProps = ({ currentUser }) => ({
//   signedIn: !!currentUser && !!currentUser._id,
// })

// // module.exports = {App, Game, Index};
// export default connect(mapStateToProps)(Controls)