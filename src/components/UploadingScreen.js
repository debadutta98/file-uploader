import Card from "./UI/Card";
import ProgressBar from "./UI/ProgressBar";

export default function UploadingScreen() {
    return <Card style={{ alignItems: "start"}}>
        <h4 className="title">Uploading...</h4>
        <ProgressBar/>
    </Card>;
}