import { NotePreview } from './note-preview.jsx';

export function NoteList({ notes }) {
    if (!notes.length) return <h1>There are no notes yet</h1>
    return (
        <section className="note-list">
            {notes.map(note => <NotePreview key={note.id} note={note} />)}
        </section>
    )
}