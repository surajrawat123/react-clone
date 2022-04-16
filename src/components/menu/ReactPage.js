import React from 'react'
import { Link } from 'react-router-dom'
import "./scss/ReactPage.scss"
import { LiveProvider, LiveEditor, LivePreview, LiveError } from 'react-live'
import Footer from '../footer/Footer'
const data = `const Wrapper = ({ children }) => (
    <div style={{
      width: '100%',
      padding: '2rem'
    }}>
      {children}
    </div>
  )
  
  const Title = () => (
    <h3 style={{ color: 'palevioletred' }}>
      Hello World!
    </h3>
  )
  
  render(
    <Wrapper>
      <Title />
    </Wrapper>
  )`;
const data2 = `class Counter extends React.Component {
    constructor() {
      super()
      this.state = { count: 0 }
    }
  
    componentDidMount() {
      this.interval = setInterval(() => {
        this.setState(state => ({ count: state.count + 1 }))
      }, 1000)
    }
  
    componentWillUnmount() {
      clearInterval(this.interval)
    }
  
    render() {
      return (
        <center>
          <h3>
            {this.state.count}
          </h3>
        </center>
      )
    }
  }`;

const data3 = `class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>
          <h3>TODO</h3>
          <TodoList items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              What needs to be done?
            </label>
            <input
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button>
              Add #{this.state.items.length + 1}
            </button>
          </form>
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (this.state.text.length === 0) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }
  
  class TodoList extends React.Component {
    render() {
      return (
        <ul>
          {this.props.items.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      );
    }
  }
  
  render(
    <TodoApp />,
    document.getElementById('todos-example')
  );`;
const data4 = `() => (
    <>
     <h3>
       Hello World
     </h3>
     <input type="text" placeholder="firstName"/>
   </>
   )`;
const ReactPage = () => {
    return (
        <>
            <div className='page-header'>
                <div className='page-content'>
                    <h1>React</h1>
                    <p>A JavaScript library for building user interfaces</p>
                </div>
                <div className='page-buttons'>
                    <Link to="/docs" className='page-link page-button'>Get Started</Link>
                    <Link to="/tutorial" className='page-link page-react-tutorial'>Take the Tutorial <i class="fas fa-greater-than"></i></Link>
                </div>
                <div className='page-image'>
                    <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjZmZmIi8+CiAgPGcgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K' alt="page logo" />
                </div>
            </div>
            <div className='page-content-data'>
                <div className='content-data'>
                    <div className='content-each-item first-item'>
                        <h1 className='item-heading'>Declarative</h1>
                        <p className='para1'>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
                        <p className='para2'>Declarative views make your code more predictable and easier to debug.</p>
                    </div>
                    <div className='content-each-item'>
                        <h1 className='item-heading'>Component-Based</h1>
                        <p className='para1'>Build encapsulated components that manage their own state, then compose them to make complex UIs.</p>
                        <p className='para2'>Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.</p>
                    </div>
                    <div className='content-each-item last-item'>
                        <h1 className='item-heading'>Learn Once, Write Anywhere</h1>
                        <p className='para1'>We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.</p>
                        <p className='para2'>React can also render on the server using Node and power mobile apps using React Native.</p>
                    </div>
                    <hr />
                </div>
            </div>
            <div className='live-container'>
                <div className='live-editor-div'>
                    <div className='live-content'>
                        <h1 className='live-content-heading'>A Simple Component</h1>
                        <p className='live-content-para'>React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.</p>
                        <p className='live-content-para'><strong>JSX is optional and not required to use React.</strong> Try the Babel REPL to see the raw JavaScript code produced by the JSX compilation step.</p>
                    </div>
                    <div className='live-editor-box'>
                        <LiveProvider code={data} noInline={true}>
                            <div className='live-editor-div-box'>
                                <LiveEditor className='live-editor' />
                            </div>
                            <div className='live-preview-div'>
                                <h1>RESULT</h1>
                                <LivePreview className='live-preview' />
                            </div>
                            <LiveError />
                        </LiveProvider>
                    </div>
                </div>
            </div>
            <div className='live-container'>
                <div className='live-editor-div'>
                    <div className='live-content'>
                        <h1 className='live-content-heading'>A Stateful Component</h1>
                        <p className='live-content-para'>In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state). When a component’s state data changes, the rendered markup will be updated by re-invoking render().</p>
                    </div>
                    <div className='live-editor-box'>
                        <LiveProvider code={data2}>
                            <div className='live-editor-div-box'>
                                <LiveEditor className='live-editor' />
                            </div>
                            <div className='live-preview-div'>
                                <h1>RESULT</h1>
                                <LivePreview className='live-preview' />
                            </div>
                            <LiveError />
                        </LiveProvider>
                    </div>
                </div>
            </div>
            <div className='live-container'>
                <div className='live-editor-div'>
                    <div className='live-content'>
                        <h1 className='live-content-heading'>An Application</h1>
                        <p className='live-content-para'>Using props and state, we can put together a small Todo application. This example uses state to track the current list of items as well as the text that the user has entered. Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation.</p>
                    </div>
                    <div className='live-editor-box'>
                        <LiveProvider code={data3} noInline={true}>
                            <div className='live-editor-div-box'>
                                <LiveEditor className='live-editor' />
                            </div>
                            <div className='live-preview-div'>
                                <h1>RESULT</h1>
                                <LivePreview className='live-preview' />
                            </div>
                            <LiveError />
                        </LiveProvider>
                    </div>
                </div>
            </div>
            <div className='live-container'>
                <div className='live-editor-div'>
                    <div className='live-content'>
                        <h1 className='live-content-heading'>A Component Using External Plugins</h1>
                        <p className='live-content-para'>React allows you to interface with other libraries and frameworks. This example uses remarkable, an external Markdown library, to convert the textarea’s value in real time.</p>
                    </div>
                    <div className='live-editor-box'>
                        <LiveProvider code={data4}>
                            <div className='live-editor-div-box'>
                                <LiveEditor className='live-editor' />
                            </div>
                            <div className='live-preview-div'>
                                <h1>RESULT</h1>
                                <LivePreview className='live-preview' />
                            </div>
                            <LiveError />
                        </LiveProvider>
                    </div>
                </div>
            </div>
            <div className='footer-elements'>
                <div className='footer-element-item footer-div1'>
                    <Link to="/docs" className='page-link page-button'>Get Started</Link>
                    <Link to="/tutorial" className='page-link '>Take the Tutorial <i class="fas fa-greater-than"></i></Link>
                </div>
                <div className='footer-element-item'>
                    <Footer />
                </div>
            </div>
        </>

    )
}

export default ReactPage
