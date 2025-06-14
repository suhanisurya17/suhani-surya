import React from 'react';

export default function Projects() {
    return (
        <div
            style={{
                maxHeight: '200px',     // or whatever fits nicely in your window
                overflowY: 'auto',
                paddingRight: '10px',   // prevent scrollbar from overlapping text
            }}
        >
            <h2>Projects</h2>
            <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
                <li>
                    <strong>Tailored:</strong> AI-powered virtual closet that scrapes fashion data from TikTok and Pinterest to help users plan outfits.
                </li>
                <li>
                    <strong>Traffic Light Simulator:</strong> Built with Raspberry Pi Pico and MicroPython for an embedded systems class project.
                </li>
                <li>
                    <strong>Breast Cancer Detection:</strong> Trained an object detection model with 99.5% mAP using Roboflow and a medical image dataset.
                </li>
                <li>
                    <strong>OCR Web Tool:</strong> React-based app that uses Tesseract.js to extract and copy text from uploaded images and PDFs.
                </li>
                {/* Add more projects here if needed */}
            </ul>
        </div>
    );
}
