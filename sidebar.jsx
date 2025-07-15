import React from 'react';
import './App.css'; // Make sure this contains your sidebar styles

const Sidebar = ({ groups, onSelectGroup, selectedIndex, onAddGroup }) => {
  return (
    <aside className="sidebar">
      {/* Header with logo + text */}
      <div className="sidebar-header">
        <h2 className="sidebar-title">Pocket Notes</h2>
      </div>

      {/* Group list */}
      <div className="group-list">
        {groups.map((group, index) => (
          <div
            key={index}
            className={`group-item ${selectedIndex === index ? 'active' : ''}`}
            onClick={() => onSelectGroup(index)}
          >
            <div
              className="group-avatar"
              style={{ backgroundColor: group.color }}
            >
              {group.initials}
            </div>
            <span className="group-name">{group.name}</span>
          </div>
        ))}
      </div>

      {/* Plus button to open modal */}
      <div className="create-button-wrapper">
        <button className="create-group-btn" onClick={onAddGroup}>
          <img src="/plus.png" alt="Add" />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
