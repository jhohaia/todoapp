import React from "react"

export default function Sidebar(props) {
    const noteElements = props.notes.map((note, index) => (
        <div key={note.id}>
            <div

                className={`title ${note.id === props.currentNote.id ? "selected-note" : ""
                    }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <h4 className="text-snippet">{note.body.split("\n")[0]}</h4>
                <button
                    className="delete-btn"
                    onClick={(event) => props.deleteNote(event, note.id)}
                >
                    <i className="gg-trash trash-icon" title="Delete note"></i>
                </button>
            </div>
        </div>
    ))

    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Notes</h3>
                <div className="sidebar--header-button-group">
                    <button title="Add note"
                        className="new-note" onClick={props.newNote}>+</button>
                    <button
                        className="delete-btn-header"
                        onClick={(event) => props.deleteAllNotes(event)}
                    >
                        <i className="gg-trash trash-icon" title="Delete all notes" />
                    </button>
                </div>

            </div>
            {noteElements}
        </section>
    )
}
