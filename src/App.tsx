import {
  Button,
  defaultTheme,
  Grid,
  minmax,
  Provider,
  repeat,
  View,
  Image,
} from "@adobe/react-spectrum";
import React from "react";
import { Card } from "./components/Card";
import { ContactSheet } from "./layouts/ContactSheet";

function App() {
  return (
    <>
      <Provider theme={defaultTheme}>
        <View padding="size-500">
          <Grid
            columns={repeat("auto-fill", minmax("size-3000", "1fr"))}
            gap="size-300"
          >
            {[...Array(25)].map((_, idx) => (
              <Card key={idx}>
                <Image
                  alignSelf="flex-start"
                  maxHeight="size-3000"
                  objectFit="contain"
                  alt="Foo"
                  src="https://source.unsplash.com/random"
                />
              </Card>
            ))}
          </Grid>
        </View>
      </Provider>
    </>
  );
}

export default App;
