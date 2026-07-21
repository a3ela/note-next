import { notFound } from "next/navigation";
import { getNoteById } from "../../services/notes";
import { toggleNoteImportance } from "../../actions/notes";

const NotePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const note = await getNoteById(Number(id));

  if (!note) {
    return (
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Note not found</h2>
        <p className="text-sm text-gray-500">
          The note you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">{note.content}</h2>
      <p className="text-sm text-gray-500">
        {note.important ? "Important" : "Not Important"}
      </p>

      <form action={toggleNoteImportance}>
        <input type="hidden" name="id" value={note.id} />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Toggle Importance
        </button>
      </form>
    </div>
  );
};

export default NotePage;
