import React from 'react'
import { useParams , Link} from 'react-router-dom'
export default function Detail() {

  const id=useParams()
  return (
    <>
      <div>Detail {id.id}</div>
      <Link to='/products'>products</Link>
    </>
    )
}
