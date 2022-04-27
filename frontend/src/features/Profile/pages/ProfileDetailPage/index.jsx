import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Image, Select } from 'antd';
import './profileDetailPage.scss';
import { Option } from 'antd/lib/mentions';
import ProfileDetail from '../../components/ProfileDetail';

ProfileDetailPage.propTypes = {};

function ProfileDetailPage(props) {
   const [visible, setVisible] = useState(false);
   return (
      <div className='profile-detail-container'>
         <div className='profile-detail__wrapper'>
            <div className='profile-detail__left-wrapper'>
               <Image
                  // preview={{ visible: false }}
                  preview={false}
                  maxHeight={330}
                  className='profile-detail__left-image'
                  src='https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp'
                  onClick={() => setVisible(true)}
               />
               <div
                  className='profile-detail__step-wrapper'
                  style={{ marginTop: '25px' }}
               >
                  <p className='profile-detail__step-title'>STEP</p>
                  <Select
                     // defaultValue={record.status}
                     style={{ width: 150 }}
                     // onChange={(value) =>
                     //    handleChangeStatus({ id: record.id, value: value })
                     // }
                  >
                     <Option>TEST</Option>
                  </Select>
               </div>
               <div className='profile-detail__step-wrapper'>
                  <p className='profile-detail__step-title'>STATUS</p>
                  <Select
                     // defaultValue={record.status}
                     style={{ width: 150 }}
                     // onChange={(value) =>
                     //    handleChangeStatus({ id: record.id, value: value })
                     // }
                  >
                     <Option>TEST</Option>
                  </Select>
               </div>
            </div>
            <div className='profile-detail__middle-wrapper'>
               <ProfileDetail />
            </div>
            <div className='profile-detail__right-wrapper'></div>
         </div>
         {/* <div className='profile-detail__wrapper'>
            <div className='profile-detail__left-side-wrapper'>
               <Image
                  preview={{ visible: false }}
                  width={200}
                  maxHeight={330}
                  src='https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp'
                  onClick={() => setVisible(true)}
               />
            </div>
            <div className='profile-detail__right-side-wrapper'></div>
         </div> */}
      </div>
   );
}

export default ProfileDetailPage;
