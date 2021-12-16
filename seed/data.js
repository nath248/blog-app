import db from '../db/connection.js'
import Post from '../models/post.js'

const insertData = async () => {

  await db.dropDatabase()

  const posts = [
    {
      name: 'Paul',
      status: 'Away',
      comment: 'Sometimes, employees don’t recognize their own strengths. We had someone on our team that was frustrated with leadership and really looking for a way off the team.',
      profilePic: 'https://i.gyazo.com/6eed896f81d14933c3bdbe9c88f5f3cc.jpg'
    },
    {
      name: 'Lana',
      status: 'Online',
      comment: 'Every time I would run into him, I would comment on his strengths. He was an amazingly detailed person. ',
      profilePic: 'https://i.gyazo.com/962e6adfc8a728754f08ad2a8adeca87.jpg'
    },
    {
      name: 'Rylee',
      status: 'Online',
      comment: 'He could put together detailed spread sheets of task oriented initiatives and track them from a very high level down to the minutest detail of data.',
      profilePic: 'https://i.gyazo.com/aa400adcf465dace2e4e19da36bf71bd.jpg'
    },
    {
      name: 'Mart',
      status: 'Away',
      comment: 'He did find a position in the company to be content. Always recognize the positive in everyone.',
      profilePic: 'https://i.gyazo.com/ac1a84ef171bc9158d1235b0d43442ca.jpg'
    },
    {
      name: 'Mary',
      status: 'Away',
      comment: 'It is not a good idea to cut others down, even in jest. If you can build others up, it will pay back in untold benefits.',
      profilePic: 'https://i.gyazo.com/8165b298e004124fd2312dd4ca9bf12c.jpg'
    }
    ]

  await Post.insertMany(posts)
  console.log('Created posts!')

  db.close()
}

insertData()