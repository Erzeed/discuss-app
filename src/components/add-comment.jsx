import React, { useState } from 'react';

function addComment({ addKoment }) {
  const [inputContent, setInputContent] = useState();

  const onHandleChange = (text) => {
    setInputContent({
      ...inputContent,
      [text.target.id]: text.target.value,
    });
  };

  const onReplyComment = () => {
    const { content } = inputContent;
    addKoment(content);
  };
  return (
    <div className="input__comment">
      <form action="">
        <textarea name="comment" id="content" placeholder="Berikan Komentar" onChange={(txt) => onHandleChange(txt)} />
      </form>
      <div className="btn__input">
        <button className="cancel" type="submit">Batal</button>
        <button onClick={onReplyComment} className="post" type="submit">Komentar</button>
      </div>
    </div>
  );
}

export default addComment;
