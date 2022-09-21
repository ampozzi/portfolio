import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import { Grid, Box, Button, Container} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import Resume from '../assets/Axel Pozzi - Resume.pdf';

export default function Test() {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Container 
    maxWidth='lg'
    sx={{height:'100%'}}>
      <Grid container
      direction='column'
      justifyContent='center'
      alignItems='center'
      sx={{height:'100%'}}
      >
        <Box my={1}>
          <Button 
          variant="contained" 
          startIcon={<DownloadIcon />}
          href={Resume}
          download=""
          >
            Download</Button>
          </Box>
        <Grid item>
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
                  width='1000'
                />
              ),
            )}
          </Document>
        </Grid>
      </Grid>
    </Container>
  );
}