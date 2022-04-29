import { Button, Result } from 'antd';
import React from 'react';
import { useHistory, useLocation } from 'react-router';

function ThankYouPage(props) {
   let history = useHistory();
   let location = useLocation();

   const candidateInfo = location.state?.candidateInfo;
   const campaignDetail = location.state?.campaignDetail;

   const onClickGoBackHome = () => {
      history.push('/');
   };

   return (
      <div>
         <Result
            status='success'
            title={`Thank you ${candidateInfo?.last_name} for applying to the ${campaignDetail?.name}`}
            subTitle={`We have sent an email to ${candidateInfo?.email}, please confirm!`}
            extra={[
               <Button type='primary' key='console' onClick={onClickGoBackHome}>
                  Go back to home
               </Button>,
            ]}
         />
      </div>
   );
}

export default ThankYouPage;
