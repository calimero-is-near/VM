import "./quill.snow.css";
import React, { useEffect, useState, useRef } from "react";
import ReactQuill from "react-quill";

export const MarkdownEditor = (props) => {
  const [positionIndex, setPositionIndex] = useState(0);
  const quillRef = useRef(null);
  const textValue = [
    "<p>hello</p>",
    "<p><br></p>",
    "<p><strong>hello</strong></p>",
    "<p><em>wda</em></p>",
    "<p><u>s</u></p>",
    "<p><s>s</s></p>",
    "<ol><li>abc</li><li>defg</li></ol>",
    "<ul><li>abc</li><li>eg</li></ul"
  ]
  useEffect(() => {
    if (props.selectedEmoji) {
      handleEmojiClick(props.selectedEmoji);
      props.resetSelectedEmoji();
    } else if (!props.value) {
      props.setValue("");
    }
  }, [props.selectedEmoji, props.value]);

  useEffect(()=>{
    if (quillRef?.current) {
      const cursorPosition = quillRef.current.selection?.index;
      if (cursorPosition && positionIndex != 0) {
        setPositionIndex(cursorPosition);
      } else if (cursorPosition && positionIndex == 0){
        setPositionIndex(cursorPosition);
      }
      if (!props.value) {
        setPositionIndex(0);
      }
    }
  },[props.value])

  var toolbarOptions = ['bold', 'italic', 'underline', 'strike', { 'list': 'ordered' }, { 'list': 'bullet' }];

  const handleEmojiClick = (emoji) => {
    if (quillRef.current) {
      let updatedValue = "";
      if (props.value && props.value !== "<p><br></p>") {
        console.log(emoji.length);
        updatedValue = props.value.slice(0, positionIndex) + emoji + props.value.slice(positionIndex);
        setPositionIndex(positionIndex+2);
      } else {
        updatedValue = `<p>${props.selectedEmoji}</p>`;
      }
      props.setValue(updatedValue);
    }
  };
  useEffect(()=>{
    console.log(props.value);
  },[props.value]);
  return (
    <ReactQuill
      modules={{
        toolbar: toolbarOptions
      }}
      theme="snow"
      ref={quillRef}
      value={props.value}
      onChange={props.setValue}
      onChangeSelection={(e) => console.log(e)}
      onKeyDown={(e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          props.handleMessageSent();
          props.setValue("");
        }
      }}
    />
  );
};
