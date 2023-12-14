import "./quill.snow.css";
import React, { useEffect, useRef } from "react";

import Quill from "quill";
import { sanitizePasteHtml } from "virtualized-chat";

export const MarkdownEditor = (props) => {
  const ref = useRef(null);
  const quillRef = useRef(null);
  const toolbarOptions = ['bold', 'italic', 'underline', 'strike', { 'list': 'ordered' }, { 'list': 'bullet' }];

  const sendMessage = () => {
    props.handleMessageSent(quillRef.current.root.innerHTML);
    quillRef.current.setText('');
  }

  const handleDrop = (e) => e.preventDefault();

  const handlePaste = (e) => {
    e.preventDefault();
    const clipboardData = e.clipboardData;
    let pastedData;

    if (clipboardData.types.includes('text/html')) {
      pastedData = clipboardData.getData('text/html');
    } else if (clipboardData.types.includes('text/plain')) {
      pastedData = clipboardData.getData('text/plain');
    }
    const processedData = sanitizePasteHtml(pastedData);
    quillRef.current.root.innerHTML = processedData;
  };

  useEffect(() => {
    if (ref.current) {
      quillRef.current = new Quill(ref.current, {
        modules: {
          toolbar: toolbarOptions,
          keyboard: {
            bindings: {
              enter: {
                  key: 13,
                  handler: sendMessage
              }
          },
        }
      },
      theme: "snow",
      });
      quillRef.current.root.innerHTML = props.value;
      quillRef.current.root.addEventListener("paste", handlePaste);
      quillRef.current.root.addEventListener("drop", handleDrop);
    }
  }, []);

  useEffect(() => {
    const currentQuill = quillRef.current;

    if (currentQuill) {
      if (currentQuill.root.innerHTML !== props.value) {
        const delta = currentQuill.clipboard.convert(props.value);
        currentQuill.setContents(delta, "silent");
      }

      const handleTextChange = (delta, oldDelta, source) => {
        const value = currentQuill.root.innerHTML;
        props.setValue(value);
      };

      currentQuill.on("text-change", handleTextChange);
    }
  }, [quillRef.current, props.value]);

  return (
      <div ref={ref} />
  );
};
