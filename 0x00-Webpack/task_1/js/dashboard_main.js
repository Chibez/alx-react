import $ from 'jquery';
import _ from 'lodash';

// Add elements to the body
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

// Initialize click count
let count = 0;

// Update counter function
function updateCounter() {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}

// Debounce the click event handler
$('button').on('click', _.debounce(updateCounter, 500));
