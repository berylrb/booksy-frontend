import styles from './AccordionGroup.module.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function AccordionGroup(props) {
  return (
    <>
      <Accordion className=
      {styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={styles.summary}
        >
          <Typography className={styles.typography}>Suggest this Book to a Group</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.deets}>
        <form className={styles.form} onSubmit={props.handleAddBookToGroup}>
              {/* <label htmlFor="group-input">Your Groups</label> */}
              <select
                required
                name="groupId"
                id="group-id"
                onChange={props.handleChange}
              >
                <option value="" selected="true" disabled="disabled">Your Groups</option>
                {props.userGroups.map(group =>
                  <option value={group._id} placeholder={group.groupName}>{group.groupName}</option>
                )}
              </select>
              <button>Suggest to Group</button>
            </form>
        </AccordionDetails>
      </Accordion>
    </>
  )
}