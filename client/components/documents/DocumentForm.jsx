import React from 'react';
import { Row, Input, Button } from 'react-materialize';
import TinyMCE from 'react-tinymce';

const DocumentForm = ({ document, onSave, onChange, saving, errors }) => {
  return (
    <form>
      <h5 className="center" style={{ margin: 20 }}>Create/Update a Document</h5>
      <Row>
        <div className="input-field col s12" style={{ marginBottom: 10 }}>
          <Input
            label="Title"
            placeholder="Title"
            validate
            name="title"
            onChange={onChange}
            value={document.title}
            id="title"
          />
          {errors.title && <div className="red-text">Enter Title</div>}
        </div>
        <div className="input-field col s12" style={{ marginBottom: 10 }}>
          <TinyMCE
            id="content"
            content={document.content}
            config={{
              plugins: 'autolink link image lists print preview',
              toolbar: 'undo redo | bold italic | alignleft aligncenter alignright'
            }}
            onChange={onChange}
          />
          {errors.content && <div className="red-text">Enter Content</div>}
        </div>
        <div className="input-field col s12" style={{ marginBottom: 10 }}>
          <select
            style={{ display: 'block' }}
            id="access"
            value={document.access}
            onChange={onChange}
            name="access"
          >
            <option defaultValue>Select Access</option>
            <option value="public">Public</option>
            <option value="private" >Private</option>
            <option value="role" >Role</option>
          </select>
        </div>
        <div className="input-field col s12" style={{ marginBottom: 10 }}>
          <Input
            type="submit"
            disabled={saving}
            value={saving ? 'Saving...' : 'Save'}
            className="btn waves-effect waves-light blue"
            onClick={onSave}
          />
        </div>
      </Row>
    </form>
  );
};

DocumentForm.propTypes = {
  document: React.PropTypes.object,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool.isRequired,
  errors: React.PropTypes.object.isRequired,
};

export default DocumentForm;
