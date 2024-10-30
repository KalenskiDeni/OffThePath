import React from 'react';




export default function ProfilePage() {
    return (
      <section className="profile-page">
        <div className="earth-section">
          <div className="earth-image">
            <div className="countries-stats">
              <p><strong>1 / 202</strong> countries been</p>
              <p><strong>0%</strong> of the world</p>
            </div>
          
          </div>
        </div>
  
        <div className="profile-info">
          <div className="profile-header">
          <div className="outer-thumbnail-container">
          <div className="profile-thumbnail-container">
            < div className="profile-thumbnail" />
            </div>
            </div>
            <h2>Alex, 21</h2>
            <p>Danish</p>
          </div>
          <button className="action-btn">View Profile</button>
          <button className="action-btn">Edit Profile</button>
  
          <div className="verification">
            <p>Not Verified Yet</p>
            <span>Verify your profile to get a verification badge</span>
          </div>
  
          <ul className="settings-list">
            <li>General Settings</li>
            <li>Favourites</li>
            <li>Archive</li>
            <li>My Subscriptions</li>
          </ul>
  
          <div className="travel-assistant">
            <p>Travel Assistant</p>
            <p>Smartest AI Travel Assistant</p>
            <button>Get OffThePath Pro</button>
          </div>
        </div>
      </section>
    );
  }