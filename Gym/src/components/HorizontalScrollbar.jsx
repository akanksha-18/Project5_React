import React from 'react';
import { Box } from '@mui/material';
import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <div style={{ width: '100%', overflowX: 'auto', overflowY: 'hidden', height: '240px', paddingTop: '20px' }}>
    <style>
      {`
        ::-webkit-scrollbar {
          height: 12px;
        }

        ::-webkit-scrollbar-track {
          background-color: #f0f0f0;
        }

        ::-webkit-scrollbar-thumb {
          background-color:#FFBE0B;
          border-radius: 6px;
        }
      `}
    </style>
    <Box
      display="flex"
      flexDirection="row"
      whiteSpace="nowrap"
    >
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
          style={{ height: '100%' }}
        >
          {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }
        </Box>
      ))}
    </Box>
  </div>
);

export default HorizontalScrollbar;
