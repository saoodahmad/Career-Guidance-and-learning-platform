import { Container, Grid, Select, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getMentorsByCategory } from '../../services/usersService';
import { categoryOptions } from '../../utils/categories';
import CustomSnackBar from '../CustomSnackBar/CustomSnackBar';
import MentorCard from './Card';

import useStyles from './Styles';

const CategoryField = ({ category, setCategory, options }) => {
  return (
    <Grid item>
      <Grid
        container
        alignItems="center"
        justifyContent="space-around"
        spacing={3}
      >
        <Grid item xs={12} md={3}>
          <Typography variant="subtitle">Category</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Select
            native
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            fullWidth
            variant="outlined"
            disableUnderline
            autoWidth
          >
            {options.map((opt) => (
              <option value={opt.value} key={opt.value}>
                {opt.title}
              </option>
            ))}
          </Select>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Root = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(null);
  const [mentors, setMentors] = useState(null);
  const [err, setErr] = useState(null);

  const [category, setCategory] = useState(categoryOptions[0].value);
  useEffect(() => {
    setLoading(true);
    setErr(null);
    const fetch = async () => {
      const { mentors, error } = await getMentorsByCategory(category);

      if (error) {
        setErr(error);
      } else {
        setMentors(mentors);
      }

      setLoading(false);
    };

    fetch();
  }, [category]);
  return (
    <Container maxWidth="md" className={classes.container}>
      {loading === true && <CustomSnackBar message="loading" severity="info" />}
      {loading === false && err && (
        <CustomSnackBar message={err} severity="error" />
      )}
      {loading === false && !err && (
        <CustomSnackBar message="Success" severity="success" />
      )}

      <Grid
        container
        direction="column"
        justifyContent="space-between"
        spacing={10}
      >
        <CategoryField
          category={category}
          setCategory={setCategory}
          options={categoryOptions}
        />

        <Grid item>
          {loading === false && !err && (
            <Grid container justifyContent="space-between" spacing={4}>
              {mentors.map((mentor) => (
                <MentorCard mentor={mentor} key={mentor._id} />
              ))}
            </Grid>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Root;
