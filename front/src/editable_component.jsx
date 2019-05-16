import React from 'react'

function contentEditable(WrappedComponent) {

    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                editing: false
            }

            this.toggleEdit = this.toggleEdit.bind(this);
            this.edit = this.edit.bind(this);
            this.save = this.save.bind(this);
            this.cancel = this.cancel.bind(this);
            this.isValueChanged = this.isValueChanged.bind(this);
            this.handleKeyDown = this.handleKeyDown.bind(this);
        }

        toggleEdit(e) {
            e.stopPropagation()
            if (this.state.editing) {
                this.cancel()
            } else {
                this.edit()
            }
        }

        edit() {
            this.setState({
                editing: true
            }, () => {
                this.domElm.focus()
            })
        }

        save() {
            this.setState({
                editing: false
            }, () => {
                if (this.props.onSave && this.isValueChanged()) {
                    console.log('Value is changed', this.domElm.textContent)
                }
            })
        }

        cancel() {
            this.setState({
                editing: false
            })
        }

        isValueChanged() {
            return this.props.value !== this.domElm.textContent
        }

        handleKeyDown(e) {
            const {key} = e
            switch (key) {
                case 'Enter':
                case 'Escape':
                    this.save()
                    break
            }
        }

        render() {
            const {editing} = this.state

            return (
                <WrappedComponent
                    className={editing ? 'editing' : ''}
                    onClick={!editing ? this.toggleEdit : undefined}
                    contentEditable={editing}
                    ref={(domNode) => {
                        this.domElm = domNode
                    }}
                    onBlur={this.save}
                    onKeyDown={this.handleKeyDown}
                    {...this.props}
                >
                    {this.props.value}
                </WrappedComponent>
            )
        }
    }
}

export default contentEditable