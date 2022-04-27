import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Radio, Space, Spin, Collapse } from 'antd';
import techniqueApi from '../../../../api/techniqueApi';
import positionApi from '../../../../api/positionApi';
import './CandidateSearchTechniqueRadio.scss';

CandidateSearchToolbar.propTypes = {
   handleChangeCampaignFilter: PropTypes.func,
};

CandidateSearchToolbar.defaultProps = {
   handleChangeCampaignFilter: null,
};

const { Panel } = Collapse;

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
         <div className='filter__wrapper'>
            <Collapse ghost>
               <Panel header='Technology' key='1'>
                  <Radio.Group onChange={onChangeRadioGroup} defaultValue={0}>
                     <Space
                        direction='vertical'
                        size={15}
                        className='filter__radio--group'
                     >
                        <Radio value={0}>All</Radio>
                        {techniques?.map((technique) => (
                           <Radio value={technique.id} key={technique.id}>
                              {technique.name}
                           </Radio>
                        ))}
                     </Space>
                  </Radio.Group>
               </Panel>
            </Collapse>
            <Collapse ghost>
               <Panel header='Position' key='2'>
                  <Radio.Group onChange={onChangeRadioGroup} defaultValue={0}>
                     <Space
                        direction='vertical'
                        size={15}
                        className='filter__radio--group'
                     >
                        <Radio value={0}>All</Radio>
                        {positions?.map((position) => (
                           <Radio value={position.id} key={position.id}>
                              {position.name}
                           </Radio>
                        ))}
                     </Space>
                  </Radio.Group>
               </Panel>
            </Collapse>
         </div>
      </Spin>
   );
}

export default CandidateSearchToolbar;
