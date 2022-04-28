import { LinkOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import './profileDetail.scss';

ProfileDetail.propTypes = {};
function ProfileDetail(props) {
   return (
      <div className='profileDetail-container'>
         <p className='profileDetail__name'>sexy meoww</p>
         <p className='profileDetail__title'>Contact</p>
         <div className='profileDetail__content-wrapper'>
            <p className='profileDetail__label'>Email:</p>
            <p className='profileDetail__info'>sexymeoww@gmail.com</p>
         </div>
         <div className='profileDetail__content-wrapper'>
            <p className='profileDetail__label'>Phone Number:</p>
            <p className='profileDetail__info'>5226324568</p>
         </div>
         <p className='profileDetail__title'>Advanced skill</p>
         <div className='profileDetail__content-wrapper'>
            <p className='profileDetail__label'>Technique:</p>
            <p className='profileDetail__info'>React</p>
         </div>
         <div className='profileDetail__content-wrapper'>
            <p className='profileDetail__label'>Position:</p>
            <p className='profileDetail__info'>Project manager</p>
         </div>
         <p className='profileDetail__title'>Curriculum vitae</p>
         <div className='profileDetail__Url-wrapper'>
            <p className='profileDetail__label'>Url: </p>
            <Button
               className='profileDetail__btn'
               type='primary'
               shape='circle'
               icon={<LinkOutlined />}
            />
         </div>
      </div>
   );
}

export default ProfileDetail;
