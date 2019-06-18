import React, { Component } from 'react'
import Files from "react-butterfiles";

<Files
  multiple={true}
  maxSize="2mb"
  multipleMaxSize="10mb"
  multipleMaxCount={3}
  accept={["application/pdf", "image/jpg", "image/jpeg"]}
  onSuccess={files => this.setState({ files })}
  onError={errors => this.setState({ errors })}
>
  {({ browseFiles, getDropZoneProps }) => (
    <>
      <div {...getDropZoneProps({ className: "myDropZone" })} />
      <button onClick={browseFiles}>Select files...</button>
      <ol>
        {this.state.files.map(file => (
          <li key={file.name}>{file.name}</li>
        ))}
        {this.state.errors.map(error => (
          <li key={error.file.name}>
            {error.file.name} - {error.type}
          </li>
        ))}
      </ol>
    </>
  )}
</Files>