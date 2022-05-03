import { Checkbox, Collapse, Spin } from 'antd';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import positionApi from '../../../../api/positionApi';
import techniqueApi from '../../../../api/techniqueApi';
import './CandidateSearchTechniqueRadio.scss';

CandidateSearchToolbar.propTypes = {
   handleChangeSearchFilter: PropTypes.func,
};

CandidateSearchToolbar.defaultProps = {
   handleChangeSearchFilter: null,
};

const { Panel } = Collapse;

function CandidateSearchToolbar(props) {
   const { handleChangeSearchFilter } = props;

   const [techniques, setTechniques] = useState([]);
   const [positions, setPositions] = useState([]);
   const [isSpin, setIsSpin] = useState(true);

   useEffect(() => {
      const getFilterInDb = async () => {
         const responseTechnique = await techniqueApi.getAll();
         const responsePosition = await positionApi.getAll();
         console.log('🚀 ~ responsePosition', responsePosition);

         setIsSpin(false);
         setTechniques(responseTechnique);
         setPositions(responsePosition);
      };
      getFilterInDb();
   }, []);

   const onChangePositions = (value) => {
      handleChangeSearchFilter('position_campaign', value);
   };

   const onChangeTechnology = (value) => {
      handleChangeSearchFilter('campaign_technique', value);
   };

   const positionsOptions = positions?.map((i) => {
      return {
         value: i.id,
         label: i.name,
      };
   });

   const techniquesOptions = techniques?.map((i) => {
      return {
         value: i.id,
         label: i.name,
      };
   });

   return (
      <Spin spinning={isSpin}>
         <div className='filter__wrapper'>
            <Collapse ghost defaultActiveKey={['1']}>
               <Panel header='Technology' key='1'>
                  {techniquesOptions?.length > 0 && (
                     <Checkbox.Group
                        options={techniquesOptions}
                        onChange={onChangeTechnology}
                     />
                  )}
               </Panel>
            </Collapse>
            <Collapse ghost defaultActiveKey={['2']}>
               <Panel header='Position' key='2'>
                  {positionsOptions?.length > 0 && (
                     <Checkbox.Group
                        options={positionsOptions}
                        onChange={onChangePositions}
                     />
                  )}
               </Panel>
            </Collapse>
         </div>
      </Spin>
   );
}

export default CandidateSearchToolbar;
