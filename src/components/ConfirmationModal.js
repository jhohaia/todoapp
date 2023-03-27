import React from "react"

export default function ConfirmationModal(props) {


    return (
        <>
        <div className="overlay" />
        <div className="modal">
            <p>Are you sure you want to delete all notes?</p>
            <button className="modal-button-confirm" onClick={props.handleConfirmDeleteAllNotes}>Yes</button>
            <button className="modal-button-cancel" onClick={props.handleCancelDeleteAllNotes}>Cancel</button>
        </div>
    </>
    )
}
