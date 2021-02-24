// Utility
String.prototype.union = function (as) {
  if (as.constructor.name != "Array") {
    return this == as;
  } else {
    let self = this;
    for (let i = 0; i < as.length; i++) {
      if (as[i] == self) return true;
    }
    return false;
  }
}

Array.prototype.union = function (as) {
  if (as.constructor.name != "Array") {
    return this.includes(as);
  } else {
    let self = this;
    for (let i = 0; i < as.length; i++) {
      if (as[i].union(self)) return true;
    }
    return false;
  }
}
Vue.config.ignoredElements = [
  'group'
]
let app = new Vue({
  el: '#app',
  delimiters: ["<%", "%>"],
  data: {
    data: {
      mode: 'main',
      pattern_data: by_target,
      modal_control_stack: []
    },
    mode_main: {
      curr_pattern: null,
      selected_pattern: "",
      sub_articles: []
    },
    mode_sample: {
      filter: {
        Format: [],
        Format_2: [],
        Chart_Size: [],
        Chart_Type: [],
        Data_Size: [],
        Data_Type: []
      },
      filtered_data: []
    },
    mode_sample_detail: {
      show: false,
      item: {}
    },
    mode_pattern_detail: {
      show: false,
      item: {}
    },
    mode_by_problem: {
      dependency_graph: dependency.data,
      strategies: [],
      detail: null,
      curr_problem: "",
      curr_strategy: ""
    }
  },
  methods: {
    initiate: function() {
      let self = this;
      document.addEventListener('keydown', function(event){
        if (event.key === "Escape") {
          self.data.modal_control_stack.pop()()
        }
      })
      let scroll_listener = this.show_top_button;
      document.addEventListener('scroll', scroll_listener);
    },
    modal_stack_out: function() {
      this.data.modal_control_stack.pop()()
    },
    navigate: function (s) {
      this.data.mode = s;
      this.clear_events();
      if (s === 'main') this.initiate_main();
      if (s === 'sample') this.initiate_sample();
      if (s === 'by_problem') this.initiate_dependency();
    },
    clear_events: function () {
      let scroll_listener = this.toggle_filter;
      document.removeEventListener('scroll', scroll_listener);
      let scroll_listener2 = this.show_top_button;
      document.removeEventListener('scroll', scroll_listener2);
    },
    initiate_main: function () {
      this.mode_main.curr_pattern = null;
      this.mode_main.selected_pattern = "";
      this.mode_main.sub_articles = [];
      let scroll_listener = this.show_top_button;
      document.addEventListener('scroll', scroll_listener);
    },
    show_pattern: function (i, j) {
      this.mode_main.curr_pattern = this.data.pattern_data[i].data[j];
      this.mode_main.selected_pattern = this.mode_main.curr_pattern.Name;
      let key = this.mode_main.selected_pattern
      // filter
      this.mode_main.sub_articles = sample.filter_by_feature(key);
    },
    initiate_sample: function () {
      this.clear_filter();
      let scroll_listener = this.toggle_filter;
      document.addEventListener('scroll', scroll_listener);
    },
    clear_filter: function () {
      this.mode_sample.filter = {
        Format: [],
        Format_2: [],
        Chart_Size: [],
        Chart_Type: [],
        Data_Size: [],
        Data_Type: []
      }
      this.mode_sample.filtered_data = sample.get_filtered_data(false)
    },
    sample_filter: function () {
      let params = this.mode_sample.filter;
      this.mode_sample.filtered_data = sample.get_filtered_data(params)
    },
    toggle_filter: function ($event) {
      let winh = window.scrollY;
      if (winh > 150) {
        $('#filter_tab').addClass("hide-filter")
        $('#sample-up').show()
      } else {
        $('#filter_tab').removeClass("hide-filter")
        $('#sample-up').hide()
      }
    },
    show_top_button: function ($event) {
      let winh = window.scrollY;
      if (winh > 150) {
        $('#pattern-up').show()
        console.log("X")
      } else {
        $('#pattern-up').hide()
      }
    },
    view_sample_detail: function (sid) {
      this.mode_sample_detail.item = sample.get_by_key(sid);
      this.mode_sample_detail.show = true;
      let self = this;
      this.data.modal_control_stack.push(self.close_sample_detail)
    },
    close_sample_detail: function () {
      // this.mode_sample_detail.item = {};
      this.mode_sample_detail.show = false;
    },
    go_to_pattern: function (pname) {
      this.navigate('main');
      this.mode_main.curr_pattern = pattern_def.filter_pattern(pname);
      this.mode_main.selected_pattern = this.mode_main.curr_pattern.Name;
      let key = this.mode_main.selected_pattern
      // filter
      this.mode_main.sub_articles = sample.filter_by_feature(key);
    },
    show_pattern_detail: function (pname) {
      this.mode_pattern_detail.show = true;
      this.mode_pattern_detail.curr_pattern = pattern_def.filter_pattern(pname);
      this.mode_pattern_detail.selected_pattern = this.mode_pattern_detail.curr_pattern.Name;
      let key = this.mode_pattern_detail.selected_pattern
      // filter
      this.mode_pattern_detail.sub_articles = sample.filter_by_feature(key);
      let self = this;
      this.data.modal_control_stack.push(self.close_pattern_detail)
    },
    close_pattern_detail: function () {
      // this.mode_sample_detail.item = {};
      this.mode_pattern_detail.show = false;
    },
    initiate_dependency: function () {
      this.mode_by_problem = {
        dependency_graph: dependency.data,
        strategies: [],
        detail: null,
        curr_problem: "",
        curr_strategy: ""
      }
    },
    see_strategies: function (i, j) {
      this.mode_by_problem.strategies = this.mode_by_problem.dependency_graph[i].Sub_Problems[j].Strategy;
      this.mode_by_problem.curr_problem = this.mode_by_problem.dependency_graph[i].Sub_Problems[j].Problem
    },
    see_strategy_detail: function (k) {
      this.mode_by_problem.detail = this.mode_by_problem.strategies[k];
      let example_keys = this.mode_by_problem.detail.Examples;
      this.mode_by_problem.detail.Examples_loaded = sample.get_bulk_by_key(example_keys);
      this.mode_by_problem.curr_strategy = this.mode_by_problem.detail.Name;
    }
  }
});

app.initiate()
