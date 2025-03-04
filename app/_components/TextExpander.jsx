"use client";
import { useState } from "react";

function TextExpander({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, 40).join(" ") + "...";

  return (
    <span>
      {children.length > 40 ? (
        <>
          {displayText}{" "}
          <button
            className="text-primary-700 border-b border-primary-700 leading-3 pb-1"
            onClick={() => setIsExpanded((prev) => !prev)}
          >
            {isExpanded ? "Show less" : "Show more"}
          </button>
        </>
      ) : (
        children
      )}
    </span>
  );
}

export default TextExpander;
