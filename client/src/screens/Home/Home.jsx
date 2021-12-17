import "./Home.css"
import Post from "../../components/Post/Post"
import Layout from "../../components/Layout/Layout"

const Home = () => {
  return (
    <Layout>
      <div>
        <Post />
      </div>
    </Layout>
  )
}

export default Home;