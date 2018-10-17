import React from "react";
import { push } from "connected-react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from "../../modules/counter";
import Button from "@material-ui/core/Button";

export class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <div>
        <h1>Home</h1>
        <p>Count: {this.props.count}</p>

        <p>
          <button onClick={this.props.increment}>Increment</button>
          <button
            onClick={this.props.incrementAsync}
            disabled={this.props.isIncrementing}
          >
            Increment Async
          </button>
        </p>

        <p>
          <Button
            variant="contained"
            onClick={this.props.decrement}
            color="primary"
          >
            Decrementing
          </Button>

          <button
            onClick={this.props.decrementAsync}
            disabled={this.props.isDecrementing}
          >
            Decrement Async
          </button>
        </p>

        <p>
          <button onClick={() => this.props.changePage()}>
            Go to about page via redux
          </button>
        </p>
      </div>
    );
  };
}

// const Home = props => (
//   <div>
//     <h1>Home</h1>
//     <p>Count: {props.count}</p>

//     <p>
//       <button onClick={props.increment}>Increment</button>
//       <button onClick={props.incrementAsync} disabled={props.isIncrementing}>
//         Increment Async
//       </button>
//     </p>

//     <p>
//       <button onClick={props.decrement}>Decrementing</button>
//       <button onClick={props.decrementAsync} disabled={props.isDecrementing}>
//         Decrement Async
//       </button>
//     </p>

//     <p>
//       <button onClick={() => props.changePage()}>
//         Go to about page via redux
//       </button>
//     </p>
//   </div>
// );

const mapStateToProps = ({ counter }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push("/about-us")
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
