import { makeStyles, Modal } from '@material-ui/core';
import React from 'react';
import IssTracker from '../IssTracker';

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
     // position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

const ModalMap = (props) => {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    return (
        <div>
            <Modal
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
               <IssTracker></IssTracker>
            </Modal>
        </div>
    );
};

ModalMap.propTypes = {

};

export default ModalMap;
