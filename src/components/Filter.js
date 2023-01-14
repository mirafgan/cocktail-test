import { Form } from "react-bootstrap";

const style = {background: '#eee'}

function Filter() {
    return (
        <header className="mt-5 pt-5 pb-4" style={style}>
            <div className="container">
                <Form>
                    <Form.Label>Search</Form.Label>
                    <Form.Control type="search" placeholder="Find something" />
                    <div className="py-3">
                        <Form.Check inline label="All" name="group1" type="radio" defaultChecked={true} />
                        <Form.Check inline label="Evens" name="group1" type="radio" />
                        <Form.Check inline label="Odds" name="group1" type="radio" />
                    </div>
                </Form>
            </div>
        </header>
    )
}

export default Filter;