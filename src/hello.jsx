import Nerv from "nervjs";
import { Button } from "@alifd/next";
import { Text } from "./framework";

export default class extends Nerv.Component {
  #Text = {
    padding: "4em",
  };

  #onClick = () => {
    alert("hello");
  };

  render() {
    return (
      <div style={this.#Text}>
        <Text onClick={this.#onClick}>Hello World, {this.props.name}</Text>
        <Button>GO</Button>
      </div>
    );
  }
}
