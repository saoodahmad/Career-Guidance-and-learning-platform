import React, { useState, useEffect } from 'react';

import {
  Avatar,
  Button,
  Container,
  Grid,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';

import { BASE_URL } from '../../api';

import useStyles from './Styles';
import {
  getMyProfile,
  getUserProfile,
  requestProfileVerification,
} from '../../services/usersService';
import CustomSnackBar from '../CustomSnackBar/CustomSnackBar';
import { Link } from 'react-router-dom';
import { categoryOptions } from '../../utils/categories';

const EmailField = ({ profileCredential }) => {
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

const NameField = ({ profileCredential }) => {
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
            disabled
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

const ContactField = ({ profileCredential }) => {
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
            disabled
            fullWidth
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

const HighestQualificationField = ({ profileCredential }) => {
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
            disabled
            fullWidth
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

const YearOfPassingField = ({ profileCredential }) => {
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
            disabled
            fullWidth
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

const InstitutionField = ({ profileCredential }) => {
  return (
    <Grid item xs={12}>
      <Grid
        container
        alignItems="center"
        //spacing={1}
        justifyContent="space-evenly"
      >
        <Grid item xs={12} md={4}>
          <Typography variant="subtitle1">Institute</Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            name="role"
            variant="outlined"
            value={profileCredential.academicDetail.institution}
            disabled
            fullWidth
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

const AddressField = ({ profileCredential }) => {
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
            disabled
            fullWidth
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

const CityField = ({ profileCredential }) => {
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
            disabled
            fullWidth
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

const PincodeField = ({ profileCredential }) => {
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
            disabled
            fullWidth
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

const CountryField = ({ profileCredential }) => {
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
            disabled
            fullWidth
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

const ProfileImageField = ({ imageLabel, imageURL }) => {
  const classes = useStyles();
  return (
    <Grid item>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Avatar
            src={`${BASE_URL}/${imageURL}`}
            variant="square"
            className={classes.large}
          />
        </Grid>
        <Grid item>
          <Typography variant="caption2">{imageLabel}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const VerificationDocumentUploadField = ({ setVerificationDocument }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.buttonContainer}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Typography variant="caption1">
            Upload documents for verification
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <input
            type="file"
            name="verification-documents"
            className={classes.upload}
            onChange={(e) => {
              let file = e.target.files[0];
              setVerificationDocument(file);
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
const EditProfileButton = () => {
  const classes = useStyles();
  return (
    <Button
      type="submit"
      variant="contained"
      className={classes.button}
      size="large"
      fullWidth
    >
      Edit Profile
    </Button>
  );
};

const CategoryField = ({ profileCredential, options }) => {
  return (
    <Grid item>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item xs={12} md={3}>
          <Typography variant="subtitle">Category</Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <Select
            native
            value={profileCredential.category || options[3].value}
            fullWidth
            variant="outlined"
            disableUnderline
            disabled
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

const Form = ({ profileCredential }) => {
  return (
    <Grid item>
      <Grid
        container
        direction="column"
        spacing={4}
        justifyContent="space-evenly"
        alignItems="center"
      >
        <ProfileImageField
          imageLabel="My Photo"
          imageURL={profileCredential.personalPhotoURL}
        />

        <Grid item>
          <Grid
            container
            direction="column"
            spacing={4}
            justifyContent="space-between"
          >
            <EmailField profileCredential={profileCredential} />
            <NameField profileCredential={profileCredential} />
            <RoleField profileCredential={profileCredential} />
            <VerifiedField profileCredential={profileCredential} />
            <DisabledField profileCredential={profileCredential} />
            <ContactField profileCredential={profileCredential} />
            <CategoryField
              profileCredential={profileCredential}
              options={categoryOptions}
            />
            <Grid item>
              {' '}
              <Typography variant="subtitle1">Academic Details</Typography>
            </Grid>

            <HighestQualificationField profileCredential={profileCredential} />
            <YearOfPassingField profileCredential={profileCredential} />
            <InstitutionField profileCredential={profileCredential} />

            <Grid item>
              <Typography variant="subtitle1">Address</Typography>
            </Grid>
            <AddressField profileCredential={profileCredential} />
            <CityField profileCredential={profileCredential} />
            <PincodeField profileCredential={profileCredential} />
            <CountryField profileCredential={profileCredential} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const RequestVerificationButton = ({ verificationRequestHandler }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.buttonContainer}>
      <Button
        variant="contained"
        className={classes.button}
        onClick={verificationRequestHandler}
      >
        Request Profile Verification
      </Button>
    </Grid>
  );
};
const Root = ({ isAdminView, userID }) => {
  const [loading, setLoading] = useState(null);
  const [loadingVerificationRequest, setLoadingVerificationRequest] =
    useState(null);
  const [err, setErr] = useState(null);
  const [user, setUser] = useState(null);
  const [verificationDocument, setVerificationDocument] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    setLoading(true);

    const fetch = async () => {
      if (!isAdminView) {
        const { error, user } = await getMyProfile();

        if (error) {
          setErr(error);
        } else {
          setUser(user);
        }
      } else {
        const { error, user } = await getUserProfile(userID);

        if (error) {
          setErr(error);
        } else {
          setUser(user);
        }
      }

      setLoading(false);
    };

    fetch();
  }, [isAdminView, userID]);

  const verificationRequestHandler = async (e) => {
    setErr(null);
    e.preventDefault();

    setLoadingVerificationRequest(true);

    const { error } = await requestProfileVerification(verificationDocument);

    if (error) {
      setErr(error);
    }
    setLoadingVerificationRequest(false);
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

        {loadingVerificationRequest === false && err && (
          <CustomSnackBar message={err} severity="error" />
        )}

        {loadingVerificationRequest === false && !err && (
          <CustomSnackBar message="Success" severity="success" />
        )}
        {loading === false && user && (
          <CustomSnackBar message="Success" severity="success" />
        )}
        {user && (
          <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            spacing={4}
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h6" className={classes.heading}>
                {isAdminView ? 'User Profile' : 'My Profile'}
              </Typography>
            </Grid>
            <Form profileCredential={user} />

            {!isAdminView && (
              <Grid item>
                <Link to="/edit-my-profile">
                  <EditProfileButton />
                </Link>
              </Grid>
            )}

            {!isAdminView && !user.isVerified && (
              <VerificationDocumentUploadField
                setVerificationDocument={setVerificationDocument}
              />
            )}

            {!isAdminView && !user.isVerified && (
              <RequestVerificationButton
                verificationRequestHandler={verificationRequestHandler}
              />
            )}
          </Grid>
        )}
      </Container>
    </div>
  );
};

export default Root;
