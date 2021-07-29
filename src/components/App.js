import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const App = () => {
  return (
    <div className="container">
      <div className="row">

        <div className="col-8">
          <div className="jumbotron">
            <h1 className="display-4">
              <ReactTypingEffect
                text={[
                  "Leader.", "Driven.", "Passionate.",
                  "Creative.", "Motivated.", "Agile.",
                  "Efficient."
                ]}
                speed={200}
                eraseSpeed={100}
                eraseDelay={1000}
                typingDelay={1000}
              />
            </h1>
            <p className="lead">Welcome to Matthew Gilbert's Portfolio.</p>
            <hr className="my-4" />
            <p>I'm Matt, a Web Developer from Birmingham, Alabama.</p>
            <p>test</p>
            <p className="lead">
              {/* <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a> */}
            </p>
          </div>
        </div>
        {/* <div className="col-4">
          <img src={`${process.env.PUBLIC_URL}/assets/profile.png`} className="rounded mx-auto d-block" alt="Matthew Gilbert" />
        </div> */}

      </div>
    </div>
  )
};

export default App;