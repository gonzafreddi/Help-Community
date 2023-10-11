import { useEffect, useRef } from "react";
import style from './UploadWidget.module.css'

const UploadWidget = ({ onImageUpload }) => { // Añade la prop "onImageUpload"
    const cloudinaryRef = useRef();
    const widgetRef = useRef();

    const url = useRef();

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dauipbxlu',
            uploadPreset: 'oovc8zam'
        }, function(error, result){
            if(result.event === 'success') {
                url.current = result.info.url;
                onImageUpload(url.current); // Llama a la función con la URL
            }
        });
    }, [onImageUpload])

    return (
        <div>
            <button
                className={style.button} 
                type="button" 
                onClick={() => widgetRef.current.open()}
            >
                <p className={style.buttonPlus}>+</p>
            </button>
        </div>
    )
}

export default UploadWidget;
