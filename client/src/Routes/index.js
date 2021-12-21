import {
  LoginPage,
  RegisterPage,
  ForgotPaswordPage,
  AdminAddNewAdminPage,
  HomePage,
  DashboardPage,
  MyProfilePage,
  EditMyProfilePage,
  MyVerificationRequestsPage,
  ApproveVerificationRequestsPage,
  ViewUserPage,
  CreateSessionRequestPage,
  MySessionRequestsPage,
  ApproveSessionRequestsPage,
  ViewMentorPage,
  MentorsPage,
  MySessionsTodayPage,
  AboutPage,
  ContactPage,
} from '../pages';

const appRoutes = [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/about',
    exact: true,
    component: AboutPage,
  },
  {
    path: '/contact',
    exact: true,
    component: ContactPage,
  },
  {
    path: '/login',
    exact: false,
    component: LoginPage,
  },
  {
    path: '/register',
    exact: false,
    component: RegisterPage,
  },
  {
    path: '/dashboard',
    exact: false,
    component: DashboardPage,
  },
  {
    path: '/my-profile',
    exact: false,
    component: MyProfilePage,
  },
  {
    path: '/my-verification-requests',
    exact: false,
    component: MyVerificationRequestsPage,
  },
  {
    path: '/admin/approve-verification-requests',
    exact: false,
    component: ApproveVerificationRequestsPage,
  },
  {
    path: '/admin/view-user/:id',
    exact: false,
    component: ViewUserPage,
  },
  {
    path: '/edit-my-profile',
    exact: false,
    component: EditMyProfilePage,
  },
  {
    path: '/admin/register-admin',
    exact: false,
    component: AdminAddNewAdminPage,
  },
  {
    path: '/forgot-password',
    exact: false,
    component: ForgotPaswordPage,
  },
  {
    path: '/create-session-request/:mentorID',
    exact: false,
    component: CreateSessionRequestPage,
  },
  {
    path: '/view-mentor/:mentorID',
    exact: false,
    component: ViewMentorPage,
  },

  {
    path: '/mentors',
    exact: false,
    component: MentorsPage,
  },
  {
    path: '/my-session-requests',
    exact: false,
    component: MySessionRequestsPage,
  },
  {
    path: '/mentor/approve-session-requests',
    exact: false,
    component: ApproveSessionRequestsPage,
  },
  {
    path: '/my-sessions-today',
    exact: false,
    component: MySessionsTodayPage,
  },
];

export default appRoutes;
