import React from "react";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      message: "Check out this bundle.js"
    }
  }
  render(){
    return(
      <div className='App'>
        <div className='container'>
          <div className='header'>header</div>
          <div className='banner'>banner</div>
          <div className='wrapper'>
            <div className='overviewWrapper'>
              <div className='overviewLeft'>
                overviewLeft
                <div className='overviewLeft2'>
                  <div className='overviewProductImg'>
                    <div className='productThumbs'>productThumbs</div>
                    overviewProductImg##########
                  </div>
                </div>
              </div>
              <div className='overviewRight'>overviewRight</div>
            </div>
            <div className='rItemsCompare'>
              rItemsCompare
              <div className='relatedProducts'>relatedProducts</div>
              <div className='favoriteProducts'>favoriteProducts</div>
            </div>
            <div className='questAns'>
              questAns
              <div className='quesTop'>quesTop</div>
              <div className='quesMid'>quesMid</div>
              <div className='quesBot'>quesBot</div>
            </div>
            <div className='rateRev'>
              rateRev
              <div className='ratings'>ratings</div>
              <div className='reviews'>reviews</div>
            </div>
          </div>
          <div className='footer'>footer</div>
        </div>
      </div>
    );
  }
}

export default App;