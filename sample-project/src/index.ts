import _ from 'lodash';

const root = document.querySelector('#app');
root.innerHTML = _.join(['Hello', 'webpack'], ' ');
