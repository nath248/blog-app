import db from '../db/connection.js'
import Post from '../models/post.js'

const insertData = async () => {

  await db.dropDatabase()

  await Post.insertMany(posts)
  console.log('Created posts!')

  db.close()
}

insertData()