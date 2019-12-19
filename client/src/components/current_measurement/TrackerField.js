import React from 'react';

export default ({input, label, theClass, meta: {error,touched}}) => {
    return(
      <div className={theClass}>
        <label> {label} </label>
        <input {...input} style={{marginBottom:'1px'}}/>
        <div className="red-text" style={{marginBottom: '10px'}}>
          {touched && error}
        </div>
      </div>
    );
};
