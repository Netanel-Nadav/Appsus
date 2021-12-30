const { Link } = ReactRouterDOM

export function NotePreview({ note }) {
    return (
        // <Link to={`/note-details/${note.id}`}>

        <article className="note-preview">

            <h2>{note.info.txt}</h2>

            <h4>id {note.id}</h4>
            <button className={`pin-btn note-btn fas fa-thumbtack`}></button>

            <button className={`color-btn note-btn fas fa-palette`}></button>

            <button className={`share-btn note-btn fas fa-envelope`}></button>

            <button className={`edit-btn note-btn fas fa-edit`}></button>

            <button className={`delete-btn note-btn fas fa-trash-alt`}></button>

        </article>

        // </Link>
    )
}