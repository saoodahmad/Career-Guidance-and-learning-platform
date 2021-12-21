import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { getDashboard } from '../../services/usersService';
import MentorDashboard from './MentorDashboard';
import MenteeDashboard from './MenteeDashboard';
import AdminDashboard from './AdminDashboard';
import CustomSnackBar from '../CustomSnackBar/CustomSnackBar';

const Root = () => {
  const [loading, setLoading] = useState(null);
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setLoading(true);
    const func = async () => {
      const { user, error } = await getDashboard();
      if (!error) {
        setUser(user);
      } else {
        setErr(error);
      }
      setLoading(false);
    };
    func();
  }, []);

  return (
    <Container>
      {loading === true && <CustomSnackBar message="loading" severity="info" />}
      {loading === false && err && (
        <CustomSnackBar message={err} severity="error" />
      )}
      {loading === false && user && (
        <CustomSnackBar message="Success" severity="success" />
      )}
      {user &&
        (user.role === 'mentor' ? (
          <MentorDashboard user={user} />
        ) : user.role === 'mentee' ? (
          <MenteeDashboard user={user} />
        ) : (
          <AdminDashboard user={user} />
        ))}
    </Container>
  );
};

export default Root;
