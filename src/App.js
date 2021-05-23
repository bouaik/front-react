import {useState, useEffect} from 'react'
import axios from './request/authAxios'
import './App.css';
import ArticleForm from './articleForm';

function App() {

  const [articles, setArticles] = useState([])
  const [alert, setAlert] = useState("")

  const handleSubmit = data => e  => {
    e.preventDefault()
    axios.post("/articles", {article: data})
        .then(data => articles.push(data.data))
  }

  const getArticles = () => {
    axios.get("/articles")
      .then(data => setArticles(data.data.articles))
  }

  useEffect(() => {
    getArticles()
  }, [])

  

  const removeArticle = (id) => {
    axios.delete(`/articles/${id}`)
      .then(data => setAlert(data.data.alert))
    setArticles(articles.filter(article => article.id !== id))
  }

  const displayAlert = (alert) => {
    setTimeout(() => {
      setAlert("")
    }, 4000)
    return <div className="alert">{alert}</div>
  }


  

  return (
    <div className="App">
      {alert.length > 0 && displayAlert(alert)}
      <ArticleForm handleSubmit={handleSubmit} />
      <div className="show-section">
        <h1>Articles</h1>
        <div className="articles">
          {articles.map(article => (
            <div key={article.id} className="article"> 
              <h4>{article.title}</h4>
              <p>{article.body}</p>
              <button onClick={() => removeArticle(article.id)}>X</button>
            </div>
          ))}
        </div>
        <button onClick={() => getArticles()}>Update articles</button>
      </div>
    </div>
  );
}

export default App;
