import styles from './GroupList.module.css'
import GroupCard from '../../components/GroupCard/GroupCard';
import { useState } from 'react';
import NewGroup from '../NewGroup/NewGroup';

//mui
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';


const GroupList = (props) => {

  const drawerBleeding = 56

  const { window } = props
  const [open, setOpen] = useState(false)


  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen)
  }

  const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
  }));
  


  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <div className={styles.groupListHeaderDiv}>
        <h4>Booksy</h4>
      </div>
      <main className={styles.groupListContainer}>
        <div className={styles.blH2Div}>
          <h2>Book Clubs</h2>
        </div>
        {props.groups.map((group) => (
          <GroupCard key={group._id} group={group} />
        ))}

        <section className={styles.newGroupSection}>
          <Box>
            <button onClick={toggleDrawer(true)}>Add a Book Club</button>
          </Box>
          <SwipeableDrawer
            container={container}
            anchor="bottom"
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            swipeAreaWidth={drawerBleeding}
            disableSwipeToOpen={false}
            ModalProps={{ keepMounted: true }}
          >
            <Box className={styles.addGroupBox}>
              <Puller />
            </Box>
            <NewGroup />

          </SwipeableDrawer>
        </section>
      </main>
    </>
  );
}

export default GroupList;