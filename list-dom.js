function ListDOM(obj) {
  const run = typeof(obj.run) !== undefined ? obj.run: false
  const test = run ? run : (typeof(obj.test) !== undefined ? obj.test : false)
  const desired = run ? run : (typeof(obj.methods) !== undefined ? obj.methods : false)

  const methods = [['forEach', Array.prototype.forEach], ['map', Array.prototype.map], ['filter', Array.prototype.filter], ['some', Array.prototype.some], ['reduce', Array.prototype.reduce], ['includes', Array.prototype.includes], ['every', Array.prototype.every], ['find', Array.prototype.find], ['fill', Array.prototype.fill], ['entries', Array.prototype.entries], ['concat', Array.prototype.concat], ['copyWithin', Array.prototype.copyWithin], ['values', Array.prototype.values], ['findIndex', Array.prototype.findIndex], ['toString', Array.prototype.toString], ['unshift', Array.prototype.unshift], ['indexOf', Array.prototype.indexOf], ['join', Array.prototype.join], ['keys', Array.prototype.keys], ['lastIndexOf', Array.prototype.lastIndexOf], ['push', Array.prototype.push], ['reduceRight', Array.prototype.reduceRight], ['shift', Array.prototype.shift], ['slice', Array.prototype.slice], ['splice', Array.prototype.splice], ['toLocaleString', Array.prototype.toLocaleString], ['reverse', Array.prototype.reverse], ['pop', Array.prototype.pop], ['sort', Array.prototype.sort]]



  if(desired || run) {
    let err = false
    desired.forEach(method => {
      let pair = methods.find((key) => { return key[0] == method })
      if (typeof HTMLCollection !== 'undefined' && HTMLCollection.prototype) {
        Object.defineProperty(HTMLCollection.prototype, pair[0], {
            value: pair[1],
            configurable: true,
            writable: true,
        });
      } else {
        ++err
      }
    })

    if(err) {
      console.error('ListDOM: There was an error! Run ListDOM({test: ['+'*your-methods-here*'+']})) for more info.')
    }
  }
  if(test || run) {
    fullTest(test)
  }
  if(!test && !desired) {
    console.error('ListDOM: Invalid input! Check documentation: (https://github.com/entrpyc/list-dom/blob/master/README.md)')
  }

  function fullTest(test) {
    let wrongInput = 1
    let errs = 0
    let warns = 0
  
    if(!Array.isArray(test)) {
      console.error('ListDOM: (failed: '+(++errs + warns)+') method/s should be passed in as an Array')
    } else {
      wrongInput = 0
    }

    if(!wrongInput) {
      test.forEach(method => {
        let failed = 0
        let found = 0
        let dontShow = 0
        methods.forEach(key => {
          if((key[0].toLowerCase() == method.toLowerCase()) && (key[0] != method)) {
            console.warn('ListDOM: (failed: '+(errs + ++warns)+') Method '+method+' exists but its passed in wrong case. Array.prototype.methods are case sensitive! M:', method, key)
            failed = 1
            dontShow = 1
          }

          if(key[0] == method) {
            found = 1;
          }
        })

        if(!found && !dontShow) {
          console.error('ListDOM: (failed: '+(++errs + warns)+') Method '+method+' is not supported by HTMLCollection or it does not exist. M:', method, methods)
        }

        if(!failed && found) {
          try {
            if (typeof HTMLCollection !== 'undefined' && HTMLCollection.prototype) {
              Object.defineProperty(HTMLCollection.prototype, method[0], {
                value: method[1],
                configurable: true,
                writable: true,
              });
              console.warn('ListDOM: (SUCCESS) at '+method+'. Further errors with this method are not related with ListDOM. M:', method)
            } else {
              console.error('ListDOM: (failed: '+(++errs + warns)+') Fatal Error - HTMLCollection is not defined! typeof HTMLCollection:', typeof HTMLCollection)
            }
          } catch (error) {
            console.error('ListDOM: (failed: '+(++errs + warns)+')', error)
          }
        } else {
          console.warn('ListDOM: Unable to preceed with 2nd level test. Fix the errors above! M:', method)
        }
      })
    }

    console.warn(`ListDOM: Errors: ${errs}, Warnings: ${warns}`)
  }
  
}