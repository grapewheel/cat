import Button from "@alifd/next/es/button";
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
        <Button type="primary">GO</Button>
      </div>
    );
  }
}
