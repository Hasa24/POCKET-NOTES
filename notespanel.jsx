import React, { useState } from 'react';
import './notespanel';

const NotesPanel = ({ group }) => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState('');

  const addNote = () => {
    if (!input.trim()) return;
    const newNote = {
      text: input,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };
    setNotes([...notes, newNote]);
    setInput('');
  };

  return (
    <div className="notes-panel">
      <div className="notes-header" style={{ backgroundColor: group.color }}>
        <div className="circle">{group.name.split(' ').map(n => n[0]).join('').toUpperCase()}</div>
        <span>{group.name}</span>
      </div>
      <div className="notes-body">
        {notes.map((note, idx) => (
          <div key={idx} className="note-card">
            <p>{note.text}</p>
            <div className="timestamp">
              <span>{note.date}</span>
              <span>{note.time}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="notes-input">
        <textarea
          placeholder="Enter your text here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addNote} disabled={!input.trim()}>&#10148;</button>
      </div>
    </div>
  );
};

export default NotesPanel;
