/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

const fs = require('fs');
const path = require('path');

function componentExists(comp) {
  let exists = false;

  fs.readdirSync(path.join(__dirname, '../../../src/components')).forEach(type => {
    if (!/^\./.test(type)) {
      try {
        const component = fs.readdirSync(path.join(__dirname, '../../../src/components', type, comp));
        exists = component.length > 0;
      } catch (error) {}
    }
  });

  return exists;
}

module.exports = componentExists;
