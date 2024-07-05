import { useState, useEffect } from 'react'
import Spinner from '../LoadingIndicator/LoadingIndicator'
import Button from '../Button/Button'
import ResultCard from '../ResultCard/ResultCard'
import styles from './result-list.module.scss'
import {
  useGetObjectSearchQuery,
  useGetDocumentsQuery,
} from '../../redux/api/scan'
import {
  getObjectSearchRequest,
  getDocumentsRequest,
} from '../../redux/api/requests'

const getIdsToShow = (docs = [], end) => {
  return docs.slice(0, end)
}

const ResultList = ({ actionData }) => {
  const objectSearchRequest = getObjectSearchRequest(actionData)
  const objectSearch = useGetObjectSearchQuery(objectSearchRequest)

  const [ skip, setSkip ] = useState(true)
  const [ show, setShow ] = useState(10)
  const [ idsToShow, setIdsToShow ] = useState([])

  const documentsRequest = getDocumentsRequest(idsToShow)
  const documents = useGetDocumentsQuery(documentsRequest, { skip })

  useEffect(() => {
    if (objectSearch.isSuccess) {
      setIdsToShow(getIdsToShow(objectSearch.data, show))
      setSkip(false)
    }
  }, [ objectSearch.isSuccess, objectSearch.data, show ])

  if (objectSearch.isLoading) return <Spinner />
  if (documents.isLoading) return <Spinner />

  const canLoadMore = objectSearch.data && show < objectSearch.data.length

  const handleShowMoreClick = (e) => {
    e.preventDefault()
    setShow(show + 10)
  }

  return (
    <div className={styles.list}>
      {documents.data &&
        documents.data.map((doc) => (
          <ResultCard key={doc.ok.id} doc={doc.ok} />
        ))}
      {canLoadMore && (
        <Button
          color="accent"
          size="small"
          onClick={handleShowMoreClick}
          disabled={documents.isFetching}
          isLoading={documents.isFetching}
        >
          Показать больше
        </Button>
      )}
    </div>
  )
}

export default ResultList
