import styles from './AccordionReviews.module.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Reviews from '../Reviews/Reviews';
import NewReview from '../NewReview/NewReview';

export default function AccordionReviews(props) {
  return (
    <>
      <Accordion className=
      {styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={styles.typography}>Reviews</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <NewReview handleAddReview={props.handleAddReview}/>
          <Reviews reviews={props.bookDetails?.reviews} user={props.user}/>
        </AccordionDetails>
      </Accordion>
    </>
  )
}