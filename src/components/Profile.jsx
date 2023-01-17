import '../style/components/profile.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Profile = () => {
  return (
    <div className="container-profile">
      <AccountCircleOutlinedIcon fontSize='inherit' className='profile-icon'/>
      <h5>User Name</h5>
      <KeyboardArrowDownIcon fontSize='inherit' className='arrowDown-icon'/>
    </div>
  );
};

export default Profile;