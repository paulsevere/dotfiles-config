import * as React from 'react';
import { connect } from 'react-redux'

interface StateProps {
    files: File[]
}

type FileListProps = StateProps & { dispatch: Redux.Dispatch<any> }

function mapDispatchToProps(dispatch: Redux.Dispatch<any>) {
    return { dispatch }
}
function mapStateToProps(state: any) {
    return state.files
}


// @connect<StateProps, Redux.Dispatch<any>, any>(mapStateToProps, mapDispatchToProps)
class FileList extends React.Component<FileListProps, any> {
    render() {
        console.log(this.props)
        return (
            <div>
                {/*{this.props.files.map(e => (<div key={e.filename}>{e.filename}</div>))}*/}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FileList)

