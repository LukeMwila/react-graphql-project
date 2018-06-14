import courseModel from './models/course'

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
            return courseModel.find().sort({voteCount: 'desc'})
        },
        course: (root, {id}) => {
            return courseModel.findOne({id: id})
        }
    },
    Mutation: {
        upvote: (root, {id}) => {
            return courseModel.findOneAndUpdate(
                {id: id}, 
                {$inc: {"voteCount": 1}}, 
                { returnNewDocument: true }
            )
        },
        downvote: (root, {id}) => {
            return courseModel.findOneAndUpdate(
                {id: id}, 
                {$inc: {"voteCount": -1}}, 
                { returnNewDocument: true }
            )
        },
        addCourse: (root, {title, author, description, topic,url}) => {
            const course = new courseModel({
                title: title,
                author: author,
                description: description,
                topic: topic,
                url: url
            })
            return course.save()
        }
    }
}

export default resolvers