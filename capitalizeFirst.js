function capitalizeFirstLetter(input) {
  if (input === '') {
    return '';
  } else {
    const arr = input.split(' ');
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
    }
    return arr.join(' ');
  }
}

capitalizeFirstLetter('i am learning react');

module.exports = capitalizeFirstLetter;
