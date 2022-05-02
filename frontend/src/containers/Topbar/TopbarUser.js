import Popover from '@iso/components/uielements/popover';
import IntlMessages from '@iso/components/utility/intlMessages';
import authAction from '@iso/redux/auth/actions';
import { message } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import authApi from '../../api/authApi';
import TopbarDropdownWrapper from './TopbarDropdown.styles';

const { logout } = authAction;

export default function TopbarUser() {
   const [visible, setVisibility] = React.useState(false);

   const userAvatar = useSelector((state) => state.Auth.userData?.avatar);
   const blankAvatar = 'https://www.pngrepo.com/download/5125/avatar.png';

   const dispatch = useDispatch();
   function handleVisibleChange() {
      setVisibility((visible) => !visible);
   }

   const onClickLogout = async () => {
      const response = await authApi.logout();
      if (response.message === 'logout_error') {
         return message.error('Something when wrong!');
      }

      dispatch(logout());
      return message.success('logout was successful');
   };

   const content = (
      <TopbarDropdownWrapper className='isoUserDropdown'>
         <Link className='isoDropdownLink' to={'/dashboard/my-profile'}>
            <IntlMessages id='topbar.myprofile' />
         </Link>
         {/* <a className='isoDropdownLink' href='# '>
            <IntlMessages id='themeSwitcher.settings' />
         </a>
         <a className='isoDropdownLink' href='# '>
            <IntlMessages id='sidebar.feedback' />
         </a>
         <a className='isoDropdownLink' href='# '>
            <IntlMessages id='topbar.help' />
         </a> */}
         <Link
            className='isoDropdownLink'
            to='/dashboard/user-profile/change-password'
         >
            <IntlMessages id='topbar.changePassword' />
         </Link>
         <div className='isoDropdownLink' onClick={onClickLogout}>
            <IntlMessages id='topbar.logout' />
         </div>
      </TopbarDropdownWrapper>
   );

   return (
      <Popover
         content={content}
         trigger='click'
         visible={visible}
         onVisibleChange={handleVisibleChange}
         arrowPointAtCenter={true}
         placement='bottomLeft'
      >
         <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div className='isoImgWrapper'>
               <img alt='user' src={userAvatar ? userAvatar : blankAvatar} />
               <span className='userActivity online' />
            </div>
            <div style={{ color: '#fff' }}>Ta Thi Cong Vien</div>
         </div>
      </Popover>
   );
}
