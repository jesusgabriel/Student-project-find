var $year = document.querySelector('[name="academic-year"]');
var $school = document.querySelector('[name="school"]');
var $programmeCode = document.querySelector('[name="programme-code"]');
var $yearOfProgramme = document.querySelector('[name="year-of-programme"]');
var $courseCode = document.querySelector('[name="course-code"]');
var $studentCodes = document.querySelector('[name="student-codes"]');
var $courseCodes = document.querySelector('[name="course-codes"]');

var $studentQuery = document.getElementById('student-query');
var $courseQuery = document.getElementById('course-query');

function updateQueries() {
  var msg = [];

  if ($year.value) {
    msg.push('in ' + $year.querySelector(`[value="${$year.value}"]`).innerHTML);
  }

  if ($school.value) {
    msg.push('in the ' + $school.querySelector(`[value="${$school.value}"]`).innerHTML);
  }

  if ($programmeCode.value) {
    if ($yearOfProgramme.value) {
      msg.push(`in year ${$yearOfProgramme.value} of ${$programmeCode.value}`);
    } else {
      msg.push(`on ${$programmeCode.value}`);
    }
  } else if ($yearOfProgramme.value) {
    msg.push(`on year ${$yearOfProgramme.value} of their degree`);
  }

  if ($courseCode.value) {
    msg.push(`enrolled on ${$courseCode.value}`);
  }

  if ($studentCodes.value) {
    msg.push(`in the list of student codes`);
  }

  $studentQuery.innerHTML = msg.length ? 'students ' + msg.slice(0, -1).join(', ') + (msg.length > 1 ? ' and ' : '') + msg.slice(-1) : 'all students';

  $courseQuery.innerHTML = $courseCodes.value ? 'the listed courses' : 'all courses'
}

document.querySelectorAll('[name]').forEach(function($namedElement) {
  $namedElement.addEventListener('change', updateQueries, false);
});

updateQueries();
