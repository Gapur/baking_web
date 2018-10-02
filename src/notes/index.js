import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Masonry from 'react-masonry-component';

import withData from '../shared/components/LoadingHoc';
import { fetchNotes, createNote } from './notesActions';
import Overlay from '../shared/components/Overlay';
import NoteForm from './components/NoteForm';
import { parseFormErrors } from '../shared/utils/form_errors';

class NotesScreen extends Component {
  constructor(props) {
    super(props);

    this.state = { showNoteModal: false, editNoteId: null };

    this.handleCreateNote = this.handleCreateNote.bind(this);
  }

  handleCreateNote(values) {
    return this.props.createNote(values)
      .then(() => this.setState({ showNoteModal: false }))
      .catch(parseFormErrors);
  }

  renderHeader() {
    return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <div className="navbar-item">
            <h4 className="title is-4">My Notes</h4>
          </div>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start"></div>
          <div className="navbar-end">
            <div className="navbar-item">
              <button
                className="button is-primary "
                onClick={() => this.setState({ showNoteModal: true })}
              >
                New Note
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  
  render() {
    const { notes } = this.props;
    return (
      <div className="container">
      
        {this.renderHeader()}
         
        <Masonry className="columns is-multiline">
          {notes.map(note =>
            <div className="column is-3">
              <div className="box content">
                <h5>{note.title}</h5>
                <p>{note.text}</p>
              </div>
            </div>
          )}
        </Masonry>
        
        {this.state.showNoteModal &&
          <Overlay>
            <NoteForm
              onSubmit={this.handleCreateNote}
              onCancel={() => this.setState({ showNoteModal: false })}
            />
          </Overlay>
        }
      </div>
    );
  }
}

export default compose(
  connect(({ notes }) => ({
    notes,
  }),
    { fetchNotes, createNote }
  ),
  withData(
    ({ notes, fetchNotes }) => ({
      loader: fetchNotes, isLoaded: notes != null
    })
  )
)(NotesScreen);
