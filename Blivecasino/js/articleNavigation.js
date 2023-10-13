const sidebarList = $('.sidebar__list')
const blogTitles = $('.blog__item-title')

blogTitles.each((function (index, element) {
    $(element).attr('id', `blog-title-${index}`)
    sidebarList.append(`<li><a href=#blog-title-${index}>${element.innerText}</a></li>`)
}))
