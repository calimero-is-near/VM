import "./quill.snow.css";
import Quill from "quill";
import 'quill-paste-smart';
import React, { useEffect, useRef } from "react";

export const MarkdownEditor = (props) => {
  const ref = useRef(null);
  const quillRef = useRef(null);
  const toolbarOptions = ['bold', 'italic', 'underline', 'strike', { 'list': 'ordered' }, { 'list': 'bullet' }];

  const sendMessage = () => {
    props.handleMessageSent(quillRef.current.root.innerHTML);
    quillRef.current.setText('');
  }

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
          clipboard: {
            allowed: {
                tags: ['a', 'b', 'strong', 'u', 's', 'i', 'p', 'br', 'ul', 'ol', 'li', 'span'],
                attributes: ['href', 'rel', 'target', 'class']
            },
            keepSelection: true,
            substituteBlockElements: false,
            magicPasteLinks: true,
        },
        }
      },
      theme: "snow",
      });
      quillRef.current.root.innerHTML = props.value;
    }
  }, []);

  useEffect(()=>{
    if (quillRef.current.root.innerHTML.includes('<p><br></p>')){
      const newValue = quillRef.current.root.innerHTML.replaceAll('<p><br></p>', '');
      quillRef.current.root.innerHTML = newValue;
    }
    if(quillRef.current.root.innerHTML !== props.value) {
      const delta = quillRef.current.clipboard.convert(props.value);
      quillRef.current.setContents(delta, 'silent');
      return;
    }
    if(quillRef.current){
      quillRef.current.on('text-change', (delta, oldDelta, source) => {
        const value = quillRef.current.root.innerHTML;
        props.setValue(value);
      });
    }
  },[quillRef.current, props.value])

  return (
      <div ref={ref} />
  );
}
