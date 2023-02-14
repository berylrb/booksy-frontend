import styles from './SubjectLinks.module.css'
import { Link } from 'react-router-dom';
import magician from '../../assets/magician.png'
import alien from '../../assets/sci-fi.png'
import adventure from '../../assets/adventure.png'
import rom from '../../assets/married.png'
import bio from '../../assets/biography.png'
import detect from '../../assets/detective.png'
import knife from '../../assets/knife.png'
import hist from '../../assets/soldier.png'
import teen from '../../assets/student.png'


const SubjectLinks = () => {
  return (
    <>
      <div className={styles.subjectCardsDiv}>

        <Link to='/books/subjects/fantasy' className={styles.subjectLink}>
          <article
            className={styles.subjCardContainer}>
            <span className={styles.picNameSpan}>
              <div className={styles.imgDiv}>
                <img src={magician} alt="wizard for fantasy book category" />
              </div>
              <div className={styles.subjTextDiv}>
                <h2 className={styles.subjH2}>Fantasy</h2>
              </div>
            </span>
          </article>
        </Link>

        <Link to='/books/subjects/science_fiction' className={styles.subjectLink}>
          <article
            className={styles.subjCardContainer}>
            <span className={styles.picNameSpan}>
              <div className={styles.imgDiv}>
              <img src={alien} alt="ufo for sci fi book category" />
              </div>
              <div className={styles.subjTextDiv}>
                <h2 className={styles.subjH2}>Science Fiction</h2>
              </div>
            </span>
          </article>
        </Link>

        <Link to='/books/subjects/adventure' className={styles.subjectLink}>
          <article
            className={styles.subjCardContainer}>
            <span className={styles.picNameSpan}>
              <div className={styles.imgDiv}>
              <img src={adventure} alt="indy for adventure book category" />
              </div>
              <div className={styles.subjTextDiv}>
                <h2 className={styles.subjH2}>Adventure</h2>
              </div>
            </span>
          </article>
        </Link>

        <Link to='/books/subjects/romance' className={styles.subjectLink}>
          <article
            className={styles.subjCardContainer}>
            <span className={styles.picNameSpan}>
              <div className={styles.imgDiv}>
              <img src={rom} alt="couple for romance book category" />
              </div>
              <div className={styles.subjTextDiv}>
                <h2 className={styles.subjH2}>Romance</h2>
              </div>
            </span>
          </article>
        </Link>

        <Link to='/books/subjects/mystery_and_detective_stories' className={styles.subjectLink}>
          <article
            className={styles.subjCardContainer}>
            <span className={styles.picNameSpan}>
              <div className={styles.imgDiv}>
              <img src={detect} alt="detective for mystery book category" />
              </div>
              <div className={styles.subjTextDiv}>
                <h2 className={styles.subjH2}>Mystery and Detective Stories</h2>
              </div>
            </span>
          </article>
        </Link>

        <Link to='/books/subjects/young_adult' className={styles.subjectLink}>
          <article
            className={styles.subjCardContainer}>
            <span className={styles.picNameSpan}>
              <div className={styles.imgDiv}>
              <img src={teen} alt="teen for YA book category" />
              </div>
              <div className={styles.subjTextDiv}>
                <h2 className={styles.subjH2}>Young Adult</h2>
              </div>
            </span>
          </article>
        </Link>

        <Link to='/books/subjects/thriller' className={styles.subjectLink}>
          <article
            className={styles.subjCardContainer}>
            <span className={styles.picNameSpan}>
              <div className={styles.imgDiv}>
              <img src={knife} alt="knife for thriller book category" />
              </div>
              <div className={styles.subjTextDiv}>
                <h2 className={styles.subjH2}>Thriller</h2>
              </div>
            </span>
          </article>
        </Link>

        <Link to='/books/subjects/historical_fiction' className={styles.subjectLink}>
          <article
            className={styles.subjCardContainer}>
            <span className={styles.picNameSpan}>
              <div className={styles.imgDiv}>
              <img src={hist} alt="knight for historical fiction book category" />
              </div>
              <div className={styles.subjTextDiv}>
                <h2 className={styles.subjH2}>Historical Fiction</h2>
              </div>
            </span>
          </article>
        </Link>

        <Link to='/books/subjects/autobiographies' className={styles.subjectLink}>
          <article
            className={styles.subjCardContainer}>
            <span className={styles.picNameSpan}>
              <div className={styles.imgDiv}>
              <img src={bio} alt="biography for autobiography book category" />
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