import styles from './SubjectLinks.module.css'
import { Link } from 'react-router-dom';


const SubjectLinks = () => {
  return (
    <>
      <div className={styles.subjectCardsDiv}>
        <Link to='/books/fantasy' className={styles.subjectLink}>
          <article
            className={styles.subjCardContainer}>
            <span className={styles.picNameSpan}>
              <div className={styles.imgDiv}>

              </div>
              <div className={styles.subjTextDiv}>
                <h2 className={styles.subjH2}>Fantasy</h2>
              </div>
            </span>
          </article>
        </Link>

        <Link to='/books/science_fiction' className={styles.subjectLink}>
          <article
            className={styles.subjCardContainer}>
            <span className={styles.picNameSpan}>
              <div className={styles.imgDiv}>

              </div>
              <div className={styles.subjTextDiv}>
                <h2 className={styles.subjH2}>Science Fiction</h2>
              </div>
            </span>
          </article>
        </Link>

        <Link to='/books/adventure' className={styles.subjectLink}>
          <article
            className={styles.subjCardContainer}>
            <span className={styles.picNameSpan}>
              <div className={styles.imgDiv}>

              </div>
              <div className={styles.subjTextDiv}>
                <h2 className={styles.subjH2}>Adventure</h2>
              </div>
            </span>
          </article>
        </Link>

        <Link to='/books/romance' className={styles.subjectLink}>
          <article
            className={styles.subjCardContainer}>
            <span className={styles.picNameSpan}>
              <div className={styles.imgDiv}>

              </div>
              <div className={styles.subjTextDiv}>
                <h2 className={styles.subjH2}>Romance</h2>
              </div>
            </span>
          </article>
        </Link>

        <Link to='/books/mystery_and_detective_stories' className={styles.subjectLink}>
          <article
            className={styles.subjCardContainer}>
            <span className={styles.picNameSpan}>
              <div className={styles.imgDiv}>

              </div>
              <div className={styles.subjTextDiv}>
                <h2 className={styles.subjH2}>Mystery and Detective Stories</h2>
              </div>
            </span>
          </article>
        </Link>

        <Link to='/books/young_adult' className={styles.subjectLink}>
          <article
            className={styles.subjCardContainer}>
            <span className={styles.picNameSpan}>
              <div className={styles.imgDiv}>

              </div>
              <div className={styles.subjTextDiv}>
                <h2 className={styles.subjH2}>Young Adult</h2>
              </div>
            </span>
          </article>
        </Link>

        <Link to='/books/thriller' className={styles.subjectLink}>
          <article
            className={styles.subjCardContainer}>
            <span className={styles.picNameSpan}>
              <div className={styles.imgDiv}>

              </div>
              <div className={styles.subjTextDiv}>
                <h2 className={styles.subjH2}>Thriller</h2>
              </div>
            </span>
          </article>
        </Link>

        <Link to='/books/historical_fiction' className={styles.subjectLink}>
          <article
            className={styles.subjCardContainer}>
            <span className={styles.picNameSpan}>
              <div className={styles.imgDiv}>

              </div>
              <div className={styles.subjTextDiv}>
                <h2 className={styles.subjH2}>Historical Fiction</h2>
              </div>
            </span>
          </article>
        </Link>

        <Link to='/books/autobiographies' className={styles.subjectLink}>
          <article
            className={styles.subjCardContainer}>
            <span className={styles.picNameSpan}>
              <div className={styles.imgDiv}>

              </div>
              <div className={styles.subjTextDiv}>
                <h2 className={styles.subjH2}>Autobiographies</h2>
              </div>
            </span>
          </article>
        </Link>

      </div>
    </>
  );
}

export default SubjectLinks;