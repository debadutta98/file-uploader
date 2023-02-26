import Card from "./UI/Card";
import '../style/upload.css';
import { useAppContext } from "../context";

export default function UploadScreen(){
    const appCtx = useAppContext();
    /**
     * 
     * @param {Event} event 
     */
    const onUploadHandler = (event) => {
        event.preventDefault();
        if (event?.dataTransfer?.files?.length > 0) {
           appCtx.upload(event.dataTransfer.files[0]);
        } else {
            appCtx.upload(event.target.files[0])
        }
    };
    return <Card>
        <h4 className="title">Upload your image</h4>
        <small className="sub-title">File Should be Jpeg, Png...</small>
        <div className="drop-zone" onDrop={onUploadHandler} onDragOver={(event) => { event.preventDefault(); }}>
            <img className="img-placeholder" src="/assets/image.svg" alt="placeholder" />
            <small className="drop-zone-hint-text">Drag & Drop your image here</small>
        </div>
        <small className="divider">Or</small>
        <form>
            <label htmlFor='chooseFile' className="btn">Choose a file</label>
            <input type={'file'} accept="image/png, image/jpeg" id="chooseFile" style={{display:'none'}} onChange={onUploadHandler}/>
        </form>
    </Card>
}