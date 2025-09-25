import React, { useState } from "react";
import { CardProps } from "@/interfaces";
import Button from "@/components/common/Button";

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: CardProps) => void;
}

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [titleError, setTitleError] = useState<string | null>(null);
  const [contentError, setContentError] = useState<string | null>(null);

  const validateForm = () => {
    let isValid = true;
    setTitleError(null);
    setContentError(null);

    if (title.length < 3) {
      setTitleError("Title must be at least 3 characters long");
      isValid = false;
    }

    const wordCount = content
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
    if (wordCount < 5) {
      setContentError("Content must have at least 5 words");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit({ title, content });
      setTitle("");
      setContent("");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 bg-black transition-opacity duration-300 flex items-center justify-center z-50 text-gray-700 ${
        isOpen ? "bg-opacity-50" : "bg-opacity-0 pointer-events-none"
      } `}
    >
      <div
        className={`bg-white p-6 rounded-lg shadow-lg w-full max-w-md transition-transform duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <h2 className="text-2xl font-bold mb-4">Create New Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                setTitleError(null);
              }}
              className={`mt-1 p-2 w-full border rounded-md ${
                titleError ? "border-red-500" : ""
              }`}
            />
            {titleError && (
              <p className="text-red-500 text-sm mt-1">{titleError}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-sm font-medium text-black"
            >
              Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
                setContentError(null);
              }}
              className={`mt-1 p-2 w-full border rounded-md ${
                contentError ? "border-red-500" : ""
              }`}
              rows={4}
            />
            {contentError && (
              <p className="text-red-500 text-sm mt-1">{contentError}</p>
            )}
          </div>
          <div className="flex justify-end gap-2">
            <Button size="medium" shape="rounded-md" onClick={onClose}>
              Cancel
            </Button>
            <Button size="medium" shape="rounded-md" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
