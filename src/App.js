import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            increasing: false
        }
    }
    update() {
        ReactDOM.render(<App val={this.props.val + 1} />, document.getElementById('root'))
    }
    componentWillReceiveProps(nextProps) {
        this.setState({increasing: nextProps.val > this.props.val})
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.val % 5 === 0;
    }
    render() {
        console.log(this.state.increasing)
        return <button onClick={this.update.bind(this)}>{this.props.val} </button>
    } 
    componentDidUpdate(prevProps, prevState) {
        console.log(`previousProps: ${prevProps.val}`)
    }
    
}

App.defaultProps = {val: 0}

export default App

/*import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            val: 0
        }
        this.update = this.update.bind(this)
    }
    update() {
        this.setState({
            val: this.state.val + 1
        })
    }
    componentWillMount() {
        console.log('componentWillMount');
        this.setState({m: 2})
    }
    render() {
        console.log('render');
        return <button onClick={this.update}>{this.state.val * this.state.m} </button>
    }
    componentDidMount() {
        console.log('componentDidMount');
        //console.log(ReactDOM.findDOMNode(this));
        this.increment = setInterval(this.update,500)
    }
    componentWillUnmount() {
        console.log('componentWillUnMount');
        clearInterval(this.increment)
    }

}

class Wrapper extends React.Component {
    
    mount() {
        ReactDOM.render(<App />, document.getElementById('app'))
    }
    unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('app'))
    }
    
    render() {
        return(
            <div>
                <button onClick={this.mount.bind(this)} >Mount</button>
                <button onClick={this.unmount.bind(this)} >UnMount</button>
                <div id='app' ></div>
            </div>
        )
    }
}

//export default App
export default Wrapper*/

/*
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            val: 0
        }
        this.update = this.update.bind(this)
    }
    update() {
        this.setState({
            val: this.state.val + 1
        })
    }
    componentWillMount() {
        console.log('componentWillMount');
    }
    render() {
        console.log('render');
        return <button onClick={this.update}>{this.state.val} </button>
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
    componentWillUnmount() {
        console.log('componentWillUnMount');
    }

}

class Wrapper extends React.Component {
    
    mount() {
        ReactDOM.render(<App />, document.getElementById('app'))
    }
    unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('app'))
    }
    
    render() {
        return(
            <div>
                <button onClick={this.mount.bind(this)} >Mount</button>
                <button onClick={this.unmount.bind(this)} >UnMount</button>
                <div id='app' ></div>
            </div>
        )
    }
}

//export default App
export default Wrapper
*/

/*import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            a: ''
        }
    }
    update() {
        this.setState({
            //a: e.target.value,
            //b: e.target.value
            a: this.refs.a.value,
            b: this.refs.b.value,
            c: this.c.refs.input.value
        })
    }
    render() {
        return (
            <div>
                <input 
                    ref='a'
                    type='text'
                    onChange={this.update.bind(this)} 
                /> {this.state.a}
                <hr/>
                <input 
                    ref='b'
                    type='text'
                    onChange={this.update.bind(this)} 
                /> {this.state.b}
                 <hr/>
                <Input 
                    ref={ component => this.c = component }
                    update={this.update.bind(this)} 
                /> {this.state.c}
            
            </div>
        )
    }
}

class Input extends React.Component {
    render() {
        return <div><input ref='input' type='text' onChange={this.props.update} /></div
    }
}

export default App*/

/*import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            a: ''
        }
    }
    update() {
        this.setState({
            //a: e.target.value,
            //b: e.target.value
            a: this.refs.a.value,
            b: this.refs.b.value,
            c: ReactDOM.findDOMNode(this.c).value
        })
    }
    render() {
        return (
            <div>
                <input 
                    ref='a'
                    type='text'
                    onChange={this.update.bind(this)} 
                /> {this.state.a}
                <hr/>
                <input 
                    ref='b'
                    type='text'
                    onChange={this.update.bind(this)} 
                /> {this.state.b}
                 <hr/>
                <Input 
                    ref={ component => this.c = component }
                    update={this.update.bind(this)} 
                /> {this.state.c}
            
            </div>
        )
    }
}

class Input extends React.Component {
    render() {
        return <input type='text' onChange={this.props.update} />
    }
}

export default App*/

/*
import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            a: ''
        }
    }
    update() {
        this.setState({
            //a: e.target.value,
            //b: e.target.value
            a: this.refs.a.value,
            b: this.refs.b.value,
            c: this.c.value
        })
    }
    render() {
        return (
            <div>
                <input 
                    ref='a'
                    type='text'
                    onChange={this.update.bind(this)} 
                /> {this.state.a}
                <hr/>
                <input 
                    ref='b'
                    type='text'
                    onChange={this.update.bind(this)} 
                /> {this.state.b}
                 <hr/>
                <input 
                    ref={ node => this.c = node }
                    type='text'
                    onChange={this.update.bind(this)} 
                /> {this.state.c}
            
            </div>
        )
    }
}

export default App
*/

/*
import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentEvent: '___'
        }
        this.update = this.update.bind(this)
    }
    update(e) {
        this.setState({
            currentEvent: e.type
        })
    }
    render() {
        return (
            <div>
                <textarea 
                    onKeyPress={this.update}
                    onCopy={this.update}
                    onCut={this.update}
                    onPaste={this.update}
                    onFocus={this.update}
                    onBlur={this.update}
                    onDoubleClick={this.update}
                    onTouchStart={this.update}
                    onTouchMove={this.update}
                    onTouchEnd={this.update}
            
                    cols='30'
                    rows='10' />
            <h1> {this.state.currentEvent} </h1>
            </div>
        )
    }
}

export default App*/

/*import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component { 
    render() {
        return <Title text='this is test props validation' />
    }
}
const Title = (props) => <h1>Title:  {props.text} </h1>

Title.propTypes ={
    text(props, propName, Component) {
        if(!(propName in props)) {
            return new Error(`missing ${propName}.`)
        }
        if(props[propName].length < 6) {
            return new Error(`${propName} was too short.`)
        }
    }
}
export default App*/

/*
import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component { 
    render() {
        return (
            <Button>I <Heart/> React</Button>
        )
    }
}
const Button = (props) => <button> {props.children} </button>

class Heart extends React.Component { 
    render() {
        return <span>&hearts;</span>
    }
}
export default App
*/

/*import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            txt: 'this is the state txt.'
        }
    }
    
    update(e) {
        this.setState({txt: e.target.value})
    }
    
    render() {
        let text = this.props.txt
        return (
            <div>
                <h1 >Hello world with React</h1> 
                <h3>data from props: {text} </h3> 
                <hr/>
                <Widget update={this.update.bind(this)} />
                <h3>data from state: {this.state.txt} </h3> 
                <hr/>
                <b> Bold tag </b>
            </div>
        )
    }
}

App.propTypes = {
    txt: PropTypes.string,
    cat: PropTypes.number.isRequired
};

App.defaultProps = {
    txt: 'this is the default text value for txt prop.'
}

const Widget = (props) => <input type='text' onChange={props.update} />
export default App*/

/*import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            txt: 'this is the state txt.'
        }
    }
    
    update(e) {
        this.setState({txt: e.target.value})
    }
    
    render() {
        let text = this.props.txt
        return (
            <div>
                <h1 >Hello world with React</h1> 
                <h3>data from props: {text} </h3> 
                <hr/>
                <input type='text' onChange={this.update.bind(this)} />
                <h3>data from state: {this.state.txt} </h3> 
                <hr/>
                <b> Bold tag </b>
            </div>
        )
    }
}

App.propTypes = {
    txt: PropTypes.string,
    cat: PropTypes.number.isRequired
};

App.defaultProps = {
    txt: 'this is the default text value for txt prop.'
}

export default App*/

/*import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    render() {
        let text = this.props.txt
        return (
            <div>
                <h1 >Hello world with React</h1> 
                <h3>data from props: {text} </h3> 
                <b> Bold tag </b>
            </div>
        )
    }
}

App.propTypes = {
    txt: PropTypes.string,
    cat: PropTypes.number.isRequired
};

App.defaultProps = {
    txt: 'this is the default text value for txt prop.'
}

export default App*/

/*import React from 'react';

class App extends React.Component {
    render() {
        let text = this.props.txt
        return (
            <div>
                <h1 >Hello world with React</h1> 
                <h3>data from props: {text} </h3> 
                <b> Bold tag </b>
            </div>
        )
    }
}

App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
};

export default App*/

/*import React from 'react';

const App = () => <h1>hello from stateless</h1>

export default App*/

/*import React from 'react';

class App extends React.Component {
    render() {
        return React.createElement('h1', null, 'Hello world with React')
    }
}

export default App*/

/*
import React from 'react';

const App = () => <h1>Hello React</h1>

export default App
*/

/*
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
*/