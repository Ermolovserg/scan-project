import { format, parseISO } from 'date-fns';

import styles from './result-card.module.scss';
import { getContent } from './helpers';
import Button from '../Button/Button';


const ResultCard = ({ doc }) => {
  if (!doc) return null;

  const {
    issueDate,
    url,
    source: { name: sourceName },
    attributes: { isTechNews, isAnnouncement, isDigest, wordCount },
    title: { text: title },
    content: { markup },
  } = doc;

  if (!issueDate || !sourceName || !markup || !title) return null;

  const date = format(parseISO(issueDate), 'dd.MM.yyyy');
  const { bgUrl, content } = getContent(markup);
  const hasTags = isTechNews || isAnnouncement || isDigest;

  return (
    <div className={styles.card}>
      <div className={styles.meta}>
        <span className={styles.date}>{date}</span>
        {url ? (
          <a className={styles.source} href={url} target="_blank" rel="noopener noreferrer">
            {sourceName}
          </a>
        ) : (
          <span>{sourceName}</span>
        )}
      </div>
      <h3 className={styles.title}>{title}</h3>

      {hasTags && (
        <div className={styles.tags}>
          {isTechNews && (
            <span className={styles.tag}>Технические новости</span>
          )}

          {isAnnouncement && (
            <span className={styles.tag}>Анонсы и события</span>
          )}

          {isDigest && <span className={styles.tag}>Сводки новостей</span>}
        </div>
      )}

      {bgUrl && (
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${bgUrl})` }}
        ></div>
      )}

      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <div className={styles.footer}>
        {url && (
          <Button
            size="small"
            color="primary"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Читать в источнике
          </Button>
        )}
        <p className={styles.wordCount}>Слов: {wordCount}</p>
      </div>
    </div>
  );
};

export default ResultCard;

