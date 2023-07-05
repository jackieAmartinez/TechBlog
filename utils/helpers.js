module.exports = {
  format_date: date => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
      date
    ).getFullYear()}`;
  },
  format_plural: (word, amount) => {
    if (amount !== 1) {
      return `${word}s`;
    }

    return word;
  }
}

// previous
// module.exports = {
//   format_date: date => {
//     return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
//   }
// };



// module.exports = {
//   format_date: (date) => {
//     // Format date as MM/DD/YYYY
//     return date.toLocaleDateString();
//   },

//   format_amount: (amount) => {
//     // format large numbers with commas
//     return parseInt(amount).toLocaleString();
//   },

//   is_my_page: (pageUser, userId) => {
//     return pageUser === userId;
//   },
// };
