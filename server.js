var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
'article-one':{
    title:'Article one | Pathanjali',
    date:'Sep 29 2016',
    content:
    `
      <div>
         <p>Users are used to scroll websites vertically on both desktop and mobile devices - but not horizontally! So, if the user is forced to scroll horizontally, or zoom out, to see the whole web page it results in a poor user experience. Some additional rules to follow:</p>   
    <ol>
        <li>
            Do NOT use large fixed width elements - For example, if an image is displayed at a width wider than the viewport it can cause the viewport to scroll horizontally. Remember to adjust this content to fit within the width of the viewport.
        </li> 
        <li>
            Do NOT let the content rely on a particular viewport width to render well - Since screen dimensions and width in CSS pixels vary widely between devices, content should not rely on a particular viewport width to render well.
        </li>
        <li>
             Use CSS media queries to apply different styling for small and large screens - Setting large absolute CSS widths for page elements, will cause the element to be too wide for the viewport on a smaller device. Instead, consider using relative width values, such as width: 100%. Also, be careful of using large absolute positioning values. It may cause the element to fall outside the viewport on small devices.
        </li>
    </ol>`
    },
    'article-two':{
    title:'Article two | Pathanjali',
    date:'Sep 29 2016',
    content:
    `
      <div>
         <p>Users are used to scroll websites vertically on both desktop and mobile devices - but not horizontally! So, if the user is forced to scroll horizontally, or zoom out, to see the whole web page it results in a poor user experience. Some additional rules to follow:</p>   
    <ol>
        <li>
            Do NOT use large fixed width elements - For example, if an image is displayed at a width wider than the viewport it can cause the viewport to scroll horizontally. Remember to adjust this content to fit within the width of the viewport.
        </li> 
        <li>
            Do NOT let the content rely on a particular viewport width to render well - Since screen dimensions and width in CSS pixels vary widely between devices, content should not rely on a particular viewport width to render well.
        </li>
        <li>
             Use CSS media queries to apply different styling for small and large screens - Setting large absolute CSS widths for page elements, will cause the element to be too wide for the viewport on a smaller device. Instead, consider using relative width values, such as width: 100%. Also, be careful of using large absolute positioning values. It may cause the element to fall outside the viewport on small devices.
        </li>
    </ol>`
    },
    'article-three':{
    title:'Article three | Pathanjali',
    date:'Sep 29 2016',
    content:
    `
      <div>
         <p>Users are used to scroll websites vertically on both desktop and mobile devices - but not horizontally! So, if the user is forced to scroll horizontally, or zoom out, to see the whole web page it results in a poor user experience. Some additional rules to follow:</p>   
    <ol>
        <li>
            Do NOT use large fixed width elements - For example, if an image is displayed at a width wider than the viewport it can cause the viewport to scroll horizontally. Remember to adjust this content to fit within the width of the viewport.
        </li> 
        <li>
            Do NOT let the content rely on a particular viewport width to render well - Since screen dimensions and width in CSS pixels vary widely between devices, content should not rely on a particular viewport width to render well.
        </li>
        <li>
             Use CSS media queries to apply different styling for small and large screens - Setting large absolute CSS widths for page elements, will cause the element to be too wide for the viewport on a smaller device. Instead, consider using relative width values, such as width: 100%. Also, be careful of using large absolute positioning values. It may cause the element to fall outside the viewport on small devices.
        </li>
    </ol>`
    }
};
    
function createTemplate(date){
    var title=date.title;
    var dat=date.date;
    var content=date.content;
var htmlTemplate=
`
<html>
<title>
${title}
</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="/ui/style.css" rel="stylesheet">
<body>
    <div class="container">
    <a href="/">Home</a>
    <hr>
    <h3>
  ${dat}
    </h3>
         <div>
         ${content}
        </div>
    </div>
</body>
</html>
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articlesname', function (req, res) {
    var articlesname = req.params.articlesname;
  res.send(createTemplate(articles(articlesname)));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
