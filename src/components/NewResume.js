import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import { Paper, Container, Grid, Typography,Box } from '@mui/material';
import Resume from '../assets/Profile.pdf'

export default function Test() {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Container>
      <Document
        file={Resume}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from(
          new Array(numPages),
          (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width='900'
            />
          ),
        )}
      </Document>
    </Container>
  );
}