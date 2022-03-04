import React from "react";

function Button({ updateTags, children: tag }) {
  return (
    <button className="card__btn" onClick={() => updateTags(tag)}>
      {tag}
    </button>
  );
}

export default Button;
