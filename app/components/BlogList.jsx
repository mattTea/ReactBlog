var React = require('react');
// import ReactHtmlParser from 'react-html-parser';
// const json = require('json-loader!./file.json');
// const json = require('./file.json');

var cosmic = require('cosmic');

var BlogList = React.createClass({ //try not to use .createClass (deprecated)
  getInitialState: function () {
    return {
      isLoading: true,
      blogs: undefined
    }
  },

  componentWillMount: function (blogs) {
    var that = this;

    cosmic.getBlogs().then(function (blogs) {
      that.setState({
        blogs: blogs,
        isLoading: false
      });
    }, function (errorMessage) {
      that.setState({isLoading: false}),
      alert(errorMessage);
    });
  },

  render: function () {
    var that = this;
    var {isLoading, blogs} = this.state;

    function renderBlogList () {
      if (isLoading) {
        return <h5 className="text-center page-loading">Getting blogs...</h5>;
      } else if (blogs) {
        console.log('Blog object [0]: ' + blogs.objects[0].title);

        // var i = 0;
        var noOfBlogs = blogs.objects.length;
        console.log(noOfBlogs);

        var blogItemsArray = [];

        for (var i = 0; i < noOfBlogs; i++) {
          var {title, created, content} = blogs.objects[i];

          function decodeEntities(encodedString) {
            var textArea = document.createElement('textarea');
            textArea.innerHTML = encodedString;
            return textArea.value;
          }

          var contentDecoded = decodeEntities(content);
          // console.log('contentDecoded: ' + contentDecoded);

          // CAN I PUSH THIS OBJECT TO A NEW ARRAY? Yes
          // THEN RUN A MAP() OVER THE NEW ARRAY?
          var blogItem = {
            id: i,
            title: title,
            author: that.state.blogs.objects[i].metadata.author.title,
            displayDate: created.charAt(8) + created.charAt(9) + '/' + created.charAt(5) + created.charAt(6) + '/' + created.charAt(0) + created.charAt(1) + created.charAt(2) + created.charAt(3),
            preview: contentDecoded.substring(0, 150) + '... >>'
          }

          blogItemsArray.push(blogItem);
          console.log('blogItemsArray: ' + blogItemsArray);

          // create & display separate div for each comment

          // if (!document.getElementById('blogPreviewList')) {
          //   var divElement = document.createElement('divElement');
          //   divElement.id = 'blogPreviewList';
          //   document.body.appendChild(divElement);
          // }
          //
          // var div = document.createElement('div');
          // document.body.appendChild(div);
          // document.getElementById('blogPreviewList').appendChild(div);
          // div.id = 'blogPreviewList' + i;
          // $("#blogPreviewList" + i).append(blogItem);
          // console.log('div.id: ' + div.id);

          // NOW I HAVE THESE INDIVIDUAL DIVs, how push blogItem attributes and render each one?
          //

        }

        const blogListItems = blogItemsArray.map((blogItemsArray, index) =>
          <li key={index}>
            {blogItemsArray.title}
            {blogItemsArray.preview}
            {blogItemsArray.author}
            {blogItemsArray.displayDate}
          </li>
        );

        return (
          <div id="blogPreviewList">
            {/* I think I need to add the create div and append child if statement somewhere here */}
            <ul>{blogListItems}</ul>
            {/* <a href="#"><div>
              <div className="title">{blogItem.title}</div>
              <div className="preview">{blogItem.preview}</div>
              <div className="preview">{ReactHtmlParser(preview)}</div>
              <div className="author">{blogItem.author}</div>
              <div className="created">{blogItem.displayDate}</div>
              <div className="clear"></div>
              </div></a> */}
          </div>
        )
      }
    }

    return (
      <div>
        <h2 className="">the blogs</h2>
        {renderBlogList()}
      </div>
    );
  }
});

module.exports = BlogList;
