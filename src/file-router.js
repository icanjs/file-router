import Component from 'can/component/';
import Map from 'can/map/';
import route from 'can/route/';
import 'can/map/define/';
import './file-router.less!';

export const ViewModel = Map.extend({
  define: {
  batch: {
    set(value){
      if (value && value.length) {
        var files = value.attr();

        // Determine if the list is all of the same type.
        var ext;
        files.forEach(function(file){
          var p = file.name.lastIndexOf('.');
          var newExt = p >= 0 ? file.name.substring(p + 1) : 'other';
          if (!ext){
          ext = newExt;
          } else if (newExt.toLowerCase() !== ext.toLowerCase()) {
            ext = 'multiple';
          }
        });

        if (this.attr(ext)) {
          var extString = this.attr(ext),
            which = 'key',
              key = '',
              result = {};

          for (var i = 0; i < extString.length; i++) {
            var char = extString[i];

            // Commas reset the key, then switch to key
            if (char === ',') {
              key = '';
              which = 'key';

            // Equals signs switch to value
            } else if (char === '=') {
              which = 'value';
              result[key] = '';

            // Append the current character to the current `which` target.
            } else {
              // Skip spaces.
              if (char !== ' ') {
                if (which === 'key') {
                  key += char;
                } else {
                  result[key] += char;
                }
              }
            }
          }
          route.attr(result);
        } else {
          console.log('The file-router has not been set up to handle ' + ext + ' files.');
        }

      }
      return value;
    }
  }
  }
});

export default Component.extend({
  tag: 'file-router',
  viewModel: ViewModel
});