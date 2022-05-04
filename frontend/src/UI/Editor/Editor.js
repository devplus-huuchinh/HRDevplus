import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.core.css';
import QuillEditor from './Editor.style';

function Editor(props) {
   const { onChange, defaultValue } = props;

   const options = {
      theme: 'snow',
      formats: Editor.formats,
      placeholder: 'Write Something',
      onChange: onChange,
      modules: {
         toolbar: {
            container: [
               [{ header: [1, 2, false] }, { font: [] }],
               ['bold', 'italic', 'underline', 'strike', 'blockquote'],
               [
                  { list: 'ordered' },
                  { list: 'bullet' },
                  { indent: '-1' },
                  { indent: '+1' },
               ],
               ['link', 'image', 'video'],
               ['clean'],
            ],
         },
      },
   };

   return (
      <QuillEditor>
         <ReactQuill
            {...options}
            defaultValue={defaultValue ? defaultValue : ''}
         />
      </QuillEditor>
   );
}

export default Editor;
