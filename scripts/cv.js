const navigationLinks = document.querySelectorAll('#CvNavigation a')
navigationLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault()
    const hash = link.getAttribute('href')
    const section = openSection(hash, true)
    section.scrollIntoView()
  })
})

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('#CvContent section:not(#description)').forEach(section => {
    section.classList.add('closed')
    section.classList.remove('open')
    const title = section.querySelector('h3:first-child')
    title.tabIndex = 0
    title.addEventListener('click', toggleSection)
    title.addEventListener('keyup', toggleSection)

    function toggleSection (event) {
      if (event.type === 'keyup' && event.keyCode !== 13) return
      location.hash = section.id
      openSection(`#${section.id}`)
    }
  })

  const sectionId = location.hash
  if (sectionId !== '') {
    const section = openSection(sectionId)
    section.scrollIntoView()
  }
})

function openSection (newSectionId, forceToggle) {
  const section = document.querySelector(newSectionId)
  const toggle = forceToggle !== undefined ? forceToggle : !section.classList.contains('open')
  document.querySelectorAll('#CvContent section:not(#description)').forEach(function (section) {
    section.classList.remove('open')
  })
  section.classList.toggle('open', toggle)
  const sectionTitle = section.querySelector('h3:first-child')
  sectionTitle.focus()
  return section
}
