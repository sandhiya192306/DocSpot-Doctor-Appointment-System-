import React, { useState, useEffect } from 'react';
import { Tabs, message } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Notification = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const getUser = () => {
    const userdata = JSON.parse(localStorage.getItem('userData'));
    if (userdata) {
      setUser(userdata);
    }
  };

  const handleAllMarkRead = async () => {
    if (!user) return;

    try {
      const res = await axios.post(
        'http://localhost:8000/api/user/getallnotification',
        { userId: user._id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      if (res.data.success) {
        const updatedUser = {
          ...user,
          notification: [],
          seennotification: [
            ...(user.seennotification || []),
            ...(user.notification || []),
          ],
        };

        localStorage.setItem('userData', JSON.stringify(updatedUser));
        setUser(updatedUser);
        message.success(res.data.message);
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      message.error('Something went wrong');
    }
  };

  const handleDeleteAllMark = async () => {
    if (!user) return;

    try {
      const res = await axios.post(
        'http://localhost:8000/api/user/deleteallnotification',
        { userId: user._id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      if (res.data.success) {
        const updatedUser = { ...user, seennotification: [] };
        localStorage.setItem('userData', JSON.stringify(updatedUser));
        setUser(updatedUser);
        message.success(res.data.message);
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      message.error('Something went wrong');
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <h2 className="p-3 text-center">Notification</h2>
      <Tabs>
        <Tabs.TabPane tab="Unread" key="unread">
          <div className="d-flex justify-content-end">
            <h4
              style={{ cursor: 'pointer' }}
              onClick={handleAllMarkRead}
              className="p-2"
            >
              Mark all read
            </h4>
          </div>

          {user?.notification?.length ? (
            user.notification.map((notificationMsg, index) => (
              <div
                key={notificationMsg._id || index}
                className="card"
                style={{ cursor: 'pointer' }}
                onClick={() => navigate(notificationMsg.onClickPath)}
              >
                <div className="card-text">{notificationMsg.message}</div>
              </div>
            ))
          ) : (
            <p className="p-2">No unread notifications.</p>
          )}
        </Tabs.TabPane>

        <Tabs.TabPane tab="Read" key="read">
          <div className="d-flex justify-content-end">
            <h4
              style={{ cursor: 'pointer' }}
              onClick={handleDeleteAllMark}
              className="p-2"
            >
              Delete all read
            </h4>
          </div>

          {user?.seennotification?.length ? (
            user.seennotification.map((notificationMsg, index) => (
              <div
                key={notificationMsg._id || index}
                className="card"
                style={{ cursor: 'pointer' }}
              >
                <div
                  className="card-text"
                  onClick={() => navigate(notificationMsg.onClickPath)}
                >
                  {notificationMsg.message}
                </div>
              </div>
            ))
          ) : (
            <p className="p-2">No read notifications.</p>
          )}
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default Notification;
