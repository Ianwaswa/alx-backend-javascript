/**
 * Contains miscellaneous route handlers
 * @author Ian Juma <https://github.com/Ianwaswa>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
