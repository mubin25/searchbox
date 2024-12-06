import React from "react";

function Results({ data }) {
  return (
    <div className="row">
      {data.length > 0 ? (
        data.map((item) => (
          <div key={item.id} className="col-md-6 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">Category: {item.category}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="col-12">
          <p className="text-center">No results found</p>
        </div>
      )}
    </div>
  );
}

export default Results;
