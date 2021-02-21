const express = require('express');
const sassMiddleware = require('node-sass-middleware');
const session = require('express-session');
const bodyParser = require('body-parser');
const querystring = require('querystring');

const app = express();

const vis_targets = ['Data-Record', 'Data-Field', 'Data-Level', 'Encoding-Channel', 'Interaction-Feature', 'Interaction-Trigger', 'Interaction-Feedback', 'Narrative-Sequencing', 'Narrative-Annotation/Emphases', 'Narrative-Text', 'References/Layout-Labels', 'References/Layout-References', 'References/Layout-Layout', 'References/Layout-Size'];

//session
app.use(session({
  secret: 'cATSaREcUTE',
  resave: true,
  saveUninitialized: true,
  cookie: {
    secure: true
  }
}));

//port
app.set('port', process.env.PORT || 3000);

//ejs handler
let handlebars = require('express-handlebars').create({
  defaultLayout: 'main',
  helpers: {
    equal: function(lvalue, rvalue, options) {
      if (arguments.length < 3)
        throw new Error("Handlebars Helper equal needs 2 parameters");
      if (lvalue != rvalue) {
        return options.inverse(this);
      } else {
        return options.fn(this);
      }
    },
    unequal: function(lvalue, rvalue, options) {
      if (arguments.length < 3)
        throw new Error("Handlebars Helper equal needs 2 parameters");
      if (lvalue == rvalue) {
        return options.inverse(this);
      } else {
        return options.fn(this);
      }
    }
  }
});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//sass
app.use(
  sassMiddleware({
    src: __dirname + '/sass', //where the sass files are
    dest: __dirname + '/public', //where css should go
    debug: true // obvious
  })
);

//route
// 1. main
app.get('/', function(req, res) {
  //1 patter data
  let pattern_def = require('./data/pattern_def');
  let targets = vis_targets
  let by_target = [];
  for (let i = 0; i < targets.length; i++) {
    let temp = {keyword: targets[i]};
    temp['number'] = i;
    temp['data'] = pattern_def.filtered_list('Target', targets[i]);
    by_target.push(temp);
  }
  res.render('whole', {pattern_data: by_target, selected: 'none'});
});

// 2. view

app.get('/view/:key', function(req, res) {
  //1 pattern data
  let pattern_def = require('./data/pattern_def');
  let targets = vis_targets;
  let by_target = [];
  for (let i = 0; i < targets.length; i++) {
    let temp = {keyword: targets[i]};
    temp['number'] = i;
    temp['data'] = pattern_def.filtered_list('Target', targets[i]);
    for (let j = 0; j < temp['data'].length; j++) {
      temp['data'][j]["URL"] = escape(temp['data'][j]["Name"]).replace("/", "%2F")
    }
    by_target.push(temp);
  }

  //2 article
  let pattern = pattern_def.filtered_list('Name', req.params.key)[0];
  let articles = require('./data/pattern_data');
  let filtered_articles = articles.filter_by_feature(req.params.key);
  for (let i = 0; i < filtered_articles.length; i++) {
    if (filtered_articles[i][pattern.Name] != 1) {
      filtered_articles[i]['desc'] = filtered_articles[i][pattern.Name];
    }
  }

  res.render('whole', {pattern_data: by_target, selected: pattern.Name, d$target: pattern.Target, d$action: pattern.Action, d$image: pattern.Image, d$def: pattern.Definition, d$articles: filtered_articles});
})

// 3. samples
app.get('/samples/:p', function(req, res) {
  //0 parameters
  let pn = parseInt(req.params.p) - 1;

  // 02 queries
  let filter_queries = req.query;
  console.log("x")
  let query_raw = req._parsedUrl.query;
  if (!query_raw) query_raw = "";
  else query_raw = "?" + query_raw;

  let query_restore = {};
  let fc = Object.keys(filter_queries);
  for (let i = 0; i < fc.length; i++) {
    if (filter_queries[fc[i]].constructor.name == "String") {
      let st = (fc[i] + "$" + filter_queries[fc[i]]).replace(" ", "-");
      query_restore[st] = true;
    } else if (filter_queries[fc[i]].constructor.name == "Array") {
      let sbfq = filter_queries[fc[i]];
      for (let j = 0; j < sbfq.length; j++) {
        let st = (fc[i] + "$" + sbfq[j]).replace(" ", "-");
        query_restore[st] = true;
      }
    }
  }

  //1 articles
  let articles = require('./data/pattern_data').get_filtered_data(filter_queries);
  let length = 20;
  let n_pages = Math.ceil(articles.length/length);
  let pages = [];
  for (let i = 0; i < n_pages; i++) pages.push(i+1);
  let paged_articles = articles.slice(length*pn, length*(pn+1))
  let common = ["Item", "Parent", "journal", "Title", "URL", "Format", "Format_2", "Chart_Type", "Encodings", "Chart_Size", "Data_Type", "Data_Size", "Patterns"]
  for (let i = 0; i < paged_articles.length; i++) {
    let k = Object.keys(paged_articles[i]);
    let t = []
    for (let j = 0; j < k.length; j++) {
      if (!common.includes(k[j])) t.push(k[j]);
    }
    paged_articles[i]['Patterns'] = t;
  }

  res.render('samples', {d$articles: paged_articles, d$query_raw: query_raw, d$query_restore: query_restore, d$query: filter_queries, d$pages: pages, d$curr: req.params.p});
});

app.get('/sample/:p', function(req, res) {
  //0 parameters
  let exp = req.params.p

  //1 articles
  let article = require('./data/pattern_data').get_by_key(exp);
  let common = ["Item", "Parent", "journal", "Title", "URL", "Format", "Format_2", "Chart_Type", "Encodings", "Chart_Size", "Data_Type", "Data_Size"]
  let k = Object.keys(article), t = [];
  for (let j = 0; j < k.length; j++) {
    if (!common.includes(k[j])) t.push(k[j]);
  }
  article['Patterns'] = t;

  res.render('sample', {d$article: article});
});

// 4. dependencies
app.get('/dependencies/:key1/:key2', function(req, res) {
  //1 get dependencies filtered by strategy
  let dependency = require('./data/dependencies');
  let dependency_graph = dependency.data;
  let strategy_graph = dependency.filter_by_group("Sub_Problems", req.params.key1)
  let strategy_detail = dependency.filter_by_group("Strategy", req.params.key2)
  let example_keys = strategy_detail.Examples;

  //2 get examples
  let articles = require('./data/pattern_data');
  let examples = articles.get_bulk_by_key(example_keys);
  strategy_detail.Examples_loaded = examples;

  res.render('dependencies', {d$dependency_graph: dependency_graph,
    d$strategy_graph: strategy_graph, d$strategy_detail: strategy_detail,
    d$pid: req.params.key1, d$sid: req.params.key2});
});

app.get('/dependencies/:key', function(req, res) {
  //1 get dependency graph filtered by problem
  let dependency = require('./data/dependencies');
  let dependency_graph = dependency.data;
  let strategy_graph = dependency.filter_by_group("Sub_Problems", req.params.key)

  res.render('dependencies', {d$dependency_graph: dependency_graph, d$strategy_graph: strategy_graph, d$pid: req.params.key, d$sid: null});
});

app.get('/dependencies/', function(req, res) {
  //1 get dependency graph as a whole
  let dependency = require('./data/dependencies');
  let dependency_graph = dependency.data;

  res.render('dependencies', {d$dependency_graph: dependency_graph, d$pid: null, d$sid: null});
});

app.get('/references/', function(req, res) {
  //1 get dependency graph as a whole
  let reference = require('./data/references').data;

  res.render('references', {d$reference_data: reference});
});

//static directories
app.use('/', express.static(__dirname + '/public'));

//error handling
app.use(function(req, res, next) {
  res.status(404).render('layouts/main', {
    is_404: true,
    is_500: false
  });
});
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).render('layouts/main', {
    is_404: false,
    is_500: true
  });
});

//sever listen
app.listen(app.get('port'), function() {
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-c to terminate...');
});
