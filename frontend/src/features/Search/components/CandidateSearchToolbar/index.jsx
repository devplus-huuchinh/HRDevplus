import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Radio, Space, Spin, Typography } from 'antd';
import techniqueApi from '../../../../api/techniqueApi';
import positionApi from '../../../../api/positionApi';

CandidateSearchToolbar.propTypes = {
   handleChangeCampaignFilter: PropTypes.func,
};

CandidateSearchToolbar.defaultProps = {
   handleChangeCampaignFilter: null,
};

const { Text } = Typography;

function CandidateSearchToolbar(props) {
   const { handleChangeCampaignFilter } = props;

   const [techniques, setTechniques] = useState([]);
   const [positions, setPositions] = useState([]);
   const [isSpin, setIsSpin] = useState(true);

   useEffect(() => {
      const getFilterInDb = async () => {
         const responseTechnique = await techniqueApi.getAll();
         const responsePosition = await positionApi.getAll();
         setIsSpin(false);
         setTechniques(responseTechnique);
         setPositions(responsePosition);
      };
      getFilterInDb();
   }, []);

   const onChangeRadioGroup = (e) => {
      handleChangeCampaignFilter('technique', e.target.value);
   };

   return (
      <Spin spinning={isSpin}>
         <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Text>Technology</Text>
            <Radio.Group
               onChange={onChangeRadioGroup}
               defaultValue={0}
               style={{ paddingTop: 10 }}
            >
               <Space direction='vertical' size={15}>
                  <Radio value={0}>All</Radio>
                  {techniques?.map((technique) => (
                     <Radio value={technique.id} key={technique.id}>
                        {technique.name}
                     </Radio>
                  ))}
               </Space>
            </Radio.Group>
         </div>
         <div
            style={{ marginTop: 20, display: 'flex', flexDirection: 'column' }}
         >
            <Text>Position</Text>
            <Radio.Group
               onChange={onChangeRadioGroup}
               defaultValue={0}
               style={{ paddingTop: 10 }}
            >
               <Space direction='vertical' size={15}>
                  <Radio value={0}>All</Radio>
                  {positions?.map((position) => (
                     <Radio value={position.id} key={position.id}>
                        {position.name}
                     </Radio>
                  ))}
               </Space>
            </Radio.Group>
         </div>
      </Spin>
   );
}

export default CandidateSearchToolbar;
