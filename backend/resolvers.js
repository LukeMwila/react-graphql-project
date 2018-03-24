var coursesData = [
    {
        id: '1',
        title: 'The Complete Node.js Developer Course',
        author: 'Andrew Mead, Rob Percival',
        description: 'Learn Node.js by building real-world applications with Node, Express',
        topic: 'Node.js',
        url: 'https://codingthesmartway.com/courses/nodejs',
        voteCount: 0
    },
    {
        id: '2',
        title: 'The Complete Node.js Developer Course 2',
        author: 'Andrew Mead, Rob Percival',
        description: 'Learn Node.js by building real-world applications with Node, Express',
        topic: 'Node.js',
        url: 'https://codingthesmartway.com/courses/nodejs',
        voteCount: 0
    },
    {
        id: '3',
        title: 'The Complete Node.js Developer Course 3',
        author: 'Andrew Mead, Rob Percival',
        description: 'Learn Node.js by building real-world applications with Node, Express',
        topic: 'Node.js',
        url: 'https://codingthesmartway.com/courses/nodejs',
        voteCount: 0
    }
]

const resolvers = {
    Query: {
        allCourses: (root, {searchTerm}) => {
            return coursesData
        },
        course: (root,{id}) => {
            return courseModel.findOne({id: id})
        }
    },
    Mutation: {
        upvote: (root, {id}) => {
            const course = courseDta.filter(course => {
                return course.id === id
            })[0]
            course.voteCount++
            return course
        },
        downvote: (root, {id}) => {
            const course = courseDta.filter(course => {
                return course.id === id
            })[0]
            course.voteCount--
            return course
        },
        addCourse: (root, {title, author, description, topic,url}) => {
            return null
        }
    }
}

export default resolvers