import AvatarCard from '@iso/components/AvatarCard/AvatarCard';
import profileActions from '@iso/redux/profile/actions';
import Modal from '@iso/ui/Antd/Modal/Modal';
import Spin from '@iso/ui/Antd/Spin/Spin';
import Container from '@iso/ui/UI/Container/Container';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Followers from './Followers/Followers';
import Following from './Following/Following';
import Wrapper, { Banner, ContentWrapper, Navigation } from './Profile.styles';

const MyProfile = () => {
   const data = useSelector((state) => state.profile.data);
   // const loading = useSelector((state) => state.profile.loading);

   const userData = useSelector((state) => state.Auth.userData);
   const isUserDataLoading = useSelector((state) => state.Auth.loading);

   const dispatch = useDispatch();
   const getProfile = useCallback(
      () => dispatch(profileActions.fetchProfileDataStart()),
      [dispatch]
   );

   const [active, setActive] = useState('post');
   const [visible, setVisible] = useState(false);

   useEffect(() => {
      getProfile();
   }, [getProfile]);

   const handleMenu = (type) => {
      if (type === 'post') {
         setActive(type);
      }
      if (type === 'followers') {
         setActive(type);
         setVisible(true);
      }
      if (type === 'following') {
         setActive(type);
         setVisible(true);
      }
   };

   const handleCancel = () => {
      setVisible(false);
      setActive('post');
   };

   return (
      <Wrapper>
         {isUserDataLoading !== true && data !== true ? (
            <>
               <Banner
                  className='profile-banner'
                  style={{ backgroundImage: `url(${data?.profile_bg})` }}
               >
                  <Container className='container'>
                     <AvatarCard
                        avatar={userData?.avatar}
                        name={userData?.name}
                        username={userData?.email}
                     />
                  </Container>
               </Banner>

               <Navigation className='navigation'>
                  <Container className='container'>
                     <ul className='menu'>
                        <li
                           className={active === 'post' ? 'active' : ''}
                           onClick={() => handleMenu('post')}
                        >
                           <strong>{data?.post.length}</strong> Posts
                        </li>
                        <li
                           className={active === 'followers' ? 'active' : ''}
                           onClick={() => handleMenu('followers')}
                        >
                           <strong>{data?.followers.length}</strong> Followers
                        </li>
                        <li
                           className={active === 'following' ? 'active' : ''}
                           onClick={() => handleMenu('following')}
                        >
                           <strong>{data?.following.length}</strong> Following
                        </li>
                     </ul>
                  </Container>
               </Navigation>

               <ContentWrapper>
                  <Container className='container'>
                     {/* <Posts
                        avatar={data?.avatar}
                        username={data?.username}
                        data={data?.post}
                     /> */}
                     <Modal
                        wrapClassName='follow-modal'
                        visible={visible}
                        onCancel={handleCancel}
                        footer={null}
                     >
                        {active === 'followers' && (
                           <Followers data={data?.followers} />
                        )}
                        {active === 'following' && (
                           <Following data={data?.following} />
                        )}
                     </Modal>
                  </Container>
               </ContentWrapper>
            </>
         ) : (
            <div
               style={{
                  minHeight: '150px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
               }}
            >
               <Spin />
            </div>
         )}
      </Wrapper>
   );
};

export default MyProfile;
