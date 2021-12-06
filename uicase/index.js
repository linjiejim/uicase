import entry from "./components/entry.vue"
import home from "./components/home.vue"

const install = Vue => {
	Vue.component("ucase-entry", entry)
	Vue.component("ucase-home", home)
}

export default {
	install
}