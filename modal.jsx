import React, { useState } from 'react';
import './modal';

const Modal = ({ onClose, onCreate }) => {
  const [groupName, setGroupName] = useState('');
  const [groupColor, setGroupColor] = useState('#3662E3');

  const handleCreate = () => {
    if (!groupName.trim()) return;
    const initials = groupName
      .split(' ')
      .map(word => word[0]?.toUpperCase())
      .join('');
    onCreate({ name: groupName, color: groupColor, initials, notes: [] });
    setGroupName('');
    setGroupColor('#3662E3');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h2>Create New Group</h2>

        <label>Group Name</label>
        <input
          type="text"
          placeholder="Enter group name"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />

        <label>Choose Colour</label>
        <div className="color-options">
  {['#B38BFA','#FF79F2','#43E6FC','#F19576','#0047FF','#6691FF'].map((color) => (
    <div
      key={color}
      className={`color-circle ${groupColor === color ? 'selected' : ''}`}
      style={{ backgroundColor: color }}
      onClick={() => setGroupColor(color)}
    />
  ))}
</div>
      

        <div className="modal-buttons">
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
          <button className="create-btn" onClick={handleCreate}>Create</button>
          
         </div>
        </div>
      </div>
    

  );
};

export default Modal;
