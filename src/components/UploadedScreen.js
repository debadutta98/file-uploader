import Card from "./UI/Card";
import '../style/upload.css';
import {MdDone}  from 'react-icons/md';
import { useState } from "react";
export default function UploadedScreen(props) {
    const [copied,setCopied] = useState(false);
    return <Card>
        <div className="upload-status">
            <MdDone color="white" size={30} className="success-icon"/>
        </div>
        <h4 className="title">Uploaded Successfully!</h4>
        <img src={props.url} alt="uploadedimage" className="uploaded-image"/>
        <div className="show-link-container">
            <small style={{fontSize: '8px'}}>{(props.url.length > 46) ? props.url.slice(0, 46 - 1) + '...' : props.url}</small>
            <button className="btn" style={{padding: "10px", marginLeft:"auto"}} onClick={()=>{
                if(!copied) {
                    navigator.clipboard.writeText(props.url);
                    setCopied(true);
                    setTimeout(() => {
                        setCopied(false)
                    }, 2000);
                }
            }}>{copied?'Copied Link':'Copy Link'}</button>
        </div>
    </Card>
}