import React from "react";

function TagItem({ tag, removeTag }) {
  return (
    <div className="tag">
      <p className="tag__text">{tag}</p>
      <button onClick={() => removeTag(tag)} className="tag__btn">
        X
      </button>
    </div>
  );
}

export default TagItem;
