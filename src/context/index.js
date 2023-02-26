import React, { useContext, useState } from "react";
import { Client } from "filestack-js";
const context = React.createContext({
    /**
     * 
     * @param {File} data 
     */
    upload:async function(data) {
        // used for signature
    },
    /**
     * @type {'upload' | 'uploading' | 'uploaded'}
     */
    state: "upload",
    /**
     * @type {string}
     */
    url:''
});

export default function  ContextProvider (props) {
    const [appState, setAppState] = useState({state:"upload",url:''});
    /**
     * 
     * @param {File} data 
     */
    const upload = async function (data) {
        const client = new Client(process.env.REACT_APP_FILESTACK_API_KEY,{})
        try {
            setAppState((prevState)=>{
                return {
                    ...prevState,
                    state:"uploading"
                }
            });
            const response = await client.upload(data);
            if (response.url) {
                setAppState({
                        state: "uploaded",
                        url:response.url
                    });
            }
        } catch (error) {
            const confirm = window.confirm("it's taking longer than expected please try again");
            if(confirm) {
                window.location.reload();
            } 
        }
    }
    return <context.Provider value={{
        upload,
        ...appState
    }}>{props.children}</context.Provider>
}

export const useAppContext = () => useContext(context);
