'use strict'

function Jinwoo () {
    this.helpers = new window.app.Helpers()
    this.template = new window.app.Template()
    this.view = new window.app.View(this.helpers, this.template)
    this.controller = new window.app.Controller(this.view)
}

const jinwoo = new Jinwoo()
jinwoo.controller.init()
