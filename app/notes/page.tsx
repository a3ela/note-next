import { getNotes } from "../services/notes";
import NoteList from "../notelist";

const Notes = async ({
  searchParams,
}: {
  searchParams: { searchParams: Promise<{ important?: string }> };
}) => {

  const { important: } = await searchParams;
  const showImportant = important === "true";
  const allNotes = await getNotes();
  const notes = showImportant
    ? allNotes.filter((note) => note.important)
    : allNotes;

  return (
    <div>
      <h2>Notes</h2>
      <NoteList notes={notes} />
    </div>
  );
};
export default Notes;
