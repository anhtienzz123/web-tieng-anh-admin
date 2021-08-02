import ImageUploader from "quill-image-uploader";
import React, { useEffect, useState } from "react";
import ReactQuill, { Quill } from "react-quill";

Quill.register("modules/imageUploader", ImageUploader);

function MyEditor(props) {
  const [editorValue, setEditorValue] = useState("");
  const [src, setSrc] = useState("");
  let quillObj;

  const handleChange = (content, delta, source, editor) => {
    console.log("html: ", content);
    console.log("delta: ", delta);
    console.log("source: ", source);
    console.log("editor: ", editor.getContents());

    const images = getImgUrls(editor.getContents());
    console.log("images: ", images);
  };

  function getImgUrls(delta) {
    if (!delta) return;
    return delta.ops
      .filter((i) => i.insert && i.insert.image)
      .map((i) => i.insert.image);
  }
  const apiPostNewsImage = () => {};

  return (
    <div>
      <img src={src} />

      <ReactQuill
        ref={(el) => {
          quillObj = el;
        }}
        value={editorValue}
        modules={{
          toolbar: {
            container: [
              ["bold", "italic", "underline", "strike"],
              ["blockquote", "code-block"],

              [{ header: 1 }, { header: 2 }],
              [{ list: "ordered" }, { list: "bullet" }],
              [{ script: "sub" }, { script: "super" }],
              [{ indent: "-1" }, { indent: "+1" }],
              [{ direction: "rtl" }],

              [{ size: ["small", false, "large", "huge"] }],
              [{ header: [1, 2, 3, 4, 5, 6, false] }],

              [{ color: [] }, { background: [] }],
              [{ font: [] }],
              [{ align: [] }],
              ["link", "image"],
              ["clean"],
            ],
          },
          imageUploader: {
            upload: (file) => {
              return new Promise((resolve, reject) => {
                const formData = new FormData();
                formData.append("image", file);

                fetch(
                  "https://api.imgbb.com/1/upload?key=d36eb6591370ae7f9089d85875e56b22",
                  {
                    method: "POST",
                    body: formData,
                  }
                )
                  .then((response) => response.json())
                  .then((result) => {
                    console.log(result);
                    resolve(result.data.url);
                  })
                  .catch((error) => {
                    reject("Upload failed");
                    console.error("Error:", error);
                  });
              });
            },
          },
        }}
        placeholder="Add a description of your event"
        onChange={(content, delta, source, editor) =>
          handleChange(content, delta, source, editor)
        }
        id="editor"
      />
    </div>
  );
}

export default MyEditor;
