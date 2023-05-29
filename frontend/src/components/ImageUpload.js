import React, { useEffect, useRef, useState } from "react";
import "./ImageUpload.css";
import Button from "./Button";

const ImageUpload = ({
  file,
  setFile,
  displayButton = true,
  imageButtonclick = () => {},
}) => {
  const [previewUrl, setPriviewUrl] = useState();
  const [isvalid, setIsValid] = useState(false);
  const filePickerRef = useRef();

  useEffect(() => {
    try {
      if (!file) {
        return;
      }
      // console.log("file", file);
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPriviewUrl(fileReader.result);
      };
      fileReader.readAsDataURL(file);
    } catch (e) {
      return;
    }
  }, [file]);

  // const onSubmitHandler = () => {
  //   const formdata = new FormData();
  //   formdata.append("file", file);
  //   // formdata.append("name", "milan");
  //   fetch("/api/products/create", {
  //     method: "POST",
  //     body: formdata,
  //   });
  // };

  const imagePickHandler = (e) => {
    let pickedFile;
    if (e.target.files && e.target.files.length === 1) {
      pickedFile = e.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  return (
    <div className="cmp-form-control">
      <input
        type="file"
        aria-label="Image upload"
        style={{ display: "none" }}
        ref={filePickerRef}
        accept=".jpg, .png, .jpeg"
        onChange={imagePickHandler}
        name="file"
      />

      <div className={`cmp-image-upload `}>
        <div className="cmp-image-upload__preview">
          {isvalid ? <img src={previewUrl} alt="preview" /> : "Choose File"}
        </div>

        {displayButton ? (
          <Button
            type="button"
            onClick={() => {
              imageButtonclick();
              pickImageHandler();
            }}
          >
            Choose Image
          </Button>
        ) : (
          ""
        )}

        {/* <Button type="button" onClick={onSubmitHandler}>
          submit
        </Button> */}
      </div>
    </div>
  );
};

export default ImageUpload;
