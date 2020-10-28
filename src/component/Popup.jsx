import React from 'react'

const Popup = ({selected, closePopup}) => {
    return (
        <div>
           <div className="popup">
              <div className="content">
                  <h2>{selected.Title} <span>({selected.Year})</span></h2>
                  <p className="rating">Rating: {selected.imdbRating}</p>
                  <div className="plot">
                      <img src={selected.Poster} />
                      <p>{selected.Plot}</p>
                  </div>
                  <button className="close" onClick={closePopup}>Close</button>
              </div>
            </div> 
        </div>
    )
}

export default Popup
