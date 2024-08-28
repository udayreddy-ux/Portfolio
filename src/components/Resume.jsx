import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import 'react-pdf/dist/Page/TextLayer.css';
import Footer from "./Footer";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
export default function Resume() {
  const pdfURL = 'Uday_Kovvuri__Resume.pdf';
  const [width,setWidth]=useState(window.innerWidth);
  useEffect(()=>{
    const handleResize=()=>{
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize",handleResize);
    return()=>{
      window.removeEventListener("resize",handleResize);
    };
  },[]);
  const scale=width > 700 ? 1.5 : 0.6;
  return(
    <>
      <div className="resume-section">
        <div className="resume">
          <Document file={pdfURL}>
            <Page pageNumber={1} scale={scale}/>
          </Document>
        </div>
        <a href="Uday_Kovvuri__Resume.pdf" target="_blank" download>
          <button type="button">
            Download CV <AiOutlineDownload />
          </button>
        </a>
      </div>
      <Footer/>
    </>
  );
}