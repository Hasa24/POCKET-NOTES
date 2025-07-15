import React, { useState } from 'react';
import Sidebar from './sidebar';
import Modal from './modal';
import './App.css';

function App() {
  const [groups, setGroups] = useState([]);
  const [selectedGroupIndex, setSelectedGroupIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [noteText, setNoteText] = useState('');

  // Handles group creation
  const handleCreateGroup = (groupData) => {
    if (!groupData.name.trim()) return;

    const initials = groupData.name
      .split(' ')
      .map(word => word[0]?.toUpperCase())
      .join('');

    const newGroup = {
      name: groupData.name,
      color: groupData.color,
      initials,
      notes: [],
    };

    setGroups([...groups, newGroup]);
    setShowModal(false);
  };

  // Sends a note to the selected group
  const handleSendNote = () => {
    if (!noteText.trim()) return;
    const updatedGroups = [...groups];
    updatedGroups[selectedGroupIndex].notes.push({
      text: noteText,
      timestamp: new Date().toLocaleString(),
    });
    setGroups(updatedGroups);
    setNoteText('');
  };

  return (
    <div className="app-container">
      <Sidebar
        groups={groups}
        onSelectGroup={setSelectedGroupIndex}
        selectedIndex={selectedGroupIndex}
        onAddGroup={() => setShowModal(true)}
      />

      <div className="main-panel">
        {selectedGroupIndex === null ? (
          <>
            <button className="add-group-btn" onClick={() => setShowModal(true)}>+</button>
            <div className="welcome-screen">
              <div className="welcome">
                <img src="/bgimage.png" alt="Welcome" />
                <h1>Pocket Notes</h1>
                <p>Send and receive messages without keeping your phone online.</p>
                <p>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
                <div className="lock-info">
                  <img src="/lock.png" alt="lock" />
                  <span>end-to-end encrypted</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="chat-panel">
            <div className="chat-header">
              <div
                className="group-icon"
                style={{ backgroundColor: groups[selectedGroupIndex].color }}
              >
                {groups[selectedGroupIndex].initials}
              </div>
              <h3>{groups[selectedGroupIndex].name}</h3>
            </div>

            <div className="chat-messages">
              {groups[selectedGroupIndex].notes.map((msg, idx) => (
                <div className="chat-message" key={idx}>
                  <p>{msg.text}</p>
                  <span>{msg.timestamp}</span>
                </div>
              ))}
            </div>

            <div className="chat-input">
              <textarea
                value={noteText}
                placeholder="Here's the sample text for sample work"
                onChange={(e) => setNoteText(e.target.value)}
              />
              <button
                disabled={noteText.trim() === ''}
                onClick={handleSendNote}
              >
                ➤
              </button>
            </div>
          </div>
        )}
      </div>

      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          onCreate={handleCreateGroup}
        />
      )}
    </div>
  );
}

export default App;
