import { Trash2, BookCheck } from "lucide-react";

export default function MiniFormButtons({ handleDelete, index, setIsOpen }) {
  return (
    <div className="mini-form-buttons">
      <button className="delete-button" onClick={() => handleDelete(index)}>
        <Trash2 size={18} /> Delete
      </button>
      <button className="done-button" onClick={() => setIsOpen((is) => !is)}>
        <BookCheck size={18} /> Done
      </button>
    </div>
  );
}
