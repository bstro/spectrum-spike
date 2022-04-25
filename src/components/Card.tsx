import {
  View,
  Flex,
  Divider,
  Text,
  Grid,
  Content,
} from "@adobe/react-spectrum";
import React from "react";

export const Card: React.FC = (props) => {
  const child = React.Children.only(props.children);

  return (
    <View
      borderWidth="thin"
      borderRadius="medium"
      overflow="hidden"
      borderColor="translucent-darker"
    >
      {child}

      <Grid gap="size-25" margin="size-100" columns="1fr 1fr">
        <Text>Created</Text>
        <Text>about 2 months ago</Text>

        <Text>Author</Text>
        <Text>cora.harris</Text>

        <Text>Match</Text>
        <Text>3 matches</Text>

        <Text>Classifier</Text>
        <Text>Indeterminate</Text>
      </Grid>
    </View>
  );
};
