// @flow
import React, { Component } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import './MarkdownEditor.scss';

import CodeMirror from 'codemirror';

class MarkdownEditor extends Component {
  state = {};
  textarea = React.createRef();
  cm = null;

  initialize = () => {
    if (!CodeMirror) return;
    const { placeholder } = this.props;
    const cm = CodeMirror.fromTextArea(this.textarea, {
      mode: 'markdown',
      placeholder,
      autofocus: true,
      style: { display: 'block' },
      lineWrapping: true, // 내용이 너무 길면 다음 줄에 작성
    });
    this.cm = cm;
    cm.on('change', instance => {
      this.props.onChange(instance.getValue());
    });
    cm.setValue(this.props.value);
  };

  componentDidMount() {
    this.initialize();
  }

  componentWillUnmount() {
    this.cm.toTextArea();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.flash !== this.props.flash) {
      this.insertText();
    }
  }

  insertText = () => {
    const { cm } = this;
    const selection = cm.getSelection();
    if (selection.length > 0) {
      cm.replaceSelection(this.props.flash);
    } else {
      const doc = cm.getDoc();
      const cursor = cm.getCursor();
      const pos = {
        line: cursor.line,
        ch: cursor.ch,
      };
      doc.replaceRange(this.props.flash, pos);
    }
  };

  render() {
    return (
      <div className="MarkdownEditor">
        <TextareaAutosize ref={this.textarea} rows={5} maxRows={20} style={{ display: 'block' }} />
      </div>
    );
  }
}

export default MarkdownEditor;
