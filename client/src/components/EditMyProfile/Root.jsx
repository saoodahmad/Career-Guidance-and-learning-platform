import React, { useState, useEffect } from 'react';

import {
  Avatar,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Select,
} from '@material-ui/core';

import { BASE_URL } from '../../api';

import { categoryOptions } from '../../utils/categories';
import useStyles from './Styles';
import { getMyProfile, updateMyProfile } from '../../services/usersService';
import CustomSnackBar from '../CustomSnackBar/CustomSnackBar';

const EmailField = ({ profileCredential, setProfileCredential }) => {
  return (
    <Grid item xs={12}>
      <Grid
        container
        alignItems="center"
        spacing={1}
        justifyContent="space-evenly"
      >
        <Grid item xs={12} md={3}>
          <Typography variant="subtitle1">Email</Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            name="email"
            type="email"
            variant="outlined"
            value={profileCredential.email}
            disabled
            fullWidth
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

const NameField = ({ profileCredential, setProfileCredential }) => {
  return (
    <Grid item xs={12}>
      <Grid
        container
        alignItems="center"
        spacing={1}
        justifyContent="space-evenly"
      >
        <Grid item xs={12} md={3}>
          <Typography variant="subtitle1">Name</Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            name="name"
            variant="outlined"
            value={profileCredential.name}
            onChange={(e) =>
              setProfileCredential({
                ...profileCredential,
                name: e.target.value,
              })
            }
            fullWidth
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

const RoleField = ({ profileCredential }) => {
  return (
    <Grid item xs={12}>
      <Grid
        container
        alignItems="center"
        spacing={1}
        justifyContent="space-evenly"
      >
        <Grid item xs={12} md={3}>
          <Typography variant="subtitle1">Role</Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            name="role"
            variant="outlined"
            value={profileCredential.role}
            disabled
            fullWidth
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

const VerifiedField = ({ profileCredential }) => {
  return (
    <Grid item xs={12}>
      <Grid
        container
        alignItems="center"
        spacing={1}
        justifyContent="space-evenly"
      >
        <Grid item xs={12} md={3}>
          <Typography variant="subtitle1">Verified</Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            name="role"
            variant="outlined"
            value={profileCredential.isVerified ? 'Yes' : 'No'}
            disabled
            fullWidth
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

const DisabledField = ({ profileCredential }) => {
  return (
    <Grid item xs={12}>
      <Grid
        container
        alignItems="center"
        spacing={1}
        justifyContent="space-evenly"
      >
        <Grid item xs={12} md={3}>
          <Typography variant="subtitle1">Disabled</Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            name="role"
            variant="outlined"
            value={profileCredential.isDisabled ? 'Yes' : 'No'}
            disabled
            fullWidth
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

const ContactField = ({ profileCredential, setProfileCredential }) => {
  return (
    <Grid item xs={12}>
      <Grid
        container
        alignItems="center"
        spacing={1}
        justifyContent="space-evenly"
      >
        <Grid item xs={12} md={3}>
          <Typography variant="subtitle1">Contact</Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            name="role"
            variant="outlined"
            value={profileCredential.contactNumber}
            onChange={(e) =>
              setProfileCredential({
                ...profileCredential,
                contactNumber: e.target.value,
              })
            }
            fullWidth
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

const HighestQualificationField = ({
  profileCredential,
  setProfileCredential,
}) => {
  return (
    <Grid item xs={12}>
      <Grid
        container
        alignItems="center"
        spacing={1}
        justifyContent="space-between"
      >
        <Grid item xs={12} md={3}>
          <Typography variant="subtitle1">Highest Qualification</Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            name="role"
            variant="outlined"
            value={profileCredential.academicDetail.highestQualification}
            onChange={(e) =>
              setProfileCredential({
                ...profileCredential,
                academicDetail: {
                  ...profileCredential.academicDetail,
                  highestQualification: e.target.value,
                },
              })
            }
            fullWidth
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

const YearOfPassingField = ({ profileCredential, setProfileCredential }) => {
  return (
    <Grid item xs={12}>
      <Grid
        container
        alignItems="center"
        // spacing={1}
        justifyContent="space-evenly"
      >
        <Grid item xs={12} md={4}>
          <Typography variant="subtitle1">Year of Passing</Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            name="role"
            variant="outlined"
            value={profileCredential.academicDetail.yearOfPassing}
            onChange={(e) =>
              setProfileCredential({
                ...profileCredential,
                academicDetail: {
                  ...profileCredential.academicDetail,
                  yearOfPassing: e.target.value,
                },
              })
            }
            fullWidth
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

const InstitutionField = ({ profileCredential, setProfileCredential }) => {
  return (
    <Grid item xs={12}>
      <Grid container alignItems="center" justifyContent="space-evenly">
        <Grid item xs={12} md={4}>
          <Typography variant="subtitle1">Institute</Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            name="role"
            variant="outlined"
            value={profileCredential.academicDetail.institution}
            onChange={(e) =>
              setProfileCredential({
                ...profileCredential,
                academicDetail: {
                  ...profileCredential.academicDetail,
                  institution: e.target.value,
                },
              })
            }
            fullWidth
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

const AddressField = ({ profileCredential, setProfileCredential }) => {
  return (
    <Grid item xs={12}>
      <Grid
        container
        alignItems="center"
        spacing={1}
        justifyContent="space-between"
      >
        <Grid item xs={12} md={3}>
          <Typography variant="subtitle1">Address</Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            name="role"
            variant="outlined"
            value={profileCredential.personalAddress.address}
            onChange={(e) =>
              setProfileCredential({
                ...profileCredential,
                personalAddress: {
                  ...profileCredential.personalAddress,
                  address: e.target.value,
                },
              })
            }
            fullWidth
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

const CityField = ({ profileCredential, setProfileCredential }) => {
  return (
    <Grid item xs={12}>
      <Grid
        container
        alignItems="center"
        spacing={1}
        justifyContent="space-between"
      >
        <Grid item xs={12} md={3}>
          <Typography variant="subtitle1">City</Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            name="role"
            variant="outlined"
            value={profileCredential.personalAddress.city}
            onChange={(e) =>
              setProfileCredential({
                ...profileCredential,
                personalAddress: {
                  ...profileCredential.personalAddress,
                  city: e.target.value,
                },
              })
            }
            fullWidth
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

const PincodeField = ({ profileCredential, setProfileCredential }) => {
  return (
    <Grid item xs={12}>
      <Grid
        container
        alignItems="center"
        spacing={1}
        justifyContent="space-between"
      >
        <Grid item xs={12} md={3}>
          <Typography variant="subtitle1">Postal Code</Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            name="role"
            variant="outlined"
            value={profileCredential.personalAddress.postalCode}
            onChange={(e) =>
              setProfileCredential({
                ...profileCredential,
                personalAddress: {
                  ...profileCredential.personalAddress,
                  postalCode: e.target.value,
                },
              })
            }
            fullWidth
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

const CountryField = ({ profileCredential, setProfileCredential }) => {
  return (
    <Grid item xs={12}>
      <Grid
        container
        alignItems="center"
        spacing={1}
        justifyContent="space-between"
      >
        <Grid item xs={12} md={3}>
          <Typography variant="subtitle1">Country</Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            name="role"
            variant="outlined"
            value={profileCredential.personalAddress.country}
            onChange={(e) =>
              setProfileCredential({
                ...profileCredential,
                personalAddress: {
                  ...profileCredential.personalAddress,
                  country: e.target.value,
                },
              })
            }
            fullWidth
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

const ProfileImageField = ({
  imageLabel,
  profileCredential,
  setProfileCredential,
}) => {
  const classes = useStyles();
  return (
    <Grid item>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Avatar
            src={profileCredential.personalPhotoURL}
            variant="square"
            className={classes.large}
          />
        </Grid>
        <Grid item>
          <input
            type="file"
            name="profile-image"
            className={classes.upload}
            onChange={(e) => {
              let image = e.target.files[0];

              let url = URL.createObjectURL(image);
              setProfileCredential({
                ...profileCredential,
                personalPhotoURL: url,
                image: image,
              });
            }}
          />
        </Grid>
        <Grid item>
          <Typography variant="caption2">{imageLabel}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const UpdateProfileButton = () => {
  const classes = useStyles();
  return (
    <Button
      type="submit"
      variant="contained"
      className={classes.button}
      size="large"
      fullWidth
    >
      Update Profile
    </Button>
  );
};

const CategoryField = ({
  profileCredential,
  setProfileCredential,
  options,
}) => {
  return (
    <Grid item>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        spacing={8}
      >
        <Grid item>
          <Typography variant="subtitle">Category</Typography>
        </Grid>
        <Grid item>
          <Select
            native
            value={profileCredential.category}
            onChange={(e) =>
              setProfileCredential({
                ...profileCredential,
                category: e.target.value,
              })
            }
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

const DescriptionField = ({ profileCredential, setProfileCredential }) => {
  return (
    <Grid item xs={12}>
      <Grid
        container
        alignItems="center"
        spacing={1}
        justifyContent="space-between"
      >
        <Grid item xs={12} md={3}>
          <Typography variant="subtitle1">Description</Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            name="role"
            variant="outlined"
            value={profileCredential.description}
            onChange={(e) =>
              setProfileCredential({
                ...profileCredential,
                description: e.target.value,
              })
            }
            fullWidth
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
const Form = ({
  profileCredential,
  setProfileCredential,
  handleProfileUpdate,
}) => {
  return (
    <Grid item xs={12}>
      <form autoComplete="off" noValidate onSubmit={handleProfileUpdate}>
        <Grid
          container
          direction="column"
          spacing={4}
          justifyContent="space-evenly"
          alignItems="center"
        >
          <ProfileImageField
            imageLabel="My Photo"
            profileCredential={profileCredential}
            setProfileCredential={setProfileCredential}
          />

          <Grid item>
            <Grid
              container
              direction="column"
              spacing={4}
              justifyContent="space-between"
            >
              <EmailField
                profileCredential={profileCredential}
                setProfileCredential={setProfileCredential}
              />
              <NameField
                profileCredential={profileCredential}
                setProfileCredential={setProfileCredential}
              />
              <RoleField
                profileCredential={profileCredential}
                setProfileCredential={setProfileCredential}
              />
              <VerifiedField
                profileCredential={profileCredential}
                setProfileCredential={setProfileCredential}
              />
              <DisabledField
                profileCredential={profileCredential}
                setProfileCredential={setProfileCredential}
              />
              <ContactField
                profileCredential={profileCredential}
                setProfileCredential={setProfileCredential}
              />

              <CategoryField
                profileCredential={profileCredential}
                setProfileCredential={setProfileCredential}
                options={categoryOptions}
              />
              <DescriptionField
                profileCredential={profileCredential}
                setProfileCredential={setProfileCredential}
              />

              <Grid item>
                {' '}
                <Typography variant="subtitle1">Academic Details</Typography>
              </Grid>

              <HighestQualificationField
                profileCredential={profileCredential}
                setProfileCredential={setProfileCredential}
              />
              <YearOfPassingField
                profileCredential={profileCredential}
                setProfileCredential={setProfileCredential}
              />
              <InstitutionField
                profileCredential={profileCredential}
                setProfileCredential={setProfileCredential}
              />

              <Grid item>
                <Typography variant="subtitle1">Address</Typography>
              </Grid>
              <AddressField
                profileCredential={profileCredential}
                setProfileCredential={setProfileCredential}
              />
              <CityField
                profileCredential={profileCredential}
                setProfileCredential={setProfileCredential}
              />
              <PincodeField
                profileCredential={profileCredential}
                setProfileCredential={setProfileCredential}
              />
              <CountryField
                profileCredential={profileCredential}
                setProfileCredential={setProfileCredential}
              />

              <UpdateProfileButton />
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};
const Root = () => {
  const [loading, setLoading] = useState(null);
  const [loadingUpdate, setLoadingUpdate] = useState(null);

  const [err, setErr] = useState(null);
  const [redirect, setRedirect] = useState(null);
  const classes = useStyles();

  const [profileCredential, setProfileCredential] = useState(null);
  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      const { error, user } = await getMyProfile();

      if (error) {
        setErr(error);
      } else if (user) {
        let personalPhotoURL = user.personalPhotoURL
          ? `${BASE_URL}/${user.personalPhotoURL}`
          : null;

        let category = user.category ? user.category : categoryOptions[0].value;
        setProfileCredential({
          ...user,
          personalPhotoURL: personalPhotoURL,
          image: null,
          category: category,
        });
      }
      setLoading(false);
    };

    fetch();
  }, []);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setLoadingUpdate(true);
    setErr(null);
    const { error } = await updateMyProfile(profileCredential);

    if (error) {
      setErr(error);
    } else {
      setRedirect('/my-profile');
    }
    setLoadingUpdate(false);
  };
  return (
    <div>
      <Container className={classes.container}>
        {loading === true && (
          <CustomSnackBar message="loading" severity="info" />
        )}
        {loading === false && err && (
          <CustomSnackBar message={err} severity="error" />
        )}
        {loading === false && profileCredential && (
          <CustomSnackBar message="Success" severity="success" />
        )}
        {loadingUpdate === false && !err && (
          <CustomSnackBar
            message="Success"
            severity="success"
            redirect={redirect}
          />
        )}
        {profileCredential && (
          <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            spacing={2}
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h6">Edit Profile</Typography>
            </Grid>
            <Form
              profileCredential={profileCredential}
              setProfileCredential={setProfileCredential}
              handleProfileUpdate={handleProfileUpdate}
            />
          </Grid>
        )}
      </Container>
    </div>
  );
};

export default Root;
