import './tagsfield.scss'

const tagFormat = /^(?!.*(__|--|_-|-_|\s).*)[^\W_][\w\-\s]+[^\W_]$/

class Tagsfield {
  constructor(el) {
    this.el = el
    this.input = el.querySelector('input[type="hidden"]')
    this.editable = el.querySelector('span[contenteditable]')

    el.addEventListener('click', () => this.editable.focus())
    this.editable.addEventListener('focus', () => el.classList.add('is-focused'))
    this.editable.addEventListener('blur', () => el.classList.remove('is-focused'))
    this.editable.addEventListener('keydown', this.onKeyDown.bind(this))

    // Load tags from input.value
    this.input.value.split(',').filter(v => v.length > 0).forEach(v => this.addTag(v))
  }

  validateTag(value, tagsValues) {
    if (value.length > 2 &&
        value.length <= 30 &&
        tagsValues.indexOf(value) === -1 &&
        tagFormat.test(value)) {
      return true
    }
  }

  removeTag(tag) {
    const values = this.input.value.split(',')
    const index = Array.from(this.el.children).indexOf(tag)
    values.splice(index, 1)
    this.input.value = values.join(',')
    this.el.removeChild(tag)
  }

  addTag(value) {
    const tag = document.createElement('div')
    tag.className = 'control'
    tag.innerHTML = `<div class="tags has-addons">
      <span class="tag is-success">${value}</span>
      <a class="tag is-delete"></a>
    </div>`
    tag.querySelector('.is-delete').addEventListener('click', this.removeTag.bind(this, tag))
    const inputs = this.el.children[this.el.children.length - 1]
    this.el.insertBefore(tag, inputs)
  }

  onKeyDown(event) {
    if (['Enter', ' ', ','].indexOf(event.key) >= 0) {
      event.preventDefault()
      const value = this.editable.textContent.trim()
      const tagsValues = this.input.value.split(',').filter(v => v.length > 0)

      if (!this.validateTag(value, tagsValues)) {
        return
      }

      tagsValues.push(value)
      this.input.value = tagsValues.join(',')
      this.addTag(value)
      this.editable.innerHTML = ''
    } else if (event.key === 'Backspace' &&
               this.editable.textContent.length === 0 &&
               this.el.children.length > 1) {
      const index = this.el.children.length - 2
      const tag = this.el.children[index]
      this.removeTag(tag)
    }
  }
}

export default Tagsfield
