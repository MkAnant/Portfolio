import React from 'react'
import { Worker, Viewer } from "@react-pdf-viewer/core";
import '@react-pdf-viewer/core/lib/styles/index.css';
import pdfFile from "../../../assets/Anant_FullStack.pdf";
import "./Resume.css"

const Resume = () => {
    return (
        <div className="resume">
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}>
                <Viewer fileUrl={pdfFile} />
            </Worker>
        </div>
    );
}

export default Resume