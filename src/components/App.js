import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { Link, Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  return (
    <div>

      <section id="homeLanding" className="section__home-landing vh-100">
        <div className="container h-100">
          <div className="row align-items-center h-75">
            <div className="col justify-content-center flex-column">
              <div className="jumbotron">
                <div className="pb-5">
                  <h1 className="display-4">Welcome to... <br /> Matthew Gilbert's Portfolio. </h1>
                  <hr className="my-4" />
                  <p className="lead">I'm Matt, a Web Developer from Birmingham, Alabama.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center h-25">
            <div className="col justify-content-center flex-column">
              <div className="align-text-bottom text-center">
                <Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500}>
                  <FontAwesomeIcon icon={faAngleDoubleDown} size="4x" color="white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Element name="test1" className="element">
        <section id="homeRibbonTyping" className="section__home-ribbon-typing">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1 className="display-4 typing-effect-input">
                  I am <em>
                    <ReactTypingEffect
                      text={[
                        "innovative.",
                        "passionate.",
                        "creative.",
                        "motivated.",
                        "ambitious.",
                        "efficient.",
                        "agile.",
                        "reliable.",
                        "driven."
                      ]}
                      speed={200}
                      eraseSpeed={100}
                      eraseDelay={1000}
                      typingDelay={1000}
                    />
                  </em>
                </h1>
              </div>
            </div>
          </div>
        </section>
      </Element>
    </div>
  )
};

export default App;