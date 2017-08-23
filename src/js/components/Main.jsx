import React from 'react';
import Panel from './Panel';
import '../../css/main';

class Main extends React.Component {

    render() {
        return(
            <div>
                <Panel header="Hello!">
                    Lorem ipsum
                </Panel>
                <Panel header="Hello2!">
                    Lorem ipsum 2
                </Panel>
            </div>
        )
    }
}

export default Main;
