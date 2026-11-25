import { forwardRef, type ComponentRef } from "react";
import { TextInput as RNTextInput, type TextInputProps } from "react-native";

const TextInput = forwardRef<ComponentRef<typeof RNTextInput>, TextInputProps>((props, ref) => {
  return <RNTextInput {...props} ref={ref} allowFontScaling={false} />;
});

export { TextInput };
