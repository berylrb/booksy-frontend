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


  return (
    <>
      <div className={styles.groupListHeaderDiv}>
        <h4>Booksy</h4>
      </div>
      <main className={styles.groupListContainer}>
        <div className={styles.blH2Div}>
          <h2>Book Clubs</h2>
        </div>
        <div className={styles.bookCardsDiv}>
          {props.groups.map((group) => (
            <GroupCard key={group._id} group={group} />
          ))}
        </div>
        <section className={styles.newGroupSection}>
          <Box className={styles.buttonBox}>
            <button onClick={toggleDrawer(true)}>Add a Book Club</button>
          </Box>
          <SwipeableDrawer
            // container={container}
            anchor="bottom"
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            swipeAreaWidth={drawerBleeding}
            disableSwipeToOpen={false}
            ModalProps={{ keepMounted: true }}
          >
            <Box className={styles.addGroupBox}>

              <NewGroup />
            </Box>
          </SwipeableDrawer>

        </section>
      </main>
    </>
  );
}

export default GroupList;