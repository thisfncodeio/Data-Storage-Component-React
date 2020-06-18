import React, { Component } from 'react';
import document_icon from '../Media/icon-document.svg';
import folder_icon from '../Media/icon-folder.svg';
import upload_icon from '../Media/icon-upload.svg';

const icons = [
    document_icon,
    folder_icon,
    upload_icon
];

class Icons extends Component {
    render() {
        return (
            <div className="icons-container-div">
                {icons.map((icon, i) => <div className="icon-div" key={i}><img src={icon} alt={`${icon}`} id="icon" /></div>)}
            </div>
        )
    }
}

export default Icons;
