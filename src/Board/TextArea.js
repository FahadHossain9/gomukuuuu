import React from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


function TextArea() {
    const options = [
        'easy', 'hard', 'IMPOSSIBLE'
      ];
      const defaultOption = options[0];
  return (
    <div className='TextBox'>
         <div className='buttons'>
              <button>Restart</button>
              <Dropdown options={options} onChange={this._onSelect} value={defaultOption} 
              placeholder="Level" />;
         </div>
    </div>
  )
}

export default TextArea