import {
  ButtonGroup,
  Input as ChackraInput,
  Editable,
  EditableInput,
  EditablePreview,
  IconButton,
  Tooltip,
  useColorModeValue,
  useEditableControls,
} from "@chakra-ui/react";

import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import React from "react";

export interface InputProps {
  onSave: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({ onSave }) => {
  const EditableControls = () => {
    const { isEditing, getSubmitButtonProps, getCancelButtonProps } =
      useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm" display="flex">
        <IconButton
          aria-label="save"
          icon={<CheckIcon />}
          {...getSubmitButtonProps()}
        />
        <IconButton
          aria-label="cancel"
          icon={<CloseIcon />}
          {...getCancelButtonProps()}
        />
      </ButtonGroup>
    ) : (
      <></>
    );
  };

  const [value, setValue] = React.useState<string>();
  const defaultValue = "Insert new one";

  return (
    <Editable
      value={value}
      onChange={setValue}
      textAlign="center"
      defaultValue={defaultValue}
      fontSize="xl"
      isPreviewFocusable
      display="flex"
      alignItems="baseline"
      submitOnBlur={false}
      gap="10px"
      onSubmit={(value) => {
        if (value?.replace(" ", "").length > 0 && value !== defaultValue) {
          onSave(value);
          setValue(defaultValue);
        }
      }}
    >
      <Tooltip label="Click to edit" shouldWrapChildren={true}>
        <EditablePreview
          py={2}
          px={4}
          _hover={{
            background: useColorModeValue("gray.100", "gray.700"),
          }}
        />
      </Tooltip>
      <ChackraInput as={EditableInput} />
      <EditableControls />
    </Editable>
  );
};
