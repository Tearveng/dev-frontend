import React from 'react';
// Import the useDropzone hooks from react-dropzone
import {useDropzone} from 'react-dropzone';
import {Box} from 'native-base';

const Dropzone = ({onDrop, accept}: any) => {
  // Initializing useDropzone hooks with options
  const {isDragActive} = useDropzone({
    onDrop,
    accept,
  });

  /*
    useDropzone hooks exposes two functions called getRootProps and getInputProps
    and also exposes isDragActive boolean
  */

  return (
    // <div className="dropzone-div" {...getRootProps()}>
    //   <input className="dropzone-input" {...getInputProps()} />
    //   <div className="text-center">
    //     {isDragActive ? (
    //       <p className="dropzone-content">Release to drop the files here</p>
    //     ) : (
    //       <p className="dropzone-content">
    //         Drag drop some files here, or click to select files
    //       </p>
    //     )}
    //   </div>
    // </div>]
    <Box>
      {isDragActive ? (
        <p className="dropzone-content">Release to drop the files here</p>
      ) : (
        <p className="dropzone-content">
          Drag drop some files here, or click to select files
        </p>
      )}
    </Box>
  );
};

export default Dropzone;
