```javascript
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

function MyComponent({ myProp }) {
  useEffect(() => {
    console.log('My prop:', myProp);
  }, [myProp]);

  return (
    <View>
      <Text>{myProp?.someValue ?? 'Default Value'}</Text> {/* Safe access */}
    </View>
  );
}

export default MyComponent;
```