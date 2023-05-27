import React from 'react';
import UploadVideo from '../../../../components/upload-components/video/upload-video';

const SubirVideo = () => {
    return (
        <div>
            <div className="columns is-centered">
                <div className="column is-three-quarters documento-slider" >
                    <div className="box" style={{ marginTop: "5%", marginBottom: "5%" }}>
                        <UploadVideo />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubirVideo;