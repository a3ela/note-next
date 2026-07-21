import { createNote } from '../../actions/notes';

const NewNote = () => {
  return (
    <div>
      <h2>Create a new note</h2>
      <form action={createNote} method="post">
        <div>
          <label>
            Content
            <input className="form-input bg-gray-100 text-gray-800 placeholder:text-gray-500" type="text" name="content" required />
          </label>
        </div>
        <div>
          <label>
            <input className="form-checkbox" type="checkbox" name="important" />
            Important
          </label>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default NewNote;
