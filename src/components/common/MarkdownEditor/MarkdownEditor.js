import React, { Component } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import CodeMirror from 'codemirror';
import './MarkdownEditor.scss';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/addon/scroll/simplescrollbars';
import 'codemirror/addon/display/placeholder';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/css/css';
import 'codemirror/mode/shell/shell';
import 'codemirror/mode/python/python';
import 'codemirror/mode/go/go';
import 'codemirror/mode/swift/swift';
import 'codemirror/mode/clike/clike';
import 'codemirror/addon/scroll/simplescrollbars.css';

class MarkdownEditor extends Component {
  state = {};
  textarea = null;
  cm = null;

  initialize = () => {
    if (!CodeMirror) return;
    const { placeholder } = this.props;
    console.log(placeholder);

    const cm = CodeMirror.fromTextArea(this.textarea, {
      mode: 'markdown',
      placeholder,
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
    console.log('selection :: ', selection);

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
        <TextareaAutosize
          innerRef={ref => {
            this.textarea = ref;
          }}
          rows={5}
          maxRows={20}
        />
      </div>
    );
  }
}

export default MarkdownEditor;
