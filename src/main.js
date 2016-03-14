import intro from './content/intro'

const mount = document.querySelector('.mount')
mount.innerHTML = `
  <div class='contents intro'>
    ${ intro.split(/\n\n/).map(x => {
      if (x.match('---')) {
        return `<p class='centered'>${x.replace('---', '')}</p>`
      } else {
        return `<p>${x}</p>`
      }
    }).join('') }
  </div>
`
console.log(intro.split(/\n\n/))
