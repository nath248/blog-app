import "./Home.css"
import Posts from "../../components/Posts/Posts"
import Layout from "../../components/Layout/Layout"

const Home = () => {
  return (
    <Layout>
      <div>
        <Posts />
      </div>
    </Layout>
  )
}

export default Home;