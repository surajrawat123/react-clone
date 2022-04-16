import React from 'react'
import Footer from '../footer/Footer'
import './scss/Tutorial.scss';

const Community = () => {
    return (
        <div className='docs-main-div'>
            <div className='docs-main-sub-div'>
                <div className='sub-doc-1'>
                    <div className='sub-doc-1-1'>
                        <h1 className='docs-title'>Where To Get Support</h1>
                        <div className='sub-doc-content-1'>
                            <p className='sub-doc-para-1'>This page is an overview of the React documentation and related resources.</p>
                            <p className='sub-para'><strong>React</strong> is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.</p>
                            <hr />
                            <ul className='doc-unordered-list'>
                                <li>Try React</li>
                                <li>Learn React</li>
                                <li>Staying Informed</li>
                                <li>Versioned Documentation</li>
                                <li>Something Missing?</li>
                            </ul>
                            <hr />
                            <h2 id="try-react">Try React</h2>
                            <p className='sub-para'>React has been designed from the start for gradual adoption, and <strong>you can use as little or as much
                                React as you need. </strong>Whether you want to get a taste of React, add some interactivity to
                                a simple HTML page, or start a complex React-powered app, the links in this section
                                will help you get started.</p>
                            <h2 id='playgrounds'>Online Playgrounds</h2>
                            <p className='sub-para'>If you’re interested in playing around with React, you can use an
                                online code playground. Try a Hello World template on CodePen, CodeSandbox, or
                                Stackblitz.</p>
                            <p className='sub-para'>If you prefer to use your own text editor, you can also download
                                this HTML file, edit it, and open it from the local filesystem in your browser. It does a
                                slow runtime code transformation, so we’d only recommend using this for simple demos.</p>

                            <h2 className='designer'>React for Designers</h2>
                            <p className='sub-para'>If you’re coming from a design background, these resources are a
                                great place to get started.</p>

                            <h2 className='designer'>JavaScript Resources</h2>
                            <p className='sub-para'>The React documentation assumes some familiarity with programming in the JavaScript
                                language. You don’t have to be an expert, but it’s harder to learn both React and
                                JavaScript at the same time.</p>
                            <p className='sub-para'>We recommend going through this JavaScript overview to check your knowledge level.
                                It will take you between 30 minutes and an hour but you will feel more confident
                                learning React.</p>
                            <blockquote className='text-quote'>
                                <h3>Tip</h3>
                                <p className='sub-para'>Whenever you get confused by something in JavaScript, MDN and
                                    javascript.info are great websites to check. There are also community support forums
                                    where you can ask for help.</p>
                            </blockquote>
                        </div>
                    </div>
                    <div className='doc-footer'>
                        <div className='doc-footer-item item-1'>
                            <p>Next article</p>
                            <h2>Add React to a Website</h2>
                        </div>
                        <div className='doc-footer-item'>
                            <Footer />
                        </div>
                    </div>

                </div>
                <div className='sub-doc-2'>
                    <div className='sub-doc-content-2'>
                        <h2>INSTALLATION</h2>
                        <h2>MAIN CONCEPTS</h2>
                        <h2>ADVANCED GUIDES</h2>
                        <h2>API REFERENCE</h2>
                        <h2>HOOKS</h2>
                        <h2>TESTING</h2>
                        <h2>CONTRIBUTING</h2>
                        <h2>FAQ</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Community
