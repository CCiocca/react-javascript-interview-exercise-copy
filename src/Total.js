import { Component } from "react";

export default class Total extends Component {

    render() {
        const {data} = this.props; //passed as props from StartFile
        const total = data.reduce((accumulator, counter) => accumulator + counter.value, 0); //summs counters values 

        return(
        <div className="text-center mt-5 total-container ">
            {/* <div className="total-container"> */}
                <span data-testid="totalId" className="total">
                    Total: {total}
                </span>
            {/* </div> */}
        </div>
        )
    }
}