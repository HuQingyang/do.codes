import React, { Component, Fragment } from "react";
import Milk from "react-milkdown";
import { observer } from "mobx-react";
import { withRouter } from "react-router-dom";

import { withStore } from "../../store";

import "./index.scss";

@withStore
@withRouter
@observer
class PostEdit extends Component {
  state = {
    loading: true,
    title: "",
    content: "",
    tags: "",
    cover: ""
  };

  get isNew() {
    return !this.props.match.params.id;
  }

  componentDidMount() {
    if (this.isNew) {
      this.setState({ loading: false });
    } else {
      this.getPostData();
    }
  }

  getPostData = () => {
    // TODO
  };

  onChangeContent = content => {
    this.setState({ content });
    return content;
  };

  onChangeTitle = e => {
    this.setState({ title: e.target.value });
  };

    onChangeTags = e => {
    this.setState({ tags: e.target.value });
  };

  render() {
    const { loading, content, title, tags } = this.state;
    return (
      <Fragment>
        <div if={loading}>Loading</div>
        <div else className="post-edit">
          <input
            className="title-editor"
            value={title}
            onChange={this.onChangeTitle}
            placeholder="Title"
          />
          <input
              className="tags-editor"
              value={tags}
              onChange={this.onChangeTags}
              placeholder="Tags"
          />
          <div className="cover-upload">
              <i className="fa fa-file-picture-o " />
              <p>上传封面</p>
          </div>
          <Milk
            className="content-editor"
            value={content}
            onChange={this.onChangeContent}
          />
        </div>
      </Fragment>
    );
  }
}

export default PostEdit;
