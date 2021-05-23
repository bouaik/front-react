
import {useState} from 'react'
import axios from './request/authAxios'

const ArticleForm = ({handleSubmit}) => {

    const articleData = {
        title: "",
        body: ""
    }

    const [articleInfo, setArticleInfo] = useState(articleData)

    const handleChange = e => {
        const {name, value} = e.target
        setArticleInfo({...articleInfo, [name]: value})
    }

    return (
      <div className="add-section">
        <form onSubmit={handleSubmit(articleInfo)}>
          <input placeholder="Title" type="text" name="title" onChange={handleChange} />
          <textarea placeholder="Body" name="body" onChange={handleChange} />
          <input type="submit" value="Add" />
        </form>
      </div>
    )

} 



export default ArticleForm;