const router = require('express').Router();
const lodash = require('lodash');

const studentList = [{
    _id: '1',
    firstName: 'Jim',
    lastName: 'Smith'

}, {
    _id: '2',
    firstName: 'Jose',
    lastName: 'Cruz'

}, {
    _id: '3',
    firstName: 'Jill',
    lastName: 'Brown'

},
    {
        _id: '4',
        firstName: 'Sanjay',
        lastName: 'Patel'

    }];

/**
 * gets all students
 *
 *
 */
router.get('/', function (req, res) {

    res.status(200).json({
        message: 'Got Students',
        students: studentList
    });


});

/**
 * update a student
 *
 *
 */
router.post('/update', function (req, res) {
    const id = req.body.id;
    const newStudent = req.body;
    console.log('update: ', id);


    const student = lodash.filter(studentList, {'_id': id});
    console.log('found', student);
    if (student) {
        student.firstName = newStudent.firstName;
        student.lastName = newStudent.lastName;
    }


    res.status(200).json({
        message: 'Updated',
    });


});


router.get('/:id', function (req, res) {
    console.log('id:' + req.params.id);
    const id = req.params.id;

    findStudent(id, function (student) {
        res.status(200).json({
            message: 'success',
            student: student
        });

    });

});


module.exports = router;

function findStudent(id, callback) {
    studentList.forEach(function (student) {
            if (id == student._id) {
                callback(student);
            }
        }
    );

}